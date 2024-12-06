<template>
    <table class="table-wrapper table-responsive table-borderless theme-scrollbar">
        <tbody>
            <tr>
                <td>
                    <table class="table-responsive table-borderless" style="width: 100%;">
                        <tbody>
                            <tr style="padding: 28px 0 5px; display: flex; justify-content: space-between;">
                                <td>
                                    <h4 style="font-size:42px; font-weight: 600;color: #308e87; margin:0;">INVOICE</h4>
                                    <ul style="list-style: none; display: flex; gap:15px; padding: 0; margin: 20px 0;">
                                        <li> <span style="font-size: 16px; font-weight: 600; opacity: 0.8;">Invoice to
                                                :</span></li>
                                        <li> <span :style="item.style" v-for="(item, index) in invoiceadd" :key="index">{{
                                            item.title }}</span></li>
                                    </ul>
                                </td>
                                <td><img class="for-dark" src="@/assets/images/logo/logo1.png" alt=""><img class="for-light"
                                        src="@/assets/images/logo/logo-dark.png" alt=""><span :style="item.style"
                                        v-for="(item, index) in invoiceadd1" :key="index">
                                        {{ item.title }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-responsive table-borderless"
                        style="width: 100%; border-spacing: 4px; margin-bottom: 20px;">
                        <tbody>
                            <tr>
                                <td style="background: rgba(48, 142, 135 , 0.1);padding: 15px 25px;"
                                    v-for="(item, index) in tableresponsive1" :key="index">
                                    <p
                                        style="font-size:16px; font-weight:500; color:#308e87; opacity:0.8; margin:0;line-height: 2;">
                                        {{ item.title }}</p><span style="font-size: 16px; font-weight: 600;">{{ item.data
                                        }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-responsive table-borderless" style="width: 100%; border-spacing:0;">
                        <thead>
                            <tr style="background: #308e87;">
                                <th :style="item.style" v-for="(item, index) in invoiceheader2" :key="index">
                                    <span style="color: #fff; font-size: 16px; font-weight: 600;">{{ item.title }}</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in invoicetable3" :key="index">
                                <td :style="item.style">
                                    <h4 style="font-weight:600; margin:4px 0px; font-size: 16px; color: #308e87;">
                                        {{ item.title }}</h4>
                                    <span style="opacity: 0.8; font-size: 16px;">{{ item.subtitle }}</span>
                                </td>
                                <td style="width: 12%; text-align: center;"><span style="opacity: 0.8;">{{
                                    item.price }}</span></td>
                                <td style="width: 12%; text-align: center;"> <span style="opacity: 0.8;">{{ item.qty
                                }}</span>
                                </td>
                                <td style="width: 12%; text-align: center;"> <span
                                        style="color: #308e87; font-weight: 600;opacity: 0.9;">{{ item.total }}</span></td>
                            </tr>

                        </tbody>
                    </table>
                </td>
            </tr>
            <tr
                style="height:3px; width: 100%; background: linear-gradient(90deg, #308e87 20.61%, #0DA759 103.6%); display:block; margin-top: 6px;">
            </tr>
            <tr>
                <td>
                    <table style="width:100%;">
                        <tbody>
                            <tr
                                style="display:flex; justify-content: space-between; margin:16px 0 24px 0; align-items: end;">
                                <td style="display: flex; gap: 10px;"><span
                                        style="color: #308e87; font-size: 16px; font-weight: 500; font-weight: 600;">Payment
                                        Teams : </span><span
                                        style="display:block; line-height: 1.5;  font-size: 16px; font-weight: 400; width: 55%;">This
                                        denotes a payment credit for a full month's supply.</span></td>
                                <td>
                                    <ul style="padding: 0; margin: 0; list-style: none;">
                                        <li style="display:flex; padding-bottom: 16px;"
                                            v-for="(items, index) in invoicefooter" :key="index"> <span
                                                style="display: block; width: 95px; ">{{ items.title }} </span><span
                                                style="display: block; width:25px;">:</span><span
                                                style="display: block;  width: 95px; color: #308e87; opacity: 0.9; font-weight:600;">{{
                                                    items.price }}</span>
                                        </li>
                                        <li style="display:flex; align-items: center;"> <span
                                                style="display: block; width: 95px; ">Total Due</span><span
                                                style="display: block; color: #308e87; opacity: 0.9; font-weight:600; padding: 12px 25px; border-radius: 5px; background: rgba(48, 142, 135 , 0.1); font-size: 16px;">$6120.00</span>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>

            <tr style="width: 100%; display: flex; justify-content: space-between;">
                <td> <img src="@/assets/images/email-template/invoice-3/sign.png" alt="sign" /><span
                        style="color: #308e87;display: block;font-size: 16px;font-weight: 600;">Laurine T.
                        Ebbert</span><span style=" display: block; font-size: 14px; padding-top: 5px;">( Designer
                        )</span></td>
                <td> <span style="display: flex; justify-content: end; gap: 15px;"><a
                            style="background: rgba(48, 142, 135, 1); color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="#!" onclick="window.print();">Print Invoice<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><a
                            style="background: rgba(48, 142, 135, 0.1);color: rgba(48, 142, 135, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="/ecommerce/invoice_4" download="">Download<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a></span></td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
import { tableresponsive1, invoiceheader2, invoicetable3, invoicefooter, invoiceadd, invoiceadd1 } from "@/core/data/ecommerce"
</script>