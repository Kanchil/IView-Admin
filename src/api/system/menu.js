import fetch from '@/utils/fetch'

export function getMenuList () {
  return fetch({
    url: '/getMenu',
    method: 'post'
  })
}
