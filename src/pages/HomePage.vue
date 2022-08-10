<template>
  <router-view></router-view>
  <BaseModalDelete
    title-modal="Delete listing"
    text-modal1="Are you sure you want to delete this listing?"
    text-modal2="This action cannot be undone."
    text-button1="Yes, delete"
    text-button2="Go back"
  />
</template>

<script>
import BaseModalDelete from '../baseComponents/BaseModalDelete.vue';

export default {
  name: 'HomePage',
  components: {
    BaseModalDelete,
  },
};
</script>
