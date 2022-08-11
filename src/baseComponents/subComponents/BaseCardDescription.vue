<template>
  <!-- Show on the Details page house, part BaseCard -->
  <div class="card__bottom">
    <p class="card__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardDescription',
  props: ['description'],
};
</script>

<style scoped>
.card__bottom {
  padding: 0px 15px 20px;
}

.card__description {
  color: var(--secondary-text-color);
  font-size: 1.2rem;
}

@media screen and (min-width: 360px) {
  .card__bottom {
    padding: 0px 20px 25px;
  }
}

@media screen and (min-width: 500px) {
  .card__description {
    font-size: 1.6rem;
  }
}
</style>
