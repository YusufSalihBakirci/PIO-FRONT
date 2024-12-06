<template>
    <div class="header-faq">
        <h4 class="mb-0 mb-700">Similar jobs</h4>
    </div>
    <div class="row">
        <div class="col-xl-6 xl-100" v-for="(job, index) in data" :key="index">
            <div class="card">
                <div class="job-search">
                    <div class="card-body">
                        <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages(job.image)" alt="">
                            <div class="flex-grow-1 w-100">
                                <h5><a class="f-w-700" href="javascript:void(0)">{{ job.title }}</a><span class="pull-right"
                                        v-if="job.date" v-text="job.date"></span>
                                    <span class="badge badge-primary pull-right" v-else>New</span>
                                </h5>
                                <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <span
                                        v-html="stars(job.stars)"></span></p>
                            </div>
                        </div>
                        <p>{{ job.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-xl-12">
            <div class="card">
                <div class="job-search">
                    <div class="card-body">
                        <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages('job-search/3.jpg')"
                                alt="">
                            <div class="flex-grow-1 w-100">
                                <h5><a class="f-w-700" href="#">Senior UX designer</a><span class="pull-right">5 days
                                        ago</span></h5>
                                <p>Sutherland <span>Lelystad, Netherlands </span><span><i
                                            class="fa fa-star font-warning"></i><i class="fa fa-star font-warning"></i><i
                                            class="fa fa-star font-warning"></i><i
                                            class="fa fa-star font-warning-half-o"></i><i
                                            class="fa fa-star font-warning-o"></i></span></p>
                            </div>
                        </div>
                        <p>Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no
                            smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough
                            at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed
                            no.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { data } from "@/core/data/job"
import { getImages } from "@/composables/common/getImages"

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