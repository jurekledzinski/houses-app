<template>
  <!-- Show on the house details page, part of BaseCardCenter -->
  <p class="card__center-price--details">
    <span class="card__center-price-box">
      <BaseIcon
        class-icon="icon__plus-text-around"
        folder="icons"
        url1="ic_price@3x.png"
        url2="ic_price@2x.png"
        url3="ic_price.png"
      />
      <span class="card__center-text--details">{{ price }}</span>
      <BaseIcon
        class-icon="icon__plus-text-around"
        folder="icons"
        url1="ic_size@3x.png"
        url2="ic_size@2x.png"
        url3="ic_size.png"
      />
      <span class="card__center-text--details">{{ size }}m2</span>
    </span>
    <span class="card__center-price-box">
      <BaseIcon
        class-icon="icon__plus-text-around"
        folder="icons"
        url1="ic_construction_date@3x.png"
        url2="ic_construction_date@2x.png"
        url3="ic_construction_date.png"
      />

      <span class="card__center-text--details"
        >Build in {{ constructionYear }}</span
      >
    </span>
  </p>
</template>

<script>
export default {
  name: 'BaseCardCenterPriceDetails',
  props: ['constructionYear', 'price', 'size'],
};
</script>

<style scoped>
.card__center-price--details {
  display: flex;
  grid-area: c;
  width: fit-content;
  flex-direction: column;
  justify-content: space-between;
}

.card__center-price-box {
  display: flex;
  align-items: center;
}

@media screen and (min-width: 360px) {
  .card__center-price--details {
    flex-direction: row;
    align-items: center;
    justify-content: initial;
  }
}
</style>
