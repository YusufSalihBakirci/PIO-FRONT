<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Helper Card" desc="When the<code>.show </code>class starts, dropdown appears.">
        <div class="common-flex">
            <div class="btn-group" v-for="(item, index) in helper" :key="index">
                <button class="btn  dropdown-toggle" :class="item.class" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ item.title }}</button>
                <ul class="dropdown-menu dropdown-block p-3 dark-form">
                    <li>
                        <h6 class="fs-6 fw-bold pb-2">{{ item.cardtitle }}</h6>
                        <p class="dropdown-item p-0 helper-truncate">{{ item.desc }}</p>
                    </li>
                </ul>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { helper } from "@/core/data/uikits"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>