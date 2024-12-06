<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Dropdown Sizing"
        desc="When the<code>.show</code>class starts, dropdown appears. And<code>[.btn-lg/.btn-sm]</code>class through button size changed.">
        <div class="common-flex">
            <div class="btn-group">
                <button class="btn btn-info light btn-lg dropdown-toggle text-white" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Large button</button>
                <ul class="dropdown-menu dropdown-block">
                    <li> <a class="dropdown-item" href="#">Small button</a></li>
                    <li><a class="dropdown-item" href="#">Medium button </a></li>
                    <li><a class="dropdown-item" href="#">Large button </a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Very large button </a></li>
                </ul>
            </div>
            <div class="btn-group">
                <button class="btn btn-dark light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Small button</button>
                <ul class="dropdown-menu dropdown-block">
                    <li><a class="dropdown-item" href="#">Small button</a></li>
                    <li><a class="dropdown-item" href="#">Very small button</a></li>
                    <li><a class="dropdown-item" href="#">Extra small button</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Extra extra small</a></li>
                </ul>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>