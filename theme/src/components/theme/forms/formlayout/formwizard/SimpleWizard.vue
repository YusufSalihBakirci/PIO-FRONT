<template>
    <Card3 colClass="col-md-12 simple-form-wizard" pre="true" preClass="mt-1 mb-0" cardhaderClass="card-no-border pb-0"
        headerTitle="true" title="Simple Form Wizard" desc="Use the different types of fades and animations in modals.">
        <form-wizard @on-complete="onComplete">
            <tab-content>
                <div class="col-xs-12">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">First Name</label>
                            <input class="form-control" type="text" placeholder="Johan" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Last Name</label>
                            <input class="form-control" type="text" placeholder="Deo" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">Email</label>
                            <input class="form-control" type="text" placeholder="name@example.com" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Password</label>
                            <input class="form-control" type="password" placeholder="Password" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">Birth date</label>
                            <input class="form-control" type="date" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">Have Passport</label>
                            <input class="form-control" type="text" placeholder="yes/No" required>
                        </div>
                    </div>
                </div>
            </tab-content>
            <tab-content>
                <div class="col-xs-12 ">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="control-label">State</label>
                            <input class="form-control mt-1" type="text" placeholder="State" required>
                        </div>
                        <div class="mb-3">
                            <label class="control-label">City</label>
                            <input class="form-control mt-1" type="text" placeholder="City" required>
                        </div>
                    </div>
                </div>
            </tab-content>
        </form-wizard>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { tab } from "@/core/data/forms"
import { FormWizard, TabContent } from "vue3-form-wizard";
import 'vue3-form-wizard/dist/style.css'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const currentTabIndex = ref<number>()
function onComplete() {
    alert('Yay, Done')
}
onMounted(() => {
    currentTabIndex.value = 0
})
</script>