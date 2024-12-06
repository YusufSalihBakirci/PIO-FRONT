<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" pre="true" cardhaderHader="card-no-border"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Hoverable Rows With Horizontal Border"
        desc="<span>Hoverable row use a class</span><code>table-hover-*.table-border-horizontal-*.border-solid-*</code><span>class.</span>">
        <div class="table-responsive theme-scrollbar signal-table">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Status</th>
                        <th scope="col">Signal Name </th>
                        <th scope="col">Security</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Team Lead</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in hoverable" :key="index">
                        <th scope="row">{{ data.id }}</th>
                        <td :Class="data.status" class="d-flex align-items-center">

                            <vue-feather :class="data.bgClass" :type="data.icon"></vue-feather>
                            <span :class="data.font">{{ data.status }}</span>
                        </td>
                        <td>{{ data.signalName }}</td>
                        <td>{{ data.security }}</td>
                        <td>{{ data.stage }}</td>
                        <td>{{ data.schedule }}</td>
                        <td>{{ data.teamLead }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { hoverable } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>