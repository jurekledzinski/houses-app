<template>
  <form class="form-create-edit-house" @submit.prevent="handleSubmitForm">
    <!-- class-input-error - if error add input-error class to input and make border, placeholder red -->
    <!-- v-if on BaseErrorMessage means show error when input is empty and is error, for file when there is no file url-->
    <!-- error-message - pass error message to display it -->
    <!-- input-name - necessary to set error to proper input -->
    <!-- type - type of input -->
    <!-- class-input-wrapper - add extra class to wrapper input -->
    <!-- input @check-input - function emitted from reusable input components in onBlur event to check is input empty, when is empty then error is set to error object property which is equal for current input name.-->
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Street name*" />
      </template>
      <template v-slot:input>
        <BaseInput
          :class-input-error="!house.street && error.street && inputError"
          input-name="Street"
          placeholder-text="Enter the street name"
          type="text"
          v-model="house.street"
          @check-input="handleCheckInput"
        />
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.street && inputError"
          :error-message="error.street"
        />
      </template>
    </BaseFieldInput>
    <div class="form-create-edit-house__inputs-wrapper">
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="House number*" />
        </template>
        <template v-slot:input>
          <BaseInput
            :class-input-error="!house.number && error.number && inputError"
            input-name="number"
            placeholder-text="Enter house number"
            type="number"
            v-model="house.number"
            @check-input="handleCheckInput"
          />
        </template>
        <template v-slot:error-message>
          <BaseErrorMessage
            v-if="!house.number && inputError"
            :error-message="error.number"
          />
        </template>
      </BaseFieldInput>
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="Addition(optional)*" />
        </template>
        <template v-slot:input>
          <BaseInput
            placeholder-text="e.g. A"
            type="text"
            v-model="house.addition"
          />
        </template>
      </BaseFieldInput>
    </div>
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Postal code*" />
      </template>
      <template v-slot:input>
        <BaseInput
          :class-input-error="!house.zip && error.zip && inputError"
          input-name="Zip"
          placeholder-text="e.g. 1000 AA"
          type="number"
          v-model="house.zip"
          @check-input="handleCheckInput"
        />
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.zip && inputError"
          :error-message="error.zip"
        />
      </template>
    </BaseFieldInput>
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="City*" />
      </template>
      <template v-slot:input>
        <BaseInput
          :class-input-error="!house.city && error.city && inputError"
          input-name="City"
          placeholder-text="e.g. Utrecht"
          type="text"
          v-model="house.city"
          @check-input="handleCheckInput"
        />
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.city && inputError"
          :error-message="error.city"
        />
      </template>
    </BaseFieldInput>
    <!-- fileUrl - if file url exist then hide plus icon and show image if not show plus icon-->
    <!-- @clear-image-upload - function executed when clear button is pressed -->
    <!-- @set-image-url - function executed when press plus to choose image -->
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Upload picture (PNG or JPG)*" />
      </template>
      <template v-slot:input-file>
        <BaseInputFile
          v-if="!fileUrl"
          input-name="file"
          @clear-image-upload="handleClearImage"
          @set-image-url="handleSetImageUrl"
        >
          <template v-slot:icon>
            <BaseIcon
              class-icon="icon__plus-upload"
              folder="icons"
              url1="ic_upload@3x.png"
              url2="ic_upload@2x.png"
              url3="ic_upload.png"
            />
          </template>
        </BaseInputFile>
      </template>
      <template v-slot:display-image>
        <BaseInputFileDisplayImage :file-url="fileUrl" v-if="fileUrl">
          <template v-slot:button>
            <BaseButton
              class-button="button--clear-image"
              @click.prevent="handleClearImage"
            >
              <template v-slot:icon>
                <BaseIcon
                  class-icon="icon__clear-upload "
                  folder="icons"
                  url1="ic_clear_white@3x.png"
                  url2="ic_clear_white@2x.png"
                  url3="ic_clear_white.png"
                />
              </template>
            </BaseButton>
          </template>
        </BaseInputFileDisplayImage>
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage v-if="!fileUrl" :error-message="error.file" />
      </template>
    </BaseFieldInput>
    <!-- value-sign - text of prefix or suffix -->
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Price*" />
      </template>
      <template v-slot:input>
        <BaseInputPrefix
          :class-input-error="!house.price && error.price && inputError"
          input-name="Price"
          placeholder-text="e.g. €150.000"
          type="text"
          v-model="house.price"
          @check-input="handleCheckInput"
        >
          <template v-slot:prefix>
            <BasePrefix value-sign="€" v-if="house.price" />
          </template>
        </BaseInputPrefix>
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.price && inputError"
          :error-message="error.price"
        />
      </template>
    </BaseFieldInput>
    <div class="form-create-edit-house__inputs-wrapper">
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="Size*" />
        </template>
        <template v-slot:input>
          <BaseInputSuffix
            :class-input-error="!house.size && error.size && inputError"
            input-name="Size"
            placeholder-text="e.g. 60m2"
            type="text"
            v-model="house.size"
            @check-input="handleCheckInput"
          >
            <template v-slot:suffix>
              <BaseSuffix
                :text="house.size"
                value-sign="m2"
                v-if="house.size"
              />
            </template>
          </BaseInputSuffix>
        </template>
        <template v-slot:error-message>
          <BaseErrorMessage
            v-if="!house.size && inputError"
            :error-message="error.size"
          />
        </template>
      </BaseFieldInput>
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="Garage*" />
        </template>
        <template v-slot:input>
          <BaseSelect
            :class-input-error="
              house.garage === '' && error.garage && inputError
            "
            input-name="Garage"
            v-model="house.garage"
            @check-input="handleCheckInput"
          />
        </template>
        <template v-slot:error-message>
          <BaseErrorMessage
            v-if="house.garage === '' && inputError"
            :error-message="error.garage"
          />
        </template>
      </BaseFieldInput>
    </div>
    <div class="form-create-edit-house__inputs-wrapper">
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="Bedrooms*" />
        </template>
        <template v-slot:input>
          <BaseInput
            :class-input-error="!house.bedrooms && error.bedrooms && inputError"
            input-name="Bedrooms"
            placeholder-text="Enter amount"
            type="number"
            v-model="house.bedrooms"
            @check-input="handleCheckInput"
          />
        </template>
        <template v-slot:error-message>
          <BaseErrorMessage
            v-if="!house.bedrooms && inputError"
            :error-message="error.bedrooms"
          />
        </template>
      </BaseFieldInput>
      <BaseFieldInput class-input-wrapper="input-wrapper--half">
        <template v-slot:label>
          <BaseLabel label-text="Bathrooms*" />
        </template>
        <template v-slot:input>
          <BaseInput
            :class-input-error="
              !house.bathrooms && error.bathrooms && inputError
            "
            input-name="Bathrooms"
            placeholder-text="Enter amount"
            type="number"
            v-model="house.bathrooms"
            @check-input="handleCheckInput"
          />
        </template>
        <template v-slot:error-message>
          <BaseErrorMessage
            v-if="!house.bathrooms && inputError"
            :error-message="error.bathrooms"
          />
        </template>
      </BaseFieldInput>
    </div>
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Construction date*" />
      </template>
      <template v-slot:input>
        <BaseInput
          :class-input-error="
            !house.construction && error.construction && inputError
          "
          input-name="Construction"
          placeholder-text="e.g. 1990"
          type="number"
          v-model="house.construction"
          @check-input="handleCheckInput"
        />
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.construction && inputError"
          :error-message="error.construction"
        />
      </template>
    </BaseFieldInput>
    <BaseFieldInput>
      <template v-slot:label>
        <BaseLabel label-text="Description*" />
      </template>
      <template v-slot:input>
        <BaseTextarea
          :class-input-error="
            !house.description && error.description && inputError
          "
          input-name="Description"
          placeholder-text="Description"
          v-model="house.description"
          @check-input="handleCheckInput"
        />
      </template>
      <template v-slot:error-message>
        <BaseErrorMessage
          v-if="!house.description && inputError"
          :error-message="error.description"
        />
      </template>
    </BaseFieldInput>
    <BaseButton class-Button="button--submit" :disabled="checkData">
      <template v-slot:text-button>
        <BaseButtonText
          class-text="button--submit-text"
          :text-Button="isCreate ? 'POST' : 'SAVE'"
        />
      </template>
    </BaseButton>
  </form>
