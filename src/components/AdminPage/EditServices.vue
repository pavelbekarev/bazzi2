<script setup>
    import { handleCreateService } from '@/api/imageApi';
    import { computed, ref, watch, watchEffect } from 'vue';
    import { useStore } from 'vuex';
    const priceValue = ref("0");

    const go = ref({
        checkoutStatus: false,
        serviceId: ""
    });

    const selectedImages = ref(null);
    const store = useStore();

    watch(() => go.value.checkoutStatus, async () => {
        if (go.value.checkoutStatus) {
            const formData = new FormData();

            formData.append("serviceId", go.value.serviceId);
            formData.append("images", selectedImages.value);

            await store.dispatch("ImageModule/loadImage", formData);
        }
    }); 

    const formData = ref({
        name: "",
        description: "",
        descriptionPoints: "",
        format: "",
        price: priceValue.value,
        imagePath: ""
    });


    const handleImageUpload = async (selectedImages, serveId) => {
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


    const handleSubmit = async () => {
        const result = await store.dispatch("ServiceModule/handleCreateService", formData.value);

        if (result !== null) {
            go.value.checkoutStatus = true;
            go.value.serviceId = result.id.toString();
        }

        const resultList = computed(() => store.state.ServiceModule.serviceState);
    }

    const handleChangeImage = (e) => {
        selectedImages.value = e.target.files[0];
    }

</script>


<template>
    <form @submit.prevent="handleSubmit" action="">
        <div>
            <label for="name">Название</label>
            <input v-model="formData.name" title="service.name" id="name" type="text">
        </div>
        
        <div>
            <label for="#description">Краткое описание</label>
            <input v-model="formData.description" title="service.name" id="description" type="text">
        </div>
        

        <div>
            <label for="#descriptionPoints">Информация об услуге (обязательно каждое предложение через ";")<br/></label>
            <input v-model="formData.descriptionPoints" title="service.name" id="descriptionPoints" type="text">
        </div>
        
        <div>
            <div>
                <label for="formatVideo">Текстовый формат</label>
                <input @change="formData.format = 'Текстовый формат'" title="service.name" id="formatVideo" type="radio" name="format" >
            </div>
            <div>
                <label for="formatText">Видеоформат</label>
                <input @change="formData.format = 'Видеоформат'" title="service.name" id="formatText" type="radio" name="format">
            </div>
        </div>

        <div>
            <label for="#price">Укажите стоимость</label>
            <div>
                <input title="service.name" id="price" type="range" step="100" min="0" max="10000" v-model="priceValue">
                {{ console.log(priceValue) }}
                <input id="price__value" type="text" :value="priceValue"></input>
            </div>
        </div>

        <div>
            <label for="#descriptionPoints">Картинка</label>
            <input @change="handleChangeImage" required title="service.name" id="descriptionPoints" type="file">
        </div>

        <button
            type="submit"
        >
        
            Добавить услугу
        </button>
    </form>



</template>