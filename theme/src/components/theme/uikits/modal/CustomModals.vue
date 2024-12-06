<template>
    <Card3 colClass="col-12" cardhaderClass="card-no-border pb-0" titleClass="mb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Admiro custom modals" desc="Custom Modal make by Admiro.">
        <div class="row g-3">
            <ProfileModal />
            <ResultModal />
            <BalanceModal />
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { badges } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const ProfileModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/ProfileModal.vue"))
const ResultModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/ResultModal.vue"))
const BalanceModal = defineAsyncComponent(() => import("@/components/theme/uikits/modal/modals/BalanceModal.vue"))
</script>