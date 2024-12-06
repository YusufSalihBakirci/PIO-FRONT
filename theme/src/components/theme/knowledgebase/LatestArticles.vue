<template>
    <div class="col-lg-12">
        <div class="header-faq">
            <h3 class="mb-0 ">Latest articles and videos</h3>
        </div>
        <div class="row ">
            <div class="col-xl-4 col-md-6">
                <div class="row">

                    <Card3 colClass="col-sm-12" v-for="(item, index) in articles" :key="index">
                        <div class="d-flex articles-icons"><vue-feather class="m-r-30" :type="item.icon"></vue-feather>
                            <div class="flex-grow-1">
                                <h5 class="f-w-700 ">{{ item.title }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </Card3>


                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="row">

                    <Card3 colClass="col-sm-12" v-for="(item, index) in articles1" :key="index">
                        <div class="d-flex articles-icons"><vue-feather class="m-r-30" :type="item.icon"></vue-feather>
                            <div class="flex-grow-1">
                                <h5 class="f-w-700"> {{ item.title }}</h5>
                                <p>{{ item.desc }}
                                </p>
                            </div>
                        </div>
                    </Card3>


                </div>
            </div>
            <div class="col-xl-4">
                <div class="row">

                    <Card3 colClass="col-xl-12 col-md-6" v-for="(item, index) in articles2" :key="index">
                        <div class="d-flex articles-icons"><vue-feather class="m-r-30" :type="item.icon"></vue-feather>
                            <div class="flex-grow-1">
                                <h5 class="f-w-700">{{ item.title }}</h5>
                                <p>{{ item.desc }}</p>
                            </div>
                        </div>
                    </Card3>


                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, } from 'vue'
import { articles, articles1, articles2 } from "@/core/data/knowledgebase"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>