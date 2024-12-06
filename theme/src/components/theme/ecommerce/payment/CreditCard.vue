<template>
    <Card3 colClass="col-xxl-8 box-col-12" cardhaderClass="pb-0 card-no-border" headerTitle="true" title="Credit card">
        <div class="row">
            <div class="col-md-7 order-md-0 order-1">
                <form class="theme-form mega-form">
                    <div class="mb-3">
                        <input class="form-control" type="text" placeholder="Card number" />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="text" placeholder="First Name" />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="date" />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" type="text" placeholder="Name on card" />
                    </div>
                    <div class="mb-0">
                        <select class="form-select" size="1">
                            <option>Select Type</option>
                            <option>Master</option>
                            <option>Visa</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="col-md-5 text-center"><img class="img-fluid" src="@/assets/images/ecommerce/card.png" alt=""></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>
