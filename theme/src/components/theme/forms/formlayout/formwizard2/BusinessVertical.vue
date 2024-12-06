<template>
    <Card3 colClass="col-md-12" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Business horizontal wizard">
        <div class="horizontal-wizard-wrapper vertical-options vertical-variations">
            <div class="row g-3">
                <div class="col-xl-3 main-horizontal-header">
                    <div class="nav nav-pills horizontal-options" id="business-n-wizard-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link "
                            v-bind:class="{ 'active': item.id === activeclass }" v-for="(item, index) in businessvertical"
                            :key="index" :id="item.id" data-bs-toggle="pill" :href="item.href" role="tab"
                            aria-controls="business-n-info" aria-selected="true">
                            <div class="horizontal-wizard">
                                <div class="stroke-icon-wizard"><span>{{ item.num }}</span></div>
                                <div class="horizontal-wizard-content business-wizard">
                                    <h5 class="f-w-600">{{ item.label }}</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xl-9">
                    <div class="tab-content dark-field" id="business-n-wizard-tabContent">
                        <ChooseAccount element="business-n-info" />
                        <BusinessSettings element="business-bank-wizard" />
                        <ContactDetails element="business-inquiry-wizard" />
                        <PayDetails element="business-pay-wizard" />
                        <div class="tab-pane fade" id="business-successful-wizard" role="tabpanel"
                            aria-labelledby="business-successful-wizard-tab">
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
import { businessvertical } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ChooseAccount = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/ChooseAccount.vue"))
const BusinessSettings = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/BusinessSettings.vue"))
const ContactDetails = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/ContactDetails.vue"))
const PayDetails = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard2/PayDetails.vue"))
const SuccessfulWizard = defineAsyncComponent(() => import("@/components/common/SuccessfulWizard.vue"))
let desc = ref<string>("Fill up your true details and next proceed.")
let activeclass = ref<string>('business-n-info-tab')
</script>
