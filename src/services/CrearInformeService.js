import http from "../http-common";
class CrearInformeService {
    async tipoInforme() {
        const response = await http.get('/tipo_informe.json');
        // const response = await http.get('/npci.service/npci_api/tipos/tipo_informe');
        return response.data;
    }

    async implicaImpacto() {
        const response = await http.get('/implica_impacto.json');
        // const response = await http.get('/npci.service/npci_api/tipos/implica_impacto');
        response.data.forEach(element => {
            element.selected = false;
            element.comment = '';
        });
        return response.data;
    }

    async incorporaAspecto() {
        const response = await http.get('/incorpora_aspecto.json');
        // const response = await http.get('/npci.service/npci_api/tipos/incorpora_aspecto');
        response.data.forEach(element => {
            element.selected = false;
            element.comment = '';
        });
        return response.data;
    }

    async riesgosEvaluados() {
        const response = await http.get('/riesgos_evaluados.json');
        // const response = await http.get('/npci.service/npci_api/tipos/riesgos_evaluados');
        response.data.forEach(element => {
            element.selected = false;
        });
        return response.data;
    }

    async opcionesCorrespondan() {
        const response = await http.get('/opciones_que_correspondan.json');
        // const response = await http.get('/npci.service/npci_api/tipos/opciones_que_correspondan');
        response.data.forEach(element => {
            element.selected = false;
        });
        return response.data;
    }

    async riesgosOtros() {
        const response = await http.get('/riesgos_otros.json');
        // const response = await http.get('/npci.service/npci_api/tipos/riesgos_otros');
        return response.data;
    }

    async riesgoRelevante() {
        const response = await http.get('/riesgo_es_relevante.json');
        // const response = await http.get('/npci.service/npci_api/tipos/riesgo_es_relevante');
        return response.data;
    }

    async aspectoConducta() {
        const response = await http.get('/aspecto_conducta_mercado_es_relevante.json');
        // const response = await http.get('/npci.service/npci_api/tipos/aspecto_conducta_mercado_es_relevante');
        return response.data;
    }

    async respuestaRiesgo() {
        const response = await http.get('/respuesta_riesgo.json');
        // const response = await http.get('/npci.service/npci_api/tipos/respuesta_riesgo');
        return response.data;
    }

    async exposicionEstimadaRiesgo() {
        const response = await http.get('/exposicion_estimada_riesgo.json');
        // const response = await http.get('/npci.service/npci_api/tipos/exposicion_estimada_riesgo');
        return response.data;
    }

    async rubro() {
        const response = await http.get('/aspecto_conducta_mercado_rubro.json');
        // const response = await http.get('/npci.service/npci_api/tipos/aspecto_conducta_mercado_rubro');
        return response.data;
    }

    async riesgoAceptado() {
        const response = await http.get('/riesgo_es_aceptado.json');
        // const response = await http.get('/npci.service/npci_api/tipos/riesgo_es_aceptado');
        return response.data;
    }

    async saveInforme(informe) {
        console.log(informe)
        const response = await http.get('/save_informe.json');
        // const response = await http.post('/npci.service/npci_api/informe_riesgos/save/informe', informe);
        return response.data;
    }
}

export default new CrearInformeService();