<template>
    <Card3 colClass="col-xxl-4 col-xl-5 notification box-col-12" cardhaderClass="card-no-border pb-0" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Variation Timeline"
        desc=" Use the <code>.activity-dot-primary </code>through rounded animations.">
        <ul>
            <li class="d-flex">
                <div class="activity-dot-primary"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content bg-light-primary">8th March,
                            2024 </span><span>1 day ago</span></p>
                    <h6 class="f-w-600">Updated Product<span class="dot-notification"></span></h6>
                    <p class="f-m-light">Quisque a consequat ante sit amet magna...</p>
                </div>
            </li>
            <li class="d-flex">
                <div class="activity-dot-warning"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content bg-light-primary">5th Feb, 2024
                        </span><span>Today</span></p>
                    <h6 class="f-w-600">Added Bew Items<span class="dot-notification"></span></h6><span
                        class="f-m-light">Quisque a consequat ante sit amet magna...</span>
                    <div class="recent-images">
                        <ul>
                            <li>
                                <div class="recent-img-wrap"><img src="@/assets/images/dashboard-2/1.png" alt="chair"></div>
                            </li>
                            <li>
                                <div class="recent-img-wrap"><img src="@/assets/images/dashboard-2/2.png" alt="chair"></div>
                            </li>
                            <li>
                                <div class="recent-img-wrap"><img src="@/assets/images/dashboard-2/3.png" alt="men t-shirt">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="d-flex pb-0">
                <div class="activity-dot-secondary"></div>
                <div class="w-100 ms-3">
                    <p class="d-flex justify-content-between mb-2"><span class="date-content bg-light-primary">20th Sep,
                            2024 </span><span>12:00 PM</span></p>
                    <h6 class="f-w-600">Tello just like your product<span class="dot-notification"></span></h6>
                    <p class="f-m-light">Quisque a consequat ante sit amet magna... </p>
                </div>
            </li>
        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Use the <code>.activity-dot-primary </code>through rounded animations.")
</script>