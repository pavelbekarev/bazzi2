<script setup>
    import { splitDescriptionPoints } from '@/utils/splitDescriptionPoints';
import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    const props = defineProps({
        // name: String,
        // description: String,
        // imagePath: String
        serviceObject: Object
    })
    const store = useStore();

    const imagesJson = computed(() => {
        return JSON.stringify(store.state.ImageModule.allImages, null, 2);
    });

    onMounted(() => {
        store.dispatch("ImageModule/getImagesFromServer");
    });

    const images = computed(() => {
        return JSON.parse(imagesJson.value);
    });

    const splittedDescrPoints = splitDescriptionPoints("Один; Два; Три; Четыре; Пять; Шесть; Семь");
</script>

<!-- TODO: поправить отображение картинки услуги -->
<template>
    <!-- {{ console.debug(images.value.find(image => image.serviceId === props.serviceObject.id)) }} // ошибка здесь! -->
    <div v-for="image in images">
        <img 
            v-if="image.serviceId === props.serviceObject.id"
            class="service__item-image"
            :key="image.id"
            :src="'http://localhost:3000/' + (image.serviceId === props.serviceObject.id && image.path)"
            alt="Logo"
        />
    </div>
    
    <h3 class="service__item-h3">{{ props.serviceObject.name }}</h3>
    <p class="service__item-description" >
        {{ props.serviceObject.shortDescription }}
    </p>
</template>