// 存储全局的actions事件
import http from 'api/http'

export const getUserInfo = ({ commit }) => {
    console.log(http)
    http.get('user/userInfos').end((err, res) => {
        console.log(err)
        console.log(res)
    })
}
