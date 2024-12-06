<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Outline Alert"
        desc="Use the <code>.border-*  </code>utility class to quickly provide matching border and border-width within any alert.">
        <div class="alert text-primary border-primary alert-dismissible fade show" role="alert"><i
                class="fa-regular fa-clock"></i>
            <p>One of <strong>YouTube's</strong>most crucial ranking factors is Watch Time.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <div class="alert text-success border-success outline-2x alert-dismissible fade show alert-icons mb-0" role="alert">
            <i class="fa-regular fa-thumbs-up"></i>
            <p><b> Well done! </b>You successfully read this important message.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </Card3>

    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="text-dark" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Alert with Icons "
        desc="Use the <code>.dismiss-text  </code>class to add dismiss text instead of icon">
        <div class="alert border-warning alert-dismissible fade show p-0" role="alert">
            <div class="alert-arrow bg-warning"> <i class="fa-regular fa-clock"> </i></div>
            <p class="mb-0">Your time over after <strong class="text-dark">5 </strong>minute</p>
            <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert" aria-label="Close"> <span
                    class="bg-warning text-white px-3 py-1" aria-hidden="true">Check</span></button>
        </div>
        <div class="alert border-danger alert-dismissible fade show p-0 mb-0" role="alert">
            <div class="alert-arrow bg-danger"> <i class="fa-regular fa-heart"></i></div>
            <p class="mb-0">Oh snap! change a few things <strong class="text-dark">Notification check </strong></p>
            <button class="p-0 border-0 me-2 ms-auto" type="button" data-bs-dismiss="alert" aria-label="close"><span
                    class="bg-danger text-white px-3 py-1" aria-hidden="true">Alert </span></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>