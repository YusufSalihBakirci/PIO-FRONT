<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Tooltip Triggers">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive custom-scroll">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Hover</td>
                                    <td class="w-50">
                                        <button class="btn btn-primary" type="button"
                                            data-original-title="btn btn-link btn-lg" title="Hover">Primary</button>
                                    </td>
                                    <td><span>Use data-bs-toggle="tooltip" for hover trigger. This is a default
                                            trigger</span></td>
                                </tr>
                                <tr>
                                    <td>Link</td>
                                    <td class="w-50"><a class="btn btn-primary" href="#" data-bs-toggle="tooltip" title=""
                                            role="button" data-original-title="Hooray!">Link</a></td>
                                    <td><span>Use <code>a href="#"</code> for link trigger. This is a link
                                            trigger</span></td>
                                </tr>
                                <tr>
                                    <td>outline button</td>
                                    <td class="w-50">
                                        <button class="btn btn-outline-primary" type="button"
                                            data-original-title="btn btn-outline-danger-2x" title="">Primary</button>
                                    </td>
                                    <td><span>Use <code>btn btn-outline-info</code> for outline trigger. and button bold
                                            Border use class<code> btn btn-outline-dark-2x</code></span></td>
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