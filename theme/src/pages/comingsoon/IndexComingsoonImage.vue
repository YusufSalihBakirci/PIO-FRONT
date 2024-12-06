<template>
    <div class="container-fluid p-0 m-0">
        <div class="comingsoon comingsoon-bgimg">
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