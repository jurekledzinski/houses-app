<template>
  <section class="section-create-edit-house">
    <BaseContainer class-container="section-create-edit-house__container">
      <template v-slot:default="slotProps">
        <div :class="slotProps.class">
          <div class="section-create-edit-house__back">
            <BaseBackRedirect
              class-button="button--redirect-create-house"
              class-icon="icon__plus-text"
              class-text="button--redirect-text"
              folder="icons"
              redirectUrl="/"
              text-button="Back to overview"
              url1="ic_back_grey@3x.png"
              url2="ic_back_grey@2x.png"
              url3="ic_back_grey.png"
            />
            <h1 class="section-create-edit-house__title">{{ title }}</h1>
          </div>
          <!-- Here is inserted a form create or edit house -->
          <slot></slot>
        </div>
      </template>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  name: 'BaseCreateEditHouse',
  props: ['title'],
};
</script>

<style>
.section-create-edit-house {
  padding-bottom: 90px;
  background-color: rgba(255, 255, 255, 0.2);
  background-image: url('../assets/images/img_background.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom 15px;
  background-blend-mode: lighten;
}

.section-create-edit-house__back {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.section-create-edit-house__title {
  width: 100%;
  text-align: center;
}

@media screen and (min-width: 500px) {
  .section-create-edit-house {
    min-height: 100vh;
    padding-bottom: initial;
    background-image: url('../assets/images/img_background@2x.png');
    background-attachment: fixed;
    background-position: right bottom;
  }

  .section-create-edit-house__back {
    flex-direction: column;
    justify-content: initial;
    align-items: flex-start;
  }

  .section-create-edit-house__title {
    width: initial;
    margin-top: 20px;
    text-align: initial;
  }
}

@media screen and (min-width: 1024px) {
  .section-create-edit-house {
    background-image: url('../assets/images/img_background@3x.png');
  }
}
</style>
