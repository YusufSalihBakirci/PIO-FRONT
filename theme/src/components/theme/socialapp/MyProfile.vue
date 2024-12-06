<template>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-start" data-bs-toggle="collapse" data-bs-target="#collapseicon"
                    :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon"
                    :class="[isActive ? 'active' : '']" v-on:click="toggle">My Profile</button>
            </h2>
        </div>
        <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
            <div class="card-body socialprofile filter-cards-view">
                <div class="d-flex gap-3"><img class="img-50 img-fluid m-r-20 rounded-circle"
                        src="@/assets/images/user/1.jpg" alt="">
                    <div class="flex-grow-1">
                        <h6 class="font-primary f-w-600">My Page</h6><span class="d-block"><span><i
                                    class="fa-solid fa-comments"></i><span class="px-2">Messages<span
                                        class="badge rounded-pill badge-light ms-2">9</span></span></span></span><span
                            class="d-block"><span><i class="fa-regular fa-bell"></i><span class="px-2">notification<span
                                        class="badge rounded-pill badge-light ms-2">9</span></span></span></span>
                    </div>
                </div>
                <div class="social-btngroup d-flex gap-3">
                    <button class="btn btn-primary text-center" type="button">Likes</button>
                    <button class="btn btn-light text-dark text-center ms-2" type="button">View</button>
                </div>
                <div class="likes-profile text-center">
                    <h5> <span> <i class="fa-solid fa-heart font-danger"></i> 884</span></h5>
                </div>
                <div class="text-center text-dark">35 New Likes This Week</div>
                <div class="customers text-center social-group">
                    <ul>
                        <li class="d-inline-block" v-for="(item, index) in profile" :key="index"><img
                                class="img-40 rounded-circle" :src="getImages(item.img)" alt="" data-container="body"
                                data-bs-toggle="tooltip" :title="item.title"></li>

                    </ul>
                </div><img class="img-fluid mt-5" alt="" src="@/assets/images/social-app/timeline-3.png">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { profile } from "@/core/data/sociall-app"
import { getImages } from "@/composables/common/getImages"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>