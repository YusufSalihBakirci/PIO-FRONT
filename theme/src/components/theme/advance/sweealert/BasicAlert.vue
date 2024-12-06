<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" headerTitle="true"
        title="Basic Example" desc="Print the basic message.">
        <div class="common-flex">
            <button class="btn btn-primary sweet-1" type="button" @click="basicAlert()">Click it!</button>
            <button class="btn btn-secondary sweet-2" type="button" @click="titleAlert()">Title with text!</button>
            <button class="btn btn-info text-light sweet-4" type="button"
                @click="informationalAlert()">Informational</button>
            <button class="btn btn-warning text-light sweet-5" type="button" @click="warningAlert()">Warning alert!</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
function basicAlert() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}
function titleAlert() {
    Swal.fire({
        title: "It's Magic!",
        text: 'Thank you for visiting Admiro theme',
    });
}
function informationalAlert() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
}
function warningAlert() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#C42A02",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}
</script>