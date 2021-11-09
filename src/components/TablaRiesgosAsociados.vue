<template>
  <div>
    <formulario-riesgos-asociados-one
      :riesgoAsociado="riesgoAsociado"
      :riesgosEvaluados="riesgosEvaluados"
      :riesgosOtros="riesgosOtros"
      :riesgoRelevante="riesgoRelevante"
      :respuestaRiesgo="respuestaRiesgo"
      :exposicionEstimadaRiesgo="exposicionEstimadaRiesgo"
      :riesgoAceptado="riesgoAceptado"
      @action="onSubmit"
    />
    <div class="table-responsive">
      <table class="table table-bordered table-sm" aria-label="">
        <thead>
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
            <th scope="col" class="text-center" rowspan="2">Eliminar</th>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in riesgosAsociadosData" :key="index">
            <th scope="row" class="text-center">{{ index + 1 }}</th>
            <td>{{ item.descripcion }}</td>
            <td>{{ riesgosEvaluadosValue(item.levelZero) }}</td>
            <td>{{ riesgosOtrosValue(item.levelOne) }}</td>
            <td></td>
            <td>{{ riesgoRelevanteValue(item.considerado) }}</td>
            <td>{{ exposicionEstimadaRiesgoValue(item.estimada) }}</td>
            <td>{{ riesgoAceptadoValue(item.aceptado) }}</td>
            <td>{{ respuestaRiesgoValue(item.respuesta) }}</td>
            <td></td>
            <td class="text-center">
              <button
                class="btn btn-link m-0 p-0"
                @click="onDelete(index)"
                v-b-tooltip.hover
                title="Eliminar"
              >
                <b-icon icon="trash" variant="danger" font-scale="1.5"></b-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <input type="file" class="d-none" name="" :id="id" />
    <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
      Carga masiva (.xls o .xlsx)
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FormularioRiesgosAsociadosOne from "./FormularioRiesgosAsociados.vue";
export default {
  components: { FormularioRiesgosAsociadosOne },
  name: "TablaRiesgosAsociados",
  props: {
    id: { type: String, require: true },
  },
  data() {
    return {
      riesgosAsociadosData: [],
      riesgoAsociado: {
        levelZero: "",
        levelOne: "",
        considerado: "",
        estimada: "",
        aceptado: "",
        respuesta: "",
        descripcion: "",
      },
    };
  },
  computed: {
    ...mapState("crear", [
      "riesgosEvaluados",
      "riesgosOtros",
      "riesgoRelevante",
      "exposicionEstimadaRiesgo",
      "respuestaRiesgo",
      "riesgoAceptado",
    ]),
    riesgosEvaluadosValue() {
      return (value) => {
        const result = this.riesgosEvaluados.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
    riesgosOtrosValue() {
      return (value) => {
        const result = this.riesgosOtros.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
    riesgoRelevanteValue() {
      return (value) => {
        const result = this.riesgoRelevante.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
    exposicionEstimadaRiesgoValue() {
      return (value) => {
        const result = this.exposicionEstimadaRiesgo.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
    riesgoAceptadoValue() {
      return (value) => {
        const result = this.riesgoAceptado.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
    respuestaRiesgoValue() {
      return (value) => {
        const result = this.respuestaRiesgo.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
  },
  methods: {
    onClick() {
      document.getElementById(this.id).click();
    },
    onSubmit() {
      this.riesgosAsociadosData = [
        this.riesgoAsociado,
        ...this.riesgosAsociadosData,
      ];
      this.riesgoAsociado = {
        levelZero: "",
        levelOne: "",
        considerado: "",
        estimada: "",
        aceptado: "",
        respuesta: "",
        descripcion: "",
      };
    },
    onDelete(index) {
      this.riesgosAsociadosData.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.table-responsive {
  overflow-y: hidden;
}
</style>
