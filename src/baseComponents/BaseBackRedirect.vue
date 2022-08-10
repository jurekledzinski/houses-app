<template>
  <!-- Redirect Button component -->
  <BaseButton :class-button="classButton" @click="handleBack">
    <template v-slot:icon>
      <BaseIcon
        :class-icon="classIcon"
        :folder="folder"
        :url1="url1"
        :url2="url2"
        :url3="url3"
      />
    </template>
    <template v-slot:text-button>
      <BaseButtonText :class-text="classText" :text-button="textButton" />
    </template>
  </BaseButton>
</template>

<script>
export default {
  name: 'BaseBackRedirect',
  props: [
    'classButton',
    'classIcon',
    'folder',
    'classText',
    'redirectUrl',
    'textButton',
    'url1',
    'url2',
    'url3',
  ],
  methods: {
    handleBack() {
      this.$router.push(this.redirectUrl);
    },
  },
};
</script>
