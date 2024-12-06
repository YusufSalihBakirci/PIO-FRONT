<template>
    <div class="col-xl-6 xl-100 xl-mt-job">
        <label class="col-form-label text-end pt-0">Period:<span class="font-danger">*</span></label>
        <div class="row">
            <div class="col-sm-6">
                <div class="input-group">
                    <Datepicker class="" v-model="date" />
                </div>
            </div>
            <div class="col-sm-6 xs-mt-period">
                <div class="input-group">
                    <Datepicker class="" v-model="date1" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
let date = ref<Date | null>(null);
let date1 = ref<Date | null>(null);
</script>