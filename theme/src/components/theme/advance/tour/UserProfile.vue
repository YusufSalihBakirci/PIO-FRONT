<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card hovercard text-center">
                <div class="cardheader"></div>
                <div class="user-image">
                    <div class="avatar"><img alt="" src="@/assets/images/user/7.jpg" id="profiletour"></div>
                    <div class="icon-wrapper"><i class="fa-solid fa-pencil" data-intro="Change Admiro profile image here"
                            id="update-profile-tour"></i></div>
                </div>
                <div class="info">
                    <div class="row g-3" data-intro="This is your profile details" id="info-bar-tour">
                        <div class="col-sm-6 col-xl-4 order-sm-1 order-xl-0">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="text-start tour-email">
                                        <h6 class="tour-mb-space"><i class="fa-solid fa-envelope"></i>   Email</h6>
                                        <span>William@jourrapide.com</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-start ttl-sm-mb-0 tour-email">
                                        <h6 class="tour-mb-space"><i class="fa-regular fa-calendar-days"></i>   BOD</h6>
                                        <span>02 January
                                            1988</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-xl-4 order-sm-0 order-xl-1">
                            <div class="user-designation tour-email">
                                <div class="title"><a target="_blank" href="">William C. Jennings</a></div>
                                <div class="desc mt-2"> Web Designer</div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-4 order-sm-2 order-xl-2">
                            <div class="row g-3">
                                <div class="col-md-6 mt-0 mt-sm-3">
                                    <div class="text-start ttl-xs-mt tour-email">
                                        <h6 class="tour-mb-space"><i class="fa-solid fa-phone"></i>   Contact Us</h6>
                                        <span>US
                                            310-273-0666</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-start ttl-sm-mb-0 tour-email">
                                        <h6 class="tour-mb-space"><i class="fa-solid fa-location-arrow"></i>   Location</h6>
                                        <span>4377
                                            Libby Street Beverly Hills</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="social-media" data-intro="This is your social details" id="social-bar-tour">
                        <SociaMedia />
                    </div>

                    <div class="follow">
                        <div class="row">
                            <div class="col-6 border-end">
                                <div class="follow-num counter">25.8K</div><span>Follower</span>
                            </div>
                            <div class="col-6">
                                <div class="follow-num counter">65.2M</div><span>Following</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FirstPost />
        <SecondPost />
        <ThirdPost />
        <LastPost />
        <VOnboardingWrapper ref="wrapper" :steps="steps" class="tour-visit" />
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { VOnboardingWrapper, useVOnboarding } from 'v-onboarding'
import 'v-onboarding/dist/style.css'
const SociaMedia = defineAsyncComponent(() => import("@/components/theme/advance/tour/SociaMedia.vue"))
const FirstPost = defineAsyncComponent(() => import("@/components/theme/advance/tour/FirstPost.vue"))
const SecondPost = defineAsyncComponent(() => import("@/components/theme/advance/tour/SecondPost.vue"))
const ThirdPost = defineAsyncComponent(() => import("@/components/theme/advance/tour/ThirdPost.vue"))
const LastPost = defineAsyncComponent(() => import("@/components/theme/advance/tour/LastPost.vue"))
let tour = ref();
let wrapper = ref();
const { start, goToStep, finish } = useVOnboarding(wrapper)
let steps = [
    {
        attachTo: { element: '#profiletour' }, content: { title: "This is Admiro profile" }
    },
    {
        attachTo: { element: '#update-profile-tour' }, content: { title: "Change Admiro profile image here" }
    },
    {
        attachTo: { element: '#info-bar-tour' }, content: { title: "This is your profile details" }
    },
    {
        attachTo: { element: '#social-bar-tour' }, content: { title: "This is your social details" }
    },
    {
        attachTo: { element: '#first-post-tour' }, content: { title: "This is the your first Post" }
    },
    {
        attachTo: { element: '#social-bar-tour2' }, content: { title: "This is your social details" }
    },
    {
        attachTo: { element: '#social-bar-tour3' }, content: { title: "This is your social details" }
    },
    {
        attachTo: { element: '#social-bar-tour4' }, content: { title: "This is your social details" }
    },
    {
        attachTo: { element: '#social-bar-tour5' }, content: { title: "This is your social details" }
    },
]

onMounted(() => {
    start()
});
</script>