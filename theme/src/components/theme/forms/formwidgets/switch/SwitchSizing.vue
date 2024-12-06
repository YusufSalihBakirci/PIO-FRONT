<template>
    <Card3 colClass="col-md-12" cardbodyClass="common-flex switch-wrapper icon-switch" cardhaderClass="card-no-border pb-0" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Switch sizing"
        desc="Use the <code>.switch-sm</code> and <code>.switch-lg </code>class through defined switch sizing.">
        <div class="d-flex" v-for="(item, index) in switchsize" :key="index">
            <label class="col-form-label m-r-10">{{ item.label }}</label>
            <div class="flex-grow-1 " :class="item.class">
                <label class="switch">
                    <input type="checkbox" :checked="item.checked" :disabled="item.disabled"><span
                        class="switch-state"></span>
                </label>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { switchsize } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>(" Use the <code>.switch-sm</code> and <code>.switch-lg </code>class through defined switch sizing.")
</script>