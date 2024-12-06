<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="profile-img-style">
                <div class="row g-2">
                    <div class="col-sm-8">
                        <div class="d-flex"><img class="img-thumbnail rounded-circle me-3" src="@/assets/images/user/7.jpg"
                                alt="Generic placeholder image">
                            <div class="flex-grow-1 align-self-center">
                                <h5 class="mt-0 user-name">William C. Jennings</h5>
                                <div class="tour-wrapper"><span>25 Jan</span><i
                                        class="tour-dot fa-solid fa-circle"></i><span class="text-danger">1 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 align-self-center mt-0 text-end">
                        <div class="social-media social-tour" data-intro="This is your social details"
                            id="social-bar-tour3">
                            <SociaMedia time="10 Hours ago" />

                        </div>
                    </div>
                </div>
                <hr>
                <p class="block-ellipsis">you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                <div class="row g-3 mt-4 pictures" id="aniimated-thumbnials-2"><a class="col-sm-6"
                        href="javascript:void(0)">
                        <div class="tour-blog"><img class="img-fluid rounded"
                                src="@/assets/images/other-images/mountain.jpg" alt="mountain"></div>
                    </a><a class="col-sm-6" href="javascript:void(0)">
                        <div class="tour-blog"><img class="img-fluid rounded" src="@/assets/images/other-images/sea.jpg"
                                alt="sea"></div>
                    </a></div>
                <div class="like-comment mt-4">
                    <ul class="list-inline">
                        <li class="list-inline-item b-r-gray pe-3">
                            <label class="m-0"><a href="#"><i class="fa-solid fa-heart"></i></a>  Like</label>
                        </li>
                        <li class="list-inline-item b-r-gray pe-3">
                            <label class="m-0"><a href="#"><i class="fa-solid fa-comment"></i></a>  Comment</label>
                        </li>
                        <li class="list-inline-item">
                            <label class="m-0"><a href="#"><i class="fa-solid fa-paper-plane"></i></a>  Share</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const SociaMedia = defineAsyncComponent(() => import("@/components/theme/advance/tour/SociaMedia.vue"))
</script>