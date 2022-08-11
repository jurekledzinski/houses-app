<template>
  <!-- Wrapper for inputs -->
  <div class="input-wrapper" :class="classInputWrapper">
    <slot name="label" v-if="$slots.label"></slot>
    <slot name="input" v-if="$slots.input"></slot>
    <slot name="input-file" v-if="$slots['input-file']"></slot>
    <slot name="display-image" v-if="$slots['display-image']"></slot>
    <slot name="error-message" v-if="$slots['error-message']"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseFieldInput',
  props: ['classInputWrapper'],
};
</script>

<style scoped>
.input-wrapper {
  position: relative;
  width: 100%;
}

.input-wrapper--half {
  position: relative;
  width: 100%;
}

@media screen and (min-width: 500px) {
  .input-wrapper--half {
    width: 48%;
  }
}
</style>
