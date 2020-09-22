import Mock from 'mockjs'
export default {
  'GET /api/webAuth': {
    auth: ['admin', 'all']
  },
  
  'GET /api/webUser': Mock.mock({
    username: '@cname',
    avatar: '@image(`200x100`)',
    'age|1-50': 20
  }),

  'PUT /api/test/:id': {
    data: {
      a: 1,
      v: 1
    }
  }
}