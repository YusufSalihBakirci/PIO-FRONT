<template>
    <Card3 colClass="col-xl-3" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" titles="true"
        headerTitle="true" title="Success Message" desc="Print the success message.">
        <div class="common-flex">
            <button class="btn btn-danger sweet-20" type="button" @click="messageTimerAlert()">Message Timer</button>
        </div>
    </Card3>
    <Card3 colClass="col-xl-3" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" titles="true"
        headerTitle="true" title="Danger Alert " desc="Print the danger message.">
        <div class="common-flex">
            <button class="btn btn-info text-light sweet-21" type="button" @click="dangerAlert()">Modal with Images</button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2'
import { defineAsyncComponent, ref } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
function messageTimerAlert() {
    let timerInterval: string | number | boolean;
    Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
        }
    })
}
function dangerAlert() {
    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showClass: {
            popup: 'animate__animated animate__zoomIn'
        },
    })
}
</script>