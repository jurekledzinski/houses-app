<template>
  <!-- If something is type in search input and if searched lenght houses is more than 0 then show result -->
  <p
    class="section-list__result"
    v-if="getSearchValue && getSearchHouses.length > 0"
  >
    <!-- Amount searched houses -->
    {{ getSearchHouses.length }}
    <!-- If one house then no -s letter if more than one house found then -s letter is added to result -->
    {{ getSearchHouses.length === 1 ? ' result found' : ' results found' }}
  </p>
</template>

<script>
export default {
  name: 'ListHousesAmountResults',
  computed: {
    //Get all searched houses from store
    getSearchHouses() {
      return this.$store.getters['houses/getSearchHouses'];
    },
    //Get search value input from store
    getSearchValue() {
      return this.$store.getters['houses/getSearchValue'];
    },
  },
};
</script>

<style scoped>
.section-list__result {
  margin-top: 30px;
  font-family: var(--font-family-1);
  font-weight: 700;
}

@media screen and (min-width: 500px) {
  .section-list__result {
    margin-top: 40px;
  }
}
</style>
