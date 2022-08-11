<template>
  <input
    autocomplete="off"
    class="input"
    :class="classInputPrefixSuffix"
    :name="inputName"
    :placeholder="placeholderText"
    v-bind="$attrs"
    v-model="value"
    @blur="handleBlurInput"
  />
  <!-- Fixed icons in input -->
  <slot name="icon1" v-if="$slots.icon1"></slot>
  <slot name="icon2" v-if="$slots.icon2"></slot>
</template>

<script>
import inputMixin from '../mixins/inputMixin.js';

export default {
  name: 'BaseInputPrefixSuffix',
  props: [
    'classInputPrefixSuffix',
    'inputName',
    'modelValue',
    'placeholderText',
  ],
  mixins: [inputMixin],
};
</script>
