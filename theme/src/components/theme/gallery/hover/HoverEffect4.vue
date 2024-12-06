<template>
    <div class="row">

        <Card3 colClass="col-sm-12" headerTitle="true" cardhaderClass="card-no-border pb-0" title="Hover Effect 4">
            <div class="row gallery my-gallery" id="aniimated-thumbnials3" itemscope>
                <figure class="col-md-3 col-6 img-hover hover-4" v-for="(n, index) in hover" :key="index"
                    @click="() => showImg(index)" itemprop="associatedMedia" itemscope>
                    <a>
                        <div>
                            <img :src="getImgUrl(n.image)" itemprop="thumbnail" alt="Image description" class="img-fluid">
                        </div>
                    </a>
                </figure>
            </div>
            <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
            </vue-easy-lightbox>
        </Card3>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineAsyncComponent } from "vue"
import { hover } from "@/core/data/masonry"
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
    hover.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image) })

    })
})
</script>