<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Select">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table table-bordered checkbox-td-width">
                            <tbody>
                                <tr>
                                    <td>Single Select</td>
                                    <td class="w-50">
                                        <select class="form-select" id="exampleFormControlSelect45">
                                            <option v-for="(item, index) in select" :key="index">{{ item }}</option>

                                        </select>
                                    </td>
                                    <td><span>Use for basic select control.</span></td>
                                </tr>
                                <tr>
                                    <td>Disabled Select Mode</td>
                                    <td>
                                        <select class="form-select" id="exampleFormControlSelect4" disabled>
                                            <option v-for="(item, index) in select" :key="index">{{ item }}</option>
                                        </select>
                                    </td>
                                    <td><span>Use for disabled select control add <code>disabled</code>.</span></td>
                                </tr>
                                <tr>
                                    <td>Large Select Mode</td>
                                    <td>
                                        <select class="form-select form-control-lg mb-10" id="exampleFormControlSelect1">
                                            <option v-for="(item, index) in select" :key="index">{{ item }}</option>
                                        </select>
                                        <select class="form-select form-control-sm mt-5 mb-10"
                                            id="exampleFormControlSelect3">
                                            <option v-for="(item, index) in select" :key="index">{{ item }}</option>
                                        </select>
                                    </td>
                                    <td><span>Use for large and small select control add
                                            class <code>form-control-*</code><code>lg, sm</code>.</span></td>
                                </tr>
                                <tr>
                                    <td>Example multiple select</td>
                                    <td>
                                        <select class="form-control" id="exampleFormControlSelect22" multiple>
                                            <option v-for="(item, index) in select" :key="index">{{ item }}</option>
                                        </select>
                                    </td>
                                    <td><span>Use for multi select control add code <code>multiple</code> on
                                            select.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let select = ref<string[]>(["1", "2", "3", "4", "5"])
</script>