<script setup>
import NavigationComponent from '@/components/Header/NavigationComponent.vue';
import ChevronRight from '@/utils/chevron-right.vue';
import { onBeforeMount, onMounted, ref, watch } from 'vue';

const guideList = ref([
    "Заходим на сайт mingli.ru",
    "Находим на странице Калькулятор Бацзы",
    "Вводим свои данные в строке информации, далее «Рассчитать»",
    "В своей карте найдите верхний элемент второй колонки. Это и есть Ваш элемент личности"
])

var isBurgerActive = ref(false);
var screenWidth = ref(window.innerWidth);


const updateScreenWidth = () => {
    screenWidth.value = window.innerWidth;
}


watch(screenWidth, () => {
    if (screenWidth.value <= 580) {
        isBurgerActive.value = true;
    }

    else {
        isBurgerActive.value = false;
    }
})


onMounted(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
});


onBeforeMount(() => {
    window.removeEventListener("resize", updateScreenWidth);
})


</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__menu">
                    <h1 class="header__title">Бацзы - китайская астрология</h1>
                    <NavigationComponent />
                    <!-- <BurgerComponent 
                        :is-burger-active="isBurgerActive" 
                        v-if="isBurgerActive" 
                    /> -->
                </div>
            </div>
        </div>
    </header>
    <main>
        <!-- section about -->
        <section class="about__content-wrapper">
            <img class="ieroglifBackground" src="../img/ieroglifBackground.png" alt="">
            <div class="item1">
            </div> <!-- image -->
            <div class="item2">
                <div class="content__wrapper">
                    <h2>Меня зовут Саша</h2>
                    <p>
                        Я занимаюсь китайской астрологией, а также преподаю языки<br/>
                        Благодаря изучению китайского языка, я познала мир китайской метафизики — Бацзы
                    </p>
                </div>
            </div>
        </section>
        <!-- section element -->
        <section class="element__wrapper">
            <div class="container">
                <h1 class="element__h1">Элемент личности</h1>
                <div class="element__content-wrapper">
                    <div class="text-content">
                        <p class="element__p">Это олицетворение Вашего «я».</p><br/>
                        <p class="element__p">Очень важно понимать специфику своего элемента, чтобы понимать сильные и слабые стороны. Это понимание позволит Вам улучшить удачу и открыть все двери для счастливого будущего. Представляю Вашему вниманию действия по укреплению Вашего элемента.</p>
                    </div>
                    <div class="image-content"></div>
                </div>
            </div>
        </section>
        <section class="guide__wrapper">
            <div class="container">
                <h1 class="guide__h1">Как узнать свой элемент личности?</h1>
                <div class="guide-steps__wrapper">
                    <div 
                        v-for="guide of guideList" 
                        :key="guide" 
                        class="step"
                    >
                        <div class="guide__image">
                            <ChevronRight />
                        </div>
                        <p class="guide__descr">
                            {{ guide }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>