<template>
    <Card3 colClass="col-md-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Rounded Pagination " desc="Used in rounded pagination   <code>.rounded-circle      </code>class. ">
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-secondary gap-2">
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)"
                        aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                <li class="page-item"> <a class="page-link rounded-circle" href="javascript:void(0)">1</a></li>
                <li class="page-item"> <a class="page-link rounded-circle" href="javascript:void(0)">2</a></li>
                <li class="page-item active"><a class="page-link rounded-circle" href="javascript:void(0)"> ...</a></li>
                <li class="page-item"> <a class="page-link rounded-circle" href="javascript:void(0)">20</a></li>
                <li class="page-item"><a class="page-link rounded-circle" href="javascript:void(0)" aria-label="Next"><span
                            aria-hidden="true">&raquo;</span></a></li>
            </ul>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>