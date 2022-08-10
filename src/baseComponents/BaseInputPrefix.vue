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
  <!-- valueSign prop is value of prefix -->
  <!-- <span class="input-prefix" v-if="modelValue">{{ valueSign }}</span> -->
  <slot name="prefix" v-if="$slots.prefix"></slot>
</template>

<script>
import inputPrefixSuffixMixin from '../mixins/inputPrefixSuffixMixin.js';

export default {
  name: 'BaseInputPrefix',
  mixins: [inputPrefixSuffixMixin],
};
</script>

<style>
.input-prefix {
  position: absolute;
  top: 20px;
  left: -12px;
  padding: 10px 20px;
  pointer-events: none;
  background-color: transparent;
}

.input-suffix-float {
  position: absolute;
  top: 30px;
  left: 0px;
  pointer-events: none;
  padding: 10px 20px;
}

.input-prefix,
.input-suffix-float,
.input-suffix-float__text {
  color: var(--secondary-text-color);
  font-family: var(--font-family-2);
  font-weight: 400;
  font-size: 1.2rem;
}

.input-suffix-float__text {
  color: transparent;
}

.input--search {
  background-color: var(--tertiary-element-color-1);
  padding: 10px 30px 10px 40px;
}

.input-wrapper--search {
  width: 100%;
  margin-bottom: 20px;
}

@media screen and (min-width: 500px) {
  .input-prefix,
  .input-suffix-float,
  .input-suffix-float__text {
    font-size: 1.4rem;
  }

  .input-prefix {
    top: 23px;
  }

  .input-suffix-float {
    top: 33px;
    left: 0;
    font-weight: 400;
  }

  .input-wrapper--search {
    width: 42% !important;
    margin-bottom: initial;
  }

  .input--search {
    padding: 10px 30px 10px 60px;
  }
}

@media screen and (min-width: 800px) {
  .input-wrapper--search {
    width: 350px;
  }
}
</style>
