<template>
    <Card3 colClass="col-md-12" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Business horizontal wizard">
        <div class="horizontal-wizard-wrapper vertical-variations">
            <div class="row g-3">
                <div class="col-12 main-horizontal-header">
                    <div class="nav nav-pills horizontal-options" id="vertical-n-wizard-tab" role="tablist"
                        aria-orientation="vertical">
                        <a class="nav-link " v-bind:class="{ 'active': item.id === activeclass }" :id="item.id"
                            data-bs-toggle="pill" v-for="(item, index) in business" :key="index" :href="item.href"
                            role="tab" aria-controls="wizard-n-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><span>{{ item.num }}</span></div>
                                <div class="horizontal-wizard-content business-wizard">
                                    <h5 class="f-w-600">{{ item.label }}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-12">
                    <div class="tab-content dark-field" id="vertical-n-wizard-tabContent">
                        <ChooseAccount />
                        <BusinessSettings />
                        <ContactDetails />
                        <PayDetails />
                        <div class="tab-pane fade" id="successful-n-wizard" role="tabpanel"
                            aria-labelledby="successful-n-wizard-tab">
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
import { business } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ChooseAccount = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/ChooseAccount.vue"))
const BusinessSettings = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/BusinessSettings.vue"))
const ContactDetails = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/ContactDetails.vue"))
const PayDetails = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/PayDetails.vue"))
const SuccessfulWizard = defineAsyncComponent(() => import("@/components/common/SuccessfulWizard.vue"))
let activeclass = ref<string>('wizard-n-info-tab')
</script>