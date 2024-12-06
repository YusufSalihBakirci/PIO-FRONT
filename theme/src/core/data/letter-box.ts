interface LetterSidebarItem {
    ids: string;
    href: string;
    control: string;
    icon: string;
    title: string;
    badge?: string;
    iconclass?: string
}
interface drop {
    title: string
}
interface InboxItem {
    id: number;
    img?: string;
    textclass?: string;
    text?: string;
    circle?: string;
    name: string;
    desctitle: string;
    desc: string;
    badgeclass?: string;
    badge?: string;
    time: string;
    isActive: boolean;
    email?: boolean
}
interface TrashItem {
    id: number;
    textclass: string;
    text?: string;
    circle?: string;
    name: string;
    desctitle: string;
    desc: string;
    badgeclass?: string;
    badge?: string;
    badgeclass1?: string;
    badge1?: string;
    time: string;
    isActive?: boolean
}
export interface SentItem {
    id?: number,
    img?: string;
    name?: string;
    desctitle?: string;
    desc?: string;
    badgeclass?: string;
    badge?: string;
    textclass?: string;
    text?: string;
    circle?: string;
    badgeclass1?: string;
    badge1?: string;
    time?: string;
    dec?: string;
    isActive?: boolean
}
export interface MailItem {
    icon: string;
    svgclass?: string;
}
export interface UserItem {
    title: string;
}
export const lettersidebar: LetterSidebarItem[] = [
    {
        ids: "inbox-pill-tab",
        href: "#inbox-pill",
        control: "inbox-pill",
        icon: "inbox",
        title: "Inbox",
        badge: "14"
    },
    {
        ids: "sent-pill-tab",
        href: "#sent-pill",
        control: "sent-pill",
        icon: "sent",
        title: "Sent",
    },
    {
        ids: "starred-pill-tab",
        href: "#starred-pill",
        control: "starred-pill",
        icon: "star",
        title: "Starred",
    },
    {
        ids: "draft-pill-tab",
        href: "#draft-pill",
        control: "draft-pill",
        icon: "draft",
        title: "Draft",
    },
    {
        ids: "trash-pill-tab",
        href: "#trash-pill",
        control: "trash-pill",
        icon: "trash",
        title: "Trash",
    },
    {
        ids: "work-pill-tab",
        href: "#work-pill",
        control: "work-pill",
        icon: "pintag",
        title: "Work",
        iconclass: "stroke-primary"
    },
    {
        ids: "private-pill-tab",
        href: "#private-pill",
        control: "private-pill",
        icon: "pintag",
        title: "Private",
        iconclass: "stroke-warning"
    },
    {
        ids: "support-pill-tab",
        href: "#support-pill",
        control: "support-pill",
        icon: "pintag",
        title: "Support",
        iconclass: "stroke-success"
    },
]
export const tabs: LetterSidebarItem[] = [
    {
        ids: "pills-important-tab",
        href: "#pills-important",
        control: "pills-important",
        icon: "mail",
        title: "Important"
    },
    {
        ids: "pills-social-tab",
        href: "#pills-social",
        control: "pills-social",
        icon: "goal",
        title: "Social"
    },
    {
        ids: "pills-promotion-tab",
        href: "#pills-promotion",
        control: "pills-promotion",
        icon: "tread",
        title: "Promotion"
    }
]
export const dropdown: drop[] = [
    {
        title: "All"
    },
    {
        title: "None"
    },
    {
        title: "Read"
    },
    {
        title: "Unread"
    },
    {
        title: "Starred"
    },
    {
        title: "Unstarred"
    }
]
export const inbox: InboxItem[] = [
    {
        id: 1,
        img: "user/6.jpg",
        name: "Marvin McKinney",
        desctitle: "New comments on MSR2024 draft presentation -",
        desc: "New Here's a list of all the topic challenges...",
        badgeclass: "badge-light-primary",
        badge: "new",
        time: "2:30 PM",
        isActive: true,
        email: false
    },
    {
        id: 2,
        img: "user/3.png",
        name: "Brooklyn Simmons",
        desctitle: "Confirm your booking id -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-primary",
        badge: "deadline",
        time: "7:50 AM",
        isActive: false,
        email: false
    },
    {
        id: 3,
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-success",
        badge: "work",
        time: "1:00 PM",
        isActive: false,
        email: false
    },
    {
        id: 4,
        textclass: "txt-success",
        text: "CW",
        circle: "circle-success",
        name: "Cameron Williamson",
        desctitle: "Very fiction Link -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false,
        email: false
    },
    {
        id: 5,
        img: "user/6.jpg",
        name: "Ronald Richards",
        desctitle: "Confirm your booking id -",
        desc: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman@",
        badgeclass: "badge-light-light",
        badge: "Update.Zip",
        time: "7 April",
        isActive: false,
        email: false
    },
    {
        id: 6,
        img: "user/10.jpg",
        name: "Darlene Robertson",
        desctitle: "Promotion Mail -",
        desc: "Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda ...",
        badgeclass: "badge-light-light",
        badge: "Import File...",
        time: "04 April",
        isActive: false,
        email: false
    },
    {
        id: 7,
        img: "user/12.png",
        name: "Jacob Jones",
        desctitle: "Welcome to our new office -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        time: "01 April",
        isActive: false,
        email: false
    },
    {
        id: 8,
        img: "user/3.png",
        name: "Ralph Edwards",
        desctitle: "Your Order #224820098 has been Confirmed-",
        desc: "A collection of textile samples lay spread out on the table...",

        time: "1:00 PM",
        isActive: false,
        email: false
    },
    {
        id: 9,
        img: "user/6.jpg",
        name: "Ronald Richards",
        desctitle: "Confirm your booking id -",
        desc: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-light",
        badge: "Update.Zip",
        time: "7 April",
        isActive: false,
        email: false
    },
    {
        id: 10,
        textclass: "txt-success",
        text: "WT",
        circle: "circle-success",
        name: "William Turner",
        desctitle: "Very fiction Link -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false,
        email: false
    },
    {
        id: 11,
        img: "user/12.png",
        name: "Jacob Jones",
        desctitle: "Welcome to our new office -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        time: "01 April",
        isActive: false,
        email: false
    },
    {
        id: 12,
        img: "user/3.png",
        name: "Ralph Edwards",
        desctitle: "Your Order #224820098 has been Confirmed-",
        desc: "A collection of textile  samples lay spread out on the table@.",
        time: "1:00 PM",
        isActive: false,
        email: false
    }
]
export const sent: SentItem[] = [
    {
        id: 1,
        img: "user/14.png",
        name: "Brooklyn Simmons",
        desctitle: "Confirm your booking id -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-primary",
        badge: "new",
        time: "7:50 AM",
        isActive: false
    },
    {
        id: 2,
        img: "user/6.jpg",
        name: "Marvin McKinney",
        desctitle: "New comments on MSR2024 draft presentation - ",
        desc: "New Here's a list of all the topic challenges...",
        badgeclass: "badge-light-primary",
        badge: "new",
        time: "2:30 PM",
        isActive: false
    },
    {
        id: 3,
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-primary",
        badge: "new",
        badgeclass1: "badge-light-success",
        badge1: "Task",
        time: "1:00 PM",
        isActive: false
    },
    {
        id: 4,
        textclass: "txt-success",
        text: "JW",
        circle: "circle-success",
        name: "Jack Williamson",
        desctitle: "Very fiction Link  -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false
    }
]
export const starred: SentItem[] = [
    {
        img: "user/6.jpg",
        name: "Marvin McKinney",
        desctitle: "New comments on MSR2024 draft presentation - ",
        dec: "New Here's a list of all the topic challenges...",
        badgeclass: "badge-light-primary",
        badge: "new",
        time: "2:30 PM",
        isActive: true
    },
    {
        img: "user/3.png",
        name: "Brooklyn Simmons",
        desctitle: "Confirm your booking id -",
        dec: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-primary",
        badge: "new",
        time: "7:50 AM",
        isActive: true
    }
]
export const draft: SentItem[] = [
    {
        img: "user/3.png",
        name: "Ralph Edwards",
        desctitle: "Your Order #224820098 has been Confirmed-",
        desc: "A collection of textile samples lay spread out on the table...",
        time: "1:00 PM",
        isActive: false
    },
    {
        img: "user/6.jpg",
        name: "Ronald Richards",
        desctitle: "Confirm your booking id -",
        desc: "Confirm your booking id - A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-light",
        badge: "Update.Zip",
        time: "7 April",
        isActive: false
    },
    {
        textclass: "txt-success",
        text: "CW",
        circle: "circle-success",
        name: "Cameron Williamson",
        desctitle: "Very fiction Link -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false
    },
    {
        img: "user/12.png",
        name: "Jacob Jones",
        desctitle: "Welcome to our new office -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        time: "01 April",
        isActive: false
    },
    {
        img: "user/3.png",
        name: "Ralph Edwards",
        desctitle: "Your Order #224820098 has been Confirmed-",
        desc: "Your Order #224820098 has been Confirmed-<span>A collection of textile samples lay spread out on the table...",
        time: "1:00 PM",
        isActive: false
    }
]
export const trash: TrashItem[] = [
    {
        id: 1,
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-secondary",
        badge: "offer",
        time: "1:00 PM",
        isActive: false
    },
    {
        id: 2,
        textclass: "txt-success",
        text: "CH",
        circle: "circle-success",
        name: "Cameron Hill",
        desctitle: "Very fiction Link  -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false
    },
    {
        id: 3,
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-primary",
        badge: "new",
        badgeclass1: "badge-light-success",
        badge1: "Task",
        time: "1:00 PM",
        isActive: false
    },
    {
        id: 4,
        textclass: "txt-success",
        text: "CW",
        circle: "circle-success",
        name: "Cameron Williamson",
        desctitle: "Very fiction Link  -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false
    },
]
export const work: SentItem[] = [
    {
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-primary",
        badge: "new",
        badge1: "Task",
        badgeclass1: "badge-light-success",
        time: "1:00 PM",
        isActive: false
    },
    {
        img: "user/3.png",
        name: "Brooklyn Simmons",
        desctitle: "Confirm your booking id -",
        desc: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman..",
        badgeclass: "badge-light-primar",
        badge: "deadline",
        time: "7:50 AM",
        isActive: false
    },
    {
        textclass: "txt-primary",
        text: "EV",
        name: "Esther Voward",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-primary",
        badge: "new",
        badge1: "badge-light-success",
        badgeclass1: "work",
        time: "1:00 PM",
        isActive: false
    }
]
export const support: SentItem[] = [
    {
        textclass: "txt-primary",
        text: "EH",
        name: "Esther Howard",
        desctitle: "Confirm your booking id -",
        desc: "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        badgeclass: "badge-light-primary",
        badge: "new",
        badgeclass1: "badge-light-success",
        badge1: "Task",
        time: "1:00 PM",
        isActive: false
    },
    {
        textclass: "txt-success",
        text: "CW",
        circle: "circle-success",
        name: "Cameron Williamson",
        desctitle: "Very fiction Link -",
        desc: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        time: "5 Day ago",
        isActive: false
    }
]
export const mail: MailItem[] = [
    {
        icon: "sms"
    },
    {
        svgclass: "bookmark-box",
        icon: "bookmark"
    },
    {
        icon: "spam"
    },
    {
        svgclass: "stroke-danger",
        icon: "mail-trash"
    },
    {
        icon: "setting"
    }
]
export const user: UserItem[] = [
    {
        title: "Dear Customer,"
    },
    {
        title: "We regret to notify you that an unauthorized attempt was made to access your account. Our system discovered suspicious activity, and we acted right away to safeguard your personal data."
    },
    {
        title: "Please change your login information by clicking the following link in order to safeguard your account:"
    },
    {
        title: "Please be aware that your account may be temporarily suspended if no action is taken within 24 hours. We urge you to take immediate action to prevent any inconvenience."
    },
    {
        title: "We sincerely apologize for any inconvenience this may cause and thank you for your immediate attention to this matter."
    }
]