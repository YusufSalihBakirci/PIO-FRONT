<template>
    <Card3 colClass="col-sm-12" headerTitle="true" cardbodyClass="photoswipe-pb-responsive"
        cardhaderClass="card-no-border pb-0" title="MASONRY GALLERY WITH DESCRIPTION">
        <div v-masonry class="my-gallery row grid gallery-with-description" id="aniimated-thumbnials" itemscope>

            <figure v-masonry-tile class="grid-item col-xl-3 col-sm-6" :key="index" v-for="(item, index) in imagearray"
                @click="() => showImg(index)">
                <a>
                    <img :src="getImgUrl(item.image)" class="img-fluid" />
                    <div class="caption description">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.descr }}</p>
                    </div>
                </a>
            </figure>

        </div>
        <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
        </vue-easy-lightbox>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { imagearray } from "@/core/data/masonry"

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
    imagearray.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image), title: item.descr })

    })
})
</script>