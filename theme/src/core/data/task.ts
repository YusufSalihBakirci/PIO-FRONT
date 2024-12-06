export interface TaskSidebarItem {
    id: string;
    href: string;
    controls: string;
    title: string;
    actve?: string;
}
export interface TaskItem {
    id: string;
    href: string;
    controls: string;
    title: string;
}
export interface DataItem {
    title: string;
    desc: string;
}
export const tasksidebar: TaskSidebarItem[] = [
    {
        id: "pills-created-tab",
        href: "#pills-created",
        controls: "pills-created",
        title: "Created by me",
        actve: "active"
    },
    {
        id: "pills-todaytask-tab",
        href: "#pills-todaytask",
        controls: "pills-todaytask",
        title: "Today's Tasks"
    },
    {
        id: "pills-delayed-tab",
        href: "#pills-delayed",
        controls: "pills-delayed",
        title: "Delayed Tasks"
    },
    {
        id: "pills-upcoming-tab",
        href: "#pills-upcoming",
        controls: "pills-upcoming",
        title: "Upcoming Tasks"
    },

    {
        id: "pills-weekly-tab",
        href: "#pills-weekly",
        controls: "pills-weekly",
        title: "This week tasks"
    },
    {
        id: "pills-monthly-tab",
        href: "#pills-monthly",
        controls: "pills-monthly",
        title: "This month tasks"
    },
    {
        id: "pills-assigned-tab",
        href: "#pills-assigned",
        controls: "pills-assigned",
        title: "Assigned To Me"
    },
    {
        id: "pills-tasks-tab",
        href: "#pills-tasks",
        controls: "pills-tasks",
        title: "My Tasks"
    }
]
export const task: TaskItem[] = [
    {
        id: "pills-notification-tab",
        href: "#pills-notification",
        controls: "pills-notification",
        title: "notification"
    },
    {
        id: "pills-newsletter-tab",
        href: "#pills-newsletter",
        controls: "pills-newsletter",
        title: "Newsletter"
    },
    {
        id: "pills-business-tab",
        href: "#pills-business",
        controls: "pills-business",
        title: "Business"
    },
    {
        id: "pills-holidays-tab",
        href: "#pills-holidays",
        controls: "pills-holidays",
        title: "Holidays"
    }
]
export const data: DataItem[] = [
    {
        title: "Documentation",
        desc: "Documentation that is used to explain regarding some attributes of an object."
    },
    {
        title: "Kanban design",
        desc: "kanban board is one of the tools that can be used to implement kanban to manage."
    },
    {
        title: "User profile",
        desc: "There is some Console error in user profile page."
    },
    {
        title: "Set Up",
        desc: "Clone the theme test data file from the GitHub repository."
    },
    {
        title: "Client meeting",
        desc: "Documentation that is used to explain regarding some attributes of an object to the client."
    },
    {
        title: "Publish podcast",
        desc: "Digital News Report shows that podcasting is now a worldwide that has become one of the hottest topic."
    },
    {
        title: "Testing",
        desc: "There are many tools available for testing websites, we’ve chosen classics: Chrome dev tools."
    },
    {
        title: "Email newsletter",
        desc: "There is some Console error in user profile page."
    }
]