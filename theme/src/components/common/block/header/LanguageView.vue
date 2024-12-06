<template>
    <div class="translate_wrapper" :class="active ? 'active' : ''">
        <div class="current_lang"><a class="lang" @click="openDropDown()"><i class="flag-icon "
                    :class="selectedLanguage.icon"></i>
                <h6 class="lang-txt f-w-700">{{
                    selectedLanguage.txt }}</h6>
            </a></div>
        <ul class="custom-menu profile-menu language-menu py-0 more_lang" :class="active ? 'active' : ''">
            <li class="d-block" v-for="(lang, index) in data" :key="index" @click.prevent="selectLanguage(lang)">
                <a class="lang" href="#" data-value="English">
                    <i class="flag-icon " :class="lang.icon"></i>
                    <div class="lang-txt">{{ lang.lan }}</div>
                </a></li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, onUnmounted } from 'vue';
import { language } from "@/core/data/language"
import { useI18n } from "vue-i18n";
interface selected {
    lan: string,
    txt: string,
    icon: string
}
const i18n = useI18n()
const active = ref<boolean>(false)
const selectedLanguage = ref<selected>({
    lan: 'English',
    txt: 'EN',
    icon: 'flag-icon-us'
})
const data = language

function selectLanguage(language: selected) {
    active.value = false;
    i18n.locale.value = language.lan;
    selectedLanguage.value = language;
}

function openDropDown() {
    active.value = !active.value;
}

const closeDropdown = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest('.translate_wrapper')) {
        active.value = false;
    }
};

watchEffect(() => {
    if (active.value) {
        document.addEventListener('click', closeDropdown);
    } else {
        document.removeEventListener('click', closeDropdown);
    }
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>
<style>
.lang-txt {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
</style>