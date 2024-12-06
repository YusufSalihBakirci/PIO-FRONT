<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Direction Sweetalert" desc=" Warning for imaginary files.">
        <div class="common-flex">
            <button class="btn btn-info text-light sweet-17" type="button" @click="topLeft()">Top Left</button>
            <button class="btn btn-primary sweet-16" type="button" @click="topRight()">Top Right</button>
            <button class="btn btn-secondary sweet-18" type="button" @click="bottomLeft()">Bottom Left</button>
            <button class="btn btn-warning text-light sweet-19" type="button" @click="bottomRight()">Bottom Right</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("A text message with an automatic timer")
function topLeft() {
    Swal.fire({
        position: 'top-start',
        icon: 'error',
        title: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500
    })
}
function topRight() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
function bottomLeft() {
    Swal.fire({
        position: 'bottom-start',
        icon: 'info',
        html:
            'You can use, ' +
            '<a class="font-primary f-18" href="//sweetalert2.github.io" target="_blank">Alerts</a> ' +
            'and other HTML tags',
        showConfirmButton: false,
    })
}
function bottomRight() {
    Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}
</script>