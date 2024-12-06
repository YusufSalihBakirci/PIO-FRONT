<template>
    <div class="col-xl-12">
        <div class="card learning-dropbox">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon1"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon1"
                        :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Categories</button>
                </h5>
            </div>
            <div class="card-body px-0" :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                <div class="categories " v-for="(item, index) in category" :key="index">
                    <div class="learning-header">
                        <span class="f-w-700">{{ item.title }}</span>
                    </div>
                    <ul>
                        <li v-for="(items, index) in item.children" :key="index"><a href="javascript:void(0)">{{ items.title
                        }} </a><span class="badge badge-primary pull-right">{{ items.badge }}</span></li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from 'vue'
import { category } from "@/core/data/learning"
let isActive = ref<boolean>(true)
function toggle() {
    isActive.value = !isActive.value
}
</script>