<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="helper-font" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Font-Style"
        desc="To set different font-style use  <code> .f-s-*[normal/italic/oblique/initial/inherit]  </code>class.">
        <p :class="item.class" v-for="(item, index) in fontstyle" :key="index" v-html="item.title">
        </p>
    </Card3>


    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Font Weight" desc="Using  <code>.f-w-*[100/300/400/600/700/900]  </code>class set different font-weight.">
        <div class="d-flex align-items-center mb-2 gap-2" v-for="(item, index) in fontweght" :key="index">
            <div :class="item.class">
                {{ item.title }}</div>
        </div>
    </Card3>


    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Text Colors" desc="Give the text color using             <code>.font-*</code> class.">
        <div v-for="(item, index) in textcolors" :key="index">
            <div class="d-flex align-items-center mb-2 gap-2">
                <div :class="item.class" v-html="item.title">
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { fontstyle, fontweght, textcolors } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>