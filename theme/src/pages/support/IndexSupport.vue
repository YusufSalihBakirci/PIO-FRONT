<template>
    <Breadcrumbs main="Apps" mains="Support Ticket" title="Support Ticket" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-sm-12 " title="Support Ticket List " cardhaderClass="card-no-border pb-0"
                headerTitle="true" text="true" desc="List of ticket Opened by customers">
                <SupportTicket />
                <SupportTable />
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const SupportTicket = defineAsyncComponent(() => import("@/components/theme/support/SupportTicket.vue"))
const SupportTable = defineAsyncComponent(() => import("@/components/theme/support/SupportTable.vue"))
</script>