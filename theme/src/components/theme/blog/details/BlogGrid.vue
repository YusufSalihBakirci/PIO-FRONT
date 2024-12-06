<template>
    <div class="col-md-6 col-xxl-3 box-col-6" v-for="(item, index) in details" :key="index">
        <div class="card">
            <div class="blog-box blog-grid text-center"><img class="img-fluid top-radius-blog" :src="getImages(item.imge)"
                    alt="">
                <div class="blog-details-main">
                    <ul class="blog-social">
                        <li>{{ item.date }}</li>
                        <li>by: Admin</li>
                        <li>{{ item.hits }} Hits</li>
                    </ul>
                    <hr>

                    <h6 class="blog-bottom-details">{{ item.desc }}.</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { details } from "@/core/data/blog"
import { getImages } from "@/composables/common/getImages"
</script>