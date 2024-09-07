<script setup>
    const props = defineProps({
        serviceObject: Object
    })

    import ServiceComponent from './ServiceComponent.vue';
    import { onUpdated, ref } from 'vue';

    console.log(props.serviceObject)

    const modalWindow_active = ref(false);
    onUpdated(() => {
        console.log(modalWindow_active.value)
    })

</script>

<template>
    <ServiceComponent 
        :service = props.serviceObject
    />
</template>