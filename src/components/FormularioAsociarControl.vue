<template>
  <form @submit.prevent="onSubmit">
    <div class="row g-3 align-items-end mb-3">
      <div class="col-lg-9">
        <label class="form-label">Control</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col-lg-3">
        <button class="btn btn-primary btn-sm float-end" type="submit">
          Asociar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormularioAsociarControl",
  methods: {
    async onSubmit() {
      const result = await this.$validator.validateAll();
      if (result) {
        console.log("onSubmit");
      }
    },
  },
};
</script>
