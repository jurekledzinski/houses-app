<template>
  <textarea
    autocomplete="off"
    @blur="handleBlurInput"
    class="textarea"
    :class="classInputError"
    :name="inputName"
    rows="6"
    :placeholder="placeholderText"
    v-model="value"
  ></textarea>
</template>

<script>
import inputMixin from '../mixins/inputMixin.js';

export default {
  name: 'BaseTextarea',
  props: ['classInputError', 'inputName', 'placeholderText', 'modelValue'],
  mixins: [inputMixin],
};
</script>

<style scoped>
.textarea {
  width: 100%;
  padding: 10px 10px 10px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
  scrollbar-width: thin;
  scrollbar-color: #bdb6b6 rgb(240, 239, 239);
}

textarea::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

textarea::-webkit-scrollbar-track {
  background-color: rgb(240, 239, 239);
}

textarea::-webkit-scrollbar-thumb {
  background-color: #bdb6b6;
  border-radius: 3px;
}
</style>
