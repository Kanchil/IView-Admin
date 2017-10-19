import Mock from 'mockjs'
export function getMenuList () {
  return Mock.mock({
    'code': 200,
    'data': [{
      key: 1,
      name: '内容管理',
      path: 'content',
      icon: 'xinrenzhinan'
    }, {
      key: 2,
      name: '用户管理',
      path: 'user',
      icon: 'xinrenzhinan'
    }, {
      key: 3,
      name: '统计分析',
      path: 'statistics',
      icon: 'xinrenzhinan'
    }]
  })
}
