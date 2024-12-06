<template>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-start" data-bs-toggle="collapse" data-bs-target="#collapseicon1"
                    :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon1"
                    :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Location </button>
            </h2>
        </div>
        <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
            <div class="card-body animate-chk">
                <div class="location-checkbox">
                    <label class="d-block " for="chk-ani6">
                        <input class="checkbox_animated" id="chk-ani6" type="checkbox"> New York
                        (399)
                    </label>
                    <label class="d-block " for="chk-ani7">
                        <input class="checkbox_animated" id="chk-ani7" type="checkbox"> San Francisco (252)
                    </label>
                    <label class="d-block " for="chk-ani8">
                        <input class="checkbox_animated" id="chk-ani8" type="checkbox"> Washington
                        (226)
                    </label>
                    <label class="d-block " for="chk-ani9">
                        <input class="checkbox_animated" id="chk-ani9" type="checkbox"> Seattle
                        (242)
                    </label>
                    <label class="d-block " for="chk-ani10">
                        <input class="checkbox_animated" id="chk-ani10" type="checkbox"> Chicago
                        (187)
                    </label>
                </div>
            </div>
            <button class="btn btn-block btn-primary text-center" type="button">All Locations</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from 'vue'
import { local } from "@/core/data/job"
let isActive = ref<boolean>(true)

function toggle() {
    isActive.value = !isActive.value
}
</script>