<template>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i
                    class="fa-brands fa-facebook-f"></i></a></li>
        <li class="list-inline-item"><a href="https://accounts.google.com/" target="_blank"><i
                    class="fa-brands fa-google-plus-g"></i></a></li>
        <li class="list-inline-item"><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        </li>
        <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i
                    class="fa-brands fa-instagram"></i></a></li>
        <li class="list-inline-item"><a href="https://rss.app/" target="_blank"><i class="fa-solid fa-rss"></i></a></li>
    </ul>
    <div class="float-sm-end" v-if="time"><small>{{ time }}</small></div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
    time: String
})
</script>