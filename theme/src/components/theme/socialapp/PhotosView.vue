<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card">
                <div class="my-gallery card-body row gallery-with-description" itemscope>
                    <figure v-for="(src, index) in photo" :key="index" class="col-xl-3 col-sm-6 "
                        @click="() => showImg(index)">
                        <a>
                            <img :src="getImgUrl(src.image)" alt="Image description" class="img-fluid" />
                            <div class="caption description">
                                <h4> {{ src.title }}</h4>
                                <p>{{ src.descr }}</p>
                            </div>
                        </a>
                    </figure>

                </div>

            </div>
        </div>
    </div>
    <vue-easy-lightbox :index="indexRef" :visible="visible" :imgs="lightBoxImages" @hide="handleHide">
    </vue-easy-lightbox>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref, onMounted } from 'vue'
import { photo } from "@/core/data/masonry"
import { getImages } from "@/composables/common/getImages"
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
    photo.forEach(item => {
        lightBoxImages.value.push({ src: require('@/assets/images/' + item.image), title: item.title })

    })
})
</script>