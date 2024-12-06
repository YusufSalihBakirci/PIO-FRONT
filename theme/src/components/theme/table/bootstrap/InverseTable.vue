<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" pre="true"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Inverse Table"
        desc="<span>use a class</span><code>.table-inverse</code><span>inside table element.</span>">
        <div class="table-responsive theme-scrollbar">
            <table class="table table-inverse">
                <thead>
                    <tr class="border-bottom-light">
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Office</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Join Date </th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in inverse" :key="index">
                        <th scope="row">{{ data.id }}</th>
                        <td>{{ data.firstName }}</td>
                        <td>{{ data.lastName }}</td>
                        <td>{{ data.office }}</td>
                        <td>{{ data.role }}</td>
                        <td>{{ data.salary }}</td>
                        <td>{{ data.join }}</td>
                        <td>{{ data.age }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { inverse } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>