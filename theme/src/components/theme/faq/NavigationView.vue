<template>
    <div class="col-xl-4 xl-40 col-lg-6 col-md-5">
        <div class="row">

            <Card3 colClass="col-lg-12" icos="true" type="help-circle" titles="true" titleClass="f-w-700"
                cardClass="card-mb-faq xs-mt-search" cardhaderClass="faq-header pb-0" cardbodyClass="faq-body"
                headerTitle="true" title="Search articles">
                <div class="faq-form basic-form">
                    <input class="form-control" type="text" placeholder="Search.."><vue-feather class="search-icon"
                        type="search"></vue-feather>
                </div>
            </Card3>


            <Card3 colClass="col-lg-12" icos="true" type="settings" titles="true" titleClass="f-w-700"
                cardClass="card-mb-faq " cardhaderClass="faq-header pb-0" cardbodyClass="faq-body" headerTitle="true"
                title="Navigation">
                <div class="navigation-btn">
                    <a class="btn btn-primary" href="#">
                        <vue-feather class="m-r-10" type="message-square"></vue-feather> Ask Question</a>
                </div>
                <div class="navigation-option">
                    <ul>
                        <li><a href="javascript:void(0)"><vue-feather type="edit"></vue-feather>Tutorials</a>
                        </li>
                        <li><a href="javascript:void(0)"><vue-feather type="globe"></vue-feather>Help center</a>
                        </li>
                        <li><a href="javascript:void(0)"><vue-feather type="book-open"></vue-feather>Knowledgebase</a></li>
                        <li><a href="javascript:void(0)"><vue-feather type="file-text"></vue-feather>Articles</a><span
                                class="badge badge-primary badge-pill pull-right">42</span></li>
                        <li><a href="javascript:void(0)"><vue-feather type="youtube"></vue-feather>Video
                                Tutorials</a><span class="badge badge-primary badge-pill pull-right">648</span>
                        </li>
                        <li><a href="javascript:void(0)"><vue-feather type="message-circle"></vue-feather>Ask
                                our community</a></li>
                        <li><a href="javascript:void(0)"><vue-feather type="mail"></vue-feather>Contact us </a>
                        </li>
                    </ul>
                    <hr>
                    <ul>
                        <li><a href="javascript:void(0)"><vue-feather type="message-circle"></vue-feather>Ask
                                our community</a></li>
                        <li><a href="javascript:void(0)"><vue-feather type="mail"></vue-feather>Contact us</a>
                        </li>
                    </ul>
                </div>
            </Card3>

            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header faq-header pb-0">
                        <h4 class="f-w-700 d-inline-block">Latest Updates</h4><span class="pull-right d-inline-block">See
                            All</span>
                    </div>
                    <div class="card-body faq-body">
                        <div class="d-flex updates-faq-main" v-for="(item, index) in latest" :key="index">
                            <div class="updates-faq"><vue-feather class="font-primary" :type="item.icon"></vue-feather>
                            </div>
                            <div class="flex-grow-1 updates-bottom-time">
                                <p class="f-w-600" v-html="item.title"></p>
                                <p>{{ item.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { latest } from "@/core/data/faq"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>