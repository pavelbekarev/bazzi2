import { api } from "@/api/axiosInstance";
// import serviceStorage from "@/api/serviceStorage";

const state = {
    serviceState: []
}


const getters = {
    async getStorage() {
        const { data }  = await api.get("serve/getServeStorage");

        return data;
    }
}


const actions = {
    async getServeFromServer({ commit }) {
        const storage = await getters.getStorage();
        commit('setServices', storage);
    },

    // добавление в базу данныхx
    async handleCreateService({ commit }, payload) {
        console.log(payload);

        const response = await api.post("serve/createServe", payload)
        
        console.log(response);
        commit("setData", payload);

        return response.data
    }
}


const mutations = {
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