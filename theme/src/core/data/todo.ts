export interface TodoSidebarItem {
    badgeclass: string;
    icon: string;
    title: string;
    pillclass?: string;
    badge?: string;
}
export interface TodoItem {
    id: number;
    title: string;
    delete: boolean;
    status: string;
    badgeClass: string;
    priority: string;
    date: string;
}
export const todosidebar: TodoSidebarItem[] = [
    {
        badgeclass: "badge-light-primary",
        icon: "file-plus",
        title: "All Task"
    },
    {
        badgeclass: "badge-light-success",
        icon: "check-circle",
        title: "Completed",
        pillclass: "badge  badge-success",
        badge: "3"
    },
    {
        badgeclass: "badge-light-danger",
        icon: "cast",
        title: "Pending",
        pillclass: "badge  badge-danger",
        badge: "2"
    },
    {
        badgeclass: "badge-light-primary",
        icon: "activity",
        title: "In Process",
        pillclass: "badge  badge-primary",
        badge: "2"
    },
    {
        badgeclass: "badge-light-danger",
        icon: "trash",
        title: "Trash"
    }
]
export const data: TodoItem[] = [
    {
        id: 1,
        title: "Check validation involves making sure all your tags are properly closed and nested.",
        delete: false,
        status: "complete",
        badgeClass: "badge-light-primary",
        priority: "In progress",
        date: "10 Nov"
    },
    {
        id: 2,
        title: "Test the outgoing links from all the pages to the specific domain under test.",
        delete: false,
        status: "incomplete",
        badgeClass: "badge-light-danger",
        priority: "Pending",
        date: "04 Aug"
    },
    {
        id: 3,
        title: "Test links are used to send emails to admin or other users from web pages.",
        delete: false,
        status: "complete",
        badgeClass: "badge-light-success ",
        priority: "Done",
        date: "25 Feb"
    },
    {
        id: 4,
        title: "Options to create forms, if any, form deletes a view or modify the forms.",
        delete: false,
        status: "incomplete",
        badgeClass: "badge-light-primary",
        priority: "In progress",
        date: "15 Dec"
    },
    {
        id: 5,
        title: "Wrong inputs in the forms to the fields in the forms.",
        delete: false,
        status: "Complete",
        badgeClass: "badge-light-danger",
        priority: "Pending",
        date: "11 Nov"
    },
    {
        id: 6,
        title: "Check if the instructions provided are perfect to satisfy its purpose.",
        delete: false,
        status: "incomplete",
        badgeClass: "badge-light-danger",
        priority: "Pending",
        date: "04 Sept"
    },
    {
        id: 7,
        title: "Application server and Database server interface.",
        delete: false,
        status: "incomplete",
        badgeClass: "badge-light-success ",
        priority: "Done",
        date: "08 July"
    }
]