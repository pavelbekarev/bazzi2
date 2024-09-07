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
    <img class="service__item-image" :src=props.service.imagePath alt="Logo">
    <!-- <div class="service__item-image" :style="{backgroundImage: 'url(' + bgImage + ')'}">

    </div> -->
    <h3 class="service__item-h3">{{ props.service.name }}</h3>
    <p class="service__item-description" >{{ props.service.description }}</p>
</template>