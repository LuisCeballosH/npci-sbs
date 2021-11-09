<template>
  <form @submit.prevent="onSubmit">
    <div class="row g-3 align-items-end mb-3">
      <div class="col-lg-4">
        <label>Debilidad identificada</label>
        <textarea
          class="form-control"
          rows="2"
          v-model="aspectoEvaluado.debilidad"
          v-validate="'required'"
          name="debilidad"
        ></textarea>
        <div class="form-text">Caracteres 0/500</div>
      </div>
      <div class="col-lg-4">
        <label>Medidas pendientes de implementar</label>
        <textarea
          class="form-control"
          rows="2"
          v-model="aspectoEvaluado.medida"
          v-validate="'required'"
          name="medida"
        ></textarea>
        <div class="form-text">Caracteres 0/500</div>
      </div>
      <div class="col-lg-4">
        <label>Controles implementados</label>
        <textarea
          class="form-control"
          rows="2"
          v-model="aspectoEvaluado.control"
          v-validate="'required'"
          name="control"
        ></textarea>
        <div class="form-text">Caracteres 0/500</div>
      </div>
      <div class="col-lg-3">
        <label>Rubro</label>
        <select
          class="form-select"
          v-model="aspectoEvaluado.rubro"
          v-validate="'required'"
          name="rubro"
        >
          <option selected disabled value="">Seleccione</option>
          <option v-for="rubr in rubro" :key="rubr.key" :value="rubr.key">
            {{ rubr.value }}
          </option>
        </select>
      </div>
      <div class="col-lg-3">
        <label>¿Aspectos considerados relevantes por la empresa?</label>
        <select
          class="form-select"
          v-model="aspectoEvaluado.relevante"
          v-validate="'required'"
          name="relevante"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="aspecto in aspectoConducta"
            :key="aspecto.key"
            :value="aspecto.key"
          >
            {{ aspecto.value }}
          </option>
        </select>
      </div>

      <div class="col-lg-6">
        <button class="btn btn-primary float-end" type="submit">
          Agregar aspecto
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormularioAspectosEvaluados",
  props: {
    aspectoEvaluado: { type: Object, require: true },
    aspectoConducta: { type: Array, require: true },
    rubro: { type: Array, require: true },
  },
  methods: {
    async onSubmit() {
      const result = await this.$validator.validateAll();
      if (result) {
        this.$emit("action");
        this.$validator.reset();
      }
    },
  },
};
</script>