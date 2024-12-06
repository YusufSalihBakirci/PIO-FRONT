<template>
    <Card3 colClass="col-sm-12 col-xl-6" pre="true" preClass="mb-0 mt-1" cardhaderClass="card-no-border pb-0"
        headerTitle="true" title="Icon In Heading" ico="true" icon="icofont icofont-library me-2" titles="true"
        desc="Use the any icons  for heading. <code>[font-awesome/ico-font/feather]</code>.">
        <div class="d-flex gap-3 align-items-center list-behavior-1">
            <div class="flex-shrink-0"><img class="tab-img img-fluid" src="@/assets/images/blog/img.png" alt="home" /></div>
            <div class="flex-grow-1 ms-0">
                <p class="mb-xl-0 mb-sm-4">We provide end to end digital solutions, right from designing your
                    website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine
                    Optimization and other Internet Marketing, Renewal of Services timely and effectively.</p>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>