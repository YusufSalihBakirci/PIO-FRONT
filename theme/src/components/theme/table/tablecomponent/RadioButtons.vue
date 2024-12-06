<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="Radio Buttons">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive custom-scroll">
                        <table class="table table-bordered radio-first-col-width">
                            <tbody>
                                <tr>
                                    <td>Basic Radio Buttons</td>
                                    <td class="w-50">
                                        <input id="radio" type="radio">
                                        <label for="radio" class="ms-2">Default radio</label>
                                    </td>
                                    <td><span>Basic Radio Buttons</span></td>
                                </tr>
                                <tr>
                                    <td>Default Radio</td>
                                    <td class="custom-radio">
                                        <div class="radio radio-primary">
                                            <input class="form-check-input" id="radio1" type="radio" name="radio1"
                                                value="option1">
                                            <label class="form-check-label" for="radio1">Option 1</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use <code>.radio-*</code> and color
                                            <code>.radio-*</code><code>primary , secondary , success , info</code> on
                                            Radio.</span></td>
                                </tr>
                                <tr>
                                    <td>Checked Radio</td>
                                    <td class="custom-radio">
                                        <div class="radio radio-primary">
                                            <input id="radio44" type="radio" name="radio1" value="option1" checked>
                                            <label for="radio44">Checked</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use <code>checkbox-dark   </code>for this style of checkbox. </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Flat Skin Check</td>
                                    <td class="custom-radio">
                                        <div class="radio radio-primary">
                                            <input id="radio33" type="radio" name="radio1" value="option1" disabled>
                                            <label for="radio33">Disabled</label>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use <code>checkbox-solid-*  </code>,
                                            <code>primary, secondary, success, info, warning, danger  </code>for this style
                                            of checkbox.</span></td>
                                </tr>
                                <tr>
                                    <td>Inline Checkbox</td>
                                    <td class="custom-radio">
                                        <div class="form-group m-b-0 m-checkbox-inline ms-1">
                                            <div class="radio radio-primary">
                                                <input id="radioinline1" type="radio" name="radio1" value="option1">
                                                <label for="radioinline1">Option 1</label>
                                            </div>
                                            <div class="radio radio-secondary">
                                                <input id="radioinline2" type="radio" name="radio1" value="option1">
                                                <label for="radioinline2">Option 2</label>
                                            </div>
                                            <div class="radio radio-success">
                                                <input id="radioinline3" type="radio" name="radio1" value="option1">
                                                <label for="radioinline3">Option 3</label>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span>Wrap with use <code>disabled   </code>,
                                            <code>primary, secondary, success, info, warning, danger, light, dark  </code>for
                                            this style of checkbox disable.</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</Card3></template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>