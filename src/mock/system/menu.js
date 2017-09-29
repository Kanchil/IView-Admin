import Mock from 'mockjs'
export function getMenuList() {
  return Mock.mock({
    'code': 200,
    'data': [{
      key: 1,
      name: '会员管理',
      path: 'user',
      icon: 'xinrenzhinan'
    }]
  })
}
