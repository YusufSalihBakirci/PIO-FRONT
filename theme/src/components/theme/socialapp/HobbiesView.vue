<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header social-header">
                <h3> <span>Hobbies and Interests</span><span class="pull-right"><vue-feather
                            type='more-vertical'></vue-feather></span>
                </h3>
            </div>
            <div class="card-body">

                <div class="row details-about" v-for="(item, index) in hobbi" :key="index">
                    <div class="col-sm-6" v-for="(items, index) in item.children" :key="index">
                        <div class="your-details" :class="items.class"><span class="f-w-700 mb-2 d-block">{{ items.title
                        }}</span>
                            <p>{{ items.desc }}</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { hobbi } from "@/core/data/sociall-app"
</script>