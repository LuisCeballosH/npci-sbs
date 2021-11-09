<template>
  <div class="card">
    <div class="card-header">Crear informe de riesgo</div>
    <div class="card-body">
      <formulario-informe />
    </div>
  </div>
</template>

<script>
import FormularioInforme from "../components/FormularioInforme.vue";
import { mapActions } from "vuex";
export default {
  components: { FormularioInforme },
  name: "CrearInforme",
  methods: {
    ...mapActions("crear", ["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>
