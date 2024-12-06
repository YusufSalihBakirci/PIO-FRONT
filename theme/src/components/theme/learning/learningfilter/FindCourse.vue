<template>
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon"
                        :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Find Course</button>
                </h5>
            </div>
            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                <div class="card-body filter-cards-view animate-chk">
                    <div class="job-filter">
                        <div class="faq-form">
                            <input class="form-control" type="text" placeholder="Search.."><vue-feather class="search-icon"
                                type="search"></vue-feather>
                        </div>
                    </div>
                    <div class="checkbox-animated  mt-0" v-for="(item, index) in find" :key="index">
                        <div class="learning-header"><span class="f-w-600">{{ item.title }}</span></div>
                        <label class="d-block" :for="items.id" v-for="(items, index) in item.children" :key="index">
                            <input :class="items.class" :id="items.id" :type="items.type" :checked="items.checked">{{
                                items.title }}
                        </label>

                    </div>

                    <button class="btn btn-primary text-center" type="button">Filter</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from 'vue'
import { find } from "@/core/data/learning"
let isActive = ref<boolean>(true)

function toggle() {
    isActive.value = !isActive.value
}
</script>