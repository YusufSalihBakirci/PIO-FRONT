<template>
    <table class="table-wrapper table-borderless">
        <tbody>
            <tr>
                <td>
                    <table class="logo-wrappper" style="width: 100%;">
                        <tbody>
                            <tr>
                                <td><img class="for-dark" src="@/assets/images/logo/logo1.png" alt="logo"><img
                                        class="for-light" src="@/assets/images/logo/logo-dark.png" alt="logo"><span
                                        style="opacity: 0.8;display:block;margin-top: 10px;">202-555-0258</span></td>
                                <td class="address" style="text-align: right;opacity: 0.8; width: 16%;"><span>
                                        1982 Harvest Lane New York, NY12210
                                        United State</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td> <img class="banner-image" src="@/assets/images/email-template/invoice-1/1.png" alt="background"></td>
            </tr>
            <tr>
                <td>
                    <table class="bill-content table-borderless" style="width: 100%;">
                        <tbody>
                            <tr>
                                <td :style="item.class" v-for="(item, index) in invoice" :key="index"><span
                                        :style="item.class1">{{ item.name }}</span>
                                    <h6 :style="item.style">{{ item.title }} </h6>
                                </td>
                                <td style="text-align: right;"><span style="opacity: 0.8;">Amount Dus (USD)</span>
                                    <h2>$10,908.00</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 36%">
                                    <h6 style="width: 63%;padding-top: 20px;">2118 Thornridge Cir. Syracuse, Connecticut
                                        35624, United State</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="order-details" style="width: 100%;border-collapse: separate;border-spacing: 0 10px;">
                        <thead>
                            <tr
                                style="background: #308e87;border-radius: 8px;overflow: hidden;box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;">
                                <th
                                    style="padding: 18px 15px;border-top-left-radius: 8px;border-bottom-left-radius: 8px;text-align: left">
                                    <span style="color: #fff;">Description</span>
                                </th>
                                <th style="padding: 18px 15px;text-align: left"><span style="color: #fff;">Rate</span></th>
                                <th style="padding: 18px 15px;text-align: left"><span style="color: #fff;">Qty</span></th>
                                <th
                                    style="padding: 18px 15px;border-top-right-radius: 8px;border-bottom-right-radius: 8px;text-align: right">
                                    <span style="color: #fff;">Line Total</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr :style="item.style" v-for="(item, index) in datatable" :key="index">
                                <td :style="items.class" v-for="(items, index) in item.children" :key="index"><span
                                        :style="items.style"></span><span :style="items.class1"></span><span>{{ items.title
                                        }}</span>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="width: 100%; display: flex; justify-content: space-between; margin-top: 12px;">
                <td> <img src="@/assets/images/email-template/invoice-1/sign.png" alt="sign"><span
                        style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 200px;margin-bottom:10px;"></span><span
                        style="color: rgba(82, 82, 108, 0.8);">Authorized Sign</span></td>
                <td> <span style="display: flex; justify-content: end; gap: 15px;"><a
                            style="background: rgba(48, 142, 135, 1); color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="#!" onclick="window.print();">Print Invoice<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><a
                            style="background: rgba(48, 142, 135, 0.1);color: rgba(48, 142, 135, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="/ecommerce/invoice_1" download="">Download<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a></span></td>
            </tr>
        </tbody>

    </table>
</template>
<script lang="ts" setup>
import { invoice, datatable } from "@/core/data/ecommerce"
</script>