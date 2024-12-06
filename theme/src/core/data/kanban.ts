interface Task {
    title: string;
    list: number;
    place: string;
    image: string;
    priority: string;
    badge: string;
    id: number;
    more: string;
    date: string;
}
interface CustomItem {
    title: string;
    list: number;
    place: string;
    image: string;
    priority?: string;
    badge: string;
    id: number;
    date: string;
}
interface ApiItem {
    title: string;
    list: number;
    place: string;
    priority?: string;
    badge: string;
    image: string;
    id: number;
    more: string;
    date: string;
    img?: string
}
export const simple: Task[] = [
    {
        title: "Design Dashboard",
        list: 0,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        priority: "Medium",
        badge: "badge-primary",
        id: 1,
        more: "+10",
        date: "23/7/23"
    },
    {
        title: "Test Sidebar",
        list: 0,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        badge: "badge-danger",
        id: 2,
        more: "+5",
        priority: "Argent",
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 1,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        badge: "badge-danger",
        id: 3,
        more: "+5",
        priority: "Argent",
        date: "24/7/23"
    },
    {
        title: "Dashboard issue",
        list: 1,
        place: "Pixelstrap, New york",
        image: "user/3.jpg",
        priority: "Low",
        badge: "badge-success",
        id: 4,
        more: "+5",
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 2,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        badge: "badge-danger",
        id: 5,
        more: "+5",
        priority: "Argent",
        date: "24/7/23"
    },
    {
        title: "Design Dashboard",
        list: 2,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        priority: "Medium",
        badge: "badge-primary",
        id: 6,
        more: "+10",
        date: "23/7/23"
    }
]
export const custom: CustomItem[] = [
    {
        title: "Design Dashboard",
        list: 0,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        priority: "Medium",
        badge: "badge-info",
        id: 1,
        date: "23/7/23"
    },
    {
        title: "Dashboard issue",
        list: 0,
        place: "Pixelstrap, New york",
        image: "user/3.jpg",
        priority: "Low",
        badge: "badge-success",
        id: 2,
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 1,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        badge: "badge-danger",
        id: 3,
        priority: "Argent",
        date: "24/7/23"
    },
    {
        title: "Dashboard issue",
        list: 1,
        place: "Pixelstrap, New york",
        image: "user/3.jpg",
        priority: "Low",
        badge: "badge-success",
        id: 4,
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 2,
        place: "Themeforest, australia",
        image: "user/3.jpg",
        badge: "badge-danger",
        id: 5,
        priority: "Argent",
        date: "24/7/23"
    },
    {
        title: "Dashboard issue",
        list: 2,
        place: "Pixelstrap, New york",
        image: "user/3.jpg",
        priority: "Low",
        badge: "badge-success",
        id: 6,
        date: "24/7/23"
    }
]
export const api: ApiItem[] = [
    {
        title: "Design Dashboard",
        list: 0,
        place: "Themeforest, australia",
        priority: "Medium",
        badge: "badge-info",
        image: "user/3.jpg",
        id: 1,
        more: "+10",
        date: "23/7/23"
    },
    {
        title: "Dashboard issue",
        list: 0,
        place: "Pixelstrap, New york",
        priority: "Low",
        badge: "badge-success",
        image: "user/3.jpg",
        id: 2,
        more: "+5",
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 1,
        place: "Themeforest, australia",
        img: "other-images/maintenance-bg.jpg",
        badge: "badge-danger",
        id: 3,
        image: "user/3.jpg",
        priority: "Argent",
        more: "+5",
        date: "24/7/23"
    },
    {
        title: "Dashboard issue",
        list: 1,
        place: "Pixelstrap, New york",
        image: "user/3.jpg",
        priority: "Low",
        badge: "badge-success",
        id: 4,
        more: "+5",
        date: "24/7/23"
    },
    {
        title: "Test Sidebar",
        list: 2,
        place: "Themeforest, australia",
        badge: "badge-danger",
        id: 5,
        image: "user/3.jpg",
        priority: "Argent",
        more: "+5",
        date: "24/7/23"
    },
    {
        title: "Dashboard issue",
        list: 2,
        place: "Pixelstrap, New york",
        img: "other-images/sidebar-bg.jpg",
        priority: "Low",
        image: "user/3.jpg",
        badge: "badge-success",
        id: 6,
        more: "+10",
        date: "24/7/23"
    }
]