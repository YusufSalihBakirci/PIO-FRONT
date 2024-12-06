import { ref } from 'vue'
interface Node {
    text: string;
    children?: string[];
}

interface Nodes {
    [key: string]: Node;
}
export let nodes = ref<Nodes>({
    id1: {
        text: "Admin",
        children: ["id11", "id12"],
    },
    id11: {
        text: "Assets",
        children: ["id113", "id118"],
    },
    id12: {
        text: "Default",
        children: ["id131", "id122"],
    },
    id111: {
        text: "CSS",
        children: ["id114", "id115"],
    },
    id114: {
        text: "Css One",
    },
    id115: {
        text: "Css Two",
    },
    id113: {
        text: "Js",
        children: ["id116", "id117"],
    },
    id116: {
        text: "Js One"
    },
    id117: {
        text: "Js Two"
    },
    id118: {
        text: "Scss",
        children: ["id119"]
    },
    id119: {
        text: "Sub Child",
        children: ["id120", "id121"]
    },
    id120: {
        text: "Sub File"
    },
    id121: {
        text: "Sub File"
    },
    id131: {
        text: "Dashboard"
    },
    id122: {
        text: "Typography"
    },
    id2: {
        text: "index file",
    },
});

export let config = ref({
    roots: ["id1", "id2"],

});
export let nodes1 = ref<Nodes>({
    id1: {
        text: "Admin",
        children: ["id11", "id12"],
    },
    id11: {
        text: "Assets",
        children: ["id113", "id118"],
    },
    id12: {
        text: "Default",
        children: ["id131", "id122"],
    },
    id111: {
        text: "CSS",
        children: ["id114", "id115"],
    },
    id114: {
        text: "Css One",
    },
    id115: {
        text: "Css Two",
    },
    id113: {
        text: "Js",
        children: ["id116", "id117"],
    },
    id116: {
        text: "Js One"
    },
    id117: {
        text: "Js Two"
    },
    id118: {
        text: "Scss",
        children: ["id119"]
    },
    id119: {
        text: "Sub Child",
        children: ["id120", "id121"]
    },
    id120: {
        text: "Sub File"
    },
    id121: {
        text: "Sub File"
    },
    id131: {
        text: "Dashboard"
    },
    id122: {
        text: "Typography"
    },
    id2: {
        text: "index file",
    },
});
export let nodes2 = ref<Nodes>({
    id1: {
        text: "Admin",
        children: ["id11", "id12"],
    },
    id11: {
        text: "Assets",
        children: ["id113", "id118"],
    },
    id12: {
        text: "Default",
        children: ["id131", "id122"],
    },
    id111: {
        text: "CSS",
        children: ["id114", "id115"],
    },
    id114: {
        text: "Css One",
    },
    id115: {
        text: "Css Two",
    },
    id113: {
        text: "Js",
        children: ["id116", "id117"],
    },
    id116: {
        text: "Js One"
    },
    id117: {
        text: "Js Two"
    },
    id118: {
        text: "Scss",
        children: ["id119"]
    },
    id119: {
        text: "Sub Child",
        children: ["id120", "id121"]
    },
    id120: {
        text: "Sub File"
    },
    id121: {
        text: "Sub File"
    },
    id131: {
        text: "Dashboard"
    },
    id122: {
        text: "Typography"
    },
    id2: {
        text: "index file",
    },
});
export let nodes3 = ref<Nodes>({
    id1: {
        text: "Admin",
        children: ["id11", "id12"],
    },
    id11: {
        text: "Assets",
        children: ["id113", "id118"],
    },
    id12: {
        text: "Default",
        children: ["id131", "id122"],
    },
    id111: {
        text: "CSS",
        children: ["id114", "id115"],
    },
    id114: {
        text: "Css One",
    },
    id115: {
        text: "Css Two",
    },
    id113: {
        text: "Js",
        children: ["id116", "id117"],
    },
    id116: {
        text: "Js One"
    },
    id117: {
        text: "Js Two"
    },
    id118: {
        text: "Scss",
        children: ["id119"]
    },
    id119: {
        text: "Sub Child",
        children: ["id120", "id121"]
    },
    id120: {
        text: "Sub File"
    },
    id121: {
        text: "Sub File"
    },
    id131: {
        text: "Dashboard"
    },
    id122: {
        text: "Typography"
    },
    id2: {
        text: "index file",
    },
});

export let config1 = ref({
    roots: ["id1", "id2"],
    checkboxes: true,
});
export let config2 = ref({
    roots: ["id1", "id2"],
    dragAndDrop: true,

});
export let config3 = ref({
    roots: ["id1", "id2"],
    editable: true

});