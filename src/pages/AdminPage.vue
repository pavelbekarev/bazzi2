<script setup>
    import EditServices from '@/components/AdminPage/EditServices.vue';
    import ServicesList from '@/components/AdminPage/ServicesList.vue';
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const servicesJson = computed(() => {
        return JSON.stringify(store.state.ServiceModule.serviceState, null, 2);
    });

    onMounted(() => {
        store.dispatch("ServiceModule/getServeFromServer");
        store.dispatch("ImageModule/getImagesFromServer");
    })

    const services = computed(() => {
        return JSON.parse(servicesJson.value);
    });

    const images = computed(() => {
        store.state.ImageModule.allImages;
    })

    setTimeout(() => {
        console.log(images)
    }, 2000);

    const activeContent = ref('');



</script>

<template>
    <div class="container">
        <h1>admin page</h1>
        
        <div class="ref__container">
            <span 
                class="ref__container--a"
                href="/" 
                @click="activeContent = 'servicesList'"
            >
                К списку
            </span>
            <span 
                class="ref__container--a"
                href="" 
                @click="activeContent = 'editServicesList';"
            >
                Добавить
            </span>
        </div>

        <div class="ref__content" >
            <div class="service__item" v-if="activeContent == 'servicesList'" v-for="service in services">
                <ServicesList  :service-prop="service"/>
            </div>

            <div class="service__item" v-if="activeContent == 'editServicesList'">
                <EditServices />
            </div>
        </div>
    </div>
</template>
