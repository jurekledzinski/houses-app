<template>
  <teleport to="body">
    <transition appear>
      <slot name="backdrop" v-if="$slots.backdrop"></slot>
    </transition>
    <transition appear>
      <slot name="modal-content" v-if="$slots['modal-content']"></slot>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'BaseModal',
};
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: 0.4s ease-in;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
