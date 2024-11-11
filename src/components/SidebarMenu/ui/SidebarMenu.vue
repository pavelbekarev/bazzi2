<script setup>
  import { useStore } from "vuex";
  import "../style.scss";

  const store = useStore();
  const props = defineProps({
    title: String,
    services: Array,
  });

  /* функция изменения состояния активного сервиса
    serviceName - имя активного сервиса
  */
  const handleChangeActiveService = (serviceName) => {
    store.dispatch('ServiceModule/changeActiveService', serviceName);
  }
</script>

<template>
  <div class="sidebarMenu">
    <h4 class="sidebarMenu__title">{{ props.title }}</h4>
    <nav class="sidebarMenu__navigation">
      <a 
        v-for="service in props.services" 
        class="sidebarMenu__navigation__link" 
        id="sidebarMenu__navigation__link"
        @click="handleChangeActiveService(service.text)"
      >
        <span>{{ service.text }}</span>
      </a>
    </nav>
  </div>
</template>