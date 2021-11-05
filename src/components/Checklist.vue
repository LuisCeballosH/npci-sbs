<template>
  <div>
    <label >
      <strong>1.7. Checklist</strong>
    </label>
    <p>Indicar si el NPCI implica algún impacto en los siguientes aspectos:</p>
    <div class="mb-3 row justify-content-end">
      <div class="col-5">Precise brevemente su respuesta</div>
    </div>
    <div class="mb-3 row" v-for="impacto in impactos" :key="'A' + impacto.id">
      <div class="col-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="impacto.selected"
          />
        </div>
      </div>
      <div class="col-6">
        <span> {{ impacto.description }} </span>
      </div>
      <div class="col-5">
        <input type="text" class="form-control" v-model="impacto.answer" />
      </div>
    </div>
    <p>El NPCI incorpora alguno de los siguientes aspectos:</p>
    <div class="mb-3 row" v-for="aspecto in aspectos" :key="'B' + aspecto.id">
      <div class="col-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="aspecto.selected"
          />
        </div>
      </div>
      <div class="col-6">
        <span> {{ aspecto.description }} </span>
      </div>
      <div class="col-5">
        <input type="text" class="form-control" v-model="aspecto.answer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checklist",
  props: {
    impactos: { type: Array, require: true },
    aspectos: { type: Array, require: true },
  },
};
</script>

<style>
</style>
