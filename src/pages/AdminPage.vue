<script setup>
    import AdminPageContent from '@/components/AdminPageContent/ui/AdminPageContent.vue';
    import SidebarMenu from '@/components/SidebarMenu/ui/SidebarMenu.vue';
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
    const activeContent = ref('');
</script>

<template>
    <div class="adminPage">
        <SidebarMenu 
            title="Китайская астрология"
            :services="[
                { text: 'Услуги', redirectTo: 'bazzi2/admin/services' },
                { text: 'Отзывы', redirectTo: 'bazzi2/admin/reviews' },
                { text: 'Посты',  redirectTo: 'bazzi2/admin/posts' }
            ]"
        />
        <AdminPageContent />
    </div>
</template>
