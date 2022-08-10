import { createApp } from 'vue';
import App from './App.vue';
import router from './routing.js';
import store from './store/storeIndex.js';

import BaseBackRedirect from './baseComponents/BaseBackRedirect.vue';
import BaseButton from './baseComponents/BaseButton.vue';
import BaseButtonText from './baseComponents/BaseButtonText.vue';
import BaseCard from './baseComponents/BaseCard.vue';
import BaseContainer from './baseComponents/BaseContainer';
import BaseFieldInput from './baseComponents/BaseFieldInput.vue';
import BaseIcon from './baseComponents/BaseIcon.vue';
import BaseModal from './baseComponents/BaseModal.vue';

const app = createApp(App);

app.component('BaseBackRedirect', BaseBackRedirect);
app.component('BaseButton', BaseButton);
app.component('BaseButtonText', BaseButtonText);
app.component('BaseCard', BaseCard);
app.component('BaseContainer', BaseContainer);
app.component('BaseFieldInput', BaseFieldInput);
app.component('BaseIcon', BaseIcon);
app.component('BaseModal', BaseModal);

app.use(router);
app.use(store);

app.mount('#app');
