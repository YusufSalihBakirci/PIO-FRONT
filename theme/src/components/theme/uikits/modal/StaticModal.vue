<template>
    <Card3 colClass="col-xxl-5 col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Static Backdrop Modal"
        desc="To set static backdrop , use <code>staticBackdrop </code>attributes.">
        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Static
            backdrop modal</button>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdrop" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content dark-sign-up">
                    <div class="modal-body social-profile text-start">
                        <div class="modal-toggle-wrapper">
                            <h4>Admiro Login</h4>
                            <p>
                                Fill in your information below to continue.</p>
                            <form class="row g-3">
                                <div class="col-md-12">
                                    <label class="form-label" for="inputEmail4">Email</label>
                                    <input class="form-control" id="inputEmail4" type="email"
                                        placeholder="Enter Your Email">
                                </div>
                                <div class="col-md-12">
                                    <label class="form-label" for="inputPassword4">Password</label>
                                    <input class="form-control" id="inputPassword4" type="password"
                                        placeholder="Enter Your Password">
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" id="gridCheck" type="checkbox">
                                        <label class="form-check-label d-block mb-0" for="gridCheck">Check me out</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Sign in </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { badges } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>