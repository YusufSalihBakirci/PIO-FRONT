<template>
    <Card3 colClass="col-sm-12 col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Icon With Badge" desc="Use icons with the help of <code>.badge </code>class.">
        <div class="badge-spacing"><a class="badge b-ln-height " :class="item.class" v-for="(item, index) in icon"
                :key="index" href="#"><i :class="item.title"></i></a>
        </div>
    </Card3>


    <Card3 colClass="col-sm-12 col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Icon With Pills"
        desc="Set rounded icons badge with help of  <code>.rounded-pill  </code>class.">
        <div class="badge-spacing"><a class="badge rounded-circle p-2" :class="item.class" v-for="(item, index) in icon"
                :key="index" href="#"><i :class="item.title"></i></a>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { icon } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>