<template>
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseicon2"
                        :aria-expanded="isActive ? 'true' : 'false'" aria-controls="collapseicon2"
                        :class="[isActive ? 'active' : '', 'collapsible']" v-on:click="toggle">Upcoming Courses</button>
                </h5>
            </div>
            <div :class="[isActive ? 'block' : 'none', 'content']" v-show="isActive">
                <div class="upcoming-course card-body">
                    <div class="d-flex" v-for="(item, index) in upcoming" :key="index">
                        <div class="flex-grow-1">
                            <h5 class="f-w-600">{{ item.title }}</h5><span class="d-block" v-html="item.desc"></span><span
                                class="d-block" v-html="stars(item.star)"></span>
                        </div>
                        <div>
                            <h5 class="mb-0 font-primary">{{ item.date }}</h5><span class="d-block">{{ item.month }}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, } from 'vue'
import { upcoming } from "@/core/data/learning"
let isActive = ref<boolean>(true)

function toggle() {
    isActive.value = !isActive.value
}
function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa fa-star font-warning"></i>';
        } else {
            stars = stars + '<i class="fa-regular fa-star font-warning"></i>';
        }
    }

    return stars;
}
</script>