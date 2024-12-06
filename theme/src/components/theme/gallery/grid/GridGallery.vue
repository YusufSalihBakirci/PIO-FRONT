<template>
    <Card3 colClass="col-sm-12" cardbodyClass="gallery my-gallery row" cardhaderClass="card-no-border pb-0"
        headerTitle="true" title="IMAGE GALLERY">

        <figure v-for="(src, index) in  image" :key="index" class="col-xl-3 col-md-4 col-6" @click="() => showImg(index)">
            <a itemprop="contentUrl" data-size="1600x950">
                <img :src="getImgUrl(src.image)" alt="Image description" class="img-thumbnail" />
            </a>
            <div class="caption">

            </div>
        </figure>
        <template #light-box>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </template>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { image } from "@/core/data/masonry"

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
    image.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image), title: item.desc })

    })
})
</script>