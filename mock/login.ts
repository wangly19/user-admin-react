import Mock from 'mockjs'

export default {
  'POST /api/login': Mock.mock({
    token: '@string(100, 100)'
  })
}