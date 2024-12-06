<template>
    <div class="col-xl-4 proorder-xxl-1 col-sm-6 box-col-6">
        <div class="card welcome-banner">
            <div class="card-header p-0 card-no-border">
                <div class="welcome-card"><img v-for="(item, index) in welcom" :key="index" class="img-fluid"
                        :class="item.class" :src="getImages(item.img)" alt="" />
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex align-center">
                    <h1>Hello, Amirreza <img src="@/assets/images/dashboard-1/hand.png" alt="" /></h1>
                </div>
                <p> Welcome back! Let’s start from where you left.</p>
                <div class="d-flex align-center justify-content-between"><a class="btn btn-pill btn-primary" href="">Whats
                        New!</a><span>
                        <svg class="stroke-icon">
                            <use href="@/assets/svg/icon-sprite.svg#watch"></use>
                        </svg> 11:14 AM</span></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { welcom } from "@/core/data/dashboards"
import { getImages } from "@/composables/common/getImages"
</script>