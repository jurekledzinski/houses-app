<template>
  <BaseCreateEditHouse title="Create new listing">
    <!-- is-create props inform that form functionality is to create house -->
    <BaseFormCreateEditHouse :is-create="true" />
  </BaseCreateEditHouse>
</template>

<script>
import BaseCreateEditHouse from '../baseComponents/BaseCreateEditHouse.vue';
import BaseFormCreateEditHouse from '../baseComponents/BaseFormCreateEditHouse.vue';

export default {
  name: 'CreateHouse',
  components: {
    BaseCreateEditHouse,
    BaseFormCreateEditHouse,
  },
};
</script>

<style scoped></style>
