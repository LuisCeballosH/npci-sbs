<template>
  <div>
    <div class="row justify-content-end">
      <div class="col-auto">
        <router-link class="btn btn-primary" to="/crear-informe">
          <b-icon icon="plus" class="me-1"></b-icon>
          Crear informe
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaInforme",
};
</script>
