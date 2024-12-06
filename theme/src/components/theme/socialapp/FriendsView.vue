<template>
    <div class="col-xl-12 xl-50 box-col-6">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon13"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon13"
                        :class="[isActive ? 'active' : '']" v-on:click="toggle">Friends</button>
                </h5>
            </div>
            <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
                <div class="card-body avatar-showcase filter-cards-view">
                    <div class="d-inline-block friend-pic" v-for="(item, index) in friend" :key="index">

                        <img class="img-50 rounded-circle" :src="getImages(item.img)" alt="#">

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { friend } from "@/core/data/sociall-app"
import { getImages } from "@/composables/common/getImages"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>