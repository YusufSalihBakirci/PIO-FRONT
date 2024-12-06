<template>
    <div class="tab-pane fade" :id="element ? 'business-bank-wizard' : 'bank-n-wizard'" role="tabpanel"
        aria-labelledby="bank-n-wizard-tab">
        <form class="row g-3 needs-validation basic-form business-horizontal" novalidate>
            <div class="col-md-6">
                <label class="form-label" for="AccountName">Account Name<span class="txt-danger">*</span></label>
                <input class="form-control" id="AccountName" type="text" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-6">
                <label class="form-label">Email<span class="txt-danger">*</span></label>
                <input class="form-control" type="text" placeholder="org@superrito.com" required>
            </div>
            <div class="col-12">
                <label class="form-label" for="example-description">Select a project and write a description for it</label>
                <textarea class="form-control" id="example-description" rows="3"></textarea>
            </div>
            <div class="col-12">
                <section class="main-upgrade">
                    <div><i class="fa fa-rocket"></i>
                        <h5 class="mb-3">Select team size with <span class="txt-primary">projects</span></h5>
                        <p class="text-muted mb-2">Agile teams are cross-functional and made up of 5-11 on a regular basis
                            team member.</p>
                    </div>
                    <div class="variation-box">
                        <div class="selection-box" v-for="(item, index) in settings" :key="index">
                            <input type="checkbox" :checked="item.checked">
                            <div class="custom--mega-checkbox">
                                <ul class="d-flex flex-column">
                                    <li>{{ item.label }}</li>
                                    <li class="text-danger">{{ item.menber }} </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <div class="col-12 text-end">
                <button class="btn btn-primary me-1">Previous</button>
                <button class="btn btn-primary">Continue</button>
            </div>
        </form>
    </div>
</template>
<script lang="ts" setup>
import { settings } from "@/core/data/forms"
import { defineProps } from 'vue'
let props = defineProps({
    element: String,
})
</script>