<template>
  <div>
    <b-modal
      id="modal-control"
      centered
      size="lg"
      hide-header
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
      scrollable
      body-class="p-0"
      v-model="showControl"
    >
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Crear control">
            <tabla-controles :asociar="false" />
            <div>
              <button
                class="btn btn-danger btn-sm float-end mb-3"
                type="button"
                @click="toggle"
              >
                Cerrar
              </button>
            </div>
          </b-tab>
          <b-tab title="Asociar control" lazy>
            <tabla-controles :asociar="true" />
            <div>
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
import TablaControles from "./TablaControles.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { TablaControles },
  name: "ModalControles",
  computed: {
    ...mapState("control", ["showControl"]),
  },
  methods: {
    ...mapActions("control", ["toggleModalControl"]),
    toggle() {
      this.toggleModalControl();
    },
  },
};
</script>
