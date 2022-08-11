<template>
  <!-- Component card of a house -->
  <article class="card" :class="classCard">
    <BaseCardImage
      :class-image-card="classCardImage"
      :class-left-card="[classCardLeft, classCardLeftRec]"
      :image="image"
      :id="id"
    >
      <template v-slot:default="slotProps">
        <BaseLoader v-if="slotProps.isLoadImg" />
      </template>
    </BaseCardImage>
    <div class="card__center" :class="classCardCenter">
      <BaseCardCenter
        :bedrooms="bedrooms"
        :bathrooms="bathrooms"
        :class-center-text-box="[classCardCenterText, classCardCenterBoxRec]"
        :class-street-text="classTextDetailsStreet"
        :class-text-recommended1="classTextRecommended1"
        :class-card-center-text-number="classCardCenterTextNumber"
        :card-center-text-details="cardCenterTextDetails"
        :street="street"
      >
        <template v-slot:card-center-city-details>
          <slot name="card-center-city-details"></slot>
        </template>
        <template v-slot:card-center-price>
          <slot name="card-center-price"></slot>
        </template>
        <template v-slot:card-center-price-details>
          <slot name="card-center-price-details"></slot>
        </template>
        <template v-slot:card-center-city>
          <slot name="card-center-city"></slot>
        </template>
        <template v-slot:icon-garage-details>
          <slot name="icon-garage-details"></slot>
        </template>
        <template v-slot:text-has-garage>
          <slot name="text-has-garage"></slot>
        </template>
        <template v-slot:card-center-size>
          <slot name="card-center-size"></slot>
        </template>
        <template v-slot:card-center-text-size>
          <slot name="card-center-text-size"></slot>
        </template>
      </BaseCardCenter>
      <div class="card__center-buttons" v-if="madeByMe">
        <BaseCardButtons :id="id" />
      </div>
    </div>
    <slot name="description"></slot>
  </article>
</template>

<script>
import BaseCardButtons from './subComponents/BaseCardButtons.vue';
import BaseCardCenter from './subComponents/BaseCardCenter.vue';
import BaseCardImage from './subComponents/BaseCardImage.vue';
import BaseLoader from './BaseLoader.vue';

export default {
  name: 'BaseCard',
  components: {
    BaseCardButtons,
    BaseCardCenter,
    BaseCardImage,
    BaseLoader,
  },
  props: [
    'id',
    'bedrooms',
    'bathrooms',
    'classCard',
    'classCardCenter',
    'classCardLeft',
    'classCardLeftRec',
    'classCardImage',
    'classCardCenterText',
    'classCardCenterBoxRec',
    'classTextRecommended1',
    'classTextDetailsStreet',
    'classCardCenterTextNumber',
    'cardCenterTextDetails',
    'image',
    'madeByMe',
    'numberAddition',
    'street',
  ],
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  background-color: var(--bgColor2-element);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.card__center {
  display: flex;
  padding: 10px 0px 10px 10px;
  flex-grow: 1;
}

.card__center-buttons {
  display: flex;
  justify-content: flex-end;
  width: 35px;
  height: fit-content;
  margin-top: 3px;
}

.card__center--details {
  position: relative;
  margin-top: -40px;
  padding: 20px 15px 10px;
  border-top-left-radius: 4vw;
  border-top-right-radius: 4vw;
  background-color: white;
}

.card--details {
  flex-direction: column;
  margin-top: initial;
}

@media screen and (min-width: 360px) {
  .card {
    flex-direction: row;
    padding: 15px 10px 15px 15px;
  }

  .card__center {
    padding: 10px 0px 0px 10px;
  }

  .card__center-buttons {
    margin-top: initial;
  }

  .card--details {
    flex-direction: column;
    padding: initial;
  }

  .card__center--details {
    padding: 25px 20px 10px;
  }
}

@media screen and (min-width: 500px) {
  .card--details {
    margin-top: 20px;
  }

  .card__center-buttons {
    width: 50px;
  }

  .card__center--details {
    margin-top: initial;
    border-radius: initial;
    background-color: initial;
  }
}
</style>
