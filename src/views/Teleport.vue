<template>
  <h1 style="position: relative">父级页面</h1>
  <modal-button></modal-button>
</template>

<script>
import {ModalButton} from "@/components/Miniskirt";

export default {
  name: "Teleport",
  components: {
    'modal-button': ModalButton
  }
}
</script>

<style scoped>

</style>
