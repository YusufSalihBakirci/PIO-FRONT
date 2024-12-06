<template>
    <Card3 colClass="col-xxl-3 col-xl-4" cardhaderClass="card-no-border pb-0" pre="true" preClass="mt-1 mb-0"
        headerTitle="true" title="Centered Modal"
        desc="Use <code>.modal-dialog-centered </code>to set the centered modal. ">
        <button class="btn btn-success" type="button" data-bs-toggle="modal"
            data-bs-target="#exampleModalCenter1">Vertically centered</button>
        <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenter1"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-toggle-wrapper">
                            <ul class="modal-img">
                                <li> <img src="@/assets/images/gif/danger.gif" alt="error"></li>
                            </ul>
                            <h4 class="text-center pb-2">Ohh! Something went wrong!</h4>
                            <p class="text-center">Attackers on malicious activity may trick you into doing something
                                dangrous like installing software or revealing your personal informations.</p>
                            <button class="btn btn-secondary d-flex m-auto" type="button" data-bs-dismiss="modal">Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { badges } from "@/core/data/uikits"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>