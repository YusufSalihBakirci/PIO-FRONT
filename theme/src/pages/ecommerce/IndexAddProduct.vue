<template>
    <Breadcrumbs main="ECommerce" mains="Add Product" title="Add Product" />
    <div class="container-fluid">
        <div class="row">
            <Card3 colClass="col-12" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Product Form">
                <div class="row g-xl-5 g-3">
                    <AddTab />
                    <AddProductContent />
                </div>
            </Card3>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const AddTab = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/AddTab.vue"))
const AddProductContent = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/AddProductContent.vue"))
</script>