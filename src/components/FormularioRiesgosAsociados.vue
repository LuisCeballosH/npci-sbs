<template>
  <form @submit.prevent="onSubmit">
    <div class="row g-3 align-items-end mb-3">
      <div class="col-lg-2">
        <label>Tipo de riesgo (nivel 0)</label>
        <select
          class="form-select"
          v-model="riesgoAsociado.levelZero"
          v-validate="'required'"
          name="levelZero"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="zero in riesgosEvaluados"
            :key="zero.key"
            :value="zero.key"
          >
            {{ zero.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-lg-2">
        <label>Tipo de riesgo (nivel 1)</label>
        <select
          class="form-select"
          v-model="riesgoAsociado.levelOne"
          v-validate="'required'"
          name="levelOne"
        >
          <option selected disabled value="">Seleccione</option>
          <option v-for="one in riesgosOtros" :key="one.key" :value="one.key">
            {{ one.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>

      <div class="col-lg-2">
        <label>¿Riego considerado relevante por la empresa?</label>
        <select
          class="form-select"
          v-model="riesgoAsociado.considerado"
          v-validate="'required'"
          name="considerado"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="relevante in riesgoRelevante"
            :key="relevante.key"
            :value="relevante.key"
          >
            {{ relevante.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-lg-2">
        <label>
          En caso que aplique, precise la exposición estimada del riego (soles)
        </label>
        <select
          class="form-select"
          v-model="riesgoAsociado.estimada"
          v-validate="'required'"
          name="estimada"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="exposicion in exposicionEstimadaRiesgo"
            :key="exposicion.key"
            :value="exposicion.key"
          >
            {{ exposicion.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-lg-2">
        <label>¿Riego aceptado?</label>
        <select
          class="form-select"
          v-model="riesgoAsociado.aceptado"
          v-validate="'required'"
          name="aceptado"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="aceptado in riesgoAceptado"
            :key="aceptado.key"
            :value="aceptado.key"
          >
            {{ aceptado.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-lg-2">
        <label>Respuesta al riesgo</label
        ><select
          class="form-select"
          v-model="riesgoAsociado.respuesta"
          v-validate="'required'"
          name="respuesta"
        >
          <option selected disabled value="">Seleccione</option>
          <option
            v-for="respuesta in respuestaRiesgo"
            :key="respuesta.key"
            :value="respuesta.key"
          >
            {{ respuesta.value }}
          </option>
        </select>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-lg-9">
        <label>Descripción del riesgo</label>
        <textarea
          class="form-control"
          rows="2"
          v-model="riesgoAsociado.descripcion"
          v-validate="'required'"
          name="descripcion"
        ></textarea>
        <div class="form-text">Caracteres 0/500</div>
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary float-end" type="submit">
          Agregar riesgo
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormularioRiesgosAsociadosOne",
  props: {
    riesgoAsociado: { type: Object, require: true },
    riesgosEvaluados: { type: Array, require: true },
    riesgosOtros: { type: Array, require: true },
    riesgoRelevante: { type: Array, require: true },
    respuestaRiesgo: { type: Array, require: true },
    exposicionEstimadaRiesgo: { type: Array, require: true },
    riesgoAceptado: { type: Array, require: true },
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

<style>
</style>
