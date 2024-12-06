<template>
    <Card3 colClass="col-xxl-4 col-lg-6 box-col-6" cardhaderClass="pb-0 card-no-border" headerTitle="true" title="Net Banking">
        <form class="theme-form row ">
            <div class="mb-3 col-12">
                <input class="form-control" type="text" placeholder="AC Holder name">
            </div>
            <div class="mb-3 col-12">
                <input class="form-control" type="text" placeholder="Account number">
            </div>
            <div class="mb-3 col-xxl-6 p-r-0">
                <select class="form-select" size="1">
                    <option>Select Bank</option>
                    <option>SBI</option>
                    <option>ICICI</option>
                    <option>KOTAK</option>
                    <option>BOB</option>
                </select>
            </div>
            <div class="mb-3 col-xxl-6">
                <input class="form-control" type="text" placeholder="ICFC code">
            </div>
            <div class="mb-3 col-12">
                <input class="form-control" type="number" placeholder="Enter mobile number">
            </div>
            <div class="mb-3 col-12">
                <input class="form-control" type="text" placeholder="Other Details">
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