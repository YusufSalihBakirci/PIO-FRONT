<template>
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLongTitle">Scrolling modal</h3>
                    <button class="btn-close py-0" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="pb-2" v-for="(item, index) in basicmodeldata" :key="index">
                        <h4>{{ item.title }}</h4>
                        <div class="d-flex mt-3" v-for="(items, index) in item.children" :key="index">
                            <div class="flex-shrink-0"><i class="fa-solid fa-circle-arrow-right text-primary"></i></div>
                            <div class="flex-grow-1 ms-2">
                                <p>{{ items.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary" type="button">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { basicmodeldata } from "@/core/data/uikits"
</script>