<template>
    <Card3 colClass="col-xl-4 col-sm-6" cardbodyClass="common-flex flex-column switch-wrapper"
        cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true" title="Icons switch"
        desc="Use <code>.switch-state </code>& <code>icon-state   </code>through defined icons switches.">
        <div class="d-flex" v-for="(item, index) in iconswich" :key="index">
            <div class=" icon-state">
                <label class="switch mb-0">
                    <input type="checkbox" :checked="item.checked"><span class="switch-state " :class="item.class"></span>
                </label>
            </div>
            <label class="col-form-label ms-3">{{ item.label }}</label>
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { iconswich } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>