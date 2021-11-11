
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
            const informe = state.associates.find(item => item.idInforme === payload.idInforme);
            if (!informe) {
                state.associates = [payload, ...state.associates];
            }
        },
        remove(state, payload) {
            state.associates = state.associates.filter(item => item.idInforme !== payload.idInforme);
        }
    },
    actions: {
        async getHistorico({ commit }, filtros) {
            try {
                const response = await ListarInformeService.informeHist(filtros);

                if (response) {
                    commit('setHistorico', response);
                }
            } catch (error) {
                //
            }
        },
        setAssociatesAction({ commit }, informe) {
            commit('setAssociates', informe);
        },
        removeAssociation({ commit }, informe) {
            commit('remove', informe);
        }
    }
}