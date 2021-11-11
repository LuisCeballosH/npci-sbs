<template>
  <div class="mb-5">
    <filtros-historico />
    <div class="table-responsive">
      <table class="table table-bordered " aria-label="">
        <thead>
          <tr>
            <th scope="col">N° Expediente</th>
            <th scope="col">Tipo de informe</th>
            <th scope="col">Nombre del nuevo producto o cambio importante</th>
            <th scope="col">Fecha de lanzamiento / ejecución</th>
            <th scope="col">Fecha de registro</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in historico" :key="item.idInforme">
            <th scope="row" class="text-center">{{ item.codExpediente }}</th>
            <td>{{ tipoInformeValue(item.tipoInforme) }}</td>
            <td>{{ item.nombreNpci }}</td>
            <td class="text-center">{{ item.fechaLanzImpl | date }}</td>
            <td class="text-center">{{ item.fechaEnvio | date }}</td>
            <td class="text-center">
              <button
                type="button"
                class="btn btn-link m-0 p-0"
                @click="associate(item)"
                v-b-tooltip.hover
                title="Asociar"
              >
                <b-icon icon="link" variant="success" font-scale="1.5"></b-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FiltrosHistorico from "./FiltrosHistorico.vue";
import { mapState, mapActions } from "vuex";
import * as dayjs from "dayjs";
export default {
  components: { FiltrosHistorico },
  name: "TablaHistorico",
  computed: {
    ...mapState("listar", ["historico"]),
    ...mapState("crear", ["tipoInforme"]),
    tipoInformeValue() {
      return (value) => {
        const result = this.tipoInforme.find(
          (element) => element.key === value
        );
        return result && result.value;
      };
    },
  },
  filters: {
    date(value) {
      return dayjs(value).format("DD/MM/YYYY");
    },
  },
  methods: {
    ...mapActions("listar", ["setAssociatesAction"]),
    associate(item) {
      this.setAssociatesAction(item);
    },
  },
};
</script>

<style scoped>
.table-responsive {
  overflow-y: hidden;
}
</style>
