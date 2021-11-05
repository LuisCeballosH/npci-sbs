<template>
  <div class="row g-3 align-items-end mb-3">
    <div class="col-4">
      <label>Descripción del riesgo</label>
      <textarea class="form-control" rows="2"></textarea>
      <div class="form-text">Caracteres 0/500</div>
    </div>
    <div class="col-4">
      <label>Tipo de riesgo (nivel 0)</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-4">
      <label>Tipo de riesgo (nivel 1)</label
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
  name: "FormularioRiesgosAsociadosOne",
};
</script>

<style>
</style>
