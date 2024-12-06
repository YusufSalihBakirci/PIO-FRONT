<template>
    <div class="tab-pane fade" id="advance-product" role="tabpanel" aria-labelledby="advance-product-tab">
        <div class="sidebar-body advance-options">
            <ul class="nav nav-tabs border-tab mb-0" id="advance-option-tab" role="tablist">
                <li class="nav-item"><a class="nav-link active" id="manifest-option-tab" data-bs-toggle="tab"
                        href="#manifest-option" role="tab" aria-controls="manifest-option"
                        aria-selected="true">Inventory</a></li>
                <li class="nav-item"><a class="nav-link" id="additional-option-tab" data-bs-toggle="tab"
                        href="#additional-option" role="tab" aria-controls="additional-option"
                        aria-selected="false">Additional Options</a></li>
                <li class="nav-item"><a class="nav-link" id="dropping-option-tab" data-bs-toggle="tab"
                        href="#dropping-option" role="tab" aria-controls="dropping-option"
                        aria-selected="false">Shipping</a></li>
            </ul>
            <AdvanceTabContent />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const AdvanceTabContent = defineAsyncComponent(() => import("@/components/theme/ecommerce/addproduct/AdvanceTabContent.vue"))
</script>