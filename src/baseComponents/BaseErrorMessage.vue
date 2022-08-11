<template>
  <!-- Component to display error message in form -->
  <p class="input-error-msg">{{ errorMessage }}</p>
</template>

<script>
export default {
  name: 'BaseErrorMessage',
  props: ['errorMessage'],
};
</script>

<style scoped>
.input-error-msg {
  margin-top: 10px;
  color: var(--primary-element-color);
  font-size: 1.2rem;
  font-style: italic;
  font-family: var(--font-family-1);
}

@media screen and (min-width: 500px) {
  .input-error-msg {
    font-size: 1.3rem;
  }
}
</style>
