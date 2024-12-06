import { defineStore } from "pinia";
import { ref, } from "vue";
import { menu } from "@/core/data/menu";
interface searchdatas {
    icon: string,
    icon2: string,
    path: string,
    title: string
}
interface search {
    icon: string,
    icon2: string,
    path: string,
    title: string,
    bookmark: string
}




export const useMenuStore = defineStore("menu", () => {
    const data = ref(menu)
    const togglesidebar = ref<boolean>(true);
    const activeoverlay = ref<boolean>(true);
    const searchData = ref<searchdatas[]>([]);
    const pinedArray = ref<string[]>([])
    const active = ref<boolean>(false)
    const customizer = ref<string>("");

    const searchDatas = ref<search[]>([]);
    const searchOpen = ref<boolean>(false);
    const hideRightArrowRTL = ref<boolean>(false)
    const hideLeftArrowRTL = ref<boolean>(true)
    const hideRightArrow = ref<boolean>(true)
    const hideLeftArrow = ref<boolean>(true)
    const width = ref<number>(0)
    const height = ref<number>(0)
    const margin = ref<number>(0)
    const menuWidth = ref<number>(0)
    const perentName = ref<string>('')
    const subName = ref<string>('')
    const childName = ref<string>('')
    const bodyToggle = ref(false)
    const perentToggle = ref<boolean>(false)
    const subToggle = ref<boolean>(false)
    const childToggle = ref<boolean>(false)
    const openSection = ref<boolean>(false)

    function openCustomizer() {
        openSection.value = !openSection.value
    }


    function openActives() {
        active.value = !active.value
    }
    function subMenuToggle(Name: string) {
        perentName.value = perentName.value != Name ? Name : ""
        perentToggle.value = perentName.value != "" ? true : false
    }

    function toggle_sidebar() {
        togglesidebar.value = !togglesidebar.value;
        if (window.innerWidth < 991) {
            activeoverlay.value = true;
        } else {
            activeoverlay.value = false;
        }
        activeoverlay.value = false;
    }

    return {
        data,
        togglesidebar,
        activeoverlay,
        toggle_sidebar,
        pinedArray,
        customizer,
        searchData,
        searchOpen,
        hideRightArrowRTL,
        hideLeftArrowRTL,
        hideRightArrow,
        hideLeftArrow,
        width,
        height,
        margin,
        menuWidth,
        searchDatas,
        bodyToggle,
        subMenuToggle,

        perentName,
        subName,
        childName,
        perentToggle,
        subToggle,
        childToggle,
        openActives,
        active,

        openSection,
        openCustomizer
    }
})