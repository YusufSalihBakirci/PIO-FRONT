<template>
    <Card3 colClass="col-sm-6" cardhaderClass="card-no-border pb-0" cardClass="title-line" cardbodyClass="btn-showcase"
        headerTitle="true" title="Toastr with Icon">
        <button class="btn btn-success me-2" type="button" @click="success_with_icon" variant="success">Success</button>

        <button class="btn btn-info me-2 text-white" type="button" @click="info_with_icon" variant="info">Info</button>

        <button class="btn btn-danger me-2" type="button" @click="error_with_icon" variant="danger">Error</button>

        <button class="btn btn-info me-2 text-white" type="button" @click="info_with_cancle" variant="info">Cancle</button>
    </Card3>
</template>
<script lang="ts" setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

function success_with_icon() {
    toast.success(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function info_with_icon() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function error_with_icon() {
    toast.error(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
function info_with_cancle() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored',
    });
}
</script>