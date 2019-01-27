import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



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
            axios.get("api/profile")
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
            axios.get("api/languages")
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