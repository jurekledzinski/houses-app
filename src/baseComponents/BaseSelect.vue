<template>
  <label class="input-label-select">
    <select
      class="input-select"
      :class="classInputError"
      :name="inputName"
      v-model="value"
      @blur="handleBlurInput"
    >
      <option value="" hidden selected>Select</option>
      <option :value="true">Yes</option>
      <option :value="false">No</option>
    </select>
  </label>
</template>

<script>
import inputMixin from '../mixins/inputMixin.js';

export default {
  name: 'BaseSelect',
  props: ['classInputError', 'inputName', 'modelValue'],
  mixins: [inputMixin],
};
</script>

<style scoped>
.input-label-select {
  position: relative;
  width: 100%;
}

.input-select {
  width: 100%;
  padding: 10px 10px 10px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: var(--tertiary-element-color-2);
  font-family: var(--font-family-2);
  font-weight: 400;
  font-size: 1.2rem;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select::-ms-expand {
  display: none;
}

select:focus {
  color: var(--secondary-text-color);
}

.input-label-select::before,
.input-label-select::after {
  content: '❮';
  position: absolute;
  display: block;
  color: #c3c3c3;
  font-size: 10px;
}

.input-label-select::before {
  top: -2px;
  right: 13px;
  transform: rotate(90deg);
}

.input-label-select::after {
  bottom: -6px;
  right: 14px;
  transform: rotate(-90deg);
}

@media screen and (min-width: 500px) {
  .input-select {
    font-size: 1.4rem;
  }
}
</style>
