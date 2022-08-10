<template>
  <!-- Show in BaseCard in overView and recommended houses,part of BaseCardCenter -->
  <span :class="[classTextRecommended1, classCardCenterTextNumber]"
    >{{ size }}m2</span
  >
</template>

<script>
export default {
  name: 'BaseCardCenterTextSize',
  props: ['classTextRecommended1', 'classCardCenterTextNumber', 'size'],
};
</script>

<style scoped></style>
