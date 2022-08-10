<template>
  <BaseContainer class-container="container">
    <template v-slot:default="slotProps">
      <main :class="slotProps.class">
        <section class="section-search">
          <div class="section-search__wrapper-1">
            <h1 class="section-search__title">Houses</h1>
            <BaseBackRedirect
              class-button="button--create-house"
              class-icon="icon__plus-text"
              class-text="button--create-house-text"
              folder="icons"
              redirectUrl="/create/house"
              text-button="Create new"
              url1="ic_plus_grey@3x.png"
              url2="ic_plus_white@2x.png"
              url3="ic_plus_white.png"
            />
          </div>
          <div class="section-search__wrapper-2">
            <ListHousesSearch />
            <ListHousesSort />
          </div>
        </section>
        <section class="section-list">
          <ListHousesAmountResults />
          <ListHousesList />
          <ListHousesNoResults />
        </section>
      </main>
    </template>
  </BaseContainer>
</template>

<script>
import ListHousesAmountResults from './subComponents/ListHousesAmountResults.vue';
import ListHousesList from './subComponents/ListHousesList.vue';
import ListHousesNoResults from './subComponents/ListHousesNoResults.vue';
import ListHousesSearch from './subComponents/ListHousesSearch.vue';
import ListHousesSort from './subComponents/ListHousesSort.vue';

export default {
  name: 'ListHouses',
  components: {
    ListHousesAmountResults,
    ListHousesList,
    ListHousesNoResults,
    ListHousesSearch,
    ListHousesSort,
  },
};
</script>

<style scoped>
.section-search__wrapper-1 {
  display: flex;
  margin-bottom: 30px;
}

.section-search__title {
  flex-grow: 1;
  text-align: center;
}

.section-search__wrapper-2 {
  display: flex;
  flex-wrap: wrap;
}

.section-search__buttons-sort {
  display: flex;
  list-style-type: none;
  width: 100%;
}

.section-search__item {
  width: 50%;
}

.section-list {
  width: 100%;
}

@media screen and (min-width: 500px) {
  .section-search__wrapper-1 {
    justify-content: space-between;
  }

  .section-search__title {
    text-align: initial;
  }
  .section-search__wrapper-2 {
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  .section-search__buttons-sort {
    width: 250px;
  }
}
</style>
