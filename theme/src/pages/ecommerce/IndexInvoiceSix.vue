<template>
    <Breadcrumbs main="ECommerce" mains="Invoice-6" title="Invoice-6" />
    <div class="container">
        <div class="row">
            <Card3 colClass="col-sm-12">
                <div class="invoice">
                    <div>
                        <InvoiceHeader />
                        <hr />
                        <InvoiceProfile />
                        <InvoiceTable />
                    </div>

                    <div class="col-sm-12 text-center mt-3">
                        <button class="btn btn btn-primary me-2" type="button" @click="printWindow()">Print</button>
                        <button class="btn btn-secondary" type="button">Cancel</button>
                    </div>
                </div>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const InvoiceHeader = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice6/InvoiceHeader.vue"))
const InvoiceProfile = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice6/InvoiceProfile.vue"))
const InvoiceTable = defineAsyncComponent(() => import("@/components/theme/ecommerce/invoice/invoice6/InvoiceTable.vue"))
function printWindow() {
    window.print();
}
</script>