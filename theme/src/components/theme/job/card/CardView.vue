<template>
    <div class="col-xl-9 xl-60 box-col-12">
        <div class="row">
            <div class="col-xl-6 xl-100" v-for="(job, index) in jobs" :key="index">
                <div class="card" :class="{ 'ribbon-vertical-left-wrapper': job.priority == 1 }">
                    <div v-if="job.priority == 1" class="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary"><i
                            class="icofont icofont-love"></i></div>
                    <div class="job-search">
                        <div class="card-body">
                            <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages(job.image)" alt="">
                                <div class="flex-grow-1  w-100">
                                    <h5 class="f-w-700">
                                        <router-link class="text-primary"
                                            :to="{ name: 'jobdetails', params: { id: job.id } }">{{
                                                job.title
                                            }}</router-link>
                                        <span class="pull-right" v-if="job.date" v-text="job.date"></span>
                                        <span class="badge badge-primary pull-right" v-else>New</span>
                                    </h5>
                                    <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <span
                                            v-html="stars(job.stars)"></span></p>
                                </div>
                            </div>
                            <p v-text="job.description"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12">
                <div class="job-pagination">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination pagination-primary">
                            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { jobs } from "@/core/data/job"
import { getImages } from "@/composables/common/getImages"

function stars(count: number) {
    var stars = '';

    for (var i = 0; i < 5; i++) {
        if (count > i) {
            stars = stars + '<i class="fa-solid fa-star font-warning"></i>';
        } else {
            stars = stars + '<i class="fa-solid fa-star font-warning"></i>';
        }
    }

    return stars;
}
</script>