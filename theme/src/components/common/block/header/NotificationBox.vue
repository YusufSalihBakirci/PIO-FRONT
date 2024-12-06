<template>
    <a href="javascript:void(0)" @click="openTab()">
        <svg>
            <use href="@/assets/svg/iconly-sprite.svg#notification"></use>
        </svg></a><span class="badge rounded-pill badge-primary text-white">4</span>
    <div class="custom-menu notification-dropdown py-0 overflow-hidden" :class="show ? 'show' : ''">
        <h3 class="title bg-primary-light">Notification <span class="font-primary">View all</span></h3>
        <ul class="activity-timeline">
            <li class="d-flex align-items-start" v-for="(item, index) in notification" :key="index">
                <div class="activity-line"></div>
                <div :class="'activity-' + item.dot"></div>
                <div class="flex-grow-1">
                    <h6 class="f-w-600 " :class="item.fontclass">{{ item.date }}<span>{{ item.time }}</span><span
                            class=" float-end" :class="'circle-' + item.dot">
                            <svg class="circle-color">
                                <use href="@/assets/svg/iconly-sprite.svg#circle"></use>
                            </svg></span></h6>
                    <h5>{{ item.title }}</h5>
                    <p class="mb-0">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { getImages } from "@/composables/common/getImages"
import { notification } from "@/core/data/header"
let show = ref<boolean>(false)
function openTab() {
    show.value = !show.value
}
</script>