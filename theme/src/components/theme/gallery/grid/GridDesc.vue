<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" cardbodyClass="my-gallery row gallery-with-description"
        headerTitle="true" title="IMAGE GALLERY WITH DESCRIPTION">

        <figure v-for="(src, index) in imgs" :key="index" class="col-xl-3 col-sm-6" @click="() => showImg(index)">
            <a>
                <img :src="getImgUrl(src.image)" alt="Image description" class="img-fluid" />
                <div class="caption description">
                    <h4>{{ src.title }}</h4>
                    <p>{{ src.descr }}</p>
                </div>
            </a>
        </figure>
        <template #light-box>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </template>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from 'vue'
import { imgs } from "@/core/data/masonry"
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
    imgs.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image), title: item.descr })

    })
})
</script>