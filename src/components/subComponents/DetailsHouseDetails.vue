<template>
  <BaseCard
    :bedrooms="getSelectedHouse.bedrooms"
    :bathrooms="getSelectedHouse.bathrooms"
    class-card="card--details"
    class-card-left="card__left--details"
    class-card-image="card__image--details"
    class-card-center="card__center--details"
    class-card-center-text="card__center-text-box--details"
    class-text-details-street="card__center-street--details"
    card-center-text-details="card__center-text--details"
    :id="getSelectedHouse.id"
    :image="getSelectedHouse.image"
    :street="getSelectedHouse.street"
    :made-by-me="getSelectedHouse.madeByMe"
  >
    <template v-slot:card-center-city-details>
      <BaseCardCenterCityDetails
        :city="getSelectedHouse.city"
        :number-addition="getSelectedHouse.numberAddition"
        :zip="getSelectedHouse.zip"
      />
    </template>
    <template v-slot:card-center-price-details>
      <BaseCardCenterPriceDetails
        :construction-year="getSelectedHouse.constructionYear"
        :price="getSelectedHouse.price"
        :size="getSelectedHouse.size"
      />
    </template>
    <template v-slot:description>
      <BaseCardDescription :description="getSelectedHouse.description" />
    </template>
    <template v-slot:icon-garage-details>
      <BaseIcon
        class-icon="icon__plus-text-around"
        folder="icons"
        url1="ic_garage@3x.png"
        url2="ic_garage@2x.png"
        url3="ic_garage.png"
      />
    </template>
    <template v-slot:text-has-garage>
      <BaseCardCenterHasGarage :has-garage="getSelectedHouse.hasGarage" />
    </template>
  </BaseCard>
</template>

<script>
import BaseCardCenterCityDetails from '../../baseComponents/subComponents/BaseCardCenterCityDetails.vue';
import BaseCardCenterHasGarage from '../../baseComponents/subComponents/BaseCardCenterHasGarage.vue';
import BaseCardCenterPriceDetails from '../../baseComponents/subComponents/BaseCardCenterPriceDetails.vue';
import BaseCardDescription from '../../baseComponents/subComponents/BaseCardDescription.vue';

export default {
  name: 'DetailsHouseDetails',
  components: {
    BaseCardCenterCityDetails,
    BaseCardCenterHasGarage,
    BaseCardCenterPriceDetails,
    BaseCardDescription,
  },
  computed: {
    //Get selected house to pass data to BaseCard
    getSelectedHouse() {
      const idHouse = this.$route.params.id;
      const allHouses = this.handleGetAllHouses();
      const selectedHouse = this.handleFindSelectedHouse(allHouses, idHouse);
      const houseDetails = this.handleReturnSelectedHouse(selectedHouse);
      return houseDetails;
    },
  },
  methods: {
    //Get all houses from store
    handleGetAllHouses() {
      const allHouses = this.$store.getters['houses/getAllHouses'];
      return allHouses;
    },

    //Find selected house which should be show in details house
    handleFindSelectedHouse(allHouses, idHouse) {
      const selectedHouse = allHouses?.find(
        (item) => item?._id.toString() === idHouse
      );
      return selectedHouse;
    },

    //Return data which will be pass to BaseCard
    handleReturnSelectedHouse(house) {
      return {
        bedrooms: house?.bedrooms,
        bathrooms: house?.bathrooms,
        city: house?.city,
        constructionYear: house?.constructionYear,
        description: house?.description,
        id: house?._id,
        image: house?.image,
        hasGarage: house?.hasGarage,
        price: house?.price,
        size: house?.size,
        street: house?.street,
        zip: house?.zip,
        madeByMe: house?.madeByMe,
        numberAddition: house?.numberAddition,
      };
    },
  },
};
</script>
