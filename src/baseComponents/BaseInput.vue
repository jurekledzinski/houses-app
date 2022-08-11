<template>
  <input
    class="input"
    :class="classInputError"
    autocomplete="off"
    :name="inputName"
    :placeholder="placeholderText"
    v-bind="$attrs"
    v-model="value"
    @blur="handleBlurInput"
    @keydown="handleKeyDown"
  />
</template>

<script>
import inputMixin from '../mixins/inputMixin.js';

export default {
  name: 'BaseInput',
  props: ['classInputError', 'inputName', 'modelValue', 'placeholderText'],
  mixins: [inputMixin],
};
</script>

<style>
.input {
  width: 100%;
  padding: 10px 10px 10px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.input--error {
  border: 1px solid var(--primary-element-color) !important;
}

.input--error::placeholder {
  color: var(--primary-element-color);
}
</style>
