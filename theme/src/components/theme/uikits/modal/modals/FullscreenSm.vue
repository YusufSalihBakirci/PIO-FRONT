<template>
    <div class="modal fade" id="exampleModalfullscreensm" tabindex="-1" aria-labelledby="smModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="smModalLabel">Full screen below sm</h3>
                    <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body dark-modal">
                    <div class="large-modal-header"><i class="fa-solid fa-angles-right text-primary"></i>
                        <h6>Web design </h6>
                    </div>
                    <p class="modal-padding-space">We build specialised websites for companies, list them on digital
                        directories, and set up a sales funnel to boost ROI.</p>
                    <div class="modal-details">
                        <div class="modal-details">
                            <div class="web-content" v-for="(item, index) in basicmodeldata" :key="index">
                                <h6>{{ item.title }}</h6>
                                <div class="d-flex" v-for="(items, index) in item.children.slice(0, 2)" :key="index">
                                    <div class="flex-shrink-0"><i
                                            class="fa-solid fa-circle-arrow-right text-primary text-primary"></i></div>
                                    <div class="flex-grow-1 ms-2">
                                        <p>{{ items.desc }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary" type="button">Save changes </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { basicmodeldata } from "@/core/data/uikits"
</script>