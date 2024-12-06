<template>
    <a class="dark-mode" :class="{ active: actives }">
        <svg v-show="mixLayout === 'light'" @click="customizeMixLayout('dark-only')">
            <use href="@/assets/svg/iconly-sprite.svg#moondark"></use>
        </svg>
        <svg v-show="mixLayout === 'dark-only'" @click="customizeMixLayout('light')">
            <use href="@/assets/svg/iconly-sprite.svg#moondark"></use>
        </svg>
    </a>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { uselayoutStore } from '@/store/layout';

const mixLayout = ref<string>('light');
const actives = ref<boolean>(false);
const store = uselayoutStore();

function customizeMixLayout(val: string) {
    mixLayout.value = val;
    actives.value = !actives.value;
    store.setLayout({ class: val });
}

onMounted(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        mixLayout.value = savedMode;
        actives.value = savedMode === 'dark-only';
        store.setLayout({ class: savedMode });
    }
});

watch(mixLayout, (newValue) => {
    localStorage.setItem('mode', newValue);
});
</script>