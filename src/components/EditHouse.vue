<template>
  <BaseCreateEditHouse title="Edit listing">
    <!-- is-create props inform that form functionality is to edit house -->
    <BaseFormCreateEditHouse :is-create="false" />
  </BaseCreateEditHouse>
</template>

<script>
import BaseCreateEditHouse from '../baseComponents/BaseCreateEditHouse.vue';
import BaseFormCreateEditHouse from '../baseComponents/BaseFormCreateEditHouse.vue';

export default {
  name: 'EditHouse',
  components: { BaseCreateEditHouse, BaseFormCreateEditHouse },
};
</script>

<style scoped></style>
