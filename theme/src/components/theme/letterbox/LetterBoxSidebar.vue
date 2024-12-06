<template>
    <div class="col-xxl-3 col-xl-4 box-col-12">
        <div class="md-sidebar"> <a class="btn btn-primary md-sidebar-toggle" href="javascript:void(0)"
                @click="filers()">email filter</a>
            <div class="md-sidebar-aside job-left-aside custom-scrollbar" :class="filter ? 'open' : ''">
                <div class="email-left-aside">
                    <div class="card">
                        <div class="card-body">
                            <div class="email-app-sidebar">
                                <button class="btn btn-primary emailbox" type="button" data-bs-toggle="modal"
                                    data-bs-target="#compose_mail"><i class="fa-solid fa-plus"></i>Compose Email</button>
                                <ul class="nav nav-pills main-menu email-category" id="email-pills-tab" role="tablist">
                                    <li class="nav-item" v-for="(item, index) in lettersidebar" :key="index"><a
                                            class="nav-link " v-bind:class="{ 'active': item.title === activeclass }"
                                            :id="item.ids" data-bs-toggle="pill" :href="item.href" role="tab"
                                            :aria-controls="item.control" aria-selected="false">
                                            <svg class="stroke-icon" :class="item.iconclass">
                                                <use
                                                    :xlink:href="require('@/assets/svg/icon-sprite.svg') + `#${item.icon}`">
                                                </use>
                                            </svg>
                                            <div>{{ item.title }}<span class="badge">{{ item.badge }}</span></div>
                                        </a></li>
                                    <li class="nav-item"><a class="nav-link" type="button" data-bs-toggle="modal"
                                            data-bs-target="#label-pill-modal"><i class="fa-solid fa-plus"></i>Add Label</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { lettersidebar } from "@/core/data/letter-box"
let activeclass = ref<string>('Inbox')
let filter = ref<boolean>(false)
function filers() {
    filter.value = !filter.value
}
</script>