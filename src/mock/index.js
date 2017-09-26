import Mock from 'mockjs'
import Config from '@/../config/'
import * as MenuMock from './system/menu'
var BASE_API = Config.dev.env.BASE_API.replace(new RegExp('"', 'g'), '')
Mock.setup({
  timeout: 500
})
Mock.mock(`${BASE_API}/getMenu`, 'post', MenuMock.getMenuList)
