<template>
    <div class="row">
        <div class="col-sm-12 box-col-12">
            <div class="card hovercard text-center">
                <div class="cardheader socialheader"></div>
                <div class="user-image">
                    <div class="avatar"><img alt="" src="@/assets/images/user/1.jpg"></div>
                    <div class="icon-wrapper"><i class="icofont icofont-pencil-alt-5"></i></div>
                    <ul class="share-icons">
                        <li><a class="social-icon bg-primary" href="#"><i class="fa-regular fa-face-smile"></i></a></li>
                        <li><a class="social-icon bg-secondary" href="#"><i class="fa-brands fa-weixin"></i></a></li>
                        <li><a class="social-icon bg-warning" href="#"><i class="fa-solid fa-share-nodes"></i></a></li>
                    </ul>
                </div>
                <div class="info market-tabs p-0">
                    <ul class="nav nav-tabs border-tab tabs-scoial" id="top-tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="top-timeline" data-bs-toggle="tab"
                                href="#timeline" role="tab" aria-controls="timeline" aria-selected="true">Timeline</a></li>
                        <li class="nav-item"><a class="nav-link" id="top-about" data-bs-toggle="tab" href="#about"
                                role="tab" aria-controls="about" aria-selected="false">About</a></li>
                        <li class="nav-item">
                            <div class="user-designation border-0"></div>
                            <div class="title"><a target="_blank" href="">ElANA</a></div>
                            <div class="desc mt-2">general manager</div>
                        </li>
                        <li class="nav-item"><a class="nav-link" id="top-friends" data-bs-toggle="tab" href="#friends"
                                role="tab" aria-controls="friends" aria-selected="false">Friends</a></li>
                        <li class="nav-item"><a class="nav-link" id="top-photos" data-bs-toggle="tab" href="#photos"
                                role="tab" aria-controls="photos" aria-selected="false">Photos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-content" id="top-tabContent">
        <div class="tab-pane fade show active" id="timeline" role="tabpanel" aria-labelledby="timeline">
            <indexTimeline />
        </div>
        <div class="tab-pane fade" id="about" role="tabpanel" aria-labelledby="about">
            <IndexAbout />
        </div>
        <div class="tab-pane fade" id="friends" role="tabpanel" aria-labelledby="friends">
            <IndexFriends />
        </div>
        <div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos">
            <PhotosView />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const indexTimeline = defineAsyncComponent(() => import("@/components/theme/socialapp/IndexTimeline.vue"))
const IndexAbout = defineAsyncComponent(() => import("@/components/theme/socialapp/IndexAbout.vue"))
const IndexFriends = defineAsyncComponent(() => import("@/components/theme/socialapp/IndexFriends.vue"))
const PhotosView = defineAsyncComponent(() => import("@/components/theme/socialapp/PhotosView.vue"))
</script>