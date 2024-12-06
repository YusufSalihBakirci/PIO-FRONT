<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" pre="true"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Sizing Tables"
        desc="<span>Example of Extra large table Add</span><code>.table-xl-*.table-lg-*.table-de-*.table-sm -*</code><span>to create a table.</span>">
        <div class="card-block row">
            <div class="col-sm-12 col-lg-12 col-xl-12">
                <div class="table-responsive theme-scrollbar">
                    <table class="table table-lg">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Employee Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Hours</th>
                                <th scope="col">Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in sizingTablesXl" :key="index">
                                <th scope="row">{{ item.id }}</th>
                                <td>{{ item.Name }}</td>
                                <td>{{ item.Date }}</td>
                                <td :class="item.statusClass">{{ item.Status }}</td>
                                <td>{{ item.hours }}</td>
                                <td>{{ item.performance }}</td>
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
import { sizingTablesXl } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>