<template>
  <header class="header">
    <BaseContainer class-container="header__container">
      <template v-slot:default="slotProps">
        <div :class="slotProps.class">
          <div class="header__logo">
            <BaseLogo class-logo="logo--header" />
          </div>
          <nav class="header__nav">
            <ul class="header__menu">
              <li class="header__item">
                <router-link class="header__link" to="/">
                  <span class="header__link-name">Houses</span>
                  <span
                    class="header__link-icon header__link-icon--home"
                  ></span>
                </router-link>
              </li>
              <li class="header__item">
                <router-link class="header__link" to="/about">
                  <span class="header__link-name">About</span>
                  <span
                    class="header__link-icon header__link-icon--about"
                  ></span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </template>
    </BaseContainer>
  </header>
</template>

<script>
import BaseLogo from '../baseComponents/BaseLogo.vue';
export default {
  name: 'TheHeader',
  components: {
    BaseLogo,
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--bgColor2-element);
  z-index: 2;
}

.header__logo {
  display: none;
}

.header__nav {
  display: flex;
  width: 100%;
  margin-top: 3px;
}

.header__menu {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;
}

.header__link-name {
  display: none;
}

.header__link-icon {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: center;
}

/* If router-link-active home link then home active icon show with this background */
.router-link-active .header__link-icon--home {
  background-image: url('../assets/icons/ic_mobile_navigarion_home_active@3x.png');
}

/* If not active home link then home inactive icon show */
.header__link-icon--home {
  background-image: url('../assets/icons/ic_mobile_navigarion_home@3x.png');
}

/* If router-link-active about link then about active icon show with this background */
.router-link-active .header__link-icon--about {
  background-image: url('../assets/icons/ic_mobile_navigarion_info_active@3x.png');
}

/* If not active about link then about inactive icon show */
.header__link-icon--about {
  background-image: url('../assets/icons/ic_mobile_navigarion_info@3x.png');
}

@media screen and (min-width: 500px) {
  .header {
    top: 0;
  }

  .header__logo {
    display: block;
    width: 100px;
    height: inherit;
  }

  .header__nav {
    width: 220px;
    margin-left: 40px;
  }

  .header__link-name {
    display: block;
  }

  .header__link-icon--home,
  .header__link-icon--about {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .header__logo {
    width: 130px;
  }
}
</style>
