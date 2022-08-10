<template>
  <BaseCard
    :bedrooms="item.bedrooms"
    :bathrooms="item.bathrooms"
    class-card-left-rec="card__left--recommended"
    class-card-center-box-rec="card__center-text-box--recommended"
    class-card-center-text-number="card__center-number"
    class-text-recommended-1="card__center-text-recommended"
    :id="item._id"
    :image="item.image"
    :street="item.street"
    v-for="item in getRecommendedHouses"
    :key="item._id"
  >
    <template v-slot:card-center-price>
      <BaseCardCenterPrice
        class-text-recommended-1="card__center-text-recommended"
        :price="item.price"
      />
    </template>
    <template v-slot:card-center-city>
      <BaseCardCenterCity
        class-text-recommended-1="card__center-text-recommended"
        :city="item.city"
        :number-addition="item.numberAddition"
        :zip="item.zip"
      />
    </template>
    <template v-slot:card-center-size>
      <BaseIcon
        class-icon="icon__plus-text-around"
        folder="icons"
        url1="ic_size@3x.png"
        url2="ic_size@2x.png"
        url3="ic_size.png"
      />
    </template>
    <template v-slot:card-center-text-size>
      <BaseCardCenterTextSize
        class-card-center-text-number="card__center-number"
        class-text-recommended-1="card__center-text-recommended"
        :size="item.size"
      />
    </template>
  </BaseCard>
</template>

<script>
import BaseCardCenterCity from '../../baseComponents/subComponents/BaseCardCenterCity.vue';
import BaseCardCenterPrice from '../../baseComponents/subComponents/BaseCardCenterPrice.vue';
import BaseCardCenterTextSize from '../../baseComponents/subComponents/BaseCardCenterTextSize.vue';

export default {
  name: 'DetailsHouseRecommended',
  components: {
    BaseCardCenterCity,
    BaseCardCenterPrice,
    BaseCardCenterTextSize,
  },
  computed: {
    //Filter to get recommended houses
    getRecommendedHouses() {
      const recommendedHouses = this.handleInitialLoad();
      return recommendedHouses;
    },
  },
  methods: {
    //Return recommendedHouses base on 3 indexes
    handleGetRecommendedHouses(indexesHouses, restHouses) {
      const recommendedHouses = restHouses?.filter((_, index) => {
        const selectIndex = indexesHouses?.find((item2) => item2 === index);
        return index === selectIndex;
      });
      return recommendedHouses;
    },

    //Draw 3 random indexes from rest houses
    handleDrawRandomIndexes(restHouses) {
      let indexesHouses = [];
      for (let i = 0; i < restHouses?.length; i++) {
        const draw = Math.floor(Math.random() * restHouses?.length);
        //Add index if not exist in indexesHouses and indexesHouses length is < 3
        if (!indexesHouses?.includes(draw) && indexesHouses?.length < 3) {
          indexesHouses.push(draw);
        }
      }
      return indexesHouses;
    },

    //Filter houses execept current one
    handleFilterHouses(allHouses) {
      const id = this.$route.params.id;
      const restHouses = allHouses.filter((item) => item._id !== id);
      return restHouses;
    },

    //Get all houses from store
    handleGetAllHouses() {
      const allHouses = this.$store.getters['houses/getAllHouses'];
      return allHouses;
    },

    //Load initial function
    handleInitialLoad() {
      const allHouses = this.handleGetAllHouses();
      const restHouses = this.handleFilterHouses(allHouses);
      const indexesHouses = this.handleDrawRandomIndexes(restHouses);
      const data = this.handleGetRecommendedHouses(indexesHouses, restHouses);
      return data;
    },
  },
  mounted() {
    this.handleInitialLoad();
    const unwatch = this.$watch('getRecommendedHouses', () => unwatch());
  },
};
</script>
