import superagent from 'superagent'
import use from 'superagent-use'
import prefix from 'superagent-prefix'
import ENV from 'config/env.config'

const http = use(superagent)

http.use(prefix(ENV.serverRootUrl))

export default http
