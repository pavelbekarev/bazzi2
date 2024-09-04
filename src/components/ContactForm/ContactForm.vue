<script setup>
    import "../../style/MainPage/Contact.scss";
    import { ref } from "vue";

    // script
    const nameValue = ref("");
    const emailValue = ref("");
    const topicValue = ref("");
</script>

<template>
    <div class="form__booking">
        <h2 class="booking__h2">Записаться на разбор</h2>
        <div class="form__booking-data">
            <div class="input__wrapper">
                <label class="booking__label" for="#name">Ваше имя</label>
                <input id="name" class="booking__input" type="text" v-model="nameValue">
            </div>
            <div class="input__wrapper">
                <label class="booking__label" for="#email">Ваш email</label>
                <input id="email" class="booking__input" type="text" v-model="emailValue">
            </div>
            <div class="input__wrapper">
                <label class="booking__label" for="#topic">Тема</label>
                <input id="topic" class="booking__input" type="text" v-model="topicValue">
            </div>
        </div>

        <button class="book-button">Записаться</button>
    </div>
</template>