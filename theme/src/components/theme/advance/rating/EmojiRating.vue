<template>
    <Card3 colClass="col-xl-4" cardClass="height-equal" cardhaderClass="card-no-border pb-0" pre="true"
        preClass="desc mb-0 mt-1" headerTitle="true" title="Emoji with message"
        desc="<span>Use</span><code>.emoji-wrapper</code><span>add emoji with messages.</span>">
        <div class="emoji-wrapper">
            <input v-for="(item, index) in emojirating" :key="index" :id="item.for" type="radio" name="rate">
            <div class="content">
                <div class="outer">
                    <ul class="emojis">
                        <li :class="item.class" v-for="(item, index) in slideimg" :key="index"><img v-if="item.img"
                                :src="getImages(item.img)" alt=""></li>
                    </ul>
                </div>
                <div class="stars">
                    <label v-for="(item, index) in emojirating" :key="index" class=" fas fa-star" :class="item.for"
                        :for="item.for"></label>
                </div>
            </div>
            <div class="footer"><span class="text"></span><span class="numb"></span></div>
        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import { emojirating, slideimg } from "@/core/data/advance"
import { getImages } from "@/composables/common/getImages"
const Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))
</script>