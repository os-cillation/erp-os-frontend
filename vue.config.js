process.env.VUE_APP_API_URL = 'http://192.168.10.10';
process.env.VUE_APP_API_CLIENT_ID = '1';
process.env.VUE_APP_API_CLIENT_SECRET = 's7Ve33zppYIm6tiCXTukLcW6jaGLkpgQATT7vFH6';
process.env.VUE_APP_CALLBACK_URL = 'http://localhost:8080/callback/erpos';

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
    publicPath: '/',
  },
};
