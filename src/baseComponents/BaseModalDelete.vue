<template>
  <BaseModal>
    <template v-slot:backdrop v-if="checkIsDelete">
      <BaseModalBackdrop v-if="checkIsDelete" />
    </template>
    <template v-slot:modal-content v-if="checkIsDelete">
      <BaseModalContent
        :title-modal="titleModal"
        :text-modal1="textModal1"
        :text-modal2="textModal2"
        v-if="checkIsDelete"
      >
        <template v-slot:button-modal-1>
          <BaseButton
            class-button="button--delete-house"
            @click="handleDeleteHouse"
          >
            <template v-slot:text-button>
              <BaseButtonText
                class-text="button--delete-text"
                :text-button="textButton1"
              />
            </template>
          </BaseButton>
        </template>
        <template v-slot:button-modal-2>
          <BaseButton
            class-button="button--delete-back"
            @click="handleRedirect('replace')"
          >
            <template v-slot:text-button>
              <BaseButtonText
                class-text="button--delete-text"
                :text-button="textButton2"
              />
            </template>
          </BaseButton>
        </template>
      </BaseModalContent>
    </template>
  </BaseModal>
</template>

<script>
import BaseModalBackdrop from './subComponents/BaseModalBackdrop.vue';
import BaseModalContent from './subComponents/BaseModalContent.vue';

export default {
  name: 'BaseModalDelete',
  components: { BaseModalBackdrop, BaseModalContent },
  props: [
    'titleModal',
    'textModal1',
    'textModal2',
    'textButton1',
    'textButton2',
  ],
  data() {
    return {
      serverError: '',
    };
  },
  computed: {
    checkIsDelete() {
      //If delete query exist then modal will appear
      const isDelete = Boolean(this.$route.query.delete);
      return isDelete;
    },
  },
  methods: {
    //Method executed when click delete button
    async handleDeleteHouse() {
      const idHouse = this.$route.params.id;
      try {
        //Dispatch action handleDeleteHouse and pass as a payload idHouse from params url
        await this.$store.dispatch({
          type: 'houses/handleDeleteHouse',
          value: idHouse,
        });
      } catch (error) {
        this.serverError = error.message;
      }
      this.handleRedirect('push');
    },
    //Redirect to home page after delete or details page of a house when press back
    handleRedirect(type) {
      //Remove class modal-open from body
      document.body.classList.remove('modal-open');

      if (type === 'push') {
        this.$router.push('/');
        return;
      }

      this.$router.replace(`/details/house/${this.$route.params.id}`);
    },
  },
};
</script>
