<template>
    <div class="col-xl-6 set-col-12 box-col-12">
        <div class="card" v-for="(item, index) in list" :key="index">
            <div class="blog-box blog-list row">
                <div class="col-sm-5"><router-link to="/blog/single"><img class="img-fluid sm-100-w"
                            :src="getImages(item.img)" alt=""></router-link></div>
                <div class="col-sm-7">
                    <div class="blog-details">
                        <div class="blog-date"><span>{{ item.date }}</span> {{ item.month }}</div>
                        <h6>{{ item.title }}</h6>
                        <div class="blog-bottom-content">
                            <ul class="blog-social">
                                <li>by: Admin</li>
                                <li>{{ item.hits }} Hits</li>
                            </ul>
                            <hr>
                            <p class="mt-0">{{ item.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
import { list } from "@/core/data/blog"
import { getImages } from "@/composables/common/getImages"
</script>