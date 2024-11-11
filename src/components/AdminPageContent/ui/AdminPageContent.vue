<script setup>
  import "../style.scss";
  import { useStore } from 'vuex';
  import { computed } from "vue";
  import AdminPageServiceManager from '@/components/AdminPageServiceManager/ui/AdminPageServiceManager.vue';

  const store = useStore();
  const activeService = computed(() => store.state.ServiceModule.activeService);
  console.debug(activeService); 
</script>

<template>
  <div class="adminPageContent" v-if="activeService == 'Услуги'">
    <div class="adminPageContent__header">
      <h1 class="adminPageContent__header__activeService">{{ activeService }}</h1>
      <span 
        class="adminPageContent__header__addNewButton"
      >
        Добавить новую
      </span>
    </div>
    <AdminPageServiceManager />
  </div>
  <!-- аналогично с отзывы -->
   <!-- аналогично с посты -->
</template>