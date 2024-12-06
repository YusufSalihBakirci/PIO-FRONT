<template>
    <Card3 colClass="col-xxl-4 col-lg-6 box-col-6 debit-card" cardhaderClass="pb-0 card-no-border" headerTitle="true" title="Debit card">
        <form class="theme-form e-commerce-form row">
            <div class="mb-3 col-sm-6 p-r-0">
                <input class="form-control" type="text" placeholder="Full name here">
            </div>
            <div class="mb-3 col-sm-6">
                <input class="form-control" type="number" placeholder="Card Number">
            </div>
            <div class="mb-3 col-6 p-r-0">
                <input class="form-control" type="number" placeholder="CVV Number">
            </div>
            <div class="mb-3 col-6">
                <input class="form-control" type="number" placeholder="CVC">
            </div>
            <div class="col-12">
                <label class="col-form-label">Expiration Date</label>
            </div>
            <div class="mb-3 col-6 p-r-0">
                <select class="form-select" size="1">
                    <option>Select Month</option>
                    <option>Jan</option>
                    <option>Fab</option>
                    <option>March</option>
                    <option>April</option>
                </select>
            </div>
            <div class="mb-3 col-6">
                <select class="form-select" size="1">
                    <option>Select Year</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                </select>
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