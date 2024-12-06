import { defineStore } from 'pinia'
import { ref, computed } from "vue"
import { chat, data } from "@/core/data/chat"

export const useChatStore = defineStore('chat', () => {


    const users = ref(data)
    const serchUser = ref(data)
    const all = ref(data)
    const chats = ref(chat)
    const activeuser = ref<any>(data[1])
    let BOT_MSGS = ref<string[]>([
        "Hi, how are you?",
        "Ohh... I can't understand what you trying to say. Sorry!",
        "I like to play games... But I don't know how to play!",
        "Sorry if my answers are not relevant. :))",
        "I feel sleepy! :(",
    ])



    function setSerchUsers(item: string) {
        serchUser.value = all.value.filter(function (search) {
            if (search.name.toLowerCase().search(item.toLowerCase()) !== -1 && search.id !== 0)
                return search;
        });
    }

    function setActiveuser(user: number) {
        activeuser.value = user;
    }
    const currentChat = computed(() => {

        const chat = chats.value.find(chat => {
            if (chat.id === activeuser.value.id)
                return chat;
        });
        const user = users.value.find(user => {
            if (user.id === activeuser.value.id)
                return user;
        });


        return { ...user, 'chat': chat }
    })
    let currentChatData = ref(currentChat.value)
    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    function addChat(user: string | number | boolean) {
        let today = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        let id = activeuser.value;
        let addchat: any = chats.value.find(chat => chat.id === activeuser.value.id);

        let r = random(0, BOT_MSGS.value.length - 1);
        let msgText = BOT_MSGS.value[r];
        let delay = msgText.split(" ").length * 100;
        let msgname = addchat.messages.name
        addchat.messages.push({ 'sender': 1, 'name': 'Theresa Webb', 'time': today.toLowerCase(), 'text': user }); setTimeout(function () {
            addchat.messages.push({ 'sender': 0, 'name': msgname, 'time': today.toLowerCase(), 'text': msgText });
        }, 1000);
    }
    function chatData(value: any, item: any) {

    }
    function dats(value: any) {
        all.value = value
    }
    return {
        serchUser,
        activeuser,
        all,
        users,
        chats,
        setSerchUsers,
        currentChat,
        setActiveuser,
        addChat,
        currentChatData
    }
})
