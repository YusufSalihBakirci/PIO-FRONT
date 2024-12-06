<template>
    <div class="col-xl-12 xl-50 box-col-6">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon8"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon8"
                        :class="[isActive ? 'active' : '']" v-on:click="toggle">Followers</button>
                </h5>
            </div>
            <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                <div class="card-body social-list filter-cards-view">
                    <div class="d-flex gap-3" v-for="(item, index) in followers" :key="index"><img
                            class="img-50 img-fluid m-r-20 rounded-circle" alt="" :src="getImages(item.img)">
                        <div class="flex-grow-1">
                            <span class="d-block">{{ item.name }}</span><a href="#">Add Friend</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { followers } from "@/core/data/sociall-app"
import { getImages } from "@/composables/common/getImages"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>