<template>
    <Card3 colClass="col-sm-12 col-xl-6 mb-lg-3 mb-0" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" cardbodyClass="badge-heading" title="Badge Headings"
        desc="Set the badge with html heading h1 through h6 using <code>.badge </code>class.">
        <div v-for="(item, index) in badgeheadings" :key="index" v-html="item.title">

        </div>
    </Card3>


    <Card3 colClass="col-sm-12 col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Badges With Buttons"
        desc="Add icons as a badge inside the button with the help of <code>.btn</code> class.">
        <div class="badge-spacing flex-column align-items-start">
            <button class="btn  d-flex align-items-center" :class="item.class" v-for="(item, index) in buttons" :key="index"
                type="button">{{ item.title }} <span class="badge rounded-circle btn-p-space btn-light text-dark ms-2"><i
                        :class="item.icon"></i></span></button>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { badgeheadings, buttons } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>