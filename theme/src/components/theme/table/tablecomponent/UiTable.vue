<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" headerTitle="true"
        title="UI Components">
        <div>
            <div class="card-block row">
                <div class="col-sm-12">
                    <div class="table-responsive theme-scrollbar">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Button</td>
                                    <td class="w-50">
                                        <button class="btn btn-primary">Default Button</button>
                                    </td>
                                    <td><span>Bootstrap includes six predefined button styles, each serving its own semantic
                                            purpose.</span></td>
                                </tr>
                                <tr>
                                    <td>Round Buttons</td>
                                    <td>
                                        <button class="btn btn-pill btn-primary">Default Button</button>
                                    </td>
                                    <td><span>Use <code>.btn-pill</code> class to button for Round Buttons.</span></td>
                                </tr>
                                <tr>
                                    <td>Button dropdowns</td>
                                    <td>
                                        <button class="btn btn-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Primary</button>
                                        <div class="dropdown-menu">
                                            <h6 class="dropdown-header">Dropdown header</h6><a class="dropdown-item"
                                                href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a
                                                class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div><a class="dropdown-item" href="#">Separated
                                                link</a>
                                        </div>
                                    </td>
                                    <td><span>Use <code>.dropdown-toggle</code> class to button for Dropdown-toggle.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Basic Button group</td>
                                    <td>
                                        <div class="btn-group">
                                            <button class="btn btn-primary">Primary</button>
                                            <button class="btn btn-secondary">Secondary</button>
                                            <button class="btn btn-success">Success</button>
                                        </div>
                                    </td>
                                    <td><span>Use <code>btn-group</code> class to button for <code>div</code>.</span></td>
                                </tr>
                                <tr>
                                    <td>Buttons with Icon</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fa fa-info-circle"></i> Primary</button>
                                    </td>
                                    <td><span>Bootstrap includes six predefined button styles, each serving its own semantic
                                            purpose.</span></td>
                                </tr>
                                <tr>
                                    <td>Icon Button</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fa fa-camera"></i></button>
                                    </td>
                                    <td><span>Simple Icon Button</span></td>
                                </tr>
                                <tr class="border-b-none">
                                    <td>Loading Buttons</td>
                                    <td>
                                        <button class="btn btn-primary"><i class="fa fa-spin fa-spinner me-2"></i>Expand
                                            UP</button>
                                    </td>
                                    <td><span>Expand Animation Buttons</span></td>
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