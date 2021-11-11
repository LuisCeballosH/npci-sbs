<template>
  <div>
    <formulario-aspectos-evaluados
      :conductaMercado="conductaMercado"
      :aspectoConducta="aspectoConducta"
      :rubro="rubro"
      @action="onSubmit"
    />
    <div class="table-responsive">
      <table class="table table-bordered" aria-label="">
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
          <tr v-for="(item, index) in informe.conductasMercado" :key="index">
            <th scope="row" class="text-center">{{ index + 1 }}</th>
            <td>{{ item.debIndent }}</td>
            <td>{{ rubroValue(item.rubro) }}</td>
            <td>{{ aspectoConductaValue(item.relevante) }}</td>
            <td>{{ item.medidas }}</td>
            <td>{{ item.controles }}</td>
            <td class="text-center">
              <button
                class="btn btn-link m-0 p-0"
                type="button"
                @click="onDelete(item)"
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
    <input type="file" class="d-none" name="" ref="aspecto" />
    <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
      Carga masiva (.xls o .xlsx)
    </button>
  </div>
</template>

<script>
import FormularioAspectosEvaluados from "./FormularioAspectosEvaluados.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { FormularioAspectosEvaluados },
  name: "TablaAspectosEvaluados",
  data() {
    return {
      conductaMercado: {
        debIndent: "",
        rubro: "",
        relevante: "",
        medidas: "",
        controles: "",
      },
    };
  },
  computed: {
    ...mapState("crear", ["aspectoConducta", "rubro", "informe"]),
    rubroValue() {
      return (value) => {
        const result = this.rubro.find((element) => element.key === value);
        return result && result.value;
      };
    },
    aspectoConductaValue() {
      return (value) => {
        const result = this.aspectoConducta.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
  },
  methods: {
    ...mapActions("crear", [
      "addConductaMercadoAction",
      "deleteConductaMercadoAction",
    ]),
    onClick() {
      this.$refs.aspecto.click();
    },
    onSubmit() {
      this.addConductaMercadoAction(this.conductaMercado);
      this.conductaMercado = {
        debilidad: "",
        rubro: "",
        relevante: "",
        medida: "",
        control: "",
      };
    },
    onDelete(item) {
      this.deleteConductaMercadoAction(item);
    },
  },
};
</script>

<style scoped>
.table-responsive {
  overflow-y: hidden;
}
</style>
