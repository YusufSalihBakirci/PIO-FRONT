<template>
    <Card3 colClass="col-sm-12" table="true" cardClass="overflow-hidden" cardhaderClass="card-no-border" pre="true"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Basic Table With Border Bottom Color"
        desc="<span>use a class</span><code>table-*.border-bottom-*</code><span>class for Border bottom color</span>">
        <div class="table-responsive theme-scrollbar">

            <table class="table">
                <thead>
                    <tr class="border-bottom-primary">
                        <th scope="col">Id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Company</th>
                        <th scope="col">Language</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="item.borderColor" v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ item.id }}</th>
                        <td><img :src="getImages(item.img)" alt="" class="img-30 me-2 ">{{
                            item.firstName
                        }}</td>
                        <td>{{ item.lastName }}</td>
                        <td>{{ item.userName }}</td>
                        <td>{{ item.role }}</td>
                        <td>{{ item.company }}</td>
                        <td>
                            <div class="badge " :class="item.badgeClass">
                                {{ item.language }}
                            </div>
                        </td>
                        <td>{{ item.country }}</td>
                    </tr>
                    <tr class="border-bottom-0">
                        <th class="border-bottom-0" scope="row">7</th>
                        <td class="border-bottom-0"><img class="img-30 me-2" src="@/assets/images/avtar/4.jpg" alt="">Ram
                            Jacob</td>
                        <td class="border-bottom-0">Ottandy</td>
                        <td class="border-bottom-0">ElianaJons@twitter&#x9;&#x9;</td>
                        <td class="border-bottom-0">Developer</td>
                        <td class="border-bottom-0">Info Ltd.&#x9;&#x9;</td>
                        <td class="border-bottom-0"><span class="badge badge-light-success">Vue</span></td>
                        <td class="border-bottom-0">IRN</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { data } from "@/core/data/table"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>