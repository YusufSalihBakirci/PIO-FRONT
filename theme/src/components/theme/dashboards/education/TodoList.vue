<template>
    <Card1 colClass="col-xxl-3 col-xl-4 col-sm-6 box-col-6" cardClass="card " cardhaderClass="card-no-border pb-0"
        header="true" title="To-do list" headerTop="true" haderTitle="true" down="true"
        cardbodyClass="todo-list filled-checkbox">
        <ul>
            <li class="d-flex " :class="item.class" v-for="(item, index) in list" :key="index">
                <div class="flex-shrink-0">
                    <div class="form-check checkbox checkbox-solid-primary">
                        <input class="form-check-input" :id="item.for" type="checkbox" :checked="item.checked" />
                        <label class="form-check-label" :for="item.for"> </label>
                    </div>
                </div>
                <div class="flex-grow-1"><router-link to="/app/task">
                        <h5 class="f-w-500">{{ item.title }}</h5>
                    </router-link>
                    <h6>{{ item.desc }}</h6>
                </div><span>{{ item.time }}</span>
            </li>

        </ul>
    </Card1>
</template>
<script lang="ts" setup>
import { list } from "@/core/data/dashboards"
import { defineAsyncComponent } from 'vue'
const Card1 = defineAsyncComponent(() => import("@/components/common/card/CardData1.vue"))
</script>