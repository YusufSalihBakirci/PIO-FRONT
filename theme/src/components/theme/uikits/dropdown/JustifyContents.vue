<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="dropdown-basic m-0" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Justify Contents"
        desc="Use the <code>(text-start/text-center/text-end)</code> to change dropdown texts. ">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in justify" :key="index">
                <button class="btn dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block " :class="item.btn">
                    <li v-for="(items, index) in item.children" :key="index"><a class="dropdown-item" href="#">{{
                        items.title }}</a></li>

                </ul>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { justify } from "@/core/data/uikits"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>