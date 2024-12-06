<template>
    <Card3 colClass="col-sm-12" table="true" pre="true" cardhaderClass="card-no-border" cardClass="overflow-hidden"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Inverse Table with Primary background"
        desc="<span>use a class</span><code>.bg-info, .bg-success, .bg-warning and .bg-danger classes.</code><span>To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal</span>">
        <div class="table-responsive theme-scrollbar">
            <table class="table table-striped bg-primary">
                <thead class="tbl-strip-thad-bdr">
                    <tr>
                        <th class="bg-primary" scope="col">Id</th>
                        <th class="bg-primary" scope="col">First Name</th>
                        <th class="bg-primary" scope="col">Last Name</th>
                        <th class="bg-primary" scope="col">Company</th>
                        <th class="bg-primary" scope="col">Credit Volume&#x9; </th>
                        <th class="bg-primary" scope="col">Username</th>
                        <th class="bg-primary" scope="col">Role&#x9; </th>
                        <th class="bg-primary" scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <th :class="item.class" scope="row">{{ item.id }}</th>
                        <td :class="item.class">{{ item.firstName }}</td>
                        <td :class="item.class">{{ item.lastName }}</td>
                        <td :class="item.class">{{ item.company }}</td>
                        <td :class="item.class">{{ item.credit }}</td>
                        <td :class="item.class">{{ item.userName }}</td>
                        <td :class="item.class">{{ item.role }}</td>
                        <td :class="item.class">{{ item.country }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { data } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>