<template>
  <div class="row g-3 align-items-end mb-3">
    <div class="col-3">
      <label>¿Riego considerado relevante por la empresa?</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-3">
      <label>
        En cao que aplique, precise la exposición estimada del riego (soles)
      </label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-3">
      <label>¿Riego aceptado?</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-3">
      <label>Respuesta al riesgo</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioRiesgosAsociadosTwo",
};
</script>

<style>
</style>
