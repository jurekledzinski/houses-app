<template>
  <!-- One of the divided components from BaseCard -->
  <!-- This part is responsible for display buttons edit and delete -->
  <menu class="card__center-menu">
    <li class="card__center-item">
      <BaseButton class-button="button--control" @click="handleGoToEditHouse">
        <template v-slot:icon>
          <BaseIcon
            class-icon="icon__plus-text"
            folder="icons"
            url1="ic_edit@3x.png"
            url2="ic_edit@2x.png"
            url3="ic_edit.png"
          />
        </template>
      </BaseButton>
    </li>
    <li class="card__center-item">
      <BaseButton class-button="button--control" @click="handleDeleteHouse">
        <template v-slot:icon>
          <BaseIcon
            folder="icons"
            url1="ic_delete@3x.png"
            url2="ic_delete@2x.png"
            url3="ic_delete.png"
          />
        </template>
      </BaseButton>
    </li>
  </menu>
</template>

<script>
export default {
  name: 'BaseCardButtons',
  props: ['id'],
  methods: {
    //Redirect to edit form endpoint
    handleGoToEditHouse() {
      this.$router.push(`/edit/house/${this.$props.id}`);
    },
    handleDeleteHouse() {
      //add modal-open class to body and add overflow hidden to hide scroll bar
      document.body.classList.add('modal-open');
      // Redirect to details page of the house and add also query string delete to determine should modal be open when page is created
      this.$router.push(`/details/house/${this.$props.id}?delete=1`);
      //Scroll to top of the page because scrollbar will be hidden
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.card__center-menu {
  display: flex;
  align-items: center;
  width: 100%;
  list-style-type: none;
}

.card__center-item:nth-child(1) {
  margin-right: 5px;
}

@media screen and (min-width: 360px) {
  .card__center-menu {
    justify-content: flex-end;
  }
}

@media screen and (min-width: 500px) {
  .card__center-menu {
    justify-content: space-evenly;
  }

  .card__center-item:nth-child(1) {
    margin-right: initial;
  }
}
</style>
