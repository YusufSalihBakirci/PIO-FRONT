<template>
    <Card3 headerTitle="true" cardhaderClass="card-no-border pb-0" title="AOS Example animation">
        <div class="row gallery grid my-gallery" id="aniimated-thumbnials" v-masonry>
            <figure class="grid-item col-sm-3" data-aos="fade-down" v-masonry-tile v-for="(src, index) in aos" :key="index"
                @click="() => showImg(index)">
                <aos-vue :animation="src.animation">
                    <a>
                        <img :src="getImages(src.image)" alt="Image description" class="img-thumbnail" />
                    </a>
                </aos-vue>
            </figure>
        </div>
        <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
        </vue-easy-lightbox>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { aos } from "@/core/data/masonry"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
interface value {
    image: string,
    animation: string
}
let lightBoxImages = ref<object[]>([])
let indexRef = ref<number>(0)
let visible = ref<boolean>(false)

function showImg(index: number) {
    indexRef.value = index
    visible.value = true
}
function handleHide() {
    visible.value = false
}
onMounted(() => {
    aos.forEach((item: value) => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image) })
    })
})
</script>