<template>
    <form class="msger-inputarea clearfix" @submit.prevent="addChat()">
        <div class="dropdown-form dropdown-toggle" role="main" data-bs-toggle="dropdown" aria-expanded="false"><i
                class="icon-plus"></i>
            <div class="chat-icon dropdown-menu dropdown-menu-start">
                <div class="dropdown-item mb-2">
                    <svg>
                        <use href="@/assets/svg/icon-sprite.svg#camera"></use>
                    </svg>
                </div>
                <div class="dropdown-item">
                    <svg>
                        <use href="@/assets/svg/icon-sprite.svg#attchment"></use>
                    </svg>
                </div>
            </div>
        </div>
        <input class="msger-input two uk-textarea" placeholder="Type Message here.." v-model="text"
            v-on:keyup.enter="addChat()">

        <EmojiChat @selectEmoji="onSelectEmoji" />
        <a class="msger-send-btn" type="" @click="addChat()"><i class="fa fa-location-arrow"></i></a>
    </form>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent } from "vue"
import { useChatStore } from "@/store/chat"
import { storeToRefs } from "pinia";
const EmojiChat = defineAsyncComponent(() => import("@/components/common/EmojiChat.vue"))
let text = ref<string>("")
const store = useChatStore()
function onSelectEmoji(emoji: string) {

    text.value += emoji;
}
function addChat() {
    var container: any = document.querySelector(".msger-chat")
    setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
    }, 310);
    setTimeout(function () {
        container.scrollBy({ top: 200, behavior: 'smooth' });
    }, 1100);
    if (text.value !== '') {
        store.addChat(text.value);
        text.value = '';
    }
}

</script>