<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="With  Icons" desc="Add icons inside the pagination">
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-success">
                <li class="page-item active"><a class="page-link" href="#" aria-label="Previous"><span
                            aria-hidden="true">&laquo;</span></a></li>
                <li class="page-item"> <a class="page-link" href="#">1</a></li>
                <li class="page-item"> <a class="page-link" href="#">2</a></li>
                <li class="page-item"> <a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span
                            aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>