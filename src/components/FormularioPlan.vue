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
        <label class="form-label">Área responsable </label>
        <input type="text" class="form-control" />
      </div>
      <div class="col-lg-3">
        <label class="form-label">Fecha de implementación</label>
        <input type="date" class="form-control" />
      </div>

      <div class="col-12">
        <button class="btn btn-primary btn-sm float-end" type="submit">
          Agregar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormularioPlan",
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
