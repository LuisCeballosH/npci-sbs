
import CrearInformeService from '../services/CrearInformeService'

export default {
    namespaced: true,
    state: {
        tipoInforme: [],
        implicaImpacto: [],
        incorporaAspecto: [],
        riesgosEvaluados: [],
        opcionesCorrespondan: [],
        riesgosOtros: [],
        riesgoRelevante: [],
        aspectoConducta: [],
        respuestaRiesgo: [],
        exposicionEstimadaRiesgo: [],
        rubro: [],
        riesgoAceptado: [],
    },
    mutations: {
        setData(state, payload) {
            state.tipoInforme = payload[0];
            state.implicaImpacto = payload[1];
            state.incorporaAspecto = payload[2];
            state.riesgosEvaluados = payload[3];
            state.opcionesCorrespondan = payload[4];
            state.riesgosOtros = payload[5];
            state.riesgoRelevante = payload[6];
            state.aspectoConducta = payload[7];
            state.respuestaRiesgo = payload[8];
            state.exposicionEstimadaRiesgo = payload[9];
            state.rubro = payload[10];
            state.riesgoAceptado = payload[11];
        }
    },
    actions: {
        async getData({ commit }) {

            const response = await Promise.all([
                CrearInformeService.tipoInforme(),
                CrearInformeService.implicaImpacto(),
                CrearInformeService.incorporaAspecto(),
                CrearInformeService.riesgosEvaluados(),
                CrearInformeService.opcionesCorrespondan(),
                CrearInformeService.riesgosOtros(),
                CrearInformeService.riesgoRelevante(),
                CrearInformeService.aspectoConducta(),
                CrearInformeService.respuestaRiesgo(),
                CrearInformeService.exposicionEstimadaRiesgo(),
                CrearInformeService.rubro(),
                CrearInformeService.riesgoAceptado(),
            ]);

            if (response) {
                commit('setData', response);
            }
        }
    }
}