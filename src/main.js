import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';

// eslint-disable-next-line import/extensions
import '@vuikit/theme';

Vue.use(Vuikit);
Vue.use(VuikitIcons);

Vue.config.productionTip = false;

/*router.beforeEach((to, from, next) => {
  const web = ['overview', 'callback/erpos'];
  if (web.includes(to.name)) {
    next();
  } else {
    axios.post(`${process.env.VUE_APP_API_URL}/oauth/authorize`, {
      token: localStorage.token,
    }).then((response) => {
      if (response.data.verification === true) {
        next();
      } else {
        router.push({
          name: 'overview',
          params: {
            serverError: true,
            serverMsg: 'Please login to continue.',
          },
        });
      }
    }).catch((response) => {
      console.log(response);
    });
  }
});
*/
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
