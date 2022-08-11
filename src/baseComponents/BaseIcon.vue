<template>
  <picture>
    <source :srcset="getSrc.image_lg" media="(min-width: 1024px)" />
    <source :srcset="getSrc.image_md" media="(min-width: 500px)" />
    <img class="icon" :class="classIcon" :src="getSrc.image_sm" alt="icon" />
  </picture>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: ['classIcon', 'folder', 'url1', 'url2', 'url3'],
  computed: {
    getSrc() {
      //get urls icons images when they are pass from instance of the component
      //folder - where they are kept images or icons
      //url1,url2,url3 images name
      const getSrc = {
        image_sm: require(`@/assets/${this.folder}/${this.url1}`),
        image_md: require(`@/assets/${this.folder}/${this.url2}`),
        image_lg: require(`@/assets/${this.folder}/${this.url3}`),
      };
      return getSrc;
    },
  },
};
</script>

<style scoped>
.icon {
  display: block;
  width: 10px;
}

.icon__plus-upload {
  width: 15px;
}

.icon__clear-upload {
  width: 22px;
}

.icon__clear-search,
.icon__search {
  width: 15px;
}

.icon__search {
  position: absolute;
  top: 11px;
  left: 15px;
}

@media screen and (min-width: 360px) {
  .icon {
    width: 14px;
  }

  .icon__plus-upload {
    width: 20px;
  }

  .icon__clear-upload {
    width: 22px;
  }

  .icon__search {
    width: 18px;
    top: 10px;
  }

  .icon__clear-search {
    width: 15px;
  }
}

@media screen and (min-width: 500px) {
  .icon {
    width: 15px;
  }

  .icon__plus-text {
    margin-right: 10px;
  }

  .icon__plus-text-around {
    margin-right: 0;
  }

  .icon__plus-upload {
    width: 20px;
  }

  .icon__clear-upload {
    width: 30px;
  }

  .icon__search {
    width: 18px;
    top: 12px;
    left: 25px;
  }

  .icon__clear-search {
    width: 20px;
  }
}

@media screen and (min-width: 1024px) {
  .icon {
    width: 15px;
  }

  .icon__plus-upload {
    width: 25px;
  }

  .icon__clear-upload {
    width: 30px;
  }

  .icon__search {
    width: 18px;
  }

  .icon__clear-search {
    width: 20px;
  }
}
</style>
