import Mock from 'mockjs'
export function getMenuList () {
  return Mock.mock({
    'code': 200,
    'data': {
      'success': 1
    }
  })
}
