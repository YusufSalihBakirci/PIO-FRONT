<template>
    <Card3 colClass="col-sm-12" table="true" cardhaderClass="card-no-border" pre="true" preClass="desc mb-0 mt-1"
        headerTitle="true" title="Caption" :desc="desc">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table">
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Employee Name </th>
                                <th scope="col">Email</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Contact No. </th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in caption" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.name }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.exp }}</td>
                                <td>{{ item.sex }}</td>
                                <td>{{ item.contact }}</td>
                                <td>{{ item.age }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { caption } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("<span>A</span><code>&lt;caption&gt;</code><span>functions like a heading for a table. It helps users with screen readers to find a table and understand what it&rsquo;s about and decide if they want to read it.</span>")
</script>