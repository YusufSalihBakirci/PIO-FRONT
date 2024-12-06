<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Badges">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive custom-scroll">
                        <table class="table table-bordered badge-table">
                            <tbody>
                                <tr>
                                    <td class="pills-component">Basic Pills</td>
                                    <td class="w-50"><span class="badge badge-primary">Primary</span></td>
                                    <td><span>Use the <code>.badge</code> class, followed by. with badge color use class
                                            <code>.badge-*</code><code>primary , secondary , success , info, warning, danger, light</code>
                                            class within element to create default pill.</span></td>
                                </tr>
                                <tr>
                                    <td>Label With Icon</td>
                                    <td class="w-50 m-5">
                                        <div class="badge badge-primary label-square"><i
                                                class="fa fa-paperclip me-2 fa-lg"></i><span class="f-14">Primary
                                                Label</span></div>
                                    </td>
                                    <td><span>Use the <code>label-square</code> class with <code>div</code></span></td>
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