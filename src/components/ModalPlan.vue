<template>
  <div>
    <b-modal
      id="modal-plan"
      centered
      size="lg"
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
      scrollable
      body-class="p-0"
      v-model="showPlan"
    >
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Crear plan">
            <div>
              <tabla-plan :asociar="false" />
              <button
                class="btn btn-danger btn-sm float-end mb-3"
                type="button"
                @click="toggle"
              >
                Cerrar
              </button>
            </div>
          </b-tab>
          <b-tab title="Asociar plan" lazy>
            <div>
              <tabla-plan :asociar="true" />
              <button
                class="btn btn-danger btn-sm float-end mb-3"
                type="button"
                @click="toggle"
              >
                Cerrar
              </button>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
import TablaPlan from "./TablaPlan.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { TablaPlan },
  name: "ModalPlan",
  computed: {
    ...mapState("plan", ["showPlan"]),
  },
  methods: {
    ...mapActions("plan", ["toggleModalPlan"]),
    toggle() {
      this.toggleModalPlan();
    },
  },
};
</script>
