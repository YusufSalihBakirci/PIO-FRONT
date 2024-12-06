<template>
    <div>
        <div class="table-responsive invoice-table" id="table">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td class="item  text-start">
                            <h6 class="p-2 mb-0">Item Description</h6>
                        </td>
                        <td class="Hours">
                            <h6 class="p-2 mb-0">Hours</h6>
                        </td>
                        <td class="Rate">
                            <h6 class="p-2 mb-0">Rate</h6>
                        </td>
                        <td class="subtotal">
                            <h6 class="p-2 mb-0">Sub-total</h6>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in invoice6" :key="index">
                        <td class="text-start">
                            <label class="f-w-600">{{ item.title }}</label>
                            <p class="m-0">{{ item.desc }}</p>
                        </td>
                        <td>
                            <p class="itemtext">{{ item.hours }}</p>
                        </td>
                        <td>
                            <p class="itemtext">{{ item.rate }}</p>
                        </td>
                        <td>
                            <p class="itemtext">{{ item.Subtotal }}</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-start">
                            <p class="itemtext"></p>
                        </td>
                        <td>
                            <p class="m-0">HST</p>
                        </td>
                        <td>
                            <p class="m-0">13%</p>
                        </td>
                        <td>
                            <p class="m-0">$419.25</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-start"></td>
                        <td></td>
                        <td class="Rate">
                            <h6 class="mb-0 p-2">Total</h6>
                        </td>
                        <td class="payment">
                            <h6 class="mb-0 p-2">$3,644.25</h6>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div>
                    <p class="legal"><strong>Thank you for your business!</strong>  Payment is expected within 31 days;
                        please process this invoice within that time. There will be a 5% interest charge per month on late
                        invoices.</p>
                </div>
            </div>
            <div class="col-md-4">
                <form class="text-end">
                    <img src="@/assets/images/other-images/paypal.png" name="submit"
                        alt="PayPal - The safer, easier way to pay online!" />
                </form>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { invoice6 } from "@/core/data/ecommerce"
</script>