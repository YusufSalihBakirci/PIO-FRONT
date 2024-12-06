<template>
    <div class="col-xl-3 box-col-6 pe-0">
        <div class="md-sidebar job-sidebar"> <a class="btn btn-primary md-sidebar-toggle" @click="collapseFilter()"
                href="javascript:void(0)">file filter </a>
            <div class="md-sidebar-aside custom-scrollbar" :class="filtered ? 'open' : ''">
                <div class="file-sidebar">
                    <div class="card">
                        <div class="card-body">
                            <ul>
                                <li v-for="(item, index) in filebtn" :key="index">
                                    <div class="btn " :class="item.btnclass"><vue-feather :type="item.icon"></vue-feather>{{
                                        item.title }} </div>
                                </li>
                            </ul>
                            <hr>
                            <ul>
                                <li>
                                    <button class="btn btn-outline-primary"><vue-feather
                                            type="database"></vue-feather>Storage</button>
                                </li>
                                <li class="m-t-15">
                                    <div class="progress sm-progress-bar mb-3">
                                        <div class="progress-bar bg-primary" role="progressbar" style="width: 25%"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 class="f-w-500">25 GB of 100 GB used</h6>
                                </li>
                            </ul>
                            <hr>
                            <ul>
                                <li>
                                    <button class="btn btn-outline-primary"><vue-feather type="grid"></vue-feather>Pricing
                                        plan </button>
                                </li>
                                <li>
                                    <div class="pricing-plan">
                                        <h6>Trial Version</h6>
                                        <h5>FREE</h5>
                                        <p>100 GB Space</p>
                                        <div class="btn btn-outline-primary btn-xs">Selected</div><img class="bg-img"
                                            src="@/assets/images/file-manager/folder.png" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { filebtn } from "@/core/data/filemaneger"
let data = ref()
let filtered = ref<boolean>(false)

function collapseFilter() {
    filtered.value = !filtered.value;
}

</script>