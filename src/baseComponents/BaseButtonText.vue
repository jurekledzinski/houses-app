<template>
  <!-- Add text to BaseButton -->
  <span :class="classText">{{ textButton }}</span>
</template>

<script>
export default {
  name: 'BaseButtonText',
  props: ['classText', 'textButton'],
};
</script>

<style scoped>
.button--create-house-text {
  display: none;
}

.button--redirect-text {
  display: none;
  color: var(--primary-text-color);
}

@media screen and (min-width: 500px) {
  .button--create-house-text {
    display: block;
  }

  .button--redirect-text {
    display: block;
    font-size: 1.6rem;
  }
}
</style>
