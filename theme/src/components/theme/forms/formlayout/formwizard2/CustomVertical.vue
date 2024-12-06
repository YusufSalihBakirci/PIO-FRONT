<template>
    <Card3 colClass="col-md-12" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Custom vertical wizard">
        <div class="horizontal-wizard-wrapper vertical-options">
            <div class="row g-3">
                <div class="col-md-3 main-horizontal-header">

                    <div class="nav nav-pills horizontal-options" id="vertical-wizard-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link "
                            v-bind:class="{ 'active': item.id === activeclass }" :id="item.id"
                            v-for="(item, index) in vertical" :key="index" data-bs-toggle="pill" :href="item.href"
                            role="tab" aria-controls="wizard-v-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><i class="fa-solid " :class="item.icon"></i></div>
                                <div class="horizontal-wizard-content">
                                    <h5 class="f-w-600">{{ item.label }}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content dark-field" id="vertical-wizard-tabContent">
                        <WizardInfo element="wizard-v-info" />
                        <BankWizard element="bank-v-wizard" />
                        <InquiryWizard element="inquiry-v-wizard" />
                        <div class="tab-pane fade" id="successful-v-wizard" role="tabpanel"
                            aria-labelledby="successful-v-wizard-tab">
                            <SuccessfulWizard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { vertical } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const WizardInfo = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/WizardInfo.vue"))
const BankWizard = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/BankWizard.vue"))
const InquiryWizard = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/InquiryWizard.vue"))
const SuccessfulWizard = defineAsyncComponent(() => import("@/components/common/SuccessfulWizard.vue"))
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('wizard-v-info-tab')
</script>