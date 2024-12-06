interface User {
    id: number;
    name: string;
    thumb: string;
    status: string;
    lastSeenDate: string;
    active: string;
    icon: string;
    time?: string;
    badge?: string;
    StatusClass?: string;
}

interface Message {
    sender: number;
    time: string;
    text: string;
}

interface Video {
    sender: number;
    time: string;
    thumb: string;
}

interface Chat {
    id: number;
    users: number[];
    lastMessageTime: string;
    messages: Message[];
    video: Video[];
}

export interface ContactItem {
    id: number;
    title: string;
    children: ContactChild[];
}

export interface ContactChild {
    id?: number;
    img?: string;
    name: string;
    number: string;
    textclass?: string;
    bgclass?: string;
    text?: string;
}
export interface Group {
    img: string;
}

export const data: User[] = [
    {
        id: 0,
        name: "Elana Jecno",
        thumb: "user/1.jpg",
        status: "Out is my favorite",
        lastSeenDate: "Active",
        active: "active",
        icon: "fa-share font-success"
    },
    {
        id: 1,
        name: "Cameron Williamson",
        thumb: "avtar/3.jpg",
        status: "Hey, How are you?",
        lastSeenDate: "Last seen today 15:24",
        active: "active",
        StatusClass: "bg-success",
        time: "2 min ",
        badge: "15",
        icon: "fa-reply font-danger"
    },
    {
        id: 2,
        name: "Esther Howard",
        thumb: "avtar/11.jpg",
        status: "Thanks for reply",
        lastSeenDate: "Last seen today 13:24",
        active: "active",
        time: "7:30 PM",
        StatusClass: "bg-success",
        icon: "fa-share font-success"
    },
    {
        id: 3,
        name: "Ankita Chovatiya",
        thumb: "avtar/7.jpg",
        status: "Hey, What's up?",
        lastSeenDate: "Last seen today 17:42",
        active: "active",
        time: "1:10 PM",
        StatusClass: "bg-success",
        icon: "fa-reply font-danger"
    },
    {
        id: 4,
        name: "Ronald Richards",
        thumb: "avtar/16.jpg",
        status: "I'm ready",
        lastSeenDate: "Last seen today 18:00",
        active: "active",
        time: "13:10 PM",
        StatusClass: "bg-success",
        icon: "fa-share font-success"
    },
    {
        id: 5,
        name: "Darlene Robertson",
        thumb: "avtar/4.jpg",
        status: "Hey, How are you?",
        lastSeenDate: "Last seen today 22:24",
        active: "active",
        time: "1:30 PM",
        StatusClass: "bg-warning",
        icon: "fa-share font-success"
    },
    {
        id: 6,
        name: "Darrell Steward",
        thumb: "blog/comment.jpg",
        status: "What's going on?",
        lastSeenDate: "Last seen today 00:24",
        active: "active",
        time: "2:10 PM",
        StatusClass: "bg-warning",
        icon: "fa-reply font-danger"
    },
    {
        id: 7,
        name: "Theresa Webb",
        thumb: "blog/4.jpg",
        status: "What's up?",
        lastSeenDate: "Last seen yesterday 10:50",
        active: "deactive",
        time: "1:50 AM",
        StatusClass: "bg-success",
        icon: "fa-share font-success"
    },
    {
        id: 8,
        name: "Floyd Miles",
        thumb: "blog/12.png",
        status: "Are you sure?",
        lastSeenDate: "Last seen yesterday 06:47",
        active: "deactive",
        time: "5:14 PM",
        StatusClass: "bg-warning",
        icon: "fa-reply font-danger"
    },
    {
        id: 9,
        name: "Annette Black",
        thumb: "blog/9.jpg",
        status: "Thanks",
        lastSeenDate: "Last seen yesterday 06:47",
        active: "deactive",
        time: "1:50 PM",
        StatusClass: "bg-warning",
        icon: "fa-reply font-danger"
    }
]
export const chat: Chat[] = [
    {
        id: 1,
        users: [0, 1],
        lastMessageTime: "Last seen yesterday 05:14",
        messages: [
            {
                sender: 0,
                time: "10:12 am",
                text: "Are we meeting today? Project has been already finished and I have results to show you."
            },
            {
                sender: 1,
                time: "10:14 am",
                text: "Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?."
            },
            {
                sender: 1,
                time: "10:14 am",
                text: "Well I am not sure. The rest of the team."
            },
            {
                sender: 0,
                time: "10:20 am",
                text: "Actually everything was fine. I'm very excited to show this to our team."
            }
        ],
        video: [
            {
                sender: 0,
                time: "26:46",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 2,
        users: [0, 4],
        lastMessageTime: "Last seen yesterday 14:14",
        messages: [
            {
                sender: 0,
                time: "09:25",
                text: "Hello. How are you today?"
            },
            {
                sender: 4,
                time: "09:29",
                text: "Hey! I'm fine. Thanks for asking!"
            },
            {
                sender: 4,
                time: "09:36",
                text: "Sweet! So, what do you wanna do today?"
            },
            {
                sender: 0,
                time: "10:12",
                text: "Nah, I dunno. Play soccer.. or learn more coding perhaps?"
            },
            {
                sender: 4,
                time: "10:30",
                text: "I am very busy at the moment."
            }
        ],
        video: [
            {
                sender: 0,
                time: "36:54",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 3,
        users: [0, 4],
        lastMessageTime: "Last seen yesterday 11:14",
        messages: [
            {
                sender: 0,
                time: "09:25",
                text: "Hello. How are you today?"
            },
            {
                sender: 4,
                time: "09:29",
                text: "Hey! I'm fine. Thanks for asking!"
            },
            {
                sender: 4,
                time: "09:36",
                text: "Sweet! So, what do you wanna do today?"
            },
            {
                sender: 0,
                time: "10:12",
                text: "Nah, I dunno. Play soccer.. or learn more coding perhaps?"
            },
            {
                sender: 4,
                time: "10:30",
                text: "I am very busy at the moment."
            }
        ],
        video: [
            {
                sender: 0,
                time: "36:56",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 4,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "30:50",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 5,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "31:26",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 6,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "23:56",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 7,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "16:36",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 8,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "36:16",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    },
    {
        id: 9,
        users: [],
        lastMessageTime: "",
        messages: [],
        video: [
            {
                sender: 0,
                time: "36:16",
                thumb: "other-images/receiver-img.jpg"
            }
        ]
    }
]
export const contact: ContactItem[] = [
    {
        id: 1,
        title: "A",
        children: [
            {
                id: 1,
                img: "avtar/3.jpg",
                name: "Andres Williamson",
                number: "191-900-5689"
            }
        ]
    },
    {
        id: 2,
        title: "B",
        children: [
            {
                id: 1,
                img: "blog/comment.jpg",
                name: "Britlin Weed",
                number: "698-781-5581"
            },
            {
                id: 2,
                textclass: "txt-secondary",
                bgclass: "bg-light-secondary",
                text: "BD",
                name: "Brendra Dixit",
                number: "589-789-2563"
            }
        ]
    },
    {
        id: 3,
        title: "C",
        children: [
            {
                id: 1,
                img: "blog/14.png",
                name: "Cody Fisher",
                number: "983-333-4545"
            },
            {
                id: 2,
                textclass: "txt-success",
                bgclass: "txt-secondary bg-light-success",
                text: "CE",
                name: "Clifford Evans",
                number: "321-456-7878"
            },
            {
                id: 2,
                textclass: "txt-warning",
                bgclass: "bg-light-warning",
                text: "CW",
                name: "Cameron Williamson",
                number: "369-852-7417"
            }
        ]
    },
    {
        id: 4,
        title: "D",
        children: [
            {
                id: 1,
                img: "blog/12.png",
                name: "Darlene Robertson",
                number: "231-279-1001"
            },
            {
                id: 1,
                img: "user/3.png",
                name: "Dianne Russell",
                number: "569-789-1002"
            },
            {
                id: 1,
                img: "user/6.jpg",
                name: "Darrell Steward",
                number: "200-300-1030"
            }
        ]
    },
    {
        id: 5,
        title: "E",
        children: [
            {
                id: 1,
                img: "user/1.jpg",
                name: "Emily Collins",
                number: "100-555-7032"
            }
        ]
    },
    {
        id: 6,
        title: "F",
        children: [
            {
                id: 1,
                img: "user/2.jpg",
                name: "Fiona Cooper",
                number: "362-778-1919"
            },
            {
                id: 2,
                textclass: "txt-danger",
                bgclass: "bg-light-danger",
                text: "FG",
                name: "Freya Grayson",
                number: "589-789-2563"
            }
        ]
    },
    {
        id: 7,
        title: "G",
        children: [
            {
                id: 1,
                textclass: "txt-warning",
                bgclass: "bg-light-warning",
                text: "GE",
                name: "Gabriel Evans",
                number: "963-147-5024"
            }
        ]
    }
]
export const group: Group[] = [
    {
        img: "avtar/16.jpg"
    },
    {
        img: "avtar/4.jpg"
    },
    {
        img: "avtar/7.jpg"
    },
    {
        img: "avtar/11.jpg"
    },
    {
        img: "avtar/4.jpg"
    },
    {
        img: "blog/comment.jpg"
    },
    {
        img: "avtar/7.jpg"
    }
]
