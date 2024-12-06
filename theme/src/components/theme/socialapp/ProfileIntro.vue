<template>
    <div class="col-xl-3 xl-100 box-col-12">
        <div class="default-according style-1 faq-accordion job-accordion" id="accordionoc1">
            <div class="row">
                <div class="col-xl-12 xl-50 box-col-6">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon2"
                                    :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon2"
                                    :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Profile
                                    Intro</button>
                            </h5>
                        </div>
                        <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                            <div class="card-body filter-cards-view">
                                <div class="mb-3" v-for="(item, index) in intro" :key="index">
                                    <span class="f-w-700 mb-2 d-block">{{ item.title }}</span>
                                    <p>
                                        {{ item.desc }}
                                    </p>
                                </div>
                                <div class="social-network theme-form">
                                    <span class="f-w-700">Social Networks</span>
                                    <button class="btn social-btn btn-fb mb-2 text-center"><i
                                            class="fa-solid fa-reply"></i>Facebook</button>
                                    <button class="btn social-btn btn-twitter mb-2 text-center"><i
                                            class="fa-brands fa-twitter"></i>Twitter</button>
                                    <button class="btn social-btn btn-google text-center"><i
                                            class="fa-brands fa-dribbble"></i>Dribbble</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FollowersView />
                <FollowingView />
                <LatestPhotos />
                <FriendsView />
                <div class="col-xl-12 xl-50 box-col-6">
                    <div class="card"><img class="img-fluid" src="@/assets/images/social-app/timeline-4.png" alt=""></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { intro } from "@/core/data/sociall-app"
const FollowersView = defineAsyncComponent(() => import("@/components/theme/socialapp/FollowersView.vue"))
const FollowingView = defineAsyncComponent(() => import("@/components/theme/socialapp/FollowingView.vue"))
const LatestPhotos = defineAsyncComponent(() => import("@/components/theme/socialapp/LatestPhotos.vue"))
const FriendsView = defineAsyncComponent(() => import("@/components/theme/socialapp/FriendsView.vue"))

const isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>