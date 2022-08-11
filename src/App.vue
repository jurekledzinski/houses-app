<template>
  <!-- The header component with navigation -->
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
  async beforeCreate() {
    //Execute action function to fetch all houses
    await this.$store.dispatch({ type: 'houses/handleFetchAllHouses' });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Open+Sans:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-element-color: #eb5440;
  --secondary-element-color: #4a4b4c;
  --tertiary-element-color-1: #e8e8e8;
  --tertiary-element-color-2: #c3c3c3;
  --bgColor1-element: #f6f6f6;
  --bgColor2-element: #ffffff;

  --primary-text-color: #000000;
  --secondary-text-color: #4a4b4c;
  --hyperlink-text-color: #067bc2;
  --color-text-button: #ffffff;

  --font-family-1: 'Montserrat', sans-serif;
  --font-family-2: 'Open Sans', sans-serif;
}

html {
  font-size: 10px;
}

body {
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  font-size: 1.2rem;
  background-color: var(--bgColor1-element);
}

body.modal-open {
  height: 100vh;
  overflow: hidden;
}

#app {
  min-height: inherit;
}

h1 {
  font-size: 1.8rem;
}

h2,
h3 {
  font-size: 1.4rem;
}

p {
  color: #4a4b4c;
}

button {
  font-size: 1.2rem;
}

label {
  font-family: var(--font-family-1);
  font-weight: 600;
}

label,
input,
textarea {
  color: var(--secondary-text-color);
  font-size: 1.2rem;
  caret-color: var(--tertiary-element-color-2);
}

body,
input,
textarea {
  font-family: var(--font-family-2);
  font-weight: 400;
}

input::placeholder,
textarea::placeholder {
  color: var(--tertiary-element-color-2);
}

h1,
h2,
h3 {
  font-family: var(--font-family-1);
  font-weight: 700;
}

button {
  font-family: var(--font-family-1);
  font-weight: 600;
}

ul > li > a {
  color: var(--tertiary-element-color-2);
  font-size: 1.8rem;
  font-family: var(--font-family-1);
  font-weight: 500;
  text-decoration: none;
}

ul > li > a.router-link-active {
  color: var(--primary-text-color);
  font-weight: 700;
}

@media screen and (min-width: 500px) {
  body {
    font-size: 1.8rem;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  button {
    font-size: 1.5rem;
  }

  label,
  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    font-size: 1.4rem;
  }
}
</style>
