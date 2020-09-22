const apiFiles = require.context('./', false, /.api.js$/, 'sync');
import network from '@/utils/network'

const generateSyncRequestMethod = module => {
  const result = {};
  for (const key in module) {
    const [method, url] = module[key].split(' ')
    result[key] = (options = {}) => {
      for (const rest in options) {
        if (url.includes(`:${ rest }`)) {
          url = url.replace(new RegExp(`:${ rest }`), options[rest])
          delete options[rest]
        } else {
          continue
        }
      }
      return network({
        url,
        method,
        ...options
      })
    }
  }
  return result
}


let apiResult = {}
apiFiles.keys().forEach(element => {
  apiResult = {
    ...generateSyncRequestMethod(apiFiles(element).default)
  }
})

export default apiResult