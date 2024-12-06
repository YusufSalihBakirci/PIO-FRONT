interface cart {
    img: string,
    name: string,
    price: string
}
interface item {

    fontclass: string,
    date: string,
    time: string,
    dot: string,
    title: string,
    desc: string

}
interface items {
    icon: string,
    title: string,
    link: string
}

export const cartdata: cart[] = [
    {
        img: "dashboard-2/1.png",
        name: "Watch multicolor",
        price: "$500"
    },
    {
        img: "dashboard-2/2.png",
        name: "Airpods",
        price: "$500.00"
    }
]
export const notification: item[] = [
    {
        fontclass: "font-primary",
        date: "30-04-2024",
        time: "Today",
        dot: "dot-primary",
        title: "Alice Goodwin",
        desc: "Fashion should be fun. It shouldn't be labelled intellectual."
    },
    {
        fontclass: "font-secondary",
        date: "28-06-2024",
        time: "1 hour ago",
        dot: "dot-secondary",
        title: "Herry Venter",
        desc: "I am convinced that there can be luxury in simplicity."
    },
    {
        fontclass: "font-primary",
        date: "04-08-2024",
        time: "Today",
        dot: "dot-primary",
        title: "Loain Deo",
        desc: "I feel that things happen for open new opportunities."
    },
    {
        fontclass: "font-secondary",
        date: "12-11-2024",
        time: "Yesterday",
        dot: "dot-secondary",
        title: "Fenter Jessy",
        desc: "Sometimes the simplest things are the most profound."
    }
]
export const profile: items[] = [
    {
        icon: "Profile",
        title: "Account",
        link: "/users/edit"
    },
    {
        icon: "Message",
        title: "Inbox",
        link: "/app/letter_box"
    },
    {
        icon: "Document",
        title: "Task",
        link: "/app/todo"
    }
]