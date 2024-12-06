interface course {
    id: number,
    image: string,
    dd: string,
    mm: string,
    yy: string,
    author: string,
    hits: number,
    date: string,
    hit: string,
    title: string,
    descr: string,
    descr_count: number,
    category: number,
    price: number,
    status: number,
    comments: comments[],
    special: number
}
interface comments {
    username?: string,
    role?: string,
    descr?: string,
    image?: string,
    hits?: string,
    comments?: string,
}
interface item {
    title: string,
    children: {

        id: string,
        title: string,
        type: string,
        checked: boolean,
        class: string
    }[]
}
interface items {
    title: string,
    children: {
        title: string,
        badge: string
    }[]
}
interface up {
    title: string,
    desc: string,
    star: number,
    date: string,
    month: string
}
export const courses: course[] = [
    {
        id: 1,
        image: "faq/1.jpg",
        dd: "05",
        mm: "January",
        yy: "2024",
        author: "Paige Turner",
        hits: 15,
        hit: "0",
        date: "9 April 2024",
        title: "Java Language",
        descr: "Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.",
        descr_count: 1,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 1
    },
    {
        id: 2,
        image: "faq/2.jpg",
        dd: "10",
        mm: "January",
        yy: "2024",
        author: "Petey Cruise",
        hits: 34,
        hit: "0",
        date: "9 April 2024",
        title: "Web Development",
        descr: "Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.",
        descr_count: 1,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 1
    },
    {
        id: 3,
        image: "faq/3.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "Web Devlopment.",
        descr: "One line at a time, a web developer's code has the power to change the world.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    },
    {
        id: 4,
        image: "faq/1.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "Web Design.",
        descr: "The only thing you can purchase that increases your wealth is travel.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    },
    {
        id: 5,
        image: "faq/4.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "UX Development.",
        descr: "Live simply, move lightly, and radiate and embody light.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    },
    {
        id: 6,
        image: "faq/2.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "Spoken English",
        descr: "Your voice becomes your most powerful asset in the blogging world.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    },
    {
        id: 7,
        image: "faq/4.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "Web Devlopment.",
        descr: "Blogging is the platform to leave a digital footprint on the sands of time.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    },
    {
        id: 8,
        image: "faq/3.jpg",
        dd: "15",
        mm: "April",
        yy: "2024",
        author: "Admin",
        hits: 61,
        hit: "0",
        date: "9 April 2024",
        title: "Advance Design.",
        descr: "The digital era's pulse, blogging connects people's hearts and brains.",
        descr_count: 2,
        category: 0,
        price: 0,
        status: 0,
        comments: [
            {
                username: "Jolio Mark",
                image: "blog/comment.jpg",
                hits: "02",
                comments: "598",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Molina Mark",
                image: "blog/9.jpg",
                role: "Designer",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
                username: "Jolio Mark",
                role: "Designer",
                image: "/blog/4.jpg",
                hits: "02",
                comments: "598",
                descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
        ],
        special: 0
    }
]
export const find: item[] = [
    {
        title: "Categories",
        children: [
            {
                id: "chk-ani",
                title: "Accounting",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani0",
                title: "Design",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani1",
                title: "Development",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani2",
                title: "Management",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            }
        ]
    },
    {
        title: "Duration",
        children: [
            {
                id: "chk-ani3",
                title: "0-50 hours",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani4",
                title: "50-100 hours",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani5",
                title: "100+ hours",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            }
        ]
    },
    {
        title: "Price",
        children: [
            {
                id: "chk-ani7",
                title: "All Courses",
                type: "radio",
                checked: false,
                class: "radio_animated"
            },
            {
                id: "chk-ani8",
                title: "Paid Courses",
                type: "radio",
                checked: false,
                class: "radio_animated"
            },
            {
                id: "chk-ani9",
                title: "Free Courses",
                type: "radio",
                checked: true,
                class: "radio_animated"
            },

        ]
    },
    {
        title: "Status",
        children: [
            {
                id: "chk-ani11",
                title: "Registration",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani12",
                title: "Progress",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            },
            {
                id: "chk-ani13",
                title: "Completed",
                type: "checkbox",
                checked: false,
                class: "checkbox_animated"
            }
        ]
    }
]
export const category: items[] = [
    {
        title: "Design",
        children: [
            {
                title: "UI Design",
                badge: "28"
            },
            {
                title: "UX Design ",
                badge: "35"
            },
            {
                title: "Interface Design",
                badge: "17"
            },
            {
                title: "User Experience",
                badge: "26"
            }
        ]
    },
    {
        title: "Development",
        children: [
            {
                title: "Frontend Development",
                badge: "48"
            },
            {
                title: "Backend Development",
                badge: "19"
            }
        ]
    }
]
export const upcoming: up[] = [
    {
        title: "UX Development",
        desc: "Course By <a href='#'> Howard Moore</a>",
        star: 3,
        date: "18",
        month: "Dec"
    },
    {
        title: "Business Analyst",
        desc: "Course By <a href='#'> Crystal Markey</a>",
        star: 5,
        date: "28",
        month: "Dec"
    },
    {
        title: "Web Development",
        desc: "Course By <a href='#'>Jerry Reel </a></span>",
        star: 4,
        date: "5",
        month: "Jan"
    }
]