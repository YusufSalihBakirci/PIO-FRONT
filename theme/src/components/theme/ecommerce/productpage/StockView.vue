<template>
    <div>
        <table class="product-page-width">
            <tbody>
                <tr v-for="(item, index) in detail" :key="index">
                    <td> <b v-html="item.title"></b></td>
                    <td :class="item.class">{{ item.decs }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
import { detail } from "@/core/data/ecommerce"
</script>