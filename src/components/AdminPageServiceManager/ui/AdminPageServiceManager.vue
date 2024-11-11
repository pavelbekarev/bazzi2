<script setup>
  import "../style.scss";
  import { GetServicesFromServer } from '@/utils/GetServicesFromServer';
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';

  const store = useStore();
  onMounted(() => {
    store.dispatch("ServiceModule/getServeFromServer");
  });
  const servicesJson = computed(() => {
    return JSON.stringify(store.state.ServiceModule.serviceState, null, 2);
  });
  const services = computed(() => {
    return JSON.parse(servicesJson.value);
  });

</script>

<template>
  <div class="adminPageContent__services">
    <div class="adminPageContent__services__item" v-for="service in services">
      <span class="adminPageContent__services__item__name">{{ service.name }}</span>
      <span class="adminPageContent__services__item__format">{{ service.format }}</span>
      <span class="adminPageContent__services__item__price">{{ service.price }} руб.</span>
      <div class="adminPageContent__services__item__interactiveControls">
        <img id="editButton" src="@/img/pen-fill.svg" alt="">
        <img id="removeButton" src="@/img/x-circle-fill.svg" alt="">
      </div>
    </div>
  </div>
</template>