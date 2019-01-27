import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const auth = new Vuex.Store({
    state: {
        auth: {}
    },
    mutations: {
        FETCH_AUTH(state, auth) {
            state.auth = auth
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
        }
    }
});



/*
export const auth = new Vuex.Store({
    state: {
        auth: {}
    },
    mutations: {
        SET_AUTH (state, data) {
            state.auth = data
        },

    },
    mounted: function() {
        axios.get('api/profile')
            .then((data) => {
                // console.log(auth);
                commit('SET_AUTH', data)
            })
    },
});
*/
