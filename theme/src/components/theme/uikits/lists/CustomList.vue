<template>
    <Card3 colClass="col-md-12" pre="true" preClass="mt-1 mb-0" cardhaderClass="card-no-border pb-0" headerTitle="true"
        title="Custom Content Lists" desc="Use the<code>.list-group-item</code> through make custom design of all lists.">
        <div class="list-group main-lists-content">
            <a class="list-group-item list-group-item-action " :class="item.class" v-for="(item, index) in customs"
                :key="index" href="#" aria-current="true">
                <div class="d-flex w-100 justify-content-between align-items-center">
                    <div class="list-wrapper"><img class="list-img" :src="getImages(item.img)" alt="profile">
                        <div class="list-content">
                            <h6 :class="item.titleClass">{{ item.name }}</h6>
                            <p>{{ item.email }}</p>
                        </div>
                    </div><small>{{ item.day }}</small>
                </div>
                <p class="mb-1 txt-light">{{ item.desc }}</p><small :class="item.followClass">{{ item.follow }}</small>
            </a>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { customs } from "@/core/data/uikits"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>