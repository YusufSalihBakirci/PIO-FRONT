<template>
    <div class="row">

        <Card3 colClass="col-xl-4 col-sm-6 col-xxl-3 col-ed-4 box-col-4" cardClass="social-profile"
            v-for="(item, index) in data" :key="index">
            <div class="social-img-wrap">
                <div class="social-img"><img :src="getImages(item.img)" alt="profile"></div>
                <div class="edit-icon">
                    <svg>
                        <use href="@/assets/svg/icon-sprite.svg#profile-check"></use>
                    </svg>
                </div>
            </div>
            <div class="social-details">
                <h5 class="mb-1"><router-link to="/pages/social_app">{{ item.name }}</router-link></h5><span
                    class="f-light">{{ item.email
                    }}</span>
                <ul class="card-social">
                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://accounts.google.com/" target="_blank"><i
                                class="fa-brands fa-google-plus-g"></i></a>
                    </li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li><a href="https://rss.app/" target="_blank"><i class="fa-solid fa-rss"></i></a></li>
                </ul>
                <ul class="social-follow">
                    <li>
                        <h5 class="mb-0 f-w-600">{{ item.post }}</h5><span class="f-light">Posts</span>
                    </li>
                    <li>
                        <h5 class="mb-0 f-w-600">{{ item.follower }}</h5><span class="f-light">Followers</span>
                    </li>
                    <li>
                        <h5 class="mb-0 f-w-600">{{ item.following }}</h5><span class="f-light">Following</span>
                    </li>
                </ul>
            </div>
        </Card3>


    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { data } from "@/core/data/user"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>