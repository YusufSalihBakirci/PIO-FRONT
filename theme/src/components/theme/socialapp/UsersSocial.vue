<template>
    <div class="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-8e">
        <div class="row">
            <Card3 colClass="col-sm-12">
                <div class="new-users-social">
                    <div class="d-flex gap-3"><img class="rounded-circle image-radius m-r-15" :src="getImages('user/1.jpg')"
                            alt="">
                        <div class="flex-grow-1">
                            <h6 class="mb-0">ELANA</h6>
                            <p>January, 12,2019</p>
                        </div><span class="pull-right mt-0"><vue-feather type='more-vertical'></vue-feather></span>
                    </div>
                </div><img class="img-fluid" alt="" src="@/assets/images/social-app/timeline-1.png">
                <div class="timeline-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod
                        condimentum. Fusce
                        placerat enim et odio molestie sagittis.
                    </p>
                    <div class="like-content"><span><i class="fa-solid fa-heart font-danger"></i></span><span
                            class="pull-right comment-number"><span>20 </span><span><i
                                    class="fa-solid fa-share-nodes"></i></span></span><span
                            class="pull-right comment-number"><span>10 </span><span><i
                                    class="fa-regular fa-comment"></i></span></span></div>
                    <div class="social-chat">
                        <div :class="item.class" v-for="(item, index) in post" :key="index">
                            <div class="d-flex gap-3"><img class="img-50 img-fluid m-r-20 rounded-circle" alt=""
                                    :src="getImages(item.image)">
                                <div class="flex-grow-1"><span class="f-w-700">{{ item.name }} <span>{{
                                    item.date
                                }} <i class="fa-solid fa-reply font-primary"></i></span></span>
                                    <p>{{ item.msg }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center"><a href="#">More Comments</a></div>
                    </div>
                    <div class="comments-box">
                        <div class="d-flex gap-3"><img class="img-50 img-fluid m-r-20 rounded-circle" alt=""
                                :src="getImages('user/1.jpg')">
                            <div class="flex-grow-1">
                                <div class="input-group text-box">
                                    <input class="form-control input-txt-bx" type="text" name="message-to-send"
                                        placeholder="Post Your Comments">
                                    <div class="input-group-append">
                                        <button class="btn btn-transparent" type="button"><i
                                                class="fa-regular fa-face-smile">
                                            </i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card3>
            <UsersSocial1 />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { post } from "@/core/data/sociall-app"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const UsersSocial1 = defineAsyncComponent(() => import("@/components/theme/socialapp/UsersSocial1.vue"))
</script>