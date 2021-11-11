import http from "../http-common";
class ListarInformeService {
    async informeHist(filtros) {
        console.log(filtros);
        const response = await http.get('/informe_hist.json');
        // const response = await http.get(
        //     `/npci.service/npci_api/informe_riesgos/search/informe_hist/${filtros.codEntVigilada}/${filtros.year}/${filtros.month}`
        // );
        return response.data;
    }
}

export default new ListarInformeService();