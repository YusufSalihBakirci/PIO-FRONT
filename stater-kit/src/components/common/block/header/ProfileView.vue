<template>
    <div class="user-wrap" @click="openTab()">
        <div class="user-img"><img src="@/assets/images/profile.png" alt="user" /></div>
        <div class="user-content">
            <h6>Ava Davis</h6>
            <p class="mb-0">Admin<i class="fa-solid fa-chevron-down"></i></p>
        </div>
    </div>
    <div class="custom-menu overflow-hidden" :class="show ? 'show' : ''">
        <ul class="profile-body">
            <li class="d-flex" v-for="(item, index) in profile" :key="index">
                <svg class="svg-color">
                    <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${item.icon}`"></use>
                </svg><router-link class="ms-2" :to="item.link">{{ item.title }}</router-link>
            </li>
            <li class="d-flex">
                <svg class="svg-color">
                    <use href="@/assets/svg/iconly-sprite.svg#Login"></use>
                </svg><a class="ms-2">Log Out</a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { profile } from "@/core/data/header"
let show = ref<boolean>(false)
function openTab() {
    show.value = !show.value
}

</script>