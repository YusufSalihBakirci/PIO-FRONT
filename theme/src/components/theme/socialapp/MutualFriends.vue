<template>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-start collapsed" data-bs-toggle="collapse"
                    data-bs-target="#collapseicon1" :aria-expanded="isActive ? 'true' : 'false'"
                    aria-controls="collapseicon1" :class="[isActive ? 'active' : '', 'collapsible']"
                    v-on:click="toggle">Mutual Friends</button>
            </h2>
        </div>
        <div :class="[isActive ? 'block' : ' show']" v-show="isActive">
            <div class="card-body social-status filter-cards-view">
                <div class="d-flex gap-3" v-for="(item, index) in friends" :key="index"><img
                        class="img-50 rounded-circle m-r-15" :src="getImages(item.image)" alt="">
                    <div class="social-status " :class="item.StatusClass"></div>
                    <div class="flex-grow-1">
                        <span class="f-w-700 d-block">{{ item.name }}</span><span class="d-block">{{ item.email }}</span>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { friends } from "@/core/data/sociall-app"
import { getImages } from "@/composables/common/getImages"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>