<template>
    <div class="card">
        <div class="card-header" id="headingFour">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-start" data-bs-toggle="collapse" data-bs-target="#collapseicon3"
                    :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon3"
                    :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Industry</button>
            </h2>
        </div>
        <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
            <div class="card-body animate-chk">
                <label class="d-block" :for="item.id" v-for="(item, index) in industry" :key="index">
                    <input class="checkbox_animated" :id="item.id" type="checkbox"> {{ item.title }}
                </label>
            </div>
            <button class="btn btn-block btn-primary text-center" type="button">All Industries</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { industry } from "@/core/data/job"
let isActive = ref<boolean>(true)

function toggle() {
    isActive.value = !isActive.value
}
</script>