<template>
    <Card3 colClass="col-xxl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Justify Tabs" desc="To set the justify-tabs use the <code>justify-content-* </code> class.">
        <div class="card-header d-flex justify-content-between align-items-center flex-wrap gap-2 pb-2 p-0">
            <p class="mb-0"><em class="text-danger">ADMIRO Profiles For New Employees:</em></p>
            <ul class="nav nav-pills nav-warning" id="j-pills-tab" role="tablist">
                <li class="nav-item"><a class="nav-link" id="j-pills-web-designer-tab" data-bs-toggle="pill"
                        href="#j-pills-web-designer" role="tab" aria-controls="j-pills-web-designer" aria-selected="true">
                        Web designer</a></li>
                <li class="nav-item"><a class="nav-link active" id="j-pills-UX-designer-tab" data-bs-toggle="pill"
                        href="#j-pills-UX-designer" role="tab" aria-controls="j-pills-UX-designer" aria-selected="false">UX
                        designer</a></li>
                <li class="nav-item"><a class="nav-link" id="j-pills-IOT-developer-tab" data-bs-toggle="pill"
                        href="#j-pills-IOT-developer" role="tab" aria-controls="j-pills-IOT-developer"
                        aria-selected="false">IOT developer</a></li>
            </ul>
        </div>
        <div class="card-body px-0 pb-0">
            <div class="tab-content" id="j-pills-tabContent">
                <div class="tab-pane fade" :id="items.ids" role="tabpanel" aria-labelledby="j-pills-web-designer-tab"
                    v-for="(items, index) in justifys" :key="index" :class="items.active == true ? 'show active' : ''">
                    <div class="designer-details">
                        <div class="designer-profile" v-for="(item, index) in items.children" :key="index">
                            <div class="designer-wrap"><img class="designer-img" :src="getImages(item.img)" alt="profile">
                                <div class="designer-content">
                                    <h6>{{ item.name }}</h6>
                                    <p> {{ item.phone }}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
import { justifys } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>