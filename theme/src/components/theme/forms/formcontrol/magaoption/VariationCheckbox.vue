<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Variation checkbox "
        desc=" We can create any creative design by using <code>(type='checkbox')</code>attribute.">
        <div class="row g-3">
            <div class="col-xl-4 col-md-5">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
                    <h5 class="sub-title">Which of the following activities do you enjoy doing in your free time?
                    </h5>
                    <div class="payment-wrapper" v-for="(item, index) in activities" :key="index">
                        <div class="payment-first">
                            <div class="form-check checkbox" :class="item.class">
                                <input class="form-check-input" :id="item.id" type="checkbox" :checked="item.checked">
                                <label class="form-check-label mb-0" :for="item.id">{{ item.label }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-md-7">
                <div class="card-wrapper border rounded-3 h-100 checkbox-checked">
                    <section class="main-upgrade">
                        <div><i class="fa-solid fa-rocket"></i>
                            <h5 class="mb-2">It&apos;s time to <span class="txt-primary">upgrade</span></h5>
                            <p class="text-muted mb-2">Select the theme that best suits your requirements, and
                                you're ready to go!</p>
                        </div>
                        <div class="variation-box">
                            <div class="selection-box" v-for="(item, index) in upgrade" :key="index">
                                <input :id="item.id" type="checkbox" :checked="item.checked">
                                <div class="custom--mega-checkbox">
                                    <ul class="d-flex flex-column">
                                        <li>{{ item.label }}</li>
                                        <li class="text-primary">{{ item.sale }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { activities, upgrade } from "@/core/data/forms"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>