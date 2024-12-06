<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Pagination with Active and Disable "
        desc="Use  <code>.disabled  </code>for links that appear un-clickable and<code> .active  </code> to indicate the current page.">
        <nav aria-label="Page navigation example">
            <ul class="pagination pagination-secondary">
                <li class="page-item disabled"> <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"> <a class="page-link" href="javascriptL:void(0)">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                <li class="page-item active"><a class="page-link" href="javascript:void(0)">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
            </ul>
        </nav>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>