import { api } from "@/api/axiosInstance";
// import serviceStorage from "@/api/serviceStorage";

const state = {
    serviceState: [],
    activeService: "",
}

const getters = {
    async getStorage() {
        const { data }  = await api.get("serve/getServeStorage");

        return data;
    }
}

/* Вместо того чтобы изменять состояние, действия вызывают мутации.
   Действия могут содержать произвольные асинхронные операции. */
const actions = {
    async getServeFromServer({ commit }) {
        const storage = await getters.getStorage();
        commit('setServices', storage);
    },

    // добавление в базу данныхx
    async handleCreateService({ commit }, payload) {
        const response = await api.post("serve/createServe", payload)
        commit("setData", payload);

        return response.data
    },

    async changeActiveService({ commit }, payload) {
        commit('setActiveService', payload);
    }
}

/* способ фактически изменить состояние в хранилище Vuex */
const mutations = {
    // payload - это activeService
    setActiveService(state, payload) {
        state.activeService = payload;
    },

    setServices(state, storage) {
        // передаем в хранилище информацию об услугах
        state.serviceState = storage;
    },

    setData(state, payload) {
        state.serviceState.push(payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
