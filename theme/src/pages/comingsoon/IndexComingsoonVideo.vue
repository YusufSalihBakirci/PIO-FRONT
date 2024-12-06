<template>
    <div class="container-fluid p-0">
        <div class="comingsoon auth-bg-video">
            <video class="bgvideo-comingsoon" id="bgvid" poster="@/assets/images/other-images/coming-soon-bg.jpg"
                playsinline autoplay muted loop>
                <source src="@/assets/video/auth-bg.mp4" type="video/mp4">
            </video>
            <div class="comingsoon-inner text-center"><img class="for-light"
                    src="@/assets/images/other-images/logo-login.png" alt=""><img class="for-dark"
                    src="@/assets/images/other-images/dark-logo-login.png" alt="">
                <h5>WE ARE COMING SOON</h5>
                <div class="countdown" id="clock-arrival" data-hours="1" data-minutes="2" data-seconds="3">
                    <TimerView />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const TimerView = defineAsyncComponent(() => import("@/components/common/TimerView.vue"))
</script>