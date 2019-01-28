// Multilanguage
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);
import en from './en/main'
import bn from './bn/main'
const messages = {
    en: en,
    bn: bn
};

// Create VueI18n instance with options
export default new VueI18n({
    locale: 'bn', // set locale
    messages, // set locale messages
});