<template>
  <button
    class="button"
    :class="[classActive, classButton, classSortPrice, classSortSize]"
  >
    <slot name="icon" v-if="$slots.icon"></slot>
    <slot name="text-button" v-if="$slots['text-button']"></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: ['classActive', 'classButton', 'classSortPrice', 'classSortSize'],
};
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--color-text-button);
  background-color: transparent;
}

.button--create-house {
  padding: initial;
  border-radius: 6px;
  background-color: transparent;
}

.button--price,
.button--size {
  position: relative;
  width: 100%;
  padding: 4px 15px;
  background-color: var(--tertiary-element-color-2);
}

.button--price {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.button--price::after,
.button--price::after,
.button--size::after,
.button--size::after {
  margin-left: 5px;
  font-size: 2.4rem;
  transform: translateY(-2px);
}

.sortUp.button--price::after {
  content: '↑';
}

.sortDown.button--price::after {
  content: '↓';
}

.button--size {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.sortUp.button--size::after {
  content: '↑';
}

.sortDown.button--size::after {
  content: '↓';
}

.active.button--price,
.active.button--size,
.button--submit {
  background-color: var(--primary-element-color);
}

.button--control {
  padding: initial;
}

.button--redirect {
  position: absolute;
  top: 40px;
  left: 15px;
  padding: initial;
  z-index: 1;
}

.button--redirect-create-house {
  padding: initial;
}

.button--clear-image {
  position: absolute;
  top: -20px;
  right: -25px;
}

.button--submit {
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
}

.button--clear {
  position: absolute;
  top: 11px;
  right: 10px;
  padding: initial;
}

button:disabled {
  opacity: 0.5;
}

.button--delete-house,
.button--delete-back {
  width: 80%;
  padding: 10px 15px;
  margin: 0 auto;
  border-radius: 5px;
  text-transform: uppercase;
}

.button--delete-house {
  margin-bottom: 10px;
  background-color: var(--primary-element-color);
}

.button--delete-back {
  background-color: var(--secondary-element-color);
}

@media screen and (min-width: 360px) {
  .button--redirect {
    left: 20px;
  }

  .button--clear {
    top: 12px;
  }

  .button--delete-house,
  .button--delete-back {
    width: 70%;
  }
}

@media screen and (min-width: 500px) {
  .button {
    padding: 9px 15px;
  }

  .button--price,
  .button--size {
    padding: 4px 15px;
  }

  .button--redirect {
    position: initial;
    padding: initial;
  }

  .button--redirect-create-house {
    padding: initial;
  }

  .button--control {
    padding: initial;
  }

  .button--create-house {
    padding: 0px 15px;
    background-color: var(--primary-element-color);
    text-transform: uppercase;
  }

  .button--clear-image {
    position: absolute;
    top: -20px;
    right: -28px;
  }

  .button--submit {
    width: 50%;
    float: right;
  }

  .button--clear {
    top: 9px;
    padding: initial;
  }

  .button--delete-house,
  .button--delete-back {
    width: 60%;
  }

  .button--delete-house {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .button--clear {
    top: 9px;
  }
}
</style>
