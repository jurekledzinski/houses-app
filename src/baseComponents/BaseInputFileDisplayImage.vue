<template>
  <span class="input-wrapper-file">
    <img class="input-upload-img" :src="fileUrl" alt="Uploaded image" />
    <slot name="button"></slot>
  </span>
</template>

<script>
export default {
  name: 'BaseInputFileDisplayImage',
  props: ['fileUrl'],
};
</script>

<style scoped>
.input-wrapper-file {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 7px 0;
}

.input-upload-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (min-width: 500px) {
  .input-wrapper-file {
    width: 86px;
    height: 81px;
  }
}
</style>
