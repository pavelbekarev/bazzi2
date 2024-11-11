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

export const GetServicesFromServer = () => {
  return services;
}
