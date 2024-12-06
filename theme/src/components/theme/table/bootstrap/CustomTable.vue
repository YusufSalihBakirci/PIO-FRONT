<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Custom Table Color With Hover And Stripped" pre="true" preClass="desc mb-0 mt-1"
        desc="<span>Use class</span><code>table-hover, table-striped table-*table-info,table-success,table-success,table-info,table-danger,table-primary,table-secondary,table-light,table-active</code><span>inside table element.</span>">
        <div class="table-responsive theme-scrollbar">
            <table class="table table-striped bg-primary hover">
                <thead class="tbl-strip-thad-bdr">
                    <tr>
                        <th class="bg-primary" scope="col">Id</th>
                        <th class="bg-primary" scope="col">Film Title</th>
                        <th class="bg-primary" scope="col">Released</th>
                        <th class="bg-primary" scope="col">Studio</th>
                        <th class="bg-primary" scope="col">Budget </th>
                        <th class="bg-primary" scope="col">Domestic Gross</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(data, index) in custom" :key="index">
                        <th :class="data.class" scope="row">{{ data.id }}</th>
                        <td :class="data.class">{{ data.film }}</td>
                        <td :class="data.class">{{ data.released }}</td>
                        <td :class="data.class">{{ data.studio }}</td>
                        <td :class="data.class">{{ data.budget }}</td>
                        <td :class="data.class">{{ data.domestic }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { custom } from "@/core/data/table"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let desc = ref<string>("Use a class<code>table</code> to any table, and <code>.border-bottom-*</code>class for Border bottom color")
</script>