<template>
    <div class="col-xl-3 xl-40 box-col-12">
        <div class="md-sidebar"><a class="btn btn-primary email-aside-toggle md-sidebar-toggle"
                @click="collapseFilter()">Job filter</a>
            <div class="md-sidebar-aside job-sidebar" :class="filtered ? 'open' : ''">
                <div class="default-according style-1 faq-accordion job-accordion">
                    <div class="accordion" id="accordionExample">
                        <FilterView />
                        <LocationView />
                        <JobTitle />
                        <IndustryView />
                        <SpecificSkills />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
const FilterView = defineAsyncComponent(() => import("@/components/theme/job/jobfilter/FilterView.vue"))
const LocationView = defineAsyncComponent(() => import("@/components/theme/job/jobfilter/LocationView.vue"))
const JobTitle = defineAsyncComponent(() => import("@/components/theme/job/jobfilter/JobTitle.vue"))
const IndustryView = defineAsyncComponent(() => import("@/components/theme/job/jobfilter/IndustryView.vue"))
const SpecificSkills = defineAsyncComponent(() => import("@/components/theme/job/jobfilter/SpecificSkills.vue"))
let filtered = ref<boolean>(false)
function collapseFilter() {
    filtered.value = !filtered.value;
}
</script>