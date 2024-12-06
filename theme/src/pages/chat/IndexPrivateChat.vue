<template>
    <Breadcrumbs main="Chat" mains="Private Chat" title="Private Chat" />
    <div class="container-fluid">
        <div class="row g-0">
            <SearchChat />
            <ChatRight />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
const SearchChat = defineAsyncComponent(() => import("@/components/common/SearchChat.vue"))
const ChatRight = defineAsyncComponent(() => import("@/components/theme/chat/private/ChatRight.vue"))
</script>