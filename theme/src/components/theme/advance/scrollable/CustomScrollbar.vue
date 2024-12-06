<template>
    <Card3 titleClass="mb-0" colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="f-m-light mt-1"
        headerTitle="true" title="Custom Scrollbar"
        desc="Used <code>.vertical-scroll </code>and <code>.scroll-demo </code>through design scrollbar.">
        <perfect-scrollbar class="vertical-scroll scroll-demo" :settings="settings4">
            <h5 class="pb-2">Custom Scrollbar </h5>
            <p>I'm quite interested in learning more about <em class="text-danger">custom scrollbars</em> because they are
                becoming more and more common.</p>
            <div class="scrollbar-images"><img class="img-fluid" src="@/assets/images/banner/1.jpg" alt="banner"></div>
            <p>
                There are various justifications for customizing a scrollbar. For instance, the default scrollbar can cause
                an app's user interface to look inconsistent across various operating systems. In this case, having a single
                style is helpful.</p>
            <p>
                I never had the opportunity to learn about CSS scrollbar customization, but I have always been interested in
                doing so. I'll take the chance to learn more about them and share my trip in this essay.</p>
            <p>
                One crucial point to remember is that, depending on the design, a scrollbar may operate either <em
                    class="text-danger">horizontally or vertically</em> . Additionally, it might alter when you work on a
                website that is global and operates in both left-to-right and right-to-left orientations.</p>
        </perfect-scrollbar>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const settings4 = {
    maxScrollbarLength: 60,
    suppressScrollY: true,
    suppressScrollX: false
}
</script>