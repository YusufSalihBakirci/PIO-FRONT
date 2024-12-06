<template>
    <Card3 colClass="col-xl-4 col-sm-12" pre="true" cardhaderClass="card-no-border pb-0" preClass="mb-0 mt-1"
        headerTitle="true" title="Avatar Initial" cardbodyClass="avatar-showcase" desc="Use initial letter to set avatars.">
        <div class="avatars">
            <div class="avatar-intial " :class="item.class" v-for="(item, index) in initial" :key="index"><span
                    :class="item.fsclass">{{ item.img }}</span></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { initial } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>