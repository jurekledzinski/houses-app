export default {
  props: ['classInputError', 'inputName', 'modelValue', 'placeholderText'],
  emits: ['check-input', 'update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    //handlePreventKeys allows only write numbers and dot
    handlePreventKeys(e) {
      const check = new RegExp(/[^\d.]/);
      const test = check.test(e.key);
      //Prevent add second dot when it already exist
      if (e.target.value.includes('.') && e.key.includes('.')) {
        e.preventDefault();
      }
      //Prevent write others characters than numbers but exclude 'backspace'
      if (test && !e.key.includes('Backspace')) {
        e.preventDefault();
      }
    },

    handleInput(e) {
      this.handlePreventKeys(e);
    },
    //handleBlurInput check is input empty
    handleBlurInput(e) {
      if (!e.target.value) {
        this.$emit('check-input', e.target.name);
      }
    },
  },
};
