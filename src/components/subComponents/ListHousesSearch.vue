<template>
  <BaseFieldInput class-input-wrapper="input-wrapper--search">
    <template v-slot:input>
      <BaseInputPrefixSuffix
        class-input-prefix-suffix="input--search"
        placeholder-text="Search for a house"
        type="text"
        v-model="search"
      >
        <template v-slot:icon1>
          <BaseIcon
            class-icon="icon__search"
            folder="icons"
            url1="ic_search@3x.png"
            url2="ic_search@2x.png"
            url3="ic_search.png"
          />
        </template>
        <template v-slot:icon2>
          <BaseButton
            class-button="button--clear"
            v-if="search"
            @click="handleClearSearch"
          >
            <template v-slot:icon>
              <BaseIcon
                class-icon="icon__clear-search"
                folder="icons"
                url1="ic_clear@3x.png"
                url2="ic_clear@2x.png"
                url3="ic_clear.png"
              />
            </template>
          </BaseButton>
        </template>
      </BaseInputPrefixSuffix>
    </template>
  </BaseFieldInput>
</template>

<script>
import BaseInputPrefixSuffix from '../../baseComponents/BaseInputPrefixSuffix.vue';

export default {
  name: 'ListHousesSearch',
  components: {
    BaseInputPrefixSuffix,
  },

  data() {
    return {
      search: '',
    };
  },
  methods: {
    handleClearSearch() {
      this.search = '';
    },
  },
  watch: {
    search(newValue) {
      //Add search value, use it to determine results, no results or which state houses show
      this.$store.dispatch({
        type: 'houses/handleSearchValue',
        value: newValue,
      });
      //Here watch when search value input change and dispatch action handleSearchHouses
      this.$store.dispatch({
        type: 'houses/handleSearchHouses',
        value: newValue,
      });
    },
  },
};
</script>
