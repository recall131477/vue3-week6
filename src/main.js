import { createApp } from 'vue';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// vee-validate
import {
  defineRule, Form, Field, ErrorMessage, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import {
  localize, setLocale,
} from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// vue-loading-overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

// rules
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // input 輸入字元立即進行驗證
});
// 語言i18n
setLocale('zh_TW');

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('VLoading', Loading);
app.mount('#app');
