import { api } from "@/api/axiosInstance"


const state = {
    allImages: [],
}


const getters = {
    async getStorage() {
        const { data } = await api.get('image/getImages');

        return data
    }
}


const mutations = {
    setImages(state, storage) {
        state.allImages = storage;
    },


    setCheckoutStatus(state, status) {
        state.checkoutStatus = status;
    },
}


const actions = {
    async getImagesFromServer({ commit }) {
        const storage = await getters.getStorage();
        commit("setImages", storage);
    },

    
    async loadImage({ commit }, formData) {
        const selectedImage = formData.getAll("images");
        const serveId = formData.get("serviceId");

        if (!selectedImage || !serveId) {
            console.error("SelectedImage or ServeId is undefined");
            return;
        }

        const data = await api.post("image/loadImages", formData);
        commit("setImages", selectedImage);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}