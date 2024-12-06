<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" cardbodyClass="progress-showcase row" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Multiple bars"
        desc="To set the multiple progress-bar with the help of <code>progress </code>class.">
        <div class="col">
            <div class="progress">
                <div class="progress-bar bg-primary" role="progressbar" style="width: 30%" aria-valuenow="30"
                    aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-secondary" role="progressbar" style="width: 20%" aria-valuenow="20"
                    aria-valuemin="0" aria-valuemax="100"></div>
                <div class="progress-bar bg-success" role="progressbar" style="width: 15%" aria-valuenow="15"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress">
                <div class="progress-bar " :class="item.class" v-for="(item, index) in multiple" :key="index"
                    role="progressbar" style="width: 10%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        </div>
    </Card3>


    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Steps Bar " desc="To set the number steps progress bar use  <code>.position-wrapper </code>class. ">
        <div class="position-relative m-3 progress-number">
            <div class="position-relative m-4 progress-number">
                <div class="progress progress-wrapper">
                    <div class="progress-bar" role="progressbar" aria-label="Progress" style="width: 50%;"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button
                    class="position-absolute top-0 start-0 translate-middle btn-sm btn-primary rounded-circle text-light"
                    type="button">1</button>
                <button
                    class="position-absolute top-0 start-50 translate-middle btn-sm btn-primary rounded-circle text-light"
                    type="button">2</button>
                <button class="progress-btn position-absolute top-0 start-100 translate-middle btn-sm rounded-circle"
                    type="button">3</button>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { multiple } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>