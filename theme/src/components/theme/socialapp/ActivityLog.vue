<template>
    <Card3 colClass="col-sm-12" headerTitle="true" titles="true" title="Activity Log">
        <div class="activity-log">
            <div class="my-activity" v-for="(item, index) in log" :key="index">
                <h5 class="f-w-700 mb-3">{{ item.title }}</h5>
                <p v-for="(items, index) in item.children" :key="index"><span><vue-feather class="m-r-20"
                            :type="items.icon"></vue-feather> </span>{{ items.title }}</p>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from "vue"
import { log } from "@/core/data/sociall-app"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>