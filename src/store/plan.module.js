

export default {
    namespaced: true,
    state: {
        showPlan: false
    },
    mutations: {
        toggle(state) {
            state.showPlan = !state.showPlan;
        }
    },
    actions: {
        toggleModalPlan({ commit }) {
            commit('toggle');
        }
    }
}