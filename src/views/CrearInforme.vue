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
export default {
  components: { FormularioInforme },
  name: "CrearInforme",
};
</script>

<style>
</style>
