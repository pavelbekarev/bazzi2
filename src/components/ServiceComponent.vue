<script setup>
import { ref } from 'vue';



const props = defineProps({
    // name: String,
    // description: String,
    // imagePath: String
    service: Object
})

const bgImage = props.service.imagePath;
console.log(bgImage);

</script>

<template>
    
    <img v-if="props.service.imagePath" class="service__item-image" :src=props.service.imagePath alt="Logo">
    <h3 class="service__item-h3">{{ props.service.name }}</h3>
    <p class="service__item-description" >
        {{ props.service.shortDescription }}
    </p>
</template>