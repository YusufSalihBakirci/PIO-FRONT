<template>
    <Card3 colClass="col-xl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Unique Sweetalert" desc="Print the informational message.">
        <div class="common-flex">
            <button class="btn btn-danger sweet-7" type="button" @click="dangerAlert()">Danger mode</button>
            <button class="btn btn-warning text-light sweet-6" type="button" @click="animationAlert()">Animation
                Alert</button>
            <button class="btn btn-primary sweet-14" type="button" @click="autoAlert()">Timer</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
function dangerAlert() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}
function animationAlert() {
    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
        },
        hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
        }
    });
}
function autoAlert() {
    Swal.fire({
        position: 'center',
        title: 'Timer Alert',
        text: "just a wait!  I will close in 30 second!",
        showConfirmButton: false,
        timer: 4000,
    });
}
</script>