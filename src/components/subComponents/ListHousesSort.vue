<template>
  <menu class="section-search__buttons-sort">
    <li class="section-search__item">
      <BaseButton
        :class-sort-price="setClassSort.price"
        class-button="button--price"
        :class-active="isActiveBtnPrice"
        @click="handleSortbyPrice('price')"
      >
        <template v-slot:text-button>
          <BaseButtonText class-text="button--price-text" text-button="Price" />
        </template>
      </BaseButton>
    </li>
    <li class="section-search__item">
      <BaseButton
        :class-sort-size="setClassSort.size"
        class-button="button--size"
        :class-active="isActiveBtnSize"
        @click="handleSortbySize('size')"
      >
        <template v-slot:text-button>
          <BaseButtonText class-text="button--size-text" text-button="Size" />
        </template>
      </BaseButton>
    </li>
  </menu>
</template>

<script>
export default {
  name: 'ListHousesSort',
  data() {
    return {
      activeSortPrice: false,
      activeSortSize: false,
      isActiveBtnSize: '',
      isActiveBtnPrice: 'active',
    };
  },
  computed: {
    setClassSort() {
      return {
        price: {
          sortUp: !this.activeSortPrice,
          sortDown: this.activeSortPrice,
        },
        size: {
          sortUp: !this.activeSortSize,
          sortDown: this.activeSortSize,
        },
      };
    },
  },
  methods: {
    //Dispatch action to sort houses
    handleDispatchActionSort(activeState, nameProperty) {
      this.$store.dispatch({
        type: 'houses/handleSortHouses',
        value: { state: activeState, nameProperty },
      });
    },

    //Set active class to button so this will show background red
    handleActiveBtn(state1, state2) {
      this.isActiveBtnPrice = state1;
      this.isActiveBtnSize = state2;
    },

    //Sort by price
    handleSortbyPrice(property) {
      this.activeSortPrice = !this.activeSortPrice;
      this.handleActiveBtn('active', '');
      this.handleDispatchActionSort(this.activeSortPrice, property);
    },

    //Sort By size
    handleSortbySize(property) {
      this.activeSortSize = !this.activeSortSize;
      this.handleActiveBtn('', 'active');
      this.handleDispatchActionSort(this.activeSortSize, property);
    },
  },
};
</script>

<style scoped>
.section-search__buttons-sort {
  display: flex;
  list-style-type: none;
  width: 100%;
}

.section-search__item {
  width: 50%;
}

@media screen and (min-width: 500px) {
  .section-search__buttons-sort {
    width: 250px;
  }

  .section-search__buttons-sort {
    width: 250px;
  }
}
</style>
