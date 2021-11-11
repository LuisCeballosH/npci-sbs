
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
        informe: {
            informe: {
                idInforme: 0,
                codEntVigilada: "",
                codExpediente: "",
                idEstado: "",
                nivel: "",
                indActivo: 0
            },
            informeDet: {
                idInformeDet: 0,
                idInforme: 0,
                tipoInforme: "",
                nombreNpci: "",
                antecendentes: "",
                descripcion: "",
                descripcionSop: "",
                fecLanzImpl: "",
                aprobInforme: "",
                fecAprob: "",
                comentAdic: "",
                indActivo: 0
            },
            contacto: {
                nombre: "",
                cargo: "",
                telefono: "",
                correo: "",
                codEntVigilada: "",
                indActivo: 0
            },
            informesRelacionados: [],
            conductasMercado: [],
            gestionProdProy: [],
            riesgos: [],
            aspectos: []
        }
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
        },
        setInforme(state, payload) {
            if (payload) {
                state.informe = payload;
            }
        },
        addConductaMercado(state, payload) {
            state.informe.conductasMercado = [payload, ...state.informe.conductasMercado];
        },
        deleteConductaMercado(state, payload) {
            state.informe.conductasMercado = state.informe.conductasMercado.filter(item => item.idCondMerc !== payload.idCondMerc);
        }
    },
    actions: {
        async getData({ commit }) {
            try {
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
            } catch (error) {
                //
            }
        },
        async saveInforme({ commit, state }, data) {
            console.log({ data });
            try {
                const response = await CrearInformeService.saveInforme(state.informe)

                if (response) {
                    commit('setInforme', response);
                }
            } catch (error) {
                //
            }
        },
        addConductaMercadoAction({ commit, dispatch }, data) {
            commit('addConductaMercado', data);
            dispatch('saveInforme', data);
        },
        deleteConductaMercadoAction({ commit }, data) {
            commit('deleteConductaMercado', data);
        }
    }
}