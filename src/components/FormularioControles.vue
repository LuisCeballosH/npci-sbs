<template>
  <form @submit.prevent="onSubmit">
    <div class="row g-3 align-items-end mb-3">
      <div class="col-lg-3">
        <label class="form-label">Nombre</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-3">
        <label class="form-label">Detalle</label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-3">
        <label class="form-label">Nivel de efectividad</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-lg-3">
        <button class="btn btn-primary btn-sm float-end" type="submit">
          Agregar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormularioControles",
  methods: {
    async onSubmit() {
      const result = await this.$validator.validateAll();
      if (result) {
        console.log("onSubmit");
        // this.$emit("action");
        // this.$validator.reset();
      }
    },
  },
};
</script>
