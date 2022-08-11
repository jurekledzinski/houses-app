<template>
  <div class="spinner">
    <svg
      class="spinner__circle"
      width="174px"
      height="174px"
      viewBox="0 0 66 66"
    >
      <circle
        class="spinner__path"
        fill="transparent"
        stroke-width="2"
        cx="33"
        cy="33"
        r="30"
        stroke="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient">
          <stop offset="50%" stop-color="#eb5440" stop-opacity="1" />
          <stop offset="65%" stop-color="#eb5440" stop-opacity=".5" />
          <stop offset="100%" stop-color="#eb5440" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BaseLoader',
};
</script>

<style scoped>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spinner__circle {
  animation: rotate 1.4s linear infinite;
  -webkit-animation: rotate 1.4s linear infinite;
  -moz-animation: rotate 1.4s linear infinite;
  width: 25px;
  height: 25px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.spinner__path {
  stroke-dasharray: 170;
  stroke-dashoffset: 20;
}
</style>
