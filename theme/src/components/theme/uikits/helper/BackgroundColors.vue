<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Background colors"
        desc="Using any component to add background color using <code>.bg-* </code>&  <code>.alert-light-* </code>class.">
        <div class="row g-3">
            <div class="col-sm-6 col-xl-4" v-for="(items, index) in backgroundcolor" :key="index">
                <div class="border-wrapper h-100 border">
                    <h5 class="f-w-600 mb-3">{{ items.title }}</h5>
                    <div class="d-flex align-items-center mb-2 gap-2" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box" :class="item.class"></div><span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-4">
                <div class="border-wrapper h-100 border">
                    <h5 class="f-w-600 mb-3">Extended Background Colors</h5>
                    <div class="d-flex align-items-center mb-2 gap-2">
                        <div class="helper-box light-card"></div><span>.light-card</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <div class="helper-box light-background border"></div><span>.light-background</span>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { backgroundcolor } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>