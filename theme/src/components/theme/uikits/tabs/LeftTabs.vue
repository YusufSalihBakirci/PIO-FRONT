<template>
    <Card3 colClass="col-xxl-6" pre="true" cardhaderClass="card-no-border pb-0" preClass="mt-1 mb-0" headerTitle="true"
        title="Material Style Left Tabs" desc="To set the  <code>.nav-effect </code>class.                    ">
        <div class="tabs-responsive-side">
            <div class="material-wrapper">
                <div class="d-flex">
                    <div class="nav flex-column nav-secondary border-tab nav-left" id="sideline-tab" role="tablist"
                        aria-orientation="vertical"><a class="nav-link nav-effect" id="sideline-home-tab"
                            data-bs-toggle="pill" href="#sideline-home" role="tab" aria-controls="sideline-home"
                            aria-selected="false">Home</a><a class="nav-link nav-effect" id="sideline-profile-tab"
                            data-bs-toggle="pill" href="#sideline-profile" role="tab" aria-controls="sideline-profile"
                            aria-selected="false">Profile</a><a class="nav-link nav-effect active"
                            id="sideline-messages-tab" data-bs-toggle="pill" href="#sideline-messages" role="tab"
                            aria-controls="sideline-messages" aria-selected="true">Inbox</a><a
                            class="nav-link nav-effect pb-0" id="sideline-settings-tab" data-bs-toggle="pill"
                            href="#sideline-settings" role="tab" aria-controls="sideline-settings"
                            aria-selected="false">Settings</a></div>
                </div>
                <div class="material-content">
                    <div class="tab-content" id="sideline-tabContent">
                        <div class="tab-pane fade" id="sideline-home" role="tabpanel" aria-labelledby="sideline-home-tab">
                            <p>This product is meant for educational purposes only. Any resemblance to real persons, living
                                or dead is purely coincidental. Void where prohibited. Some assembly required. List each
                                check separately by bank number. Batteries not included.Google Web Designer gives you the
                                power to create beautiful and compelling videos, images and HTML5 ads. Use animation and
                                interactive elements to build out your creative vision, then scale your content for
                                different sizes or audiences with responsive and dynamic workflows.</p>
                        </div>
                        <div class="tab-pane fade" id="sideline-profile" role="tabpanel"
                            aria-labelledby="sideline-profile-tab">
                            <p class="mb-0"></p>
                            <div class="flex-space flex-wrap align-items-center"><img class="tab-image"
                                    :src="getImages('user/12.png')" alt="profile">
                                <ul class="d-flex flex-column gap-1">
                                    <li> <strong> Name: </strong>Jully Catlin</li>
                                    <li><strong>Visit Us: </strong>50006 Ehrenberg/Parker,Arkansas-85334</li>
                                    <li><strong>Mail Us: </strong>hello.@gmail.com</li>
                                    <li><strong>Contact Number: </strong>(928) 923-7940</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-pane fade show active" id="sideline-messages" role="tabpanel"
                            aria-labelledby="sideline-messages-tab">
                            <div class="card-body p-0">
                                <div class="main-inbox">
                                    <div class="header-inbox justify-content-start gap-2">
                                        <div class="header-left-inbox">
                                            <div class="inbox-img"><img :src="getImages('user/10.jpg')" alt="profile"></div>
                                            <div class="inbox-content">
                                                <h6>Dalbult Caslin </h6>
                                                <p class="text-muted">stroman.rogers@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body-inbox mt-2">
                                        <div class="body-h-wrapper"><i
                                                class="me-2 tab-space iconly-Star icbo"></i><em>Compare Prices Find the Best
                                                Computer Assessors Fronted Issue.</em></div>
                                        <p class="pt-2">Site speed and design are two of the most important ranking factors
                                            Google takes into consideration, as they have the biggest effect of customer
                                            staying on site as the website respond faster.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="sideline-settings" role="tabpanel"
                            aria-labelledby="sideline-settings-tab">
                            <p><strong> In this situation, you would probably do two things:</strong> exit the page, or look
                                for the trusty search bar. If you decide to stick around, a proper search function should
                                take your query and send you to your destination. Problem solved. It's not a perfect
                                experience, but it's a hard one to avoid on larger websites that simply can't link to every
                                piece of content from the homepage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>