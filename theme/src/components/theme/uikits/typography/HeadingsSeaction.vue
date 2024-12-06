<template>
    <Card3 colClass="col-xxl-8 col-xl-12" cardhaderClass="card-no-border pb-0" titleClass="mb-0" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Headings" :desc="desc">
        <div class="table-responsive custom-scroll">
            <table class="table mb-0 typography-table">
                <thead>
                    <tr>
                        <th class="pt-0">Code</th>
                        <th class="pt-0">Font-Size</th>
                        <th class="pt-0">Heading</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in heading" :key="index">
                        <td v-html="item.code"></td>
                        <td v-html="item.front">

                        </td>
                        <td v-html="item.head">

                        </td>
                    </tr>

                    <tr>
                        <td class="pb-0"><code>&lt;h6&gt;&lt;/h6&gt;</code></td>
                        <td class="pb-0">
                            <h6 class="mb-0">1rem</h6>
                        </td>
                        <td class="pb-0">
                            <h5><span> Heading 6 </span></h5>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { heading } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.")
</script>