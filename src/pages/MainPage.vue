<script setup>
    import { ref } from 'vue';
    import ContactForm from '../components/ContactForm/ContactForm.vue';

    import ServicesList from '../components/ServicesList.vue';

    // const services = ref([
    // {
    //   name: "Прогноз на Год",
    //   description: "Эта услуга позволяет рассмотреть все сферы вашей жизни этого года. Определение текущих задач, актуальных направлений и перспектив на текущий год",
    //   description_points: [
    //     "Определение текущих задач, актуальных направлений и перспектив на текущий год;",
    //     "Анализ возможностей;",
    //     "Рассмотрение перспектив в отношениях, перспективы создания семьи;",
    //     "Здоровье: на что обратить внимание, как укрепить здоровье;",
    //     "Рекомендации как эффективно прожить год;",
    //     "Советы, позволяющие скорректировать негативные тенденции года и привлечь удачу."
    //   ],
    //   imagePath: forecast,
    //   format: "текстовый файл / аудиоформат",
    //   price: "3000 ₽"
    // },
    // {
    //   name: "Разбор карты ребенка",
    //   description: "Астрологический разбор карты ребенка - это уникальная услуга, которая помогает родителям лучше понять своего малыша и направить его развитие.",
    //   description_points: [
    //     "Анализ возможных проблем со здоровьем;",
    //     "Как понять внутренний мир своего ребенка и научиться с ним гармонично взаимодействовать;",
    //     "Какие таланты и способности стоит развивать, а на какие, напротив, не стоит тратить свое время;",
    //     "Профессиональная ориентация и ключевые направления для изучения (вуз, специальность, кружок, секция, спорт);",
    //     "Сильные стороны ребенка, его таланты, склонности, а также возможные трудности и вызовы;",
    //     "Описание характера и темперамента ребенка: анализ каким ребенком он будет: активным или спокойным, общительным или замкнутым, творческим или практичным.",
    //     "Как понять внутренний мир своего ребенка и научиться с ним гармонично взаимодействовать;",
    //     "Какие таланты и способности стоит развивать, а на какие, напротив, не стоит тратить свое время;",
    //     "Профессиональная ориентация и ключевые направления для изучения (вуз, специальность, кружок, секция, спорт);",
    //     "Сильные стороны ребенка, его таланты, склонности, а также возможные трудности и вызовы;"
    //   ],
    //   imagePath: gold_dragon,
    //   format: "текстовый файл / аудиоформат",
    //   price: "3000 ₽"
    // },
    // {
    //   name: "Одна сфера",
    //   description: "Эта услуга представляет собой полноценный ответ по одному из интересующих Вас направлений",
    //   description_points: [
    //     "Здоровье: Вероятные проблемы со здоровьем; способы нейтрализации негативных аспектов; практические советы по улучшению здоровья; сложные периоды и риски для здоровья; как поддерживать своё здоровье; слабые и сильные точки вашего тела;",
    //     "Карьера: ваши сильные и слабые стороны, преимущества; самая прибыльная сфера и профессия; предназначение; скрытые таланты; конкретные действия для привлечения денежной удачи; потенциал богатства; самый благоприятный период для запуска проекта или бизнеса; лучший формат работы: найм или фриланс;",
    //     "Другие сферы на ваш выбор."
    //   ],
    //   imagePath: health,
    //   format: "видеоразбор длительностью 60 минут",
    //   price: "4000 ₽"
    // },
    // {
    //   name: "Индивидуальный видеоразбор",
    //   description: "Эта услуга представляет собой полноценный ответ по одному из интересующих Вас направлений",
    //   description_points: [
    //     "Здоровье: Вероятные проблемы со здоровьем; способы нейтрализации негативных аспектов; практические советы по улучшению здоровья; сложные периоды и риски для здоровья; как поддерживать своё здоровье; слабые и сильные точки вашего тела;",
    //     "Карьера: ваши сильные и слабые стороны, преимущества; самая прибыльная сфера и профессия; предназначение; скрытые таланты; конкретные действия для привлечения денежной удачи; потенциал богатства; самый благоприятный период для запуска проекта или бизнеса; лучший формат работы: найм или фриланс;",
    //     "Другие сферы на ваш выбор."
    //   ],
    //   imagePath: dragon,
    //   format: "видеоразбор длительностью 60 минут",
    //   price: "4000 ₽"
    // },
    // ])

    import services from "../utils/ServicesList.vue"; 

    const modalWindow_active = ref(false);
    const activeService = ref(null);

    // Закрытие модального окна при клике на крестик 
    const closeModalWindow_button = () => {
      modalWindow_active.value = false;
      activeService.value = null;
      document.body.classList.remove('no-scroll')
    }
    // Открытие модального окна при клике на "Читать подробнее"
    const clickReadMore_button = (service) => {
      modalWindow_active.value = true;
      activeService.value = service;
      document.body.classList.add('no-scroll')
    }

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
    
    
      <main >
        <section>
          <div class="services__wrapper">
            <div class="container">
              <div class="services__content">
                <h2 class="services__h2">Услуги</h2>
                <div class="services">
                  <div v-for="service of services" :key="service.index" class="service__item-wrapper">
                    <ServicesList 
                        :service="service"
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
                    <ul 
                      v-for="point of activeService.description_points" 
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
                    <img title="Телеграм канал" class="form__offer-icon" src="../img/telegram.svg" alt="telegram icon">
                  </a>
                  <a href="https://vk.com/salinnik">
                    <img class="form__offer-icon" src="../img/iconmonstr-vk-1.svg" alt="VK icon">
                  </a>
                </div>
              </div>
              <ContactForm />
            </form>
          </div>
        </section>
      </main>

</template>