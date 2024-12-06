<template>
    <div class="col-xl-9 xl-60 box-col-12">
        <div class="card">
            <div class="job-search">
                <div class="card-body">
                    <div class="d-flex"><img class="img-40 img-fluid m-r-20" :src="getImages(job.image)" alt="">
                        <div class="flex-grow-1">
                            <h5>
                                <router-link class="f-w-700" :to="{ name: 'jobdetails', params: { id: job.id } }">{{
                                    job.title
                                }}</router-link>
                                <span class="pull-right">
                                    <router-link :to="{ name: 'jobapply', params: { id: job.id } }" class="btn btn-primary"
                                        type="button">Apply </router-link></span>
                            </h5>
                            <p>{{ job.company }} <span>{{ job.city }}, {{ job.country }} </span> <span
                                    v-html="stars(job.stars)"></span></p>

                        </div>
                    </div>
                    <div class="job-description">
                        <h4 class="f-w-600 pb-1">Job Description</h4>
                        <p v-html="job.description"></p>
                    </div>
                    <div class="job-description">
                        <h4 class="f-w-600 pb-1">Qualifications </h4>
                        <ul>
                            <li v-for="(r, index) in job.resp" :key="index" v-text="r.title"></li>
                        </ul>
                    </div>
                    <div class="job-description">
                        <h4 class="f-w-600 pb-1">Agency experience</h4>
                        <ul>
                            <li v-for="(rq, index) in job.reqs" :key="index" v-text="rq.title"></li>
                        </ul>
                    </div>
                    <div class="job-description">
                        <h4 class="f-w-600 pb-1">Perks</h4>
                        <ul>
                            <li v-for="(ski, index) in job.skills" :key="index" v-text="ski.title"></li>
                        </ul>
                    </div>
                    <div class="job-description">
                        <button class="btn btn-primary me-1" type="button"><span><i class="fa fa-check"></i></span> Save
                            this
                            job</button>
                        <button class="btn btn-primary" type="button"><span><i class="fa fa-share-alt"></i></span>
                            Share</button>
                    </div>
                </div>
            </div>
        </div>
        <SimilarJobs />
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { jobs } from "@/core/data/job"
import { getImages } from "@/composables/common/getImages"
import { useRouter } from 'vue-router'
const SimilarJobs = defineAsyncComponent(() => import("@/components/theme/job/details/SimilarJobs.vue"))
const router = useRouter()
const job: any = jobs.find(job => {
    if (parseInt(router.currentRoute._rawValue.params.id) === job.id)
        return job;
})

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