<template>
  <!-- Show in overview and recommended BaseCard, part of BaseCardCenter -->
  <p class="card__center-price" :class="classTextRecommended1">€ {{ price }}</p>
</template>

<script>
export default {
  name: 'BaseCardCenterPrice',
  props: ['classTextRecommended1', 'price'],
};
</script>

<style scoped>
.card__center-price {
  font-size: 1.2rem;
  grid-area: b;
  font-weight: 600;
}

@media screen and (min-width: 500px) {
  .card__center-price {
    font-size: 1.6rem;
  }
}
</style>
