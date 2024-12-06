<template>
  <Card3 colClass="col-lg-4 col-md-12" cardhaderClass="card-no-border pb-0" v-for="(items, index) in draggable"
    :key="index" pre="true" preClass="mt-1 mb-0" headerTitle="true" :title="items.title" :desc="items.desc">
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, index) in items.children" :key="index"
        :class="item.activeclass == true ? 'active bg-warning-light' : ''"> <i class="fa-solid fa-arrow-right me-2"></i>{{
          item.title }}</li>
    </ul>
  </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { draggable } from "@/core/data/advance"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>