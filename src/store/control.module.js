import ControlService from "../services/ControlService";


export default {
    namespaced: true,
    state: {
        nivelEfectividad: [],
        showControl: false
    },
    mutations: {
        setNivelEfectividad(state, payload) {
            state.nivelEfectividad = payload;
        },
        toggle(state) {
            state.showControl = !state.showControl;
        }
    },
    actions: {
        async getNivelEfectividad({ commit }) {
            try {
                const response = await ControlService.nivelEfectividad();

                if (response) {
                    commit('setData', response);
                }
            } catch (error) {
                //
            }
        },
        toggleModalControl({ commit }) {
            commit('toggle');
        }
    }
}