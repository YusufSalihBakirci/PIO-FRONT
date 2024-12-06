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
                                <div class="tour-wrapper"><span>02 Feb</span><i
                                        class="tour-dot fa-solid fa-circle"></i><span class="text-danger">5 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 align-self-center mt-0 text-end">
                        <div class="social-media social-tour" data-intro="This is your social details"
                            id="social-bar-tour5">
                            <SociaMedia time="2 Yours ago" />
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-12 col-xl-4">
                        <div id="aniimated-thumbnials-3"><a href="javascript:void(0)"><img class="img-fluid rounded"
                                    src="@/assets/images/other-images/sidebar-bg.jpg" alt="nature"></a></div>
                    </div>
                    <div class="col-xl-6">
                        <p class="block-ellipsis pt-xl-0 pt-3">The wind gives life to the planet. This unobservable,
                            enigmatic energy has the power to revitalize a setting. Its absence can cause the world to
                            become serenely motionless. Its strength is scarcely visible on bare mountain summits, but it
                            becomes obvious in woods and on the water. Winds may be violent and even harmful. When we
                            investigate it carefully Nature is not a destination. Home is here. Garry Snyder In a very real
                            sense, our home, or natural environment, is made up of mountains and valleys, the seas and the
                            sky, the sun and the soil, the trees and the flowers. Growing up in the contemporary, civilized
                            environment, it's simple to start believing</p>
                        <div class="like-comment mt-4">
                            <ul class="list-inline">
                                <li class="list-inline-item b-r-gray pe-3">
                                    <label class="m-0"><a href="#"><i class="fa-solid fa-heart"></i></a>  Like</label>
                                </li>
                                <li class="list-inline-item b-r-gray pe-3">
                                    <label class="m-0"><a href="#"><i class="fa-solid fa-comment"></i></a>  Comment</label>
                                </li>
                                <li class="list-inline-item">
                                    <label class="m-0"><a href="#"><i
                                                class="fa-solid fa-paper-plane"></i></a>  Share</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const SociaMedia = defineAsyncComponent(() => import("@/components/theme/advance/tour/SociaMedia.vue"))
</script>