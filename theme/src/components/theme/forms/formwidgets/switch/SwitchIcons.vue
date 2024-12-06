<template>
    <Card3 colClass="col-md-12" cardbodyClass="common-flex switch-wrapper icon-switch" pre="true" preClass="mt-1 mb-0"
        cardhaderClass="card-no-border pb-0" headerTitle="true" title="Switch With Icons"
        desc=" Use the<code>.icon-state</code> class through visible icons in switches.">
        <div class="d-flex" v-for="(item, index) in switchsize" :key="index">
            <label class="col-form-label m-r-10">{{ item.label }}</label>
            <div class="flex-grow-1 icon-state" :class="item.class">
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

</script>