import Vue from 'vue'
import Vuex from 'vuex'
import crear from '../store/crear.module'
import listar from '../store/listar.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    crear,
    listar,
  }
})
