import Vue from 'vue';
import Vuex from 'vuex';
import appStore from '@/store/modules/appStore.js'

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        // 키: 값 형태로 저장됩니다.
        appStore,
    }
})