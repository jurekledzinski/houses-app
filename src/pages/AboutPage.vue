<template>
  <BaseContainer class-container="container">
    <template v-slot:default="slotProps">
      <section :class="slotProps.class">
        <h1 class="section-about__title--mobile">About</h1>
        <h1 class="section-about__title">About DTT Real Estate</h1>
        <p class="section-about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          molestiae eaque, vero eius officiis praesentium quidem corrupti
          laudantium maxime ea sit, qui nobis cum quam rerum aut error iste
          placeat molestias. Quis delectus id ratione eveniet distinctio
          exercitationem. Modi quis repudiandae rem nemo, laboriosam sunt ut
          illum ipsam voluptates hic quaerat sit corrupti vel dignissimos vero
          amet, quia, tenetur eveniet sequi odio doloribus?
        </p>
        <p class="section-about__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h1 class="section-about__title">Design and Development</h1>
        <div class="section-about__logo-wrapper">
          <div class="section-about__logo">
            <BaseLogo />
          </div>
          <div class="section-about__logo-text">
            <p class="section-about__logo-text-1">By DevStudio</p>
            <p class="section-about__logo-text-2">
              <router-link to="https://www.dtt-nl.nl"
                >www.devjerzy.com</router-link
              >
            </p>
          </div>
        </div>
      </section>
    </template>
  </BaseContainer>
</template>

<script>
import BaseLogo from '../baseComponents/BaseLogo.vue';

export default {
  name: 'AboutPage',
  components: {
    BaseLogo,
  },
};
</script>

<style scoped>
.section-about__title--mobile {
  margin-bottom: 30px;
  text-align: center;
}

.section-about__title {
  font-size: 1.4rem;
}

.section-about__text {
  margin: 15px 0;
}

.section-about__logo-wrapper {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.section-about__logo {
  width: 50%;
  height: 80px;
}

.section-about__logo-text {
  margin-left: 30px;
}

a {
  color: var(--hyperlink-text-color);
  font-size: 1.2rem;
  text-decoration: none;
}

@media screen and (min-width: 500px) {
  .section-about__title--mobile {
    display: none;
  }
  .section-about__title {
    font-size: 3.2rem;
  }

  .section-about__text {
    margin: 30px 0;
    font-size: 1.6rem;
  }

  .section-about__logo-wrapper {
    margin-top: 30px;
  }

  .section-about__logo {
    width: 200px;
  }

  a {
    font-size: 1.4rem;
  }
}
</style>
