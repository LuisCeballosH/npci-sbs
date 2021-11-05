<template>
  <div class="row g-3 align-items-end mb-3">
    <div class="col-2">
      <label>Debilidad identificada</label>
      <textarea class="form-control" rows="2"></textarea>
      <div class="form-text">Caracteres 0/500</div>
    </div>
    <div class="col-3">
      <label>Rubro</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-3">
      <label>¿Aspectos considerados relevantes por la empresa?</label
      ><select class="form-select">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="col-2">
      <label>Medidas pendientes de implementar</label>
      <textarea class="form-control" rows="2"></textarea>
      <div class="form-text">Caracteres 0/500</div>
    </div>
    <div class="col-2">
      <label>Controles implementados</label>
      <textarea class="form-control" rows="2"></textarea>
      <div class="form-text">Caracteres 0/500</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioLaft",
};
</script>