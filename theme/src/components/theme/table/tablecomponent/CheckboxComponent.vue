<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Checkbox">
        <div>
            <div class="card-block row">
                <div class="col-sm-12 col-lg-12 col-xl-12">
                    <div class="table-responsive custom-scroll">
                        <table class="table table-bordered checkbox-td-width">
                            <tbody>
                                <tr>
                                    <td>Basic Checkbox</td>
                                    <td class="w-50">
                                        <input id="checkbox1" type="checkbox">
                                        <label for="checkbox1" class="ms-2"> Default</label>
                                    </td>
                                    <td><span>Basic Checkbox</span></td>
                                </tr>
                                <tr>
                                    <td>Default Checkbox Squar</td>
                                    <td>
                                        <div class="checkbox m-squar">
                                            <input id="checkbox3" type="checkbox">
                                            <label for="checkbox3">Default</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use <code>.m-squar</code> checkbox.</span></td>
                                </tr>
                                <tr>
                                    <td>Basic Skin Check</td>
                                    <td>
                                        <div class="checkbox checkbox-dark">
                                            <input id="checkbox-state-dark" type="checkbox">
                                            <label for="checkbox-state-dark">Brand state</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use<code> checkbox-dark </code>for this style of checkbox.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flat Skin Check</td>
                                    <td>
                                        <div class="checkbox checkbox-solid-primary">
                                            <input id="dashed6" type="checkbox" checked>
                                            <label for="dashed6">checked</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with
                                            use<code> checkbox-dashed-*</code>,<code>primary, secondary, success, info, warning, danger </code>for
                                            this style of checkbox.</span></td>
                                </tr>
                                <tr>
                                    <td>Disable Check</td>
                                    <td>
                                        <div class="checkbox checkbox-solid-primary">
                                            <input id="dashed2" type="checkbox" disabled>
                                            <label for="dashed2">Disabled</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with
                                            use<code> disabled</code>,<code>primary, secondary, success, info, warning, danger </code>for
                                            this style of checkbox disable.</span></td>
                                </tr>
                                <tr>
                                    <td>Inline Checkbox</td>
                                    <td>
                                        <div class="form-group m-b-0 m-checkbox-inline ms-1">
                                            <div class="checkbox checkbox-primary">
                                                <input id="inline-1" type="checkbox">
                                                <label for="inline-1">Option 1</label>
                                            </div>
                                            <div class="checkbox checkbox-secondary">
                                                <input id="inline-2" type="checkbox">
                                                <label for="inline-2">Option 1</label>
                                            </div>
                                            <div class="checkbox checkbox-success">
                                                <input id="inline-3" type="checkbox">
                                                <label for="inline-3">Option 1</label>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span>Wrap with
                                            use<code> disabled</code>,<code>primary, secondary, success, info, warning, danger </code>for
                                            this style of checkbox disable.</span></td>
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