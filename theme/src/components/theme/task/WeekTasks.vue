<template>
    <div class="fade tab-pane" id="pills-weekly" role="tabpanel" aria-labelledby="pills-weekly-tab">
        <div class="card mb-0">
            <div class="card-header d-flex  card-no-border pb-0">
                <h3 class="mb-0">This Week Tasks</h3><a href="javascript:void(0)" @click="printWindow()"><vue-feather
                        class="me-2" type="printer"></vue-feather>Print</a>
            </div>
            <div class="card-body">
                <div class="details-bookmark text-center"><span>No tasks found.</span></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
function printWindow() {
    window.print();
}
</script>