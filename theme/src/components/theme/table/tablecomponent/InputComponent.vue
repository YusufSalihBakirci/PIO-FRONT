<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Input">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive custom-scroll">
                        <table class="table table-bordered checkbox-td-width basic-form">
                            <tbody>
                                <tr>
                                    <td>Default Input text</td>
                                    <td class="w-50">
                                        <input class="form-control input-primary" id="exampleFormControlInput1" type="email"
                                            placeholder="Input text">
                                    </td>
                                    <td><span>Use for basic select control.</span></td>
                                </tr>
                                <tr>
                                    <td>Input Hover Color </td>
                                    <td class="w-50">
                                        <input class="form-control" id="exampleFormControlInput2" type="email"
                                            placeholder="Input text">
                                    </td>
                                    <td><span>Use for basic input color add
                                            class<code> input-air-*</code><code>primary, secondary, success, info </code>.on
                                            input</span></td>
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
import { defineAsyncComponent } from 'vue'

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>