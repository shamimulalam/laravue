import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '../localization/i18n'
Vue.use(Vuex,i18n);



export const auth = new Vuex.Store({
    state: {
        auth: {},
        langs: {},
    },
    mutations: {
        FETCH_AUTH(state, auth) {
            state.auth = auth
        },
        FETCH_LANG(state, lang) {
            state.langs = lang
        }
    },
    actions: {
        fetchAuth({ commit }, { self })  {
            axios.get("api/"+i18n.locale+"/profile")
                .then((response) => {
                    if(response.data.code==111)
                    {
                        commit("FETCH_AUTH", response.data.data);
                    }else{
                        console.log('local-db/auth.js something is wrong');
                    }
                    self.filterAuth();
                })
                .catch((error => {
                    console.log(error.statusText)
                }));
        },
        fetchLangs({ commit }, { self })  {
            axios.get("api/"+i18n.locale+"/languages")
                .then((response) => {
                    if(response.data.code==111)
                    {
                        commit("FETCH_LANG", response.data.data);
                    }else{
                        console.log('local-db/langs.js something is wrong');
                    }
                    self.filterLangs();
                })
                .catch((error => {
                    console.log(error.statusText)
                }));
        }
    }
});