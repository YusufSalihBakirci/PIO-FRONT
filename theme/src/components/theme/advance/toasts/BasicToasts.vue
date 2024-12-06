<template>
    <Card3 colClass="col-md-6" cardhaderClass="card-no-border pb-0" cardbodyClass="btn-showcase" headerTitle="true"
        title="Toasts">
        <button class="btn btn-success me-2" type="button" @click="success" variant="success">Success</button>

        <button class="btn btn-info me-2 text-white" type="button" @click="info" variant="info">Info</button>

        <button class="btn btn-danger me-2" type="button" @click="error" variant="danger">Error</button>
    </Card3>
</template>
<script lang="ts" setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

function success() {
    toast.success(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
function info() {
    toast.info(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
function error() {
    toast.error(' New order has been placed ', {
        hideProgressBar: true, autoClose: 2000, theme: 'colored', position: 'top-right'
    });
}
</script>