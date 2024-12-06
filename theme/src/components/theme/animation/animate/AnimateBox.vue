<template>
    <Card3 colClass="col-sm-12">
        <div class="row">
            <div class="col-xl-6 col-md-8 offset-xl-3 offset-md-2">
                <div id="animation-box">
                    <transition appear :enter-active-class="enterClass">
                        <div class="box" :key="show">
                            <div class="card">
                                <div class="animate-widget">
                                    <div><img class="img-fluid" :src="getImages('banner/3.jpg')" alt=""></div>
                                    <div class="text-center p-25">
                                        <p class="text-muted mb-0">Denouncing pleasure and praising pain was
                                            born and I will give you a complete account of the system, and
                                            expound the actual teachings</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <form class="theme-form text-center">
                    <div class="mb-3">
                        <select v-model="animation" @change="selectAnimate"
                            class="form-select input input--dropdown js-animations text-center text-md-start">
                            <option v-for="(anim, index) in animationList" :value="anim" :key="index">{{ anim }}
                            </option>
                        </select>
                    </div>
                    <button class="js-triggeraNimation btn btn-primary" @click.prevent="selectAnimated(animation)">Animate
                        it</button>
                </form>
            </div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, computed } from 'vue'
import { animationList, animation, show } from "@/composables/common/animationView"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
const enterClass = computed(() => {
    return `animated ${animation.value}`;
})
function selectAnimate() {
    show.value = !show.value;
}
function selectAnimated(animation: boolean) {
    show.value = animation;
}

</script>