</template>

<script>
import BaseErrorMessage from './BaseErrorMessage.vue';
import BaseInput from './BaseInput.vue';
import BaseInputFile from './BaseInputFile.vue';
import BaseInputFileDisplayImage from './BaseInputFileDisplayImage.vue';
import BaseInputPrefix from './BaseInputPrefix.vue';
import BaseInputSuffix from './BaseInputSuffix.vue';
import BaseLabel from './BaseLabel.vue';
import BasePrefix from './BasePrefix.vue';
import BaseSelect from './BaseSelect.vue';
import BaseSuffix from './BaseSuffix.vue';
import BaseTextarea from './BaseTextarea.vue';

export default {
  name: 'BaseFormCreateEditHouse',
  props: ['isCreate'],
  components: {
    BaseErrorMessage,
    BaseInput,
    BaseInputFile,
    BaseInputFileDisplayImage,
    BaseInputPrefix,
    BaseInputSuffix,
    BaseLabel,
    BasePrefix,
    BaseSelect,
    BaseSuffix,
    BaseTextarea,
  },
  data() {
    return {
      //Used to check is button Submit disabled
      checkData: true,
      file: null,
      fileUrl: '',
      //Name input error class when error appear
      inputError: '',
      house: {
        street: '',
        number: '',
        addition: '',
        zip: '',
        city: '',
        price: '',
        size: '',
        garage: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
        construction: '',
      },
      error: {
        bathrooms: '',
        bedrooms: '',
        city: '',
        construction: '',
        description: '',
        garage: '',
        number: '',
        price: '',
        size: '',
        street: '',
        zip: '',
        file: '',
      },
      serverError: '',
    };
  },
  methods: {
    async handleSubmitForm() {
      //idHouse neccessary when edit house
      const id = this.handleGetIdHouseParams();
      const house = { house: this.house, file: this.file };

      try {
        //If isCreate props is true then create house
        if (this.isCreate) {
          await this.handleDispatchActionForm(house);
          this.clearForm();
          await this.handleRedirectDetailsHouse();
          return;
        }
        //If isCreate props is false then edit
        await this.handleDispatchActionForm({
          ...house,
          id,
        });
        this.handleRedirectDetailsHouse();
      } catch (error) {
        this.serverError = error.message;
      }
    },

    clearForm() {
      this.house = {
        street: '',
        number: '',
        addition: '',
        zip: '',
        city: '',
        price: '',
        size: '',
        garage: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
        construction: '',
      };
      this.file = '';
      this.fileUrl = '';
      this.error = {
        bathrooms: '',
        bedrooms: '',
        city: '',
        construction: '',
        description: '',
        garage: '',
        number: '',
        price: '',
        size: '',
        street: '',
        zip: '',
        file: '',
      };
    },
    //Get id house from params route
    handleGetIdHouseParams() {
      const id = this.$route.params.id;
      return id;
    },

    // set image to dislay,data file and url
    handleSetImageUrl(file, fileUrl) {
      this.file = file;
      this.fileUrl = fileUrl;
    },

    //Set error when no image
    handleSetImageError() {
      this.error.file = 'Image is required';
    },

    //clear image when click clear icon
    handleClearImage() {
      this.file = '';
      this.fileUrl = '';
    },

    //Dispatch action to use fetch api
    async handleDispatchActionForm(dataForm) {
      await this.$store.dispatch({
        type: 'houses/handleCreateEditHouse',
        value: dataForm,
      });
    },

    //Redirect to details page house
    async handleRedirectDetailsHouse() {
      const idEd = this.handleGetIdHouseParams();
      const idCr = await this.$store.getters['houses/getIdHouse'];
      this.$router.replace(`/details/house/${idEd ? idEd : idCr.toString()}`);
    },

    //Create message error when input is empty
    handleCreateMessageError(inputName) {
      const lastLetter = inputName.slice(-1);
      const merge = lastLetter === 's' ? 'are' : 'is';

      const addWordMessage = {
        [inputName]: () => `${inputName} ${merge} required`,
        Street: () => `${inputName} name is required`,
        number: () => `House ${inputName} is required`,
        Construction: () => `${inputName} year is required`,
      };

      const message = addWordMessage[inputName]();

      return message;
    },

    //Set proper error message and add input--error class which add border placeholder red
    handleSetError(inputName, message) {
      const error = {
        [inputName]: () => {
          this.inputError = 'input--error';
          this.error[inputName.toLowerCase()] = message;
        },
      };
      error[inputName]();
    },

    //When input empty on blur event
    handleCheckInput(inputName) {
      const message = this.handleCreateMessageError(inputName);
      this.handleSetError(inputName, message);
    },

    //Get all houses store
    handleGetAllHouses() {
      const allHouses = this.$store.getters['houses/getAllHouses'];
      return allHouses;
    },

    //Find edited house
    handleGetEditedHouse(all, id) {
      const house = all?.find((item) => item._id === id);
      return house;
    },

    //Dispatch action change url to file when edit form
    async handleDispatchChangeUrlToFile(url) {
      if (!url) return;
      try {
        await this.$store.dispatch({
          type: 'houses/handleChangeUrlToFile',
          value: url,
        });
      } catch (error) {
        this.serverError = error.message;
      }
    },

    //Get new file changed from url from store
    handleGetChangedFileFromUrl() {
      const newFile = this.$store.getters['houses/getNewFile'];
      return newFile;
    },

    //Assign data house when form is in edit state
    handleAssignDataEdit(addition, house, newFile, number, street) {
      //if no selected house then stop
      if (!house) return;
      //Assign url to fileUrl to display image when edit
      this.fileUrl = house.image;
      //Assign new file
      this.file = newFile;

      this.house = {
        street,
        number,
        addition,
        zip: house?.zip,
        city: house?.city,
        price: house?.price,
        size: house?.size,
        garage: house?.hasGarage,
        bedrooms: house?.bedrooms,
        bathrooms: house?.bathrooms,
        description: house?.description,
        construction: house?.constructionYear,
      };
    },

    //Function load initially when edit form
    async handleInitialLoad() {
      const id = this.handleGetIdHouseParams();
      const allHouses = this.handleGetAllHouses();

      if (allHouses.length) {
        const house = this.handleGetEditedHouse(allHouses, id);
        await this.handleDispatchChangeUrlToFile(house?.image);
        const newFile = this.handleGetChangedFileFromUrl();

        this.handleAssignDataEdit(
          house?.numberAddition,
          house,
          newFile,
          house?.houseNumber,
          house?.street
        );
        return allHouses;
      }
    },

    //Check are all fields form are fill in
    //If all filled in then turn off disable in submit button
    handleCheckIsFullFilledForm(newValue) {
      const check = Object.values(newValue).find(
        (item) => item === '' || item === null
      );
      this.checkData = !isNaN(check);
    },
  },

  computed: {
    //this method merge file and required fields in one object
    dataCheck() {
      const { file, house } = this;
      const copyHouse = { ...house };
      delete copyHouse.addition;
      return { file, ...copyHouse };
    },
    handleInitialEditData() {
      return this.handleInitialLoad();
    },
  },
  watch: {
    //Check if all required fields are fill in
    //If all filled in then active button submit form, if not disable it
    dataCheck: {
      handler(newValue) {
        this.handleCheckIsFullFilledForm(newValue);
      },
      deep: true,
      immediate: true,
    },
    //When clear image set error message
    fileUrl(newValue) {
      if (!newValue) this.handleSetImageError();
    },
  },
  mounted() {
    //If edit form, isCreate props
    if (!this.isCreate) {
      this.handleInitialLoad();
      //If edit form when refresh page observer changes in handleInitialEditData
      const unwatch = this.$watch('handleInitialEditData', async () =>
        unwatch()
      );
    }
  },
};
</script>

<style scoped>
.form-create-edit-house {
  width: 100%;
  margin: 40px 0 0px 0;
}

.form-create-edit-house__inputs-wrapper {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 500px) {
  .form-create-edit-house {
    width: 360px;
    margin: 20px 0 40px 0;
  }

  .form-create-edit-house__inputs-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
