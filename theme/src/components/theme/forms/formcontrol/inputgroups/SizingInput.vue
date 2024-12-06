<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0"
        cardbodyClass="card-wrapper input-group-wrapper" preClass="mt-1 mb-0" headerTitle="true" title="Sizing"
        desc="Add the relative form sizing classes to the<code> .input-group</code>">
        <div class="input-group " :class="item.class" v-for="(item, index) in size" :key="index"> <span
                class="input-group-text" :id="item.id">{{ item.label }}</span>
            <input class="form-control" type="text" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm">
        </div>

    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { size } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

</script>