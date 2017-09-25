import Mock from 'mockjs'
import Config from '@/../config/'
import MenuMock from './system/menu'
const BASE_API = Config.dev.env.BASE_API
Mock.mock(`${BASE_API}/getMenu`,'get',MenuMock.getMenuList)