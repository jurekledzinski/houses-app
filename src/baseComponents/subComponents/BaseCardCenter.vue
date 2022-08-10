<template>
  <!-- One of the divided components from BaseCard -->
  <!-- This part is responsible for display center text, details of the house -->
  <div class="card__center-text">
    <div class="card__center-text-box" :class="classCenterTextBox">
      <h3
        class="card__center-street"
        :class="[classStreetText, classTextRecommended1]"
      >
        {{ street }}
      </h3>
      <slot
        name="card-center-city-details"
        v-if="$slots['card-center-city-details']"
      ></slot>
      <slot name="card-center-price" v-if="$slots['card-center-price']"></slot>
      <slot
        name="card-center-price-details"
        v-if="$slots['card-center-price-details']"
      ></slot>
      <slot name="card-center-city" v-if="$slots['card-center-city']"></slot>
      <p class="card__center-numbers">
        <BaseIcon
          class-icon="icon__plus-text-around"
          folder="icons"
          url1="ic_bed@3x.png"
          url2="ic_bed@2x.png"
          url3="ic_bed.png"
        />
        <span
          :class="[
            classTextRecommended1,
            classCardCenterTextNumber,
            cardCenterTextDetails,
          ]"
          >{{ bedrooms }}</span
        >
        <BaseIcon
          class-icon="icon__plus-text-around"
          folder="icons"
          url1="ic_bath@3x.png"
          url2="ic_bath@2x.png"
          url3="ic_bath.png"
        />
        <span
          :class="[
            classTextRecommended1,
            classCardCenterTextNumber,
            cardCenterTextDetails,
          ]"
          >{{ bathrooms }}</span
        >
        <slot name="icon-garage-details"></slot>
        <slot name="text-has-garage"></slot>
        <slot name="card-center-size"></slot>
        <slot name="card-center-text-size"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardCenter',
  props: [
    'bedrooms',
    'bathrooms',
    'classCenterTextBox',
    'classStreetText',
    'classTextRecommended1',
    'classCardCenterTextNumber',
    'cardCenterTextDetails',
    'street',
  ],
};
</script>

<style>
.card__left {
  position: relative;
  width: 100%;
  height: 130px;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__center-text {
  flex-grow: 1;
}

.card__center-text-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  grid-template-rows: 20px 20px 25px 25px;
  grid-template-areas:
    'a a a'
    'b b b'
    'c c c'
    'd d d';
}

.card__center-street {
  grid-area: a;
}

.card__center-numbers {
  font-size: 1.2rem;
}

.card__center-numbers {
  display: flex;
  align-items: center;
  grid-area: d;
}

.card__center-number {
  margin: 0 7px;
}

.card__center-street--details {
  display: flex;
  grid-area: a;
}

.card__center-room {
  display: flex;
  align-items: center;
}

.card__center-text--details {
  margin-left: 5px;
  margin-right: 15px;
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  font-weight: 600;
}

.card__left--details {
  height: initial;
}

.card__center-text-box--details {
  grid-template-rows: 30px 25px 40px 25px;
}

@media screen and (min-width: 360px) {
  .card__left {
    width: 120px;
    height: auto;
  }

  .card__image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .card__center-text-box {
    grid-template-rows: 20px 23px 31px 31px;
  }

  .card__center-text-box--details {
    grid-template-rows: 30px 25px 25px 25px;
  }

  .card__left--details {
    width: 100%;
  }

  .card__image--details {
    border-radius: initial;
  }
}

@media screen and (min-width: 500px) {
  .card__center-text-box {
    grid-template-rows: 28px 28px 28px 28px;
  }

  .card__left {
    height: 130px;
  }

  .card__center-numbers {
    font-size: 1.4rem;
  }

  .card__center-text--details {
    font-size: 1.4rem;
    margin-left: 5px;
  }

  .card__center-text-box--details {
    grid-template-rows: 30px 25px 25px 25px;
  }

  .card__left--details {
    height: initial;
  }
}

@media screen and (min-width: 1024px) {
  .card__left--recommended {
    width: 90px;
    height: 100px;
  }

  .card__center-text-box--recommended {
    grid-template-rows: 21px 21px 25px 21px;
  }

  .card__center-text-recommended {
    font-size: 1.4rem !important;
  }
}
</style>
