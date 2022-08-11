<template>
  <!-- Show only on home details page, part of BaseCardCenter -->
  <span class="card__center-text--details">{{ hasGarage ? 'Yes' : 'No' }}</span>
</template>

<script>
export default {
  name: 'BaseCardHasGarage',
  props: ['hasGarage'],
};
</script>

<style scoped></style>
