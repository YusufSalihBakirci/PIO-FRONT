<template>
    <Card3 colClass="col-md-12" pre="true" cardClass="title-line" preClass="mt-1 mb-0" headerTitle="true"
        cardhaderClass="card-no-border pb-0" title="Vertical Validation Wizard"
        desc=" Fill up your true details and next proceed.">
        <div class="vertical-main-wizard">
            <div class="row g-3">
                <div class="col-xxl-3 col-xl-4 col-12">
                    <div class="nav flex-column header-vertical-wizard" id="wizard-tab" role="tablist"
                        aria-orientation="vertical"><a v-for="(item, index) in verticalstep" :key="index" class="nav-link"
                            :id="item.id" data-bs-toggle="pill" :href="item.href"
                            v-bind:class="{ 'active': item.id === activeclass }" role="tab" aria-controls="wizard-contact"
                            aria-selected="true">
                            <div class="vertical-wizard">
                                <div class="stroke-icon-wizard"><i class="fa-solid " :class="item.icon"></i></div>
                                <div class="vertical-wizard-content">
                                    <h5 class="f-w-600">{{ item.label }}</h5>
                                    <p>{{ item.desc }} </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xxl-9 col-xl-8 col-12">
                    <div class="tab-content" id="wizard-tabContent">
                        <WizardContact />
                        <WizardCart />
                        <WizardBanking />
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { verticalstep } from "@/core/data/forms"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const WizardContact = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/WizardContact.vue"))
const WizardCart = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/WizardCart.vue"))
const WizardBanking = defineAsyncComponent(() => import("@/components/theme/forms/formlayout/formwizard/WizardBanking.vue"))
let activeclass = ref<string>('wizard-contact-tab')
</script>