export default {
  '/mock/api': {
    target: 'http:localhost:8000',
    changeOrigin: true,
    pathRewrite: { '^api': '' }
  }
}
