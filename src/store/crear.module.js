
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
            gestionProdProyOne: [],
            gestionProdProyTwo: [],
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
                state.implicaImpacto.forEach(element => {
                    const aspecto = payload.aspectos.find(item => item.tipoImpactAspect === element.key);
                    if (aspecto) {
                        element.selected = true;
                        element.comment = aspecto.descripcion;
                    }
                });
                state.incorporaAspecto.forEach(element => {
                    const aspecto = payload.aspectos.find(item => item.tipoImpactAspect === element.key);
                    if (aspecto) {
                        element.selected = true;
                        element.comment = aspecto.descripcion;
                    }
                });
                state.riesgosEvaluados.forEach(element => {
                    const riesgo = payload.riesgos.find(item => item.tipoRiesgos === element.key);
                    element.selected = riesgo ? true : false;
                });
                state.opcionesCorrespondan.forEach(element => {
                    const riesgo = payload.riesgos.find(item => item.tipoRiesgos === element.key);
                    element.selected = riesgo ? true : false;
                });

                state.informe = payload;
            }
        },
        addConductaMercado(state, payload) {
            state.informe.conductasMercado = [payload, ...state.informe.conductasMercado];
        },
        deleteConductaMercado(state, payload) {
            state.informe.conductasMercado = state.informe.conductasMercado.filter(item => item.idCondMerc !== payload.idCondMerc);
        },
        setAspectos(state) {
            state.informe.aspectos = [...state.implicaImpacto, ...state.incorporaAspecto]
                .filter(item => item.selected).map(item => ({
                    tipoImpactAspect: item.key,
                    descripcion: item.comment
                }));
        },
        setRiesgos(state) {
            state.informe.riesgos = [...state.riesgosEvaluados, ...state.opcionesCorrespondan]
                .filter(item => item.selected).map(item => ({
                    tipoRiesgos: item.key
                }));
        },
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
            try {
                console.log({ data });
                commit('setAspectos');
                commit('setRiesgos');
                const response = await CrearInformeService.saveInforme(state.informe)
                response.gestionProdProyOne = response.gestionProdProy.filter(item => item.tipGestProd === '001');
                response.gestionProdProyTwo = response.gestionProdProy.filter(item => item.tipGestProd === '002');

                console.log({ response });
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