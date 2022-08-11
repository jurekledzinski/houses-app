<template>
  <section class="section-details">
    <BaseContainer class-container="section-details__container">
      <template v-slot:default="slotProps">
        <div :class="slotProps.class">
          <BaseBackRedirect
            class-button="button--redirect"
            class-icon="icon__plus-text"
            class-text="button--redirect-text"
            folder="icons"
            redirectUrl="/"
            text-button="Back to overview"
            url1="ic_back_white@3x.png"
            url2="ic_back_grey@2x.png"
            url3="ic_back_grey.png"
          />
          <div class="section-details__box">
            <div class="section-details__left">
              <DetailsHouseDetails />
            </div>
            <div class="section-details__right">
              <h3 class="section-details__title">Recommended for you</h3>
              <p v-if="getAllHouses.length === 1">No recommended houses</p>
              <DetailsHouseRecommended />
            </div>
          </div>
        </div>
      </template>
    </BaseContainer>
  </section>
</template>

<script>
import DetailsHouseDetails from './subComponents/DetailsHouseDetails.vue';
import DetailsHouseRecommended from './subComponents/DetailsHouseRecommended.vue';

export default {
  name: 'DetailsHouse',
  components: {
    DetailsHouseDetails,
    DetailsHouseRecommended,
  },
  methods: {
    handleGetAllHouses() {
      const allHouses = this.$store.getters['houses/getAllHouses'];
      return allHouses;
    },
    handleInitialLoad() {
      const allHouses = this.handleGetAllHouses();
      return allHouses;
    },
  },
  computed: {
    getAllHouses() {
      const all = this.handleInitialLoad();
      return all;
    },
  },
  created() {
    const isDelete = Boolean(this.$route.query.delete);
    //If delete query exist then add modal-open class which has overflow hidden to hide scroll
    if (isDelete) document.body.classList.add('modal-open');
    //Scroll to top of the page when component is created
    window.scrollTo(0, 0);
    // Clear search input houses to display all houses after come back from details house page
    this.$store.dispatch({
      type: 'houses/handleSearchValue',
      value: '',
    });
  },
  mounted() {
    this.handleInitialLoad();
    const unwatch = this.$watch('getAllHouses', () => unwatch());
  },
};
</script>

<style scoped>
.section-details {
  padding-bottom: 90px;
}

.section-details__box {
  display: flex;
  flex-direction: column;
}

.section-details__right {
  padding: 0 15px;
  margin-top: 20px;
}

@media screen and (min-width: 360px) {
  .section-details__right {
    padding: 0 20px;
  }
}

@media screen and (min-width: 500px) {
  .section-details {
    padding-bottom: initial;
  }

  .section-details__right {
    padding: initial;
  }
}

@media screen and (min-width: 1024px) {
  .section-details__box {
    flex-direction: row;
    justify-content: space-between;
  }

  .section-details__left {
    width: 55%;
  }

  .section-details__right {
    width: 35%;
  }
}
</style>
