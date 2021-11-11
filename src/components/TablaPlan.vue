<template>
  <div>
    <formulario-plan v-if="!asociar" />
    <formulario-asociar-plan v-if="asociar" />
    <div class="table-responsive">
      <table class="table table-bordered" aria-label="">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Detalle</th>
            <th scope="col">Área responsable</th>
            <th scope="col">Fecha de implementación</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-center"></th>
            <td></td>
            <td></td>
            <td class="text-center"></td>
            <td class="text-center"></td>
            <td class="text-center">
              <button
                class="btn btn-link m-0 p-0"
                @click="onDelete()"
                v-b-tooltip.hover
                title="Eliminar"
              >
                <b-icon icon="trash" variant="danger" font-scale="1.5"></b-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FormularioAsociarPlan from "./FormularioAsociarPlan.vue";
import FormularioPlan from "./FormularioPlan.vue";
export default {
  components: { FormularioPlan, FormularioAsociarPlan },
  name: "TablaPlan",
  props: {
    asociar: { type: Boolean, require: true },
  },
  methods: {
    async onDelete() {
      console.log("onDelete");
    },
  },
};
</script>
