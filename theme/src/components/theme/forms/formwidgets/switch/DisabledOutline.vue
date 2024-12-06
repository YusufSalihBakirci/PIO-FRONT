<template>
    <Card3 colClass="col-md-6" cardbodyClass="common-flex " pre="true" cardhaderClass="card-no-border pb-0"
        preClass="mt-1 mb-0" headerTitle="true" title="Disabled outline switch"
        desc="Use the <code>.switch-outline </code> class through created outline. ">
        <div class="d-flex" v-for="(item, index) in disable" :key="index">
            <div class="flex-grow-1 text-end icon-state switch-outline">
                <label class="switch mb-0">
                    <input type="checkbox"><span class="switch-state " :class="item.class"></span>
                </label>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { disable } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>