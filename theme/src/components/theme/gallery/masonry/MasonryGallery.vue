<template>
    <Card3 colClass="col-sm-12 box-col-12" cardhaderClass="card-no-border pb-0" cardbodyClass="photoswipe-pb-responsive"
        headerTitle="true" title="MASONRY GALLERY">
        <div v-masonry class="my-gallery row grid gallery" id="aniimated-thumbnials" itemscope>
            <figure v-masonry-tile class="col-md-3 col-sm-6 grid-item" itemprop="associatedMedia" itemscope :key="index"
                v-for="(item, index) in imags" @click="() => showImg(index)">
                <a><img :src="getImgUrl(item.image)" class="img-thumbnail" /></a>
            </figure>
        </div>
        <template #light-box>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </template>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { imags } from "@/core/data/masonry"

const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
let lightBoxImages = ref<object[]>([])
let visible = ref<boolean>(false)
let indexRef = ref<number>(0)

function showImg(index: number) {
    indexRef.value = index
    visible.value = true
}
function handleHide() {
    visible.value = false
}

function getImgUrl(path: string) {
    return require('@/assets/images/' + path);
}
onMounted(() => {
    imags.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image) })

    })
})
</script>