<template>
  <div class="logo" :class="classLogo"></div>
</template>

<script>
export default {
  name: 'BaseLogo',
  props: ['classLogo'],
};
</script>

<style scoped>
.logo {
  width: 100%;
  height: inherit;
  background-image: url('../assets/images/img_logo_dtt@3x.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.logo--header {
  display: none;
  background-image: none;
}

@media screen and (min-width: 500px) {
  .logo--header {
    display: flex;
    align-items: center;
    height: inherit;
    background-image: url('../assets/images/img_logo_dtt@2x.png');
  }
}
@media screen and (min-width: 1024px) {
  .logo--header {
    background-image: url('../assets/images/img_logo_dtt.png');
  }
}
</style>
