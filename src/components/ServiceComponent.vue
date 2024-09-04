<script setup>

defineProps({
    name: String,
    description: String,
    imagePath: Image
})
</script>

<template>
    <img class="service__item-image" :src='imagePath' alt="Logo">
    <h3 class="service__item-h3">{{ name }}</h3>
    <p class="service__item-description" >{{ description }}</p>
</template>