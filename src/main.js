import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// eslint-disable-next-line import/extensions
import '@vuikit/theme';

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
