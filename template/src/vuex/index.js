import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    state,
    actions,
    getters,
    mutations
})
