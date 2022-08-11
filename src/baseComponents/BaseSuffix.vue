<template>
  <!-- Show suffix if something is written in input -->
  <div class="input-suffix-float">
    <span class="input-suffix-float__text">{{ text }}</span>
    <!-- valueSign prop is value of suffix -->
    <span class="input-suffix-float__suffix">{{ valueSign }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseSuffix',
  props: ['valueSign', 'text'],
};
</script>
