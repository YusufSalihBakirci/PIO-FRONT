<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="f-m-light mt-1" headerTitle="true"
        title="Small Size Scrollbar"
        desc="Use the <code>.scrollbar-margins </code>through small scroll and image is draggable. ">
        <div class="scroll-bar-wrap">
            <perfect-scrollbar class="scrollbar-margins large-margin scroll-demo pe-0" :settings="settings">
                <div class="margin-scrollbar">
                    <h5 class="pb-2">Solution for Business Transformation</h5>
                </div>
                <p>
                    The Business Transformation Solution programme is a <em class="text-danger">multi-level engagement
                        program</em> is designed to help Small and Medium-Sized Businesses and Startups create a strong,
                    well-functioning business organization that produces the best results quickly and effectively.<img
                        class="img-fluid pt-3" src="@/assets/images/banner/3.jpg" alt="business" width="800" height="600">
                </p>
                <p>
                    The core of the programme is our internally developed <em class="text-danger">Business Management
                        model</em> , "Business Foundation & Management", which was tried and true for Indian business
                    conditions while drawing inspiration from other successful global SME Business Management techniques.
                </p>
            </perfect-scrollbar>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const settings = ref({
    maxScrollbarLength: 60
})
</script>