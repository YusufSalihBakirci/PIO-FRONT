import { defineStore } from "pinia";
import { ref, onMounted, computed, watch } from "vue";
import { menu } from "@/core/data/menu";
import { useRoute } from "vue-router";
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
interface MenuItem {
    title: string;

}



export const useMenuStore = defineStore("menu", () => {
    let data = ref(menu)
    let togglesidebar = ref<boolean>(true);
    let activeoverlay = ref<boolean>(true);
    let searchData = ref<searchdatas[]>([]);
    let pinedArray = ref<string[]>([])
    let active = ref<boolean>(false)
    let customizer = ref<string>("");

    let searchDatas = ref<search[]>([]);
    let searchOpen = ref<boolean>(false);
    let hideRightArrowRTL = ref<boolean>(false)
    let hideLeftArrowRTL = ref<boolean>(true)
    let hideRightArrow = ref<boolean>(true)
    let hideLeftArrow = ref<boolean>(true)
    let width = ref<number>(0)
    let height = ref<number>(0)
    let margin = ref<number>(0)
    let menuWidth = ref<number>(0)
    let searchKey = ref('')
    let perentName = ref<string>('')
    let subName = ref<string>('')
    let childName = ref<string>('')
    let bodyToggle = ref(false)
    let perentToggle = ref<boolean>(false)
    let subToggle = ref<boolean>(false)
    let childToggle = ref<boolean>(false)
    let openSection = ref<boolean>(false)
    const route = useRoute();

    function openCustomizer() {
        openSection.value = !openSection.value
    }

    function toggleMenu(item: any) {

        if (!item.active) {

            data.value.forEach((menu) => {
                if (data.value.includes(item)) {
                    menu.active = false;
                }

                if (menu.children) {
                    menu.children.forEach((subMenu) => {
                        subMenu.active = false;

                        if (subMenu.children) {
                            subMenu.children.forEach((child) => {
                                child.active = false;

                                if (child.children) {
                                    child.children.forEach((subhild) => {
                                        subhild.active = false;
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }

        item.active = !item.active;
    }
    function setNavActive(items: any) {
        data.value.forEach((menuItem) => {
            menuItem.active = false;
            if (menuItem === items) {
                menuItem.active = true;
            }
            if (menuItem.children) {
                menuItem.children.forEach((subMenuItem) => {
                    subMenuItem.active = false;
                    if (subMenuItem === items) {
                        menuItem.active = true;
                        subMenuItem.active = true;
                    }
                    if (subMenuItem.children) {
                        subMenuItem.children.forEach((subSubMenuItem) => {
                            subSubMenuItem.active = false;
                            if (subSubMenuItem === items) {
                                menuItem.active = true;
                                subMenuItem.active = true;
                                subSubMenuItem.active = true;
                            }
                        });
                    }
                });
            }
        });
    }
    watch(
        () => route.path,
        (newPath) => {

            data.value.forEach((items) => {
                if (items.path === newPath) {
                    setNavActive(items);
                }

                if (items.children) {
                    items.children.forEach((subItems) => {
                        if (subItems.path === newPath) {
                            setNavActive(subItems);
                        }

                        if (subItems.children) {
                            subItems.children.forEach((subSubItems) => {
                                if (subSubItems.path === newPath) {
                                    setNavActive(subSubItems);
                                }
                            });
                        }
                    });
                }
            });
        },
        { immediate: true }
    );
    onMounted(() => {
        if (window.innerWidth < 991) {
            togglesidebar.value = false
        }
    })

    function togglePinned(item: any) {

        item.isPinned = !item.isPinned;
    };

    function openActives() {
        active.value = !active.value
    }
    function subMenuToggle(Name: string) {
        perentName.value = perentName.value != Name ? Name : ""
        perentToggle.value = perentName.value != "" ? true : false
    }
    function subChildMenu(subTitle: string) {
        subName.value = subName.value != subTitle ? subTitle : ''
        subToggle.value = subName.value != "" ? true : false
    }
    function childMenu(childTitle: string) {
        childName.value = childName.value != childTitle ? childTitle : "";
        childToggle.value = childName.value != '' ? true : false
    }
    function getPinedData(item: MenuItem) {

        const index = pinedArray.value.findIndex(pinnedItem => pinnedItem === item.title);
        if (index !== -1) {

            pinedArray.value.splice(index, 1);
        } else {

            pinedArray.value.push(item.title);
        }


        localStorage.setItem('pinnedItems', JSON.stringify(pinedArray.value));
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
    function searchTerm(term: any) {

        const items: any = [];

        const searchval = term.toLowerCase()

        data.value.filter((menuItems: any) => {

            if (menuItems.title?.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            menuItems.children?.filter((subItems: any) => {
                if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);

                }
                if (!subItems.children) return false;
                subItems.children?.filter((suSubItems: any) => {
                    if (suSubItems.title?.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                })

            })
            searchData.value = items;
        })
    }
    function searchterm(term: any) {

        const items: any = [];

        const searchval = term.toLowerCase()

        data.value.filter((menuItems: any) => {

            if (menuItems.title?.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            menuItems.children?.filter((subItems: any) => {
                if (subItems.title?.toLowerCase().includes(term) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);

                }
                if (!subItems.children) return false;
                subItems.children?.filter((suSubItems: any) => {
                    if (suSubItems.title?.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                })

            })
            searchDatas.value = items;
        })
    }
    onMounted(() => {

        const pinnedItems = localStorage.getItem('pinnedItems');
        if (pinnedItems) {
            pinedArray.value = JSON.parse(pinnedItems || '[]');
        }
    });

    onMounted(() => {
        const updateActiveState = (items: any, currentPath: any) => {
            items.forEach((item: any) => {
                if (item.path) {
                    item.active = item.path === currentPath;
                } else if (item.children) {
                    item.active = item.children.some((subItem: any) => {
                        if (subItem.path) {
                            return subItem.path === currentPath;
                        } else if (subItem.children) {
                            return subItem.children.some((childItem: any) => childItem.path === currentPath);
                        }
                        return false;
                    });
                    updateActiveState(item.children, currentPath);
                }
            });
        };

        updateActiveState(data.value, useRoute().path);
    });

    return {
        data,
        toggleMenu,
        togglesidebar,
        activeoverlay,
        toggle_sidebar,
        pinedArray,
        customizer,
        searchTerm,
        togglePinned,
        getPinedData,
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
        searchterm,
        bodyToggle,
        subMenuToggle,
        subChildMenu,
        childMenu,
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