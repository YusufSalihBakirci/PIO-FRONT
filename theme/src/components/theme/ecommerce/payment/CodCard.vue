<template>
    <Card3 colClass="col-xxl-4 col-lg-6 box-col-6" cardhaderClass="pb-0 card-no-border" headerTitle="true" title="COD">
        <form class="theme-form row ">
            <div class="mb-3 col-sm-6 p-r-0">
                <input class="form-control" type="text" placeholder="First Name">
            </div>
            <div class="mb-3 col-sm-6">
                <input class="form-control" type="text" placeholder="Last Name">
            </div>
            <div class="mb-3 col-6 p-r-0">
                <input class="form-control" type="number" placeholder="Pincode">
            </div>
            <div class="mb-3 col-6">
                <input class="form-control" type="number" placeholder="Enter mobile number">
            </div>
            <div class="mb-3 col-6 p-r-0">
                <input class="form-control" type="text" placeholder="State">
            </div>
            <div class="mb-3 col-6">
                <input class="form-control" type="text" placeholder="City">
            </div>
            <div class="mb-3 col-12">
                <textarea class="form-control" rows="3" placeholder="Address"></textarea>
            </div>
            <div class="col-12">
                <button class="btn btn-primary btn-block" type="button" title="">Submit</button>
            </div>
        </form>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>