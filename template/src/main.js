import Vue from 'vue'
import Root from 'pages/Root.vue'
{{#yunui}}
import yun from 'yun-ui'
import 'yun-ui/dist/yun/index.css'

Vue.use(yun)
{{/yunui}}

new Vue(Root).$mount('#app')
