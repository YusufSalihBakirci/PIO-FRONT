<template>
    <Card3 colClass="col-sm-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Unique Dropdown" desc="Unique way to represent form dropdown and text dropdown.">
        <div class="common-flex">
            <div class="btn-group">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-auto-close="outside">Dropdown form</button>
                <form class="dropdown-menu p-3 form-wrapper dark-form">
                    <div class="mb-2">
                        <label class="form-label" for="exampleDropdownFormEmail2">Email address</label>
                        <input class="form-control" id="exampleDropdownFormEmail2" type="email"
                            placeholder="email@example.com">
                    </div>
                    <div class="mb-2">
                        <label class="form-label" for="exampleDropdownFormPassword2">Password</label>
                        <input class="form-control" id="exampleDropdownFormPassword2" type="password"
                            placeholder="Password">
                    </div>
                    <div class="mb-2">
                        <div class="form-check">
                            <input class="form-check-input" id="dropdownCheck2" type="checkbox">
                            <label class="form-check-label" for="dropdownCheck2">Remember me </label>
                        </div>
                    </div>
                    <button class="btn btn-dark" type="submit">Sign in </button>
                </form>
            </div>
            <div class="btn-group">
                <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Text </button>
                <div class="dropdown-menu p-3 text-muted form-wrapper">
                    <p class="mb-2">Some example text that&apos;s free-flowing within the dropdown menu.</p>
                    <p class="mb-0">And this is more example text.</p>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>