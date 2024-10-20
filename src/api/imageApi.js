import { api } from "./axiosInstance";


export const handleImageUpload = async (selectedImages, serveId) => {
    try {
        const formData = new FormData();

        selectedImages.forEach(image => {
            formData.append("images", image);
        });
        formData.append("serviceId", serveId);

        return await api.post("image/loadImages", formData);
    }


    catch(e) {
        return 'Error with handleImageUpload';
    }
}


export const handleCreateService = (formData) => {
    
}