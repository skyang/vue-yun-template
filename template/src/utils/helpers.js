module.exports = {
    /**
     * 获取url的query中的某个字段
     * @returns {{}}
     */
    getQuery () {
        const url = window.location.search
        let querys = {}
        let strs
        if (url.indexOf('?') !== -1) {
            let str = url.substr(1)
            strs = str.split('&')
            for (let i = 0; i < strs.length; i++) {
                querys[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1])
            }
        }
        return querys
    },
    /**
     * 获取cookie中某个字段
     * @param name
     * @returns {null}
     */
    getCookie (name) {
        const reg = new RegExp(name + '=([^]+?);')
        const result = document.cookie.match(reg)
        return result ? result[1] : null
    },
    /**
     * 判断是否是个空对象
     * @param obj
     * @returns {boolean}
     */
    isEmptyObject (obj) {
        let prop
        for (prop in obj) {
            return false
        }
        return true
    },
    /**
     * 复制对象
     * @param to
     * @param _from
     * @returns {*}
     */
    extend (to, _from) {
        for (var key in _from) {
            to[key] = _from[key]
        }
        return to
    }
}
