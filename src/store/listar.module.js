
import ListarInformeService from '../services/ListarInformeService'

export default {
    namespaced: true,
    state: {
        historico: [],
        associates: []
    },
    mutations: {
        setHistorico(state, payload) {
            state.historico = payload;
        },
        setAssociates(state, payload) {
            state.associates = [payload, ...state.associates];
        }
    },
    actions: {
        async getHistorico({ commit }, filtros) {
            const response = await ListarInformeService.informeHist(filtros);

            if (response) {
                commit('setHistorico', response);
            }
        },
        setAssociatesAction({ commit }, informe) {
            commit('setAssociates', informe);
        }
    }
}