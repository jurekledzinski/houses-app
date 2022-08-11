<template>
  <!-- Show in overview and recommended houses, part of BaseCardCenter -->
  <p class="card__center-city" :class="classTextRecommended1">
    {{ zip }} {{ numberAddition }} {{ city }}
  </p>
</template>

<script>
export default {
  name: 'BaseCardCenterCity',
  props: ['classTextRecommended1', 'city', 'numberAddition', 'zip'],
};
</script>

<style scoped>
.card__center-city {
  font-size: 1.2rem;
  grid-area: c;
  color: var(--tertiary-element-color-2);
}

@media screen and (min-width: 500px) {
  .card__center-city {
    font-size: 1.4rem;
  }
}
</style>
