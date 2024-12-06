<template>
    <Card3 colClass="col-sm-12 col-xl-12" cardhaderClass="card-no-border pb-0" cardbodyClass="dropdown-basic me-0"
        pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Split Dropdown" desc="When the<code>.show </code>class starts, dropdown appears. And 
                      split the dropdown <code>.dropdown-toggle-split  ">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in split" :key="index">
                <button class="btn" :class="item.class" type="button">{{ item.title }}</button>
                <div class="dropdown separated-btn">
                    <button class="btn " :class="item.btn" type="button"><i class="icofont icofont-arrow-down"></i></button>
                    <div class="dropdown-content"><a href="#" v-for="(items, index) in item.children" :key="index">{{
                        items.title }}</a></div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { split } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>