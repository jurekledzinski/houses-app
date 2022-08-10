<template>
  <!-- BaseCard part used to display image of the house -->
  <div class="card__left" :class="classLeftCard">
    <!-- When user will click in image then will redirect to details page of this house -->
    <router-link :to="`/details/house/${id}`">
      <img
        class="card__image"
        :class="classImageCard"
        :src="image"
        alt="house"
        @load="handleLoadImage"
      />
    </router-link>
    <!-- If isLoadImg is true then show loader icon if false then hide loader icon-->
    <slot :isLoadImg="isLoadImg"></slot>
  </div>
</template>

<script>
export default {
  name: 'CardImage',

  props: ['classImageCard', 'classLeftCard', 'image', 'id'],
  data() {
    return {
      isLoadImg: true,
    };
  },
  methods: {
    //Function executed when image is loaded, spinner disappear
    handleLoadImage() {
      this.isLoadImg = false;
    },
  },
};
</script>

<style scoped>
.card__left {
  position: relative;
  width: 100%;
  height: 130px;
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 12;
}

.card__left--details {
  height: initial;
}

@media screen and (min-width: 360px) {
  .card__left {
    width: 100px;
    height: auto;
  }

  .card__image {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  .card__left--details {
    width: 100%;
  }

  .card__image--details {
    border-radius: initial;
  }
}

@media screen and (min-width: 500px) {
  .card__left {
    height: 130px;
  }

  .card__left--details {
    height: initial;
  }

  .card__image {
    aspect-ratio: 16 / 9;
  }
}

@media screen and (min-width: 1024px) {
  .card__left--recommended {
    width: 90px;
    height: 100px;
  }
}
</style>
