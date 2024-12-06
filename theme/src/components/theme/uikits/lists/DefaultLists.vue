<template>
    <Card3 colClass="col-xxl-4 col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0"
        headerTitle="true" title="Default Lists"
        desc="Use the           <code>.list-group </code>define the list of items. and used <code>.list-group-item </code>to indicate the current content.">
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) in defaults" :key="index"> <i
                    class="iconly-Arrow-Right-3 icli"></i>{{ item.title }}</li>

        </ul>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { defaults } from "@/core/data/uikits"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>