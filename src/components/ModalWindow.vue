<script setup>

</script>

<template>
    <div 
        v-if="modalWindow_active"
        class="modal-window__wrapper"
    >
        <div 
            @click="modalWindow_active = false" 
            class="close-button"
        >
            X
        </div>
        <div class="content-wrapper">
            
        </div>
    </div>
</template>