// 存储全局的actions事件
import http from 'api/http'

export const getUserInfo = ({ commit }) => {
    http.fetch('user/userInfos', {
        type: 'GET'
    }).then(function (res) {
        console.log(res)
        commit('SET_USER_INFO', res.body.data)
    })
}
