<script setup>
  import { computed, ref, onMounted, watch, watchEffect } from 'vue';
  import ContactForm from '../components/ContactForm/ContactForm.vue';

  import ServicesList from '../components/ServicesList.vue';
  // import Slider from '@/components/Slider.vue';

  // import services from "../utils/ListOfServices.vue"; 
  import { useStore } from 'vuex';
  import ServiceComponent from '@/components/ServiceComponent.vue';
  import { splitDescriptionPoints } from '@/utils/splitDescriptionPoints';

  const store = useStore();

  const servicesJson = computed(() => {
    return JSON.stringify(store.state.ServiceModule.serviceState, null, 2);
  });

  const images = computed(() => {
    return JSON.stringify(store.state.ImageModule.allImages, null, 2);
  });

  onMounted(() => {
    store.dispatch("ServiceModule/getServeFromServer");
  });

  const services = computed(() => {
    return JSON.parse(servicesJson.value);
  });

  const modalWindow_active = ref(false);
  const activeService = ref(null);

  // Закрытие модального окна при клике на крестик 
  const closeModalWindow_button = () => {
    modalWindow_active.value = false;
    activeService.value = null;
    document.body.classList.remove('no-scroll');
  }
  // Открытие модального окна при клике на "Читать подробнее"
  const clickReadMore_button = (service) => {
    modalWindow_active.value = true;
    activeService.value = service;
    document.body.classList.add('no-scroll')
  }

  const servicesList = ref(services);
</script>


<template>
    <header>
        <div class="header__bg">
          <div class="container">
            <div class="header__wrapper">
              <div class="header__menu">
                <ul>
                  <li class="header__menu-item">
                    <router-link 
                      to="/" 
                      class="header__menu-link"
                    >
                      Главная
                    </router-link>
                  </li>
                  <li class="header__menu-item">
                    <router-link 
                      to="/about" 
                      class="header__menu-link"
                    >
                      О бацзы
                    </router-link >
                  </li>
                </ul>
              </div>
              <div class="header__content">
                <h2 class="header__h2">Познай себя сквозь призму китайской метафизики</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div class="services__wrapper">
            <div class="container">
              <div class="services__content">
                <h2 class="services__h2">Услуги</h2>
                <div class="services">
                  <div v-for="service of servicesList" :key="service.name" class="service__item-wrapper">
                    <ServiceComponent 
                      :service-object="service"
                    />
                    <a 
                      @click="clickReadMore_button(service)"
                      id="read-more__button" 
                      class="read-more__button" 
                    >
                      Читать подробнее
                    </a>
                  </div>
                </div>
              </div>
              <div 
                v-if="modalWindow_active"
                class="modal-window__wrapper"
              >
                <div class="content-wrapper">
                  <div class="content">
                    <span 
                      @click="closeModalWindow_button(e)" 
                      class="close-button"
                    >
                      х
                    </span>
                    <h2 class="content-h2">{{ activeService.name }}</h2>
                    <p 
                      v-if="activeService.description" 
                      class="content-description"
                    >
                      {{ activeService.description }}
                    </p>
                    <ul 
                      v-for="point of splitDescriptionPoints(activeService.descriptionPoints)"
                      :key="point.index"
                      class="content-list"
                    >
                      <li class="content-list__item">{{point}}</li>
                    </ul>
                    <div class="additionally-info">
                      <p>Формат: {{ activeService.format }}</p>
                      <p>Стоимость: {{ activeService.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="contact__wrapper">
            <form action="" class="contact-form__wrapper">
              <div class="offer-to-contact">
                <h2 class="offer__h2">Свяжитесь со мной</h2>
                <div class="socials">
                  <a href="https://t.me/salnnik">
                    <img title="Телеграм канал" class="form__offer-icon" src="@/img/telegram.svg" alt="telegram icon">
                  </a>
                  <a href="https://vk.com/salinnik">
                    <img class="form__offer-icon" src="@/img/iconmonstr-vk-1.svg" alt="VK icon">
                  </a>
                </div>
              </div>
              <ContactForm />
            </form>
          </div>
        </section>
      </main>
</template>
