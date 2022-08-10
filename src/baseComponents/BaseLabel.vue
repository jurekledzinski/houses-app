<template>
  <label class="input-label">{{ labelText }}</label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: ['labelText'],
};
</script>

<style scoped>
.input-label {
  display: block;
  margin: 10px 0 5px;
}
</style>
