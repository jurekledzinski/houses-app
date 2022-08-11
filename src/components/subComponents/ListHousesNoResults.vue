<template>
  <!-- If something type in search input and searched houses are 0 length then show image with no results found -->
  <div
    class="section-list__no-results"
    v-if="getSearchValue && !getSearchHouses.length"
  >
    <p class="section-list__text">No results found.</p>
    <p class="section-list__text">Please try another keyword.</p>
  </div>
</template>

<script>
export default {
  name: 'ListHousesNoResults',
  computed: {
    getSearchHouses() {
      return this.$store.getters['houses/getSearchHouses'];
    },
    getSearchValue() {
      return this.$store.getters['houses/getSearchValue'];
    },
  },
};
</script>

<style scoped>
.section-list__no-results {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 75%;
  height: 300px;
  margin: 0 auto;
  background-image: url('../../assets/images/img_empty_houses.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.section-list__text:nth-child(1) {
  transform: translateY(-20px);
}

.section-list__text:nth-child(2) {
  transform: translateY(-20px);
}

.section-list__text {
  text-align: center;
  font-size: 1.2rem;
  font-family: var(--font-family-1);
  font-weight: 500;
}

@media screen and (min-width: 500px) {
  .section-list__no-results {
    width: 300px;
    margin: 30px auto 0;
    background-image: url('../../assets/images/img_empty_houses@2x.png');
  }

  .section-list__text {
    font-size: 1.4rem;
  }

  .section-list__text:nth-child(1),
  .section-list__text:nth-child(2) {
    transform: initial;
  }
}

@media screen and (min-width: 1024px) {
  .section-list__no-results {
    background-image: url('../../assets/images/img_empty_houses@3x.png');
  }
}
</style>
