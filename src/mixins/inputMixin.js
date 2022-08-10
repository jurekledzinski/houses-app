export default {
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
    //Prevent numbers and special characters when input type text
    handlePreventCharacters(e) {
      const regex = new RegExp(/[^\s a-z]/gi);
      const check = regex.test(e.key);
      if (check) e.preventDefault();
    },
    //Prevent numbers and speacial characters only for text type input
    handleKeyDown(e) {
      const inputType = e.target.type;
      if (inputType.includes('text')) this.handlePreventCharacters(e);
    },
    //Check is input empty
    handleBlurInput(e) {
      if (!e.target.value) {
        this.$emit('check-input', e.target.name);
      }
    },
  },
};
