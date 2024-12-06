<template>
    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Dismissing Dark alert"
        desc="Use the <code>.alert-dismissible  </code>utility class to quickly remove the alerts.">
        <div class="alert alert-secondary alert-dismissible fade show mb-0" role="alert"><i class="fa-regular fa-heart">
            </i>
            <p class="mb-0">Check your update! You should check in on some of those fields below.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </Card3>

    <Card3 colClass="col-sm-12 col-xl-6" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Dismissing Light Alert "
        desc="Use  <code>.alert-dismissible </code>utility class to quickly remove the alerts.">
        <div class="alert alert-warning alert-dismissible fade show mb-0" role="alert"><i class="fa-regular fa-bell"> </i>
            <p class="mb-0">Hidden content You should check in on some of those fields below.</p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </Card3>

    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="live-dark" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Live alert"
        desc="Click the button below to show an alert,then dismiss it with the built-in close button. ">
        <div id="liveAlertPlaceholder">
            <div v-for="(item, index) in data" :key="index">
                <div class="alert alert-success mb-3 alert-dismissible" role="alert">
                    <div>{{ item }}</div> <button type="button" class="btn-close" data-bs-dismiss="alert"
                        aria-label="Close"></button>
                </div>
            </div>
        </div>
        <button class="btn btn-dark" id="liveAlertBtn" type="button" @click="addAlert">Show live alert</button>
    </Card3>

    <Card3 colClass="col-xl-6" cardhaderClass="card-no-border pb-0" cardbodyClass="live-dark" pre="true"
        preClass="mt-1 mb-0" headerTitle="true" title="Left Border Alert"
        desc="Use the <code>.border-left-wrapper </code>to change border-left radius.">
        <div class="alert alert-light-dark light alert-dismissible fade show text-dark border-left-wrapper mb-0"
            role="alert"><i class="fa-solid fa-circle-info"> </i>
            <p class="mb-0">You can check in on some of those fields below. </p>
            <button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { alert } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let data = ref<string[]>([])
function addAlert() {
    data.value.push("Nice, you triggered this alert message!")
}
</script>