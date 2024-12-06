<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Rounded Dropdown"
        desc="When the<code>.show </code>class starts, dropdown appears. And <code>.rounded-pill</code> to change rounded dropdowns.">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in round" :key="index">
                <button class="btn  rounded-pill dropdown-toggle" :class="item.class" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block">
                    <li><a class="dropdown-item" href="#">Dark</a></li>
                    <li><a class="dropdown-item" href="#">Light</a></li>
                    <li><a class="dropdown-item" href="#">Lighter</a></li>
                </ul>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { round } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>