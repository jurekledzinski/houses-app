<template>
  <!-- Part of BaseModal show content-->
  <div class="modal">
    <h3 class="modal__title">{{ titleModal }}</h3>
    <p class="modal__text">{{ textModal1 }}</p>
    <p class="modal__text">{{ textModal2 }}</p>
    <div class="modal__wrapper-buttons">
      <slot name="button-modal-1"></slot>
      <slot name="button-modal-2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModalContent',
  props: ['titleModal', 'textModal1', 'textModal2'],
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 20px);
  height: 290px;
  border-radius: 8px;
  background-color: var(--bgColor2-element);
  transform: translate(-50%, -50%);
  z-index: 3;
}

.modal__title {
  margin: 30px 0;
  text-align: center;
}

.modal__text {
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  text-align: center;
}

.modal__wrapper-buttons {
  padding: 40px 0 20px;
}

@media screen and (min-width: 360px) {
  .modal {
    width: calc(100% - 40px);
  }
}

@media screen and (min-width: 500px) {
  .modal {
    width: 480px;
  }

  .modal__text {
    font-size: 1.4rem;
  }
}
</style>
