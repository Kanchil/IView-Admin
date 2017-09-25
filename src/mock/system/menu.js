import Mock from 'mockjs'
export default class menuMock {
    getMenuList() {
        return Mock.mock({
            "code": 200,
            'data': {
                'success': 1
            }
        })
    }
}