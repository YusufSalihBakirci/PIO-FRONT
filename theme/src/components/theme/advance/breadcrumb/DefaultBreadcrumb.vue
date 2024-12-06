<template>
     <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
          title="Default Breadcrumb" desc="You can set breadcrumb using<code>.breadcrumb</code> class.">
          <nav :class="item.class" v-for="(item, index) in breadcrumb" :key="index">
               <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item" href="javascript:void(0)">{{ item.main }}</li>
                    <li class="breadcrumb-item " :class="item.active" href="javascript:void(0)">{{ item.title }}</li>
                    <li class="breadcrumb-item " v-if="item.mains" :class="item.actives">{{
                         item.mains }}</li>
               </ol>
          </nav>
     </Card3>
</template>
<script lang="ts" setup>
import { breadcrumb } from "@/core/data/advance"
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>