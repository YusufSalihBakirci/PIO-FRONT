<template>
    <Card3 colClass="col-sm-12" cardhaderClass="card-no-border pb-0" title="Brand Icons" titleClass="m-b-0 f-w-700"
        headerTitle="true">
        <div class="row icon-lists">

            <div class="col-12 col-xxl-2 col-lg-4 col-md-6 icons-item" v-for="(br, index) in brand" :key="index"
                v-on:click="icon_bar(br.name)">
                <i :class="br.name"></i>
                <h5 class="mt-0">{{ br.name }}</h5>
            </div>

        </div>
    </Card3>
</template>
<script lang="ts" setup>
import { ref, defineEmits, defineAsyncComponent } from 'vue';
let Card3 = defineAsyncComponent(() => import("@/components/common/card/CardData3.vue"))

let emit = defineEmits(['selected'])

let brand = ref([{ name: 'icon-flickr' }, { name: 'icon-flickr-alt' }, { name: 'icon-instagram' }, { name: 'icon-google' }, { name: 'icon-github' }, { name: 'icon-facebook' }, { name: 'icon-dropbox' }, { name: 'icon-dropbox-alt' }, { name: 'icon-dribbble' }, { name: 'icon-apple' }, { name: 'icon-android' }, { name: 'icon-yahoo' }, { name: 'icon-trello' }, { name: 'icon-stack-overflow' }, { name: 'icon-soundcloud' }, { name: 'icon-sharethis' }, { name: 'icon-sharethis-alt' }, { name: 'icon-reddit' }, { name: 'icon-microsoft' }, { name: 'icon-microsoft-alt' }, { name: 'icon-linux' }, { name: 'icon-jsfiddle' }, { name: 'icon-joomla' }, { name: 'icon-html5' }, { name: 'icon-css3' }, { name: 'icon-drupal' }, { name: 'icon-wordpress' }, { name: 'icon-tumblr' }, { name: 'icon-tumblr-alt' }, { name: 'icon-skype' }, { name: 'icon-youtube' }, { name: 'icon-vimeo' }, { name: 'icon-vimeo-alt' }, { name: 'icon-twitter' }, { name: 'icon-twitter-alt' }, { name: 'icon-linkedin' }, { name: 'icon-pinterest' }, { name: 'icon-pinterest-alt' }, { name: 'icon-themify-logo' }, { name: 'icon-themify-favicon' }, { name: 'icon-themify-favicon-alt' }])
function icon_bar(icon: string) {

    emit('selected', icon);
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/animate.scss"
</style>