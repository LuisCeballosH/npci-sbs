import http from "../http-common";
class ControlService {
    async nivelEfectividad(filtros) {
        console.log(filtros)
        const response = await http.get('/nivel_efectividad.json');
        // const response = await http.get(`/npci.service/npci_api/tipos/nivel_efectividad`);
        return response.data;
    }
}

export default new ControlService();