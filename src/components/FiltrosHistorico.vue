<template>
  <div class="row mb-3 justify-content-end align-items-center">
    <div class="col-auto">
      <datepicker
        placeholder="MM/YYYY"
        :minimumView="'month'"
        :maximumView="'year'"
        :initialView="'year'"
        input-class="form-control"
        format="MM/yyyy"
        v-model.trim="date"
        name="year"
        :language="es"
      >
      </datepicker>
    </div>
    <div class="col-auto">
      <button type="button" class="btn btn-success" @click="search">
        <b-icon icon="search" class="me-1"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { es } from "vuejs-datepicker/dist/locale";
import { mapActions } from "vuex";
export default {
  name: "FiltrosHistorico",
  components: {
    Datepicker,
  },
  data() {
    return {
      es,
      date: new Date(),
      filtros: { month: "", year: "", codEntVigilada: "00654" },
    };
  },
  methods: {
    ...mapActions("listar", ["getHistorico"]),
    search() {
      this.filtros.month = this.date.getMonth() + 1;
      this.filtros.year = this.date.getFullYear();
      this.getHistorico(this.filtros);
    },
  },
};
</script>

<style>
.vdp-datepicker .form-control {
  background-color: #fff;
}
</style>
