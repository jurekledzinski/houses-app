<template>
  <!-- Show only on house details page, part of BaseCardCenter -->
  <p class="card__center-city--details">
    <BaseIcon
      class-icon="icon__plus-text-around"
      folder="icons"
      url1="ic_location@3x.png"
      url2="ic_location@2x.png"
      url3="ic_location.png"
    />
    <span class="card__center-text--details">
      {{ zip }} {{ numberAddition }} {{ city }}</span
    >
  </p>
</template>

<script>
export default {
  name: 'BaseCardCenterCityDetails',
  props: ['city', 'numberAddition', 'zip'],
};
</script>

<style scoped>
.card__center-city--details {
  display: flex;
  grid-area: b;
}
</style>
