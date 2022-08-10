<template>
  <!-- Component used to center content in the middle -->
  <slot :class="classContainer"></slot>
</template>

<script>
export default {
  name: 'BaseContainer',
  props: ['classContainer'],
};
</script>

<style>
.container,
.section-create-edit-house__container {
  width: clamp(0px, 100%, 1024px);
  min-height: inherit;
  padding: 50px 10px 10px;
  margin: 0 auto;
}

.container {
  padding: 50px 10px 100px 10px;
}

.header__container {
  display: flex;
  align-items: center;
  width: clamp(0px, 100%, 1024px);
  height: inherit;
  margin: 0 auto;
}

@media screen and (min-width: 360px) {
  .container {
    padding: 50px 20px 100px 20px;
  }

  .section-create-edit-house__container {
    padding: 50px 20px 10px;
  }
}

@media screen and (min-width: 500px) {
  .container {
    padding: 50px 20px;
    margin-top: 70px;
  }

  .section-details__container,
  .section-create-edit-house__container {
    width: clamp(0px, 100%, 1024px);
    min-height: inherit;
    padding: 120px 20px 50px 20px;
    margin: 0 auto;
  }

  .header__container {
    padding: 0 20px;
  }
}
</style>
