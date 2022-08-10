<template>
  <input
    autocomplete="off"
    class="input"
    :class="classInputError"
    :name="inputName"
    :placeholder="placeholderText"
    v-bind="$attrs"
    v-model="value"
    @blur="handleBlurInput"
    @keydown="handleInput"
  />
  <slot name="suffix" v-if="$slots.suffix"></slot>
</template>

<script>
import inputPrefixSuffixMixin from '../mixins/inputPrefixSuffixMixin.js';

export default {
  name: 'BaseInputSuffix',
  mixins: [inputPrefixSuffixMixin],
};
</script>
