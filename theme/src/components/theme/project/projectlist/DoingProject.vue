<template>
    <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
        <div class="row">
            <div class="col-xxl-4 col-md-6" v-for="(project, index) in doing" :key="index">
                <div class="project-box font-dark" :class="project.box"><span class="badge "
                        :class="'badge-' + project.font">{{
                            project.badge }}</span>
                    <h5 class="f-w-500 mb-2 " :class="'text-' + project.font">{{ project.title }}</h5>
                    <div class="d-flex mb-2 align-items-center"><img class="img-20 me-1 rounded-circle"
                            :src='getImages(project.img)' alt="" data-original-title="" title="">

                        <p class="font-light">{{ project.sites }}</p>

                    </div>
                    <p>{{ project.desc }}</p>
                    <div class="row details">
                        <div class="col-6"><span>Issues </span></div>
                        <div class="col-6 " :class="'font-' + project.font">{{ project.issue }} </div>
                        <div class="col-6"> <span>Resolved</span></div>
                        <div class="col-6 " :class="'font-' + project.font">{{ project.resolved }}</div>
                        <div class="col-6"> <span>Comment</span></div>
                        <div class="col-6 " :class="'font-' + project.font">{{ project.comment }}</div>
                    </div>
                    <div class="customers">
                        <ul>
                            <li class="d-inline-block"><img class="img-30 rounded-circle"
                                    :src='getImages(project.customers_img1)' alt="" data-original-title="" title=""></li>
                            <li class="d-inline-block"><img class="img-30 rounded-circle"
                                    :src='getImages(project.customers_img2)' alt="" data-original-title="" title=""></li>
                            <li class="d-inline-block"><img class="img-30 rounded-circle"
                                    :src='getImages(project.customers_img3)' alt="" data-original-title="" title=""></li>
                            <li class="d-inline-block ms-2">
                                <p class="f-12">{{ project.like }} More</p>
                            </li>
                        </ul>
                    </div>
                    <div class="project-status mt-4">
                        <div class="d-flex align-items-center gap-1 mb-2">
                            <p class="mb-0">{{ project.progress }}% </p>
                            <span>Done</span>
                        </div>
                        <div class="progress" :class="project.box" style="height: 5px">
                            <div class="progress-bar-animated " :class="'bg-' + project.type" role="progressbar"
                                :style="{ 'width': project.progress + '%' }" aria-valuenow="10" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { doing } from "@/core/data/project"
import { getImages } from "@/composables/common/getImages"

</script>