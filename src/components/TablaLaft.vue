<template>
  <div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm" aria-label="">
        <thead>
          <tr class="row-one">
            <th scope="col" colspan="6">
              <formulario-laft />
            </th>
            <th scope="col">
              <div class="d-grid mb-3">
                <button class="btn btn-primary" type="button">
                  Agregar aspecto
                </button>
              </div>
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              rowspan="2"
              class="text-center"
              style="vertical-align: middle"
            >
              N°
            </th>
            <th scope="col" colspan="3" class="text-center">
              Identificación de riesgos
            </th>
            <th scope="col" colspan="2" class="text-center">
              Evaluación de riego
            </th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col" class="text-center">Debilidades identificadas</th>
            <th scope="col" class="text-center">Rubro</th>
            <th scope="col" class="text-center">
              ¿Aspectos considerados relevantes por la empresa?
            </th>
            <th scope="col" class="text-center">
              Medidas pendientes de implementar
            </th>
            <th scope="col" class="text-center">Controles implementados</th>
            <th scope="col" class="text-center">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-center">1</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <input type="file" class="d-none" name="" id="aspecto" />
    <button class="btn btn-link mb-3" type="button" @click="onClick">
      Carga masiva (.xls o .xlsx)
    </button>
  </div>
</template>

<script>
import FormularioLaft from "./FormularioLaft.vue";
export default {
  components: { FormularioLaft },
  name: "TablaLaft",
  methods: {
    onClick() {
      document.getElementById("aspecto").click();
    },
  },
};
</script>

<style scoped>
table thead .row-one,
table thead .row-one th {
  border-top-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;
}
table tbody td {
  min-width: 200px;
}
table tbody th {
  min-width: 100px;
}
</style>
