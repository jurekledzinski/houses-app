<template>
  <!-- Loop thorugh houses and pass to BaseCard dynamic data and display cards -->
  <!-- If something is typed in search input (getSearchValue) show searched houses (getSearchHouses) if not all houses (getAllHouses) -->
  <BaseCard
    :bedrooms="item.bedrooms"
    :bathrooms="item.bathrooms"
    class-card-center-text-number="card__center-number"
    :id="item._id"
    :image="item.image"
    :key="item._id"
    :made-by-me="item.madeByMe"
    :street="item.street"
    v-for="item in getSearchValue ? getSearchHouses : getAllHouses"
  >
    <template v-slot:card-center-price>
      <BaseCardCenterPrice :price="item.price" />
    </template>
    <template v-slot:card-center-city>
      <BaseCardCenterCity
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
  name: 'ListHousesList',
  components: {
    BaseCardCenterCity,
    BaseCardCenterPrice,
    BaseCardCenterTextSize,
  },
  computed: {
    //Get all houses from store
    getAllHouses() {
      return this.$store.getters['houses/getAllHouses'];
    },
    //Get searched houses from store
    getSearchHouses() {
      return this.$store.getters['houses/getSearchHouses'];
    },
    //Get input value search
    getSearchValue() {
      return this.$store.getters['houses/getSearchValue'];
    },
  },
};
</script>
