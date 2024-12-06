<template>
    <div class="user-wrap">
        <div class="user-img"><img src="@/assets/images/profile.png" alt="user" />
            <div class="setting-icon custom-dropdown"><i class="iconly-Setting icli" @click="openTab()"> </i>
                <div class="custom-menu overflow-hidden" :class="show ? 'show' : ''">
                    <ul class="profile-body">
                        <li class="d-flex" v-for="(item, index) in profile" :key="index">
                            <svg class="svg-color">

                                <use :xlink:href="require('@/assets/svg/iconly-sprite.svg') + `#${item.icon}`"></use>
                            </svg><router-link class="ms-2" :to="item.link">{{ item.title }}</router-link>
                        </li>

                        <li class="d-flex" @click="logout">
                            <svg class="svg-color">
                                <use href="@/assets/svg/iconly-sprite.svg#Login"></use>
                            </svg><a class="ms-2">Log Out </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="user-content">
            <h5 class="pb-1">Amirreza Baqian</h5>
            <h6>Product Designer</h6>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { profile } from "@/core/data/header"
import { useRouter } from 'vue-router'
let router = useRouter()
let show = ref<boolean>(false)
function openTab() {
    show.value = !show.value
}
function logout() {
    router.replace('/auth/login');
    localStorage.clear('user')
}
</script>