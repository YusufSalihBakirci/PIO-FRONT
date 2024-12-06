<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Borders Style"
        desc="Use of any component to give the different styles of border using  <code>border-*radius/border-color/border-width  </code>class.">
        <div class="row g-3">
            <div class="col-xxl-3 col-sm-6" v-for="(items, index) in borders" :key="index">
                <div class="border-wrapper h-100 bg-light font-dark dark-helper border">
                    <h5 class="f-w-600 mb-3">{{ items.title }}</h5>
                    <div class="d-flex align-items-center mb-2 gap-2" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box" :class="item.class"></div><span>{{ item.title }}</span>
                    </div>

                </div>
            </div>
            <div class="col-xxl-3 col-sm-6" v-for="(items, index) in color" :key="index">
                <div class="border-wrapper bg-light font-dark h-100 dark-helper border">
                    <h5 class="f-w-600 mb-3">{{ items.title }}</h5>
                    <div class="d-flex align-items-center mb-2 gap-2" v-for="(item, index) in items.children" :key="index">
                        <div class="helper-box helper-text border" :class="item.class">A</div>
                        <span>{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { color, borders } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>(" Use the different styles of borders like: <code>border radius/border-color/border-width</code>. Use of any components.")
</script>