<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="With Disabled" desc="You can set disabled page with <code>.disabled </code>class.">
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-secondary">
                <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                <li class="page-item"> <a class="page-link" href="javascript:void(0)">2 </a></li>
                <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1">... </a>
                </li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">9</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">10 </a></li>
            </ul>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>