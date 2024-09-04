<script setup>
    defineProps({
        service: Object
    })

    import ServiceComponent from './ServiceComponent.vue';
    import { onUpdated, ref } from 'vue';

    const modalWindow_active = ref(false);
    onUpdated(() => {
        console.log(modalWindow_active.value)
    })

</script>

<template>
    <ServiceComponent 
        :tabindex="service.index" 
        :name="service.name" 
        :description="service.description" 
        :image-path="service.imagePath" 
    />
    
</template>