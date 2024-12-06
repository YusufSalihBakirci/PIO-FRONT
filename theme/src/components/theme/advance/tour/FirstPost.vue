<template>
    <div class="col-sm-12" data-intro="This is your first Post" id="first-post-tour">
        <div class="card">
            <div class="profile-img-style">
                <div class="row g-2">
                    <div class="col-sm-8">
                        <div class="d-flex"><img class="img-thumbnail rounded-circle me-3" src="@/assets/images/user/7.jpg"
                                alt="Generic placeholder image">
                            <div class="flex-grow-1 align-self-center">
                                <h5 class="mt-0 user-name">William C. Jennings</h5>
                                <div class="tour-wrapper"><span>25 Jan</span><i class="tour-dot fa fa-circle"></i><span
                                        class="text-danger">6 min read</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 align-self-center mt-0 text-end">
                        <div class="social-media social-tour" data-intro="This is your social details"
                            id="social-bar-tour2">
                            <SociaMedia time="3 min ago" />
                        </div>
                    </div>
                </div>
                <hr>
                <h5 class="pb-3">Wonderful piece that successfully conveys the magnificence of the mountains and the natural
                    world.</h5>
                <p class="block-ellipsis">English Romantic painter, printer, and watercolourist <em
                        class="text-danger">William C. Jennings</em> Is most renowned for his expressive colorization,
                    creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the
                    Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately
                    depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far
                    larger enemy troops!</p>
                <div class="img-container">
                    <div id="aniimated-thumbnials"><a href="javascript:void(0)"><img class="img-fluid rounded"
                                src="@/assets/images/other-images/profile-style-img3.png" alt="gallery"></a>
                        <p class="block-ellipsis pt-3">The curved canvas is enclosed in a complex frame that the artist
                            created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are
                            depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn,
                            and God's eye.Many of the Romantic elements and subjects that he would explore throughout his
                            career are present in this work, one of his earliest, most notable of which is the landscape's
                            significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis
                            is<router-link class="text-danger" to="/users/profile" target="_blank"> Read More</router-link>
                        </p>
                    </div>
                </div>
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