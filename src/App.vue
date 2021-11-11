<template>
  <div>
    <router-view />
    <modal-controles />
    <modal-plan />
  </div>
</template>

<script>
import ModalControles from "./components/ModalControles.vue";
import ModalPlan from "./components/ModalPlan.vue";
export default {
  components: { ModalControles, ModalPlan },
  name: "App",
};
</script>
