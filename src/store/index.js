import Vuex from 'vuex';
import Vue from 'vue';
import upVote from './modules/upVote';

//Load Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        upVote
    }
});



