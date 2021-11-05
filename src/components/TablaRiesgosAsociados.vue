<template>
  <div>
    <div class="table-responsive">
      <table class="table table-bordered table-sm" aria-label="">
        <thead>
          <tr class="row-one">
            <th scope="col"></th>
            <th scope="col" colspan="3">
              <formulario-riesgos-asociados-one />
            </th>
            <th scope="col"></th>
            <th scope="col" colspan="4">
              <formulario-riesgos-asociados-two />
            </th>
            <th scope="col"></th>
            <th scope="col">
              <div class="d-grid mb-3">
                <button class="btn btn-primary" type="button">
                  Agregar riesgo
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
            <th scope="col" colspan="3" class="text-center">
              Evaluación de riego
            </th>
            <th scope="col" colspan="3" class="text-center">
              Respuesta al riesgo
            </th>
            <th scope="col"></th>
          </tr>
          <tr>
            <th scope="col" class="text-center">Descripción del riesgo</th>
            <th scope="col" class="text-center">Tipo de riesgo (nivel 0)</th>
            <th scope="col" class="text-center">Tipo de riesgo (nivel 1)</th>
            <th scope="col" class="text-center">
              Medida de tratamiento implementadas
            </th>
            <th scope="col" class="text-center">
              ¿Riego considerado relevante por la empresa?
            </th>
            <th scope="col" class="text-center">
              Exposición estimada del riego (soles)
            </th>
            <th scope="col" class="text-center">¿Riego aceptado?</th>
            <th scope="col" class="text-center">Respuesta al riesgo</th>
            <th scope="col" class="text-center">
              Medida de tratamiento propuestas
            </th>
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
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <input type="file" class="d-none" name="" :id="id" />
    <button class="btn btn-link mb-3" type="button" @click="onClick">
      Carga masiva (.xls o .xlsx)
    </button>
  </div>
</template>

<script>
import FormularioRiesgosAsociadosOne from "./FormularioRiesgosAsociadosOne.vue";
import FormularioRiesgosAsociadosTwo from "./FormularioRiesgosAsociadosTwo.vue";
export default {
  components: { FormularioRiesgosAsociadosOne, FormularioRiesgosAsociadosTwo },
  name: "TablaRiesgosAsociados",
  props: {
    id: { type: String, require: true },
  },
  methods: {
    onClick() {
      document.getElementById(this.id).click();
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
