<template>
  <label class="input-label-file" for="file">
    <slot name="icon"></slot>
    <input
      accept="image/jpeg, image/png"
      class="input-file"
      id="file"
      :name="inputName"
      type="file"
      @change="handleSetImage"
    />
  </label>
</template>

<script>
export default {
  name: 'BaseInputFile',
  props: ['inputName'],
  emits: ['clear-image-upload', 'set-image-url'],
  methods: {
    //Change file to url object
    handleChangeFileToUrl(file) {
      const urlFile = URL.createObjectURL(file);
      return urlFile;
    },

    //Method to set image when click plus icon
    handleSetImage(e) {
      const file = e.target.files[0];
      const urlFile = this.handleChangeFileToUrl(file);
      this.$emit('set-image-url', file, urlFile);
    },

    //Method to clear image when click in clear icon
    handleClearImage() {
      this.$emit('clear-image-upload');
    },
  },
};
</script>

<style scoped>
.input-label-file {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 14px 0;
  border: 1px dashed #c3c3c3;
  cursor: pointer;
}

.input-file {
  display: none;
  max-width: 88px;
}

@media screen and (min-width: 500px) {
  .input-label-file {
    width: 82px;
    height: 77px;
  }
}
</style>
