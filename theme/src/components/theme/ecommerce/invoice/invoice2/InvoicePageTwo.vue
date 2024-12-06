<template>
    <table class="table-borderless table-wrapper table-responsive theme-scrollbar">
        <tbody>
            <tr>
                <td>
                    <table class="table-responsive" style="width: 100%;">
                        <tbody>
                            <tr>
                                <td style="min-width: 347px; width: 30%;"><img class="for-dark"
                                        src="@/assets/images/logo/logo1.png" alt="logo" /><img class="for-light"
                                        src="@/assets/images/logo/logo-dark.png" alt="logo" />
                                    <address style="opacity: 0.8; width: 80%; margin-top: 10px; font-style:normal;"><span
                                            style="font-size: 16px; line-height: 1.5; font-weight: 500;">
                                            1982 Harvest Lane New York, NY12210
                                            United State</span></address>
                                </td>
                                <td style="opacity: 0.8; text-align:end;"><span
                                        style="display:block; line-height: 1.5; font-size:16px; font-weight:500;">Email :
                                        Admiro@themesforest.com</span><span
                                        style="display:block; line-height: 1.5; font-size:16px; font-weight:500;">Website:
                                        www.Admirothemes.com</span><span
                                        style="display:block; line-height: 1.5; font-size:16px; font-weight:500;">Contact No
                                        : (316) 555-0116</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-responsive" style="width:100%;">
                        <tbody>
                            <tr style="display:flex;justify-content:space-between;padding: 25px 0;">
                                <td v-for="(item, index) in invoice2" :key="index" :style="item.style"> <span
                                        :style="item.style1">{{ item.name }}</span>
                                    <h4 :style="item.class">{{ item.title }}</h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-responsive" style="width: 100%;">
                        <tbody>
                            <tr style="padding: 28px 0; display:block;">
                                <td :style="item.style" v-for="(item, index) in addres" :key="index"><span
                                        :style="item.class">{{ item.add }}</span>
                                    <h4 :style="item.namestyle">{{ item.name }}
                                    </h4><span :style="item.descclass">
                                        {{ item.desc }}</span><span :style="item.numberclass">
                                        {{ item.number }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-borderless table-responsive"
                        style="width: 100%;border-collapse: separate;border-spacing: 0;">
                        <thead>
                            <tr
                                style="background: #308e87;border-radius: 8px;overflow: hidden;box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;">
                                <th style="padding: 18px 15px;text-align: left" v-for="(item, index) in invoiceheader"
                                    :key="index"><span style="color: #fff; font-size: 16px;">{{ item.title }}</span></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr :class="item.class" :style="item.style" v-for="(item, index) in invoicetable1" :key="index">
                                <td style="padding: 18px 15px;display:flex;align-items: center;gap: 10px;"><span
                                        style="width: 54px; height: 51px; background-color:#F5F6F9; display: flex; justify-content: center;align-items: center; border-radius: 5px;"><img
                                            :src="getImages(item.img)" alt="laptop" style="height:29px;"></span>
                                    <ul style="padding: 0;margin: 0;list-style: none;">
                                        <li>
                                            <h4 style="font-weight:400; margin:4px 0px; font-size: 16px;">{{ item.title }}
                                            </h4>
                                            <span style="opacity: 0.8; font-size: 14px;">{{ item.subtitle }}</span>
                                        </li>
                                    </ul>
                                </td>
                                <td style="padding: 18px 15px;"><span>{{ item.qty }}</span></td>
                                <td style="padding: 18px 15px; " :style="item.width"> <span>{{ item.price }}</span></td>
                                <td style="padding: 18px 15px; width: 12%;"> <span>Hour(s)</span></td>
                                <td style="padding: 18px 15px; width: 10%;"> <span>0</span></td>
                                <td style="padding: 18px 15px;"><span>{{ item.total }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="table-responsive table-borderless">
                        <tfoot>
                            <tr v-for="(item, index) in footerinvoice" :key="index">
                                <td :style="item.style"> <span style=" font-size: 16px; font-weight: 400;">{{ item.title
                                }}</span></td>
                                <td :style="item.style1"><span>{{ item.price }}</span></td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 24px 5px 0;min-width: 200px;"> <span
                                        style="font-weight: 600; font-size: 20px; color: #308e87;">Total Amount :</span>
                                </td>
                                <td style="padding: 12px 24px 5px 0;;text-align: right"><span
                                        style="font-weight: 500; font-size: 20px; color: rgba(48, 142, 135, 1);">$26,410.00</span>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </td>
            </tr>
            <tr>
                <td> <span
                        style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 100%;margin-bottom:24px;"></span>
                </td>
            </tr>
            <tr>
                <td> <span style="display: flex; justify-content: end; gap: 15px; margin-bottom:15px;"><a
                            style="background: rgba(48, 142, 135, 1); color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="#!" onclick="window.print();">Print Invoice<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><a
                            style="background: rgba(48, 142, 135, 0.1);color: rgba(48, 142, 135, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;"
                            href="/ecommerce/invoice_2" download="">Download<i class="icon-arrow-right"
                                style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a></span></td>
            </tr>
        </tbody>
    </table>
</template>
<script lang="ts" setup>
import { invoice2, addres, invoiceheader, invoicetable1, footerinvoice } from "@/core/data/ecommerce"
import { getImages } from "@/composables/common/getImages"
</script>