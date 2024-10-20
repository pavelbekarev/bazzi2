<script setup>
    defineProps({
        serviceProp: Object
    });


</script>


<template>
    <p><strong>id:</strong> {{ serviceProp.id }}</p>
    <p><strong>name:</strong> {{ serviceProp.name }}</p>
    <p><strong>description:</strong> {{ serviceProp.description }}</p>
    <p>{{ serviceProp.imagePath }}</p>
</template>