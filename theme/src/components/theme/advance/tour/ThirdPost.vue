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
                                <div class="tour-wrapper"><span>09 Dec</span><i
                                        class="tour-dot fa-solid fa-circle"></i><span class="text-danger">2 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 align-self-center mt-0 text-end">
                        <div class="social-media social-tour" data-intro="This is your social details"
                            id="social-bar-tour4">
                            <SociaMedia time="9 Month ago" />
                        </div>
                    </div>
                </div>
                <hr>
                <p class="block-ellipsis">Nature has a role in our lives. We are a part of everything since we sprang from a
                    seed and the ground, but we are quickly losing the perception that we are animals much like the rest. Is
                    it possible to feel something when you gaze at, appreciate, and hear a tree? Can you pay attention to
                    the tiny weed, the creeper climbing the wall, the light on the leaves, and the numerous shadows? All of
                    this must be understood, and one must have a feeling of connectedness with the natural world around
                    them. Despite living in a town, there are still a few trees here and there. The next garden's bloom
                    could not be well-kept.</p>
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