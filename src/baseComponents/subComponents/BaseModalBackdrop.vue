<template>
  <!-- Part of BaseModal show backdrop -->
  <div class="backdrop"></div>
</template>

<script>
export default {
  name: 'BaseModalBackdrop',
};
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: -70px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}
</style>
