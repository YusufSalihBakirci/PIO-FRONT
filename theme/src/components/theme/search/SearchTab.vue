<template>
        <div class="card-body">
                <div class="text-center">
                        <ul class="nav nav-tabs search-list" id="top-tab" role="tablist">
                                <li class="nav-item" v-for="(item, index) in tab" :key="index"><a class="nav-link "
                                                :class="item.active" :id="item.id" data-bs-toggle="tab" :href="item.href"
                                                role="tab" aria-selected="true"><i :class="item.icon"></i>{{
                                                        item.title }}</a>
                                </li>
                                <li class="nav-item bg-light-success"><a class="nav-link text-success" id="setting-link"
                                                data-bs-toggle="tab" href="#setting-links" role="tab"
                                                aria-selected="false">Settings</a></li>
                                <li class="nav-item bg-light-secondary"><a class="nav-link text-secondary" id="tools-link"
                                                data-bs-toggle="tab" href="#tools-links" role="tab"
                                                aria-selected="false">Tools</a></li>
                        </ul>
                </div>
                <div class="tab-content" id="top-tabContent">
                        <div class="search-links tab-pane fade show active" id="all-links" role="tabpanel"
                                aria-labelledby="all-link">
                                <AllLink />
                        </div>
                        <div class="tab-pane fade" id="image-links" role="tabpanel" aria-labelledby="image-link">
                                <ImageLink />
                        </div>
                        <div class="tab-pane fade" id="video-links" role="tabpanel" aria-labelledby="video-link">
                                <VideoLink />
                        </div>
                        <div class="tab-pane fade" id="audios-links" role="tabpanel" aria-labelledby="audios-link">
                                <VideoLink />
                        </div>
                        <div class="tab-pane fade" id="setting-links" role="tabpanel" aria-labelledby="setting-link">
                                <VideoLink />
                        </div>
                        <div class="tab-pane fade" id="tools-links" role="tabpanel" aria-labelledby="tools-link">
                                <VideoLink />
                        </div>
                </div>
        </div>
</template>
<script lang="ts" setup>
import { tab } from "@/core/data/search-result"
import { defineAsyncComponent } from 'vue';
const AllLink = defineAsyncComponent(() => import("@/components/theme/search/AllLink.vue"))
const ImageLink = defineAsyncComponent(() => import("@/components/theme/search/ImageLink.vue"))
const VideoLink = defineAsyncComponent(() => import("@/components/theme/search/VideoLink.vue"))
</script>