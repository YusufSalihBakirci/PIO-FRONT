<template>
    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0" titles="true"
        headerTitle="true" title="Advance Sweetalert" desc="Print the title with text.">
        <div class="common-flex">
            <button class="btn btn-warning text-light sweet-12" type="button" @click="questionsAlert()">Questions
                state</button>
            <button class="btn btn-secondary sweet-13" type="button" @click="toastAlert()">Toast Alert</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { defineAsyncComponent, } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
function questionsAlert() {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}
function toastAlert() {
    Toast.fire({
        icon: "success",
        title: "Signed in successfully"
    });
}
</script>