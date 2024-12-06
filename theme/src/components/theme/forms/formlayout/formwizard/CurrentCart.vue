<template>
    <div class="col-xl-4">
        <div class="shipping-info">
            <h4 class="f-w-700">Current Cart </h4>
            <div class="overflow-auto theme-scrollbar">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Product Detail </th>
                            <th scope="col">Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in currentcart" :key="index">
                            <td> <img :src="getImages(item.img)" alt="t-shirt"></td>
                            <td>
                                <div>
                                    <h5 class="f-w-600">{{ item.title }}</h5><span>{{ item.multipl }}</span>
                                </div>
                            </td>
                            <td>
                                <p>{{ item.price }}</p>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="f-w-700">Sub Total :</td>
                            <td class="f-w-700" colspan="2">$1284.00 </td>
                        </tr>
                        <tr>
                            <td>Discount :</td>
                            <td colspan="2">$20.00</td>
                        </tr>
                        <tr>
                            <td>Shipping Charge :</td>
                            <td colspan="2">$100.78</td>
                        </tr>
                        <tr>
                            <td>Tax :</td>
                            <td colspan="2">$205.34</td>
                        </tr>
                        <tr>
                            <td class="f-w-700">Total (USD) :</td>
                            <td class="f-w-700" colspan="2">$1569.7</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { currentcart } from "@/core/data/forms"
import { getImages } from "@/composables/common/getImages"
</script>