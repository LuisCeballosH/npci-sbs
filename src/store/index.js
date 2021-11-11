import Vue from 'vue'
import Vuex from 'vuex'
import crear from '../store/crear.module'
import listar from '../store/listar.module'
import control from '../store/control.module'
import plan from '../store/plan.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    crear,
    listar,
    control,
    plan
  }
})
