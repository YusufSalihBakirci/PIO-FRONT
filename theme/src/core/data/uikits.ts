interface head {
    code: string,
    front: string,
    head: string
}
interface color {
    code: string,
    head: string
}
interface fonts {
    font: string
}
interface item {
    title: string
}
interface items {
    title: string,
    dec: string
}
interface text {
    color: string,
    title: string
}
interface block {
    class: string,
    bgclass: string,
    textclass: string,
    text: string,
    footer: string
}
interface img {
    class: string,
    img: string,
    fsclass?: string
}
interface statuss {
    class: string,
    img: string,
    status: string
}
interface avatargrouping {
    id: number,
    children: sub[]
}
interface sub {
    class: string,
    img: string
}
interface item1 {
    title: string,
    children: subs[]
}
interface subs {
    class?: string,
    title: string
}
interface side {
    class: string
}
interface button {
    class: string,
    icon: string,
    title: string
}
interface progress {
    width: string,
    class: string,
    height?: string
}
interface customs {
    width: string,
    class: string,
    title: string
}
interface uikutsmodel {
    id: string,
    class: string,
    title: string
}
interface AlertItem {
    class: string;
    alertclass: string;
    title: string;
    text: string;
}
interface AlertItems {
    class: string;
    alertclass: string;
    title: string;
    text: string;
    text1: string;
}

interface coloralert {
    id: number | string;
    childern: AlertItem[];
}
interface basicdropdown {
    class: string,
    title: string,
    children: subss[]
}
interface subss {
    title: string
}
interface splitdropdown {
    class: string,
    title: string,
    btn: string,
    children: values[]
}
interface values {
    title: string
}
interface aligntdropdown {
    class: string,
    title: string,
    btn: string,
    arrow: string,
    children: values[]
}
interface carddropdown {
    class: string,
    title: string,
    cardtitle: string,
    desc: string
}
interface simpleaccordion {
    hederid: string;
    id: string;
    ids?: string;
    title: string;
    one?: boolean;
    two?: boolean;
    three?: boolean;
    isActive: boolean,
    childern?: Child[];
}
interface Child {
    desc?: string;
    title?: string;
}
interface datas {
    ids: string,
    control: string,
    title: string,
    class: string,
    isActive: boolean
}
interface multipless {
    ids: string,
    class: string,
    desc: string,
    isActive: boolean
}
interface itemtab {
    ids: string,
    active: boolean,
    childern: tabs[]
}
interface tabs {
    title?: string,
    html?: boolean,
    strong?: string
}
interface justifytabs {
    ids: string,
    active: boolean,
    children: tabss[]
}
interface tabss {
    img: string,
    name: string,
    phone: string
}
interface UserData {
    ids: string;
    title: string;
    active: boolean;
    no: string;
    name: string;
    country: string;
    contact?: string;
    children: UserDataChild[];
};

interface UserDataChild {
    row?: string;
    name?: string;
    coutry?: string;
    cont?: string;
    star?: number;
};
interface contextualclasses {
    class: string,
    color: string,
    txt: string,
    title: string
}
interface HorizontalSection {
    id: string;
    children: {
        title: string;
        class?: string;
    }[];
}
interface CustomSection {
    class: string;
    name: string;
    email: string;
    img: string;
    day: string;
    desc: string;
    follow: string;
    followClass: string,
    titleClass: string
}
interface CheckboxSection {
    class: string;
    ids: string;
    title: string;
    text: string;
}
interface RadioSection {
    class: string;
    ids: string;
    title: string;
    checked?: boolean
}
interface badgess {
    title: string,
    class: string,
    badge: string
}
interface DisabledSection {
    img: string;
    class: string;
    title: string;
}

interface ScrollableSection {
    img: string;
    class: string;
    email: string;
    title: string;
    day: string;
}
interface modeldata {
    title: string,
    children: modelsub[]
}
interface modelsub {
    desc: string
}
export const heading: head[] = [
    {
        code: "<code>&lt;h1&gt;&lt;/h1&gt;</code>",
        front: "<h1 class='mb-0'>2.5rem</h1>",
        head: " <h1><span> Heading 1 (MEGA)</span></h1>"
    },
    {
        code: "<code>&lt;h2&gt;&lt;/h2&gt;</code>",
        front: "<h2 class=mb-0>2rem</h2>",
        head: "<h2><span> Heading 2 (XL)</span></h2>"
    },
    {
        code: "<code>&lt;h3&gt;&lt;/h3&gt;</code>",
        front: "<h3 class=mb-0>1.75rem</h3>",
        head: " <h3><span> Heading 3 (LARGE)</span></h3>"
    },
    {
        code: "<code>&lt;h4&gt;&lt;/h4&gt;</code>",
        front: "<h4 class=mb-0>1.5rem</h4>",
        head: "<h4><span> Heading 4 (MEDIUM)</span></h4>"
    },
    {
        code: "<code>&lt;h5&gt;&lt;/h5&gt;</code>",
        front: "<h5 class=mb-0>1.25rem</h5>",
        head: "<h5><span> Heading 5 (SMALL)</span></h5>"
    }
]
export const colored: color[] = [
    {
        code: "<code>&lt;h1&gt;&lt;/h1&gt;</code>",
        head: " <h1><span class='text-primary'> Heading 1</span> Sub Heading</h1>"
    },
    {
        code: "<code>&lt;h2&gt;&lt;/h2&gt;</code>",
        head: "  <h2><span class='text-secondary'> Heading 2</span> Sub Heading</h2>"
    },
    {
        code: "<code>&lt;h3&gt;&lt;/h3&gt;</code>",
        head: "<h3><span class='text-success'> Heading 3</span> Sub Heading</h3>"
    },
    {
        code: "<code>&lt;h4&gt;&lt;/h4&gt;</code>",
        head: "  <h4><span class='text-info'> Heading 4</span> Sub Heading</h4>"
    },
    {
        code: "<code>&lt;h5&gt;&lt;/h5&gt;</code>",
        head: " <h5><span class='text-warning'> Heading 5</span> Sub Heading</h5>"
    }
]
export const weight: fonts[] = [
    {
        font: " <h1 class='f-w-700'>You can set bolder font weight Heading 1 using<code> f-w-700</code></h1>"
    },
    {
        font: " <h2 class='f-w-600'>You can set bold font weight Heading 2 using<code> f-w-600</code></h2>"
    },
    {
        font: "<h3 class='f-w-500'>You can set medium font weight Heading 3 using<code> f-w-500</code></h3>"
    },
    {
        font: " <h4 class='f-w-400'>You can set normal font weight Heading 4 using<code> f-w-400</code></h4>"
    },
    {
        font: "<h5 class='f-w-300'>You can set light font weight Heading 5 using<code> f-w-300</code></h5>"
    }
]
export const unorder: item[] = [
    {
        title: "One who looks on the bright side of things"
    },
    {
        title: "One who does something not professionally but for pleasure"
    },
    {
        title: "A handwriting that cannot be read"
    },
    {
        title: "One who looks on the bright side of things"
    },
    {
        title: "The study of ancient writing and scriptures"
    },
    {
        title: "creates more sophisticated capabilities for a web page to use coding language."
    },
    {
        title: "Maintaining contact and communicating clearly are also essential. possess abilities for a designer"
    }
]
export const description: items[] = [
    {
        title: "The way to get started is to quit talking and begin doing.",
        dec: "-Walt Disney"
    },
    {
        title: "Life is what happens when you're busy making other plans.",
        dec: "-John Lennon"
    },
    {
        title: "Whoever is happy will make others happy too.",
        dec: "-Anne Frank"
    },
    {
        title: "Life is either a daring adventure or nothing at all.",
        dec: "-Helen Keller"
    }
]
export const display: fonts[] = [
    {
        font: "<h1 class='display-1'>Display 1</h1>"
    },
    {
        font: "<h2 class='display-2'>Display 2</h2>"
    },
    {
        font: "<h3 class='display-3'>Display 3</h3>"
    },
    {
        font: "<h4 class='display-4'>Display 4</h4>"
    }
]
export const inline = [
    {
        font: "You can use the mark tag to  <mark>highlight</mark> text."
    },
    {
        font: "<del>This line of text is meant to be treated as deleted text.</del>"
    },
    {
        font: "<s>This line of text is meant to be treated as no longer accurate.</s>"
    },
    {
        font: "<ins> This line of text is meant to be treated as an addition to the document.</ins>"
    },
    {
        font: " <u>This line of text will render as underlined</u>"
    },
    {
        font: "<small>This line of text is meant to be treated as fine print.</small>"
    },
    {
        font: "<strong>This line rendered as bold text.</strong>"
    },
    {
        font: "<em>This line rendered as italicized text.</em>"
    }
]
export const textcolor: text[] = [
    {
        color: "text-primary",
        title: "This is Primary text You can archive this adding<code>.txt-primary</code> class"
    },
    {
        color: "text-secondary",
        title: "This is Secondary text You can archive this adding<code>.txt-secondary</code> class"
    },
    {
        color: "text-success",
        title: "This is Success text You can archive this adding<code>.txt-success</code> class"
    },
    {
        color: "text-info",
        title: "This is Info text You can archive this adding<code>.txt-info</code> class"
    },
    {
        color: "text-warning",
        title: "This is Warning text You can archive this adding<code>.txt-warning</code> class"
    },
    {
        color: "text-danger",
        title: "This is Danger text You can archive this adding<code>.txt-danger</code> class"
    },
    {
        color: "text-dark",
        title: "This is Dark text You can archive this adding<code>.txt-dark</code> class"
    }
]
export const blockquotes: block[] = [
    {
        class: "",
        bgclass: "mb-2 b-l-primary bg-light-primary",
        textclass: "text-primary",
        text: "The only impossible journey is the one you never begin.",
        footer: "Tony Robbins"
    },
    {
        class: "text-center",
        bgclass: "mb-2 bg-light-secondary",
        textclass: "text-secondary",
        text: "In this life we cannot do great things. We can only do small things with great love.",
        footer: "Mother Teresa"
    },
    {
        class: "text-end",
        bgclass: "mb-0 b-r-warning bg-light-warning",
        textclass: "text-warning",
        text: "Live in the sunshine, swim the sea, drink the wild air.",
        footer: "Ralph Waldo Emerson"
    }
]
export const size: img[] = [
    {
        class: "img-100",
        img: "avtar/3.jpg"
    },
    {
        class: "img-90",
        img: "avtar/4.jpg"
    },
    {
        class: "img-80",
        img: "avtar/7.jpg"
    },
    {
        class: "img-70",
        img: "avtar/11.jpg"
    }
]
export const status: statuss[] = [
    {
        class: "img-100",
        status: "status-online",
        img: "user/1.jpg"
    },
    {
        class: "img-90",
        status: "status-dnd",
        img: "avtar/16.jpg"
    },
    {
        class: "img-80",
        status: "status-offline",
        img: "avtar/7.jpg"
    },
    {
        class: "img-70",
        status: "status-online",
        img: "avtar/11.jpg"
    }
]
export const shapes: img[] = [
    {
        class: "img-100 b-r-8",
        img: "avtar/4.jpg"
    },
    {
        class: "img-90 b-r-30",
        img: "avtar/16.jpg"
    },
    {
        class: "img-80 b-r-35",
        img: "avtar/3.jpg"
    },
    {
        class: "img-70 rounded-circle",
        img: "avtar/11.jpg"
    }
]
export const ratio: img[] = [
    {
        class: "img-100 ",
        img: "avtar/11.jpg"
    },
    {
        class: "img-90 ",
        img: "avtar/4.jpg"
    },
    {
        class: "img-80 ",
        img: "user/1.jpg"
    },
    {
        class: "img-70 ",
        img: "avtar/16.jpg"
    },
    {
        class: "img-50 ",
        img: "avtar/7.jpg"
    }
]
export const grouping: avatargrouping[] = [
    {
        id: 1,
        children: [
            {
                class: "img-100 b-r-8",
                img: "avtar/4.jpg"
            },
            {
                class: "img-80 ",
                img: "avtar/16.jpg"
            },
            {
                class: "img-50 b-r-35",
                img: "avtar/3.jpg"
            }
        ]
    },
    {
        id: 2,
        children: [
            {
                class: "img-60 rounded-circle",
                img: "avtar/16.jpg"
            },
            {
                class: "b-r-8 img-80 ",
                img: "user/1.jpg"
            },
            {
                class: "img-60 rounded-circle ",
                img: "avtar/16.jpg"
            }
        ]
    },
    {
        id: 3,
        children: [
            {
                class: "img-40 rounded-circle",
                img: "user/3.jpg"
            },
            {
                class: "img-40 rounded-circle",
                img: "user/5.jpg"
            },
            {
                class: "img-40 rounded-circle",
                img: "user/1.jpg"
            }
        ]
    }
]
export const initial: img[] = [
    {
        class: "img-80 bg-light-primary",
        img: "A",
        fsclass: "fs-1"
    },
    {
        class: "img-70 bg-light-secondary",
        img: "D",
        fsclass: "fs-2"
    },
    {
        class: "img-60 bg-light-danger",
        img: "M",
        fsclass: "fs-3"
    },
    {
        class: "img-50 bg-light-primary",
        img: "I",
        fsclass: "fs-4"
    },
    {
        class: "img-40 bg-light-secondary",
        img: "R",
        fsclass: "fs-5"
    },
    {
        class: "img-30 bg-light-danger",
        img: "O",
        fsclass: "fs-6"
    }
]
export const borders: item1[] = [
    {
        title: "Custom border-radius class",
        children: [
            {
                class: "rounded-0 bg-light border",
                title: ".rounded-0"
            },
            {
                class: "rounded-1 bg-light border",
                title: ".rounded-1"
            },
            {
                class: "rounded-2 bg-light border",
                title: ".rounded-2"
            },
            {
                class: "rounded-3 bg-light border",
                title: ".rounded-3"
            },
            {
                class: "rounded-4 bg-light border",
                title: ".rounded-4"
            },
            {
                class: "rounded-5 bg-light border",
                title: ".rounded-5"
            }
        ]
    },
    {
        title: "Border color",
        children: [
            {
                class: "border-primary border",
                title: ".border-primary"
            },
            {
                class: "border-secondary border",
                title: ".border-secondary"
            },
            {
                class: "border-success border",
                title: ".border-success"
            },
            {
                class: "border-danger border",
                title: ".border-danger"
            },
            {
                class: "border-warning border",
                title: ".border-warning"
            },
            {
                class: "border-info border",
                title: ".border-info"
            },
            {
                class: "border-dark border",
                title: ".border-dark"
            }
        ]
    },
    {
        title: "Border-width",
        children: [
            {
                class: "border-1 border",
                title: ".border-1"
            },
            {
                class: "border-2 border",
                title: ".border-2"
            },
            {
                class: "border-3 border",
                title: ".border-3"
            },
            {
                class: "border-4 border",
                title: ".border-4"
            },
            {
                class: "border-5 border",
                title: ".border-5"
            }
        ]
    }
]
export const ping: statuss[] = [
    {
        class: "img-80",
        status: "status-offline status",
        img: "avtar/11.jpg"
    },
    {
        class: "img-70",
        status: "status-online status",
        img: "avtar/4.jpg"
    },
    {
        class: "img-60",
        status: "status-dnd status",
        img: "user/1.jpg"
    },
    {
        class: "img-50",
        status: "status-offline status",
        img: "avtar/3.jpg"
    }
]
export const color: item1[] = [
    {
        title: "Text colors",
        children: [
            {
                class: " text-primary",
                title: ".text-primary"
            },
            {
                class: "text-secondary",
                title: ".text-secondary"
            },
            {
                class: "text-success",
                title: ".text-success"
            },
            {
                class: "text-danger",
                title: ".text-danger"
            },
            {
                class: "text-warning",
                title: ".text-warning"
            },
            {
                class: "text-info",
                title: ".text-info"
            },
            {
                class: "text-dark",
                title: ".text-dark"
            },
            {
                class: "bg-dark",
                title: ".text-light"
            }
        ]
    }
]
export const border: item1[] = [
    {
        title: "Additive border",
        children: [
            {
                class: "helper-box bg-light border",
                title: ".border"
            },
            {
                class: "helper-box bg-light border-top",
                title: ".border-top"
            },
            {
                class: "helper-box bg-light border-bottom",
                title: ".border-bottom"
            },
            {
                class: "helper-box bg-light border-end",
                title: ".border-end"
            }
        ]
    },
    {
        title: "Subtractive border",
        children: [
            {
                class: "helper-box bg-light border border-0",
                title: ".border-0"
            },
            {
                class: "helper-box bg-light border border-top-0",
                title: ".border-top-0"
            },
            {
                class: "helper-box bg-light border border-end-0",
                title: ".border-end-0"
            },
            {
                class: "helper-box bg-light border border-bottom-0",
                title: ".border-bottom-0"
            },
            {
                class: "helper-box bg-light border border-start-0",
                title: ".border-start-0"
            }
        ]
    },
    {
        title: "Additive radius",
        children: [
            {
                class: "helper-radius radius-wrapper rounded",
                title: ".rounded"
            },
            {
                class: "helper-radius radius-wrapper rounded-top",
                title: ".rounded-top"
            },
            {
                class: "helper-radius radius-wrapper rounded-end",
                title: ".rounded-end"
            },
            {
                class: "helper-radius radius-wrapper rounded-bottom",
                title: ".rounded-bottom"
            },
            {
                class: "helper-radius radius-wrapper rounded-start",
                title: ".rounded-start"
            },
            {
                class: "helper-radius radius-wrapper rounded-pill",
                title: ".rounded-pill"
            },
            {
                class: "helper-radius radius-wrapper rounded-circle",
                title: ".rounded-circle"
            }
        ]
    }
]
export const backgroundcolor: item1[] = [
    {
        title: "Dark background",
        children: [
            {
                class: "bg-primary ",
                title: ".bg-primary"
            },
            {
                class: "bg-secondary",
                title: ".bg-secondary"
            },
            {
                class: "bg-success",
                title: ".bg-success"
            },
            {
                class: "bg-danger",
                title: ".bg-danger"
            },
            {
                class: "bg-warning",
                title: ".bg-warning"
            },
            {
                class: "bg-info",
                title: ".bg-info"
            },
            {
                class: "bg-dark",
                title: ".bg-dark"
            },
            {
                class: "bg-light",
                title: ".bg-light"
            }
        ]
    },
    {
        title: "Light backgrounds",
        children: [
            {
                class: " alert-light-primary",
                title: ".alert-light-primary"
            },
            {
                class: "alert-light-secondary",
                title: ".alert-light-secondary"
            },
            {
                class: "alert-light-success",
                title: ".alert-light-success"
            },
            {
                class: "alert-light-danger",
                title: ".alert-light-danger"
            },
            {
                class: "alert-light-warning",
                title: ".alert-light-warning"
            },
            {
                class: "alert-light-info",
                title: ".alert-light-info"
            },
            {
                class: "alert-light-dark",
                title: ".alert-light-dark"
            }
        ]
    }
]
export const bordercolor: subs[] = [
    {
        class: "b-primary",
        title: ".b-primary"
    },
    {
        class: "b-t-primary",
        title: ".b-t-primary"
    },
    {
        class: "b-b-primary",
        title: ".b-b-primary"
    },
    {
        class: "b-l-primary",
        title: ".b-l-primary"
    },
    {
        class: "b-r-primary",
        title: ".b-r-primary"
    },
    {
        class: "b-secondary",
        title: ".b-secondary"
    },
    {
        class: "b-t-secondary",
        title: ".b-t-secondary"
    },
    {
        class: "b-b-secondary",
        title: ".b-b-secondary"
    },
    {
        class: "b-l-secondary",
        title: ".b-l-secondary"
    },
    {
        class: "b-r-secondary",
        title: ".b-r-secondary"
    },
    {
        class: "b-success",
        title: ".b-success"
    },
    {
        class: "b-t-success",
        title: ".b-t-success"
    },
    {
        class: "b-b-success",
        title: ".b-b-success"
    },
    {
        class: "b-l-success",
        title: ".b-l-success"
    },
    {
        class: "b-r-success",
        title: ".b-r-success"
    },
    {
        class: "b-danger",
        title: ".b-danger"
    },
    {
        class: "b-t-danger",
        title: ".b-t-danger"
    },
    {
        class: "b-b-danger",
        title: ".b-b-danger"
    },
    {
        class: "b-l-danger",
        title: ".b-l-danger"
    },
    {
        class: "b-r-danger",
        title: ".b-r-danger"
    },
    {
        class: "b-warning",
        title: ".b-warning"
    },
    {
        class: "b-t-warning",
        title: ".b-t-warning"
    },
    {
        class: "b-b-warning",
        title: ".b-b-warning"
    },
    {
        class: "b-l-warning",
        title: ".b-l-warning"
    },
    {
        class: "b-r-warning",
        title: ".b-r-warning"
    },
    {
        class: " b-info",
        title: ". b-info"
    },
    {
        class: " b-t-info",
        title: ". b-t-info"
    },
    {
        class: " b-b-info",
        title: ". b-b-info"
    },
    {
        class: "b-l-info",
        title: ".b-l-info"
    },
    {
        class: "b-r-info",
        title: ".b-r-info"
    },
    {
        class: "b-dark",
        title: ".b-dark"
    },
    {
        class: "b-t-dark",
        title: ".b-t-dark"
    },
    {
        class: "b-b-dark",
        title: ".b-b-dark"
    },
    {
        class: "b-l-dark",
        title: ".b-l-dark"
    },
    {
        class: "b-r-dark",
        title: ".b-r-dark"
    },
    {
        class: "b-light",
        title: ".b-light"
    },
    {
        class: "b-t-light",
        title: ".b-t-light"
    },
    {
        class: "b-b-light",
        title: ".b-b-light"
    },
    {
        class: "b-l-light",
        title: ".b-l-light"
    },
    {
        class: "b-r-light",
        title: ".b-r-light"
    }
]
export const imgesize: sub[] = [
    {
        class: "img-50 img-h-50",
        img: "avatars/1.jpg"
    },
    {
        class: "img-60 img-h-60",
        img: "avatars/1.jpg"
    },
    {
        class: "img-70 img-h-70",
        img: "avatars/1.jpg"
    },
    {
        class: "img-90 img-h-90",
        img: "avatars/1.jpg"
    },
    {
        class: "img-100 img-h-100",
        img: "avatars/1.jpg"
    }
]
export const fontstyle: subs[] = [
    {
        class: "fw-normal mb-2",
        title: " This is a  <b>.f-s-normal    </b> font-style"
    },
    {
        class: "fst-italic mb-2",
        title: "This is a <b>.f-s-italic </b> font-style"
    },
    {
        class: "f-s-oblique mb-2",
        title: "This is a   <b>.f-s-oblique </b> font-style"
    },
    {
        class: "f-s-inherit",
        title: "This is a <b>.f-s-inherit </b> font-style"
    }
]
export const fontweght: subs[] = [
    {
        class: "f-w-100",
        title: "You can set light font weight heading .f-w-100"
    },
    {
        class: "f-w-300",
        title: "You can set light font weight heading .f-w-300"
    },
    {
        class: "f-w-400",
        title: "You can set light font weight heading .f-w-400"
    },
    {
        class: "f-w-600",
        title: "You can set bolder font weight heading .f-w-600"
    },
    {
        class: "f-w-700",
        title: "You can set bold font weight heading .f-w-700"
    },
    {
        class: "f-w-900",
        title: "You can set bold font weight heading .f-w-900"
    }
]
export const textcolors: subs[] = [
    {
        class: "font-primary",
        title: "This is a <b>font-primary </b>text used class as .font-primary"
    },
    {
        class: "font-secondary",
        title: "This is a <b>font-secondary </b>text used class as .font-secondary"
    },
    {
        class: "font-success",
        title: "This is a <b>font-success </b>text used class as .font-success"
    },
    {
        class: "font-warning",
        title: "This is a <b>font-warning </b>text used class as .font-warning"
    },
    {
        class: "font-danger",
        title: "This is a <b>font-danger </b>text used class as .font-danger"
    },
    {
        class: "font-info",
        title: "This is a <b>font-info </b>text used class as .font-info"
    }
]
export const pedding: side[] = [
    {
        class: "p-10"
    },
    {
        class: "p-15"
    },
    {
        class: "p-20"
    },
    {
        class: "p-25"
    },
    {
        class: "p-30"
    },
    {
        class: "p-35"
    },
    {
        class: "p-40"
    },
    {
        class: "p-45"
    },
    {
        class: "p-50"
    }
]
export const onesidepedding: items[] = [
    {
        title: "Padding Left",
        dec: " <span>.p-l-10</span><span>.p-l-15</span><span>.p-l-20</span><span>.p-l-25</span><span>.p-l-30</span><span>.p-l-35</span><span>.p-l-40</span><span>.p-l-45</span><span>.p-l-50 </span>"
    },
    {
        title: "Padding Right",
        dec: "<span>.p-r-10</span><span>.p-r-15</span><span>.p-r-20</span><span>.p-r-25</span><span>.p-r-30</span><span>.p-r-35</span><span>.p-r-40</span><span>.p-r-45</span><span>.p-r-50 </span>"
    },
    {
        title: "Padding Top",
        dec: " <span>.p-t-10</span><span>.p-t-15</span><span>.p-t-20</span><span>.p-t-25</span><span>.p-t-30</span><span>.p-t-35</span><span>.p-t-40</span><span>.p-t-45</span><span>.p-t-50 </span>"
    },
    {
        title: "Padding Bottom",
        dec: "<span>.p-b-10</span><span>.p-b-15</span><span>.p-b-20</span><span>.p-b-25</span><span>.p-b-30</span><span>.p-b-35</span><span>.p-b-40</span><span>.p-b-45</span><span>.p-b-50 </span>"
    }
]
export const onesidemargin: items[] = [
    {
        title: "Margin Left",
        dec: " <span>.m-l-10</span><span>.m-l-15</span><span>.m-l-20</span><span>.m-l-25</span><span>.m-l-30</span><span>.m-l-35</span><span>.m-l-40</span><span>.m-l-45</span><span>.m-l-50 </span>"
    },
    {
        title: "Padding Right",
        dec: "<span>.m-r-10</span><span>.m-r-15</span><span>.m-r-20</span><span>.m-r-25</span><span>.m-r-30</span><span>.m-r-35</span><span>.m-r-40</span><span>.m-r-45</span><span>.m-r-50 </span>"
    },
    {
        title: "Padding Top",
        dec: "  <span>.m-t-10</span><span>.m-t-15</span><span>.m-t-20</span><span>.m-t-25</span><span>.m-t-30</span><span>.m-t-35</span><span>.m-t-40</span><span>.m-t-45</span><span>.m-t-50 </span>"
    },
    {
        title: "Padding Bottom",
        dec: "<span>.m-b-10</span><span>.m-b-15</span><span>.m-b-20</span><span>.m-b-25</span><span>.m-b-30</span><span>.m-b-35</span><span>.m-b-40</span><span>.m-b-45</span><span>.m-b-50 </span>"
    }
]
export const margin: side[] = [
    {
        class: "m-10"
    },
    {
        class: "m-15"
    },
    {
        class: "m-20"
    },
    {
        class: "m-25"
    },
    {
        class: "m-30"
    },
    {
        class: "m-35"
    },
    {
        class: "m-40"
    },
    {
        class: "m-45"
    },
    {
        class: "m-50"
    }
]
export const fontsize: side[] = [
    {
        class: "fs-6"
    },
    {
        class: "fs-5"
    },
    {
        class: "fs-4"
    },
    {
        class: "fs-3"
    },
    {
        class: "fs-2"
    },
    {
        class: "fs-1"
    }
]
export const columm: side[] = [
    {
        class: "col-md-1"
    },
    {
        class: "col-md-2"
    },
    {
        class: "col-md-2"
    },
    {
        class: "col-md-3"
    },
    {
        class: "col-md-4"
    },
    {
        class: "col-md-5"
    },
    {
        class: "col-md-7"
    },
    {
        class: "col-md-6"
    },
    {
        class: "col-md-6"
    },
    {
        class: "col-md-8"
    },
    {
        class: "col-md-4"
    },
    {
        class: "col-md-9"
    },
    {
        class: "col-md-3"
    },
    {
        class: "col-md-10"
    },
    {
        class: "col-md-2"
    },
    {
        class: "col-md-12"
    }
]
export const vertical: side[] = [
    {
        class: "align-items-start"
    },
    {
        class: "align-items-center"
    },
    {
        class: "align-items-end"
    }
]
export const horizoltal: side[] = [
    {
        class: "justify-content-start"
    },
    {
        class: "justify-content-center"
    },
    {
        class: "justify-content-end"
    }
]
export const order: subs[] = [
    {
        class: "col-3 order-3",
        title: "First Item (order-3)"
    },
    {
        class: "col-5 order-first",
        title: "Second Item (order-first)"
    },
    {
        class: "col-4 order-last",
        title: "Third Item (order-last)"
    },
    {
        class: "col-3 order-2",
        title: "Fourth Item (order-2)"
    },
    {
        class: "col-sm-2 col-4 order-5",
        title: "fifth Item (order-5)"
    },
    {
        class: "col-sm-6 col-4 order-4",
        title: "sixth Item (order-4)"
    }
]
export const offset: subs[] = [
    {
        class: "col-sm-5 col-4 offset-sm-3 offset-2",
        title: "col-5 offset-3"
    },
    {
        class: "col-sm-2 col-4 offset-sm-2 offset-1",
        title: "col-2 offset-2"
    },
    {
        class: "col-sm-4 col-5 offset-2",
        title: "col-4 offset-2"
    },
    {
        class: "col-sm-3 col-4 offset-sm-2 offset-1",
        title: "col-3 offset-2"
    }
]
export const badges: subs[] = [
    {
        class: "badge-primary",
        title: "Primary"
    },
    {
        class: "badge-secondary",
        title: "Secondary"
    },
    {
        class: "badge-success",
        title: "Success"
    },
    {
        class: "badge-info",
        title: "Info"
    },
    {
        class: "badge-warning",
        title: "Warning"
    },
    {
        class: "badge-danger",
        title: "Danger"
    },
    {
        class: "badge-light text-dark",
        title: "Light"
    },
    {
        class: "badge-dark tag-pills-sm-mb",
        title: "Dark"
    }
]
export const number: subs[] = [
    {
        class: "badge-primary",
        title: "1"
    },
    {
        class: "badge-secondary",
        title: "2"
    },
    {
        class: "badge-success",
        title: "3"
    },
    {
        class: "badge-info",
        title: "4"
    },
    {
        class: "badge-warning ",
        title: "5"
    },
    {
        class: "badge-danger",
        title: "6"
    },
    {
        class: "badge-light text-dark",
        title: "7"
    },
    {
        class: "badge-dark",
        title: "8"
    }
]
export const icon: subs[] = [
    {
        class: "badge-primary",
        title: "fa-light fa-dollar-sign"
    },
    {
        class: "badge-secondary",
        title: "fa-solid fa-headphones-simple"
    },
    {
        class: "badge-success",
        title: "fa-solid fa-link"
    },
    {
        class: "badge-info",
        title: "fa-brands fa-github"
    },
    {
        class: "badge-warning ",
        title: "fa-solid fa-award"
    },
    {
        class: "badge-danger",
        title: "fa-solid fa-chart-line"
    },
    {
        class: "badge-light text-dark",
        title: "fa-regular fa-heart"
    },
    {
        class: "badge-dark",
        title: "fa-regular fa-envelope"
    }
]
export const badgeheadings: item[] = [
    {
        title: " <h1 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 1 <span class='badge badge-primary'>Latest</span></h1>"
    },
    {
        title: "<h2 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 2 <span class='badge badge-secondary'>Trending</span></h2>"
    },
    {
        title: "<h3 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 3 <span class='badge badge-success'>Checkout</span></h3>"
    },
    {
        title: "<h4 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 4 <span class='badge badge-warning'>Inbox</span></h4>"
    },
    {
        title: "<h5 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 5 <span class='badge badge-danger'>Login</span></h5>"
    },
    {
        title: " <h6 class='pb-2 d-flex gap-2 flex-wrap align-items-center'>Badge Heading 6 <span class='badge badge-dark'>Logout</span></h6>"
    }
]
export const buttons: button[] = [
    {
        class: "btn-primary",
        title: "Messages",
        icon: "fa-regular fa-envelope"
    },
    {
        class: "btn-secondary",
        title: "Notifications",
        icon: "fa-regular fa-bell"
    },
    {
        class: "btn-success",
        title: "Update available ",
        icon: "fa-solid fa-gear"
    },
    {
        class: "btn-info",
        title: "Playing Now",
        icon: "fa-solid fa-music"
    }
]
export const basic: progress[] = [
    {
        width: " 25%",
        class: "bg-primary"
    },
    {
        width: "50%",
        class: "bg-secondary"
    },
    {
        width: "75%",
        class: "bg-success"
    },
    {
        width: "100%",
        class: "bg-danger"
    }
]
export const large: progress[] = [
    {
        width: " 25%",
        class: "bg-primary"
    },
    {
        width: "50%",
        class: "bg-secondary"
    },
    {
        width: "75%",
        class: "bg-success"
    },
    {
        width: "100%",
        class: "bg-info"
    }
]
export const customheight: progress[] = [
    {
        width: " 25%",
        height: "1px",
        class: "bg-primary"
    },
    {
        width: "50%",
        height: "5px",
        class: "bg-warning"
    },
    {
        width: "75%",
        height: "11px",
        class: "bg-danger"
    },
    {
        width: "100%",
        height: "19px",
        class: "bg-info"
    }
]
export const striped: progress[] = [
    {
        width: " 10%",
        class: "bg-primary"
    },
    {
        width: "25%",
        class: "bg-warning"
    },
    {
        width: "50%",
        class: "bg-danger"
    },
    {
        width: "75%",
        class: "bg-success"
    }
]
export const multiple: side[] = [
    {
        class: "bg-primary"
    },
    {
        class: "bg-secondary"
    },
    {
        class: "bg-success"
    },
    {
        class: "bg-info"
    },
    {
        class: "bg-warning"
    },
    {
        class: "bg-danger"
    },
    {
        class: "bg-primary"
    },
    {
        class: "bg-warning"
    }
]
export const custom: customs[] = [
    {
        width: " 30%",
        class: "bg-primary",
        title: "30% Getting Uploading..."
    },
    {
        width: "60%",
        class: "bg-secondary",
        title: "60% Getting Pause..."
    },
    {
        width: "70%",
        class: "bg-success",
        title: "70% Getting Uploading..."
    },
    {
        width: "100%",
        class: "bg-dark",
        title: "100% Completed"
    }
]
export const basicmodal: uikutsmodel[] = [
    {
        id: "#exampleModals",
        class: "btn-secondary",
        title: "Simple"
    },
    {
        id: "#exampleModalLong",
        class: "btn-success",
        title: "Scrolling content"
    },
    {
        id: "#tooltipmodal",
        class: "btn-info",
        title: "Tooltips and popovers"
    },
    {
        id: "#exampleModalgetbootstrap",
        class: "btn-primary",
        title: "Open modal for Admiro"
    }
]
export const basicmodeldata: modeldata[] = [
    {
        title: "Wed designer",
        children: [
            {
                desc: "For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience."
            },
            {
                desc: "As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward."
            },
            {
                desc: "Although a designer doesn't write the code that makes a site work, it doesn't hurt to have a basic understanding of HTML or CSS to make minor adjustments to a site. You'll find it simpler to edit templates, improve typefaces, or change item placements if you have a basic understanding of how things work."
            },
            {
                desc: "Most businesses employ a certain font or typography so that clients can quickly distinguish them from their rivals. Since designers now have access to a wider variety of fonts, firms may more easily and precisely communicate their brands through typography."
            }
        ]
    },
    {
        title: "UX designer",
        children: [
            {
                desc: "User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations."
            },
            {
                desc: "Create solutions that will be helpful for the issues and situations that exist right now, not for those that will. With the right materials, assist people in organizing their time, completing things more quickly, and optimizing it."
            },
            {
                desc: "Based on the data received from users, improve them. Adapt existing solutions to the requirements, hopes, difficulties, and expectations of users."
            },
            {
                desc: "Keep in mind that you are creating solutions to particular challenges for a particular population living in a particular habitat. Always remember to correctly contextualise your thoughts and determine whether they are actually appropriate for the situation. It's sometimes necessary to concede that a digital solution is not the most appropriate choice in a certain circumstance."
            }
        ]
    }
]
export const sizemodal: uikutsmodel[] = [
    {
        id: ".bd-example-modal-fullscreen",
        class: "btn-secondary",
        title: "Full Screen Modal"
    },
    {
        id: ".bd-example-modal-xl",
        class: "btn-info",
        title: "Extra large Modal"
    },
    {
        id: ".bd-example-modal-lg",
        class: "btn-success",
        title: "Large Modal"
    },

    {
        id: ".bd-example-modal-sm",
        class: "btn-primary",
        title: "Small Modal"
    }
]
export const fullsecreenmodel: uikutsmodel[] = [
    {
        id: "#exampleModalfullscreen",
        class: "btn-outline-secondary",
        title: "Fullscreen modal"
    },
    {
        id: "#exampleModalfullscreensm",
        class: "btn-outline-info",
        title: "Fullscreen below sm"
    },
    {
        id: "#exampleModalfullscreen-md",
        class: "btn-outline-success",
        title: "Fullscreen below md"
    },

    {
        id: "#exampleModalfullscreen-lg",
        class: "btn-outline-warning",
        title: "Fullscreen below lg"
    },
    {
        id: "#exampleModalfullscreen-xl",
        class: "btn-outline-primary",
        title: "Fullscreen below xl"
    },
    {
        id: "#exampleModalfullscreen-xxl",
        class: "btn-outline-danger",
        title: "Fullscreen below xxl"
    }
]
export const alert: coloralert[] = [
    {
        id: 1,
        childern: [
            {
                class: "alert-primary",
                alertclass: "alert-link text-white",
                title: "Primary Alert",
                text: "primary alert"
            },
            {
                class: "alert-secondary",
                alertclass: "alert-link text-white",
                title: "Secondary Alert",
                text: "secondary alert"
            },
            {
                class: "alert-info mb-0",
                alertclass: "alert-link text-white",
                title: "Info Alert",
                text: "info alert"
            },
            {
                class: "alert-success",
                alertclass: "alert-link text-white",
                title: "Success Alert",
                text: "success alert"
            }
        ]
    },
    {
        id: "",
        childern: [
            {
                class: "alert-warning",
                alertclass: "alert-link text-white",
                title: "Warning Alert",
                text: "warning alert"
            },
            {
                class: "alert-danger",
                alertclass: "alert-link text-white",
                title: "Danger Alert",
                text: "danger alert"
            },
            {
                class: "alert-light text-dark",
                alertclass: "alert-link",
                title: "Light Alert",
                text: "light alert"
            },
            {
                class: "alert-dark mb-0",
                alertclass: "alert-link text-white",
                title: "Dark Alert",
                text: "dark alert"
            }
        ]
    }
]
export const lightalert: coloralert[] = [
    {
        id: 1,
        childern: [
            {
                class: "alert-light-primary",
                alertclass: "txt-primary",
                title: "Primary Light Alert",
                text: "primary alert"
            },
            {
                class: "alert-light-secondary",
                alertclass: "txt-secondary",
                title: "Secondary Light Alert",
                text: "secondary alert"
            },
            {
                class: "alert-light-success",
                alertclass: "txt-success",
                title: "Success Light Alert",
                text: "success alert"
            },
            {
                class: "alert-light-info mb-0",
                alertclass: "txt-info",
                title: "Info Light Alert",
                text: "info alert"
            }
        ]
    },
    {
        id: "",
        childern: [
            {
                class: "alert-light-warning",
                alertclass: "txt-warning",
                title: "Warning Light Alert",
                text: "warning alert"
            },
            {
                class: "alert-light-danger",
                alertclass: "txt-danger",
                title: "Danger Light Alert",
                text: "danger alert"
            },
            {
                class: "alert-light-light",
                alertclass: "txt-dark",
                title: "White Light Alert",
                text: "light alert"
            },
            {
                class: "alert-light-dark mb-0",
                alertclass: "txt-dark",
                title: "Dark Light Alert",
                text: "dark alert"
            }
        ]
    }
]
export const addition: AlertItems[] = [
    {
        class: "alert-light-primary",
        alertclass: "text-primary",
        title: "Please! Check your notifications",
        text: "The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.",
        text1: "The emergency notification system is free and is available in all 50 states."
    },
    {
        class: "alert-light-secondary",
        alertclass: "text-secondary",
        title: "Something went wrong! Please, chrome update.",
        text: "The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.",
        text1: "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
    },
    {
        class: "alert-light-success",
        alertclass: "text-success",
        title: "Please! Hidden cameras were not installed.",
        text: "Due to increasingly accessible technology, hidden cameras have grown in popularity among regular people in recent years.",
        text1: "Consider moving clocks and plush animals from your area if you think they may be concealing cameras because they are both portable items."
    }
]
export const dropdown: basicdropdown[] = [
    {
        class: "btn-primary",
        title: "Dashboard",
        children: [
            {
                title: "Project"
            },
            {
                title: "Ecommerce"
            },
            {
                title: "Crypto"
            }
        ]
    },
    {
        class: "btn-secondary",
        title: "Ecommerce",
        children: [
            {
                title: "Product"
            },
            {
                title: "Product details"
            },
            {
                title: "Cart"
            }
        ]
    },
    {
        class: "btn-warning text-white",
        title: "Ui kits",
        children: [
            {
                title: "Typography"
            },
            {
                title: "Avatars"
            },
            {
                title: "Grid"
            }
        ]
    },
    {
        class: "btn-danger",
        title: "Error page",
        children: [
            {
                title: "Error 400"
            },
            {
                title: "Error 403"
            },
            {
                title: "Error 500"
            }
        ]
    }
]
export const round: subs[] = [
    {
        class: "btn-primary",
        title: "Primary"
    },
    {
        class: "btn-success",
        title: "Success"
    },
    {
        class: "btn-info text-white",
        title: "Info"
    },
    {
        class: "btn-warning text-white",
        title: "Warning"
    },
    {
        class: "btn-danger",
        title: "Danger"
    }
]
export const split: splitdropdown[] = [
    {
        class: "btn-outline-primary",
        title: "Widgets",
        btn: "btn-primary",
        children: [
            {
                title: "General"
            },
            {
                title: "Chart"
            }
        ]
    },
    {
        class: "btn-outline-secondary",
        title: "Animations",
        btn: "btn-secondary",
        children: [
            {
                title: "Animate"
            },
            {
                title: "AOS animations"
            }
        ]
    },
    {
        class: "btn-outline-success",
        title: "Charts",
        btn: "btn-success",
        children: [
            {
                title: "Echarts"
            },
            {
                title: "Apex chart"
            }
        ]
    },
    {
        class: "btn-outline-info",
        title: "Email",
        btn: "btn-info",
        children: [
            {
                title: "Email app"
            },
            {
                title: "Email compose"
            }
        ]
    },
    {
        class: "btn-outline-warning",
        title: "Icons",
        btn: "btn-warning",
        children: [
            {
                title: "Flag icons "
            },
            {
                title: "Fontawesome icons"
            },
            {
                title: "Ico icons"
            },
            {
                title: "Feather icons "
            }
        ]
    },
    {
        class: "btn-outline-danger",
        title: "Learning",
        btn: "btn-danger",
        children: [
            {
                title: "Learning List"
            },
            {
                title: "Detailed Course"
            }
        ]
    }
]
export const justify: splitdropdown[] = [
    {
        class: "btn-primary",
        title: "Text-left",
        btn: "text-start",
        children: [
            {
                title: "Hello.."
            },
            {
                title: "How are you?"
            },
            {
                title: "What are you doing?"
            }
        ]
    },
    {
        class: "btn-info text-white",
        title: "Text-center",
        btn: "text-center",
        children: [
            {
                title: "Chocolate"
            },
            {
                title: "Ice-cream"
            },
            {
                title: "Trophy"
            }
        ]
    },
    {
        class: "btn-primary",
        title: "Text-right ",
        btn: "text-end",
        children: [
            {
                title: "I'm fine."
            },
            {
                title: "ohh wow!!"
            },
            {
                title: "That's the good news!"
            }
        ]
    }
]
export const alignments: aligntdropdown[] = [
    {
        class: "btn-warning text-white",
        arrow: "dropup",
        title: "Warning top",
        btn: "",
        children: [
            {
                title: "Be careful"
            },
            {
                title: "Notifications"
            },
            {
                title: "Beware"
            }
        ]
    },
    {
        class: "btn-success",
        arrow: "dropend",
        title: "Success right",
        btn: "text-end",
        children: [
            {
                title: "Good luck"
            },
            {
                title: "Good job"
            },
            {
                title: "Done!"
            }
        ]
    },
    {
        class: "btn-primary",
        title: "Primary bottom",
        arrow: "",
        btn: "text-end",
        children: [
            {
                title: "It's important"
            },
            {
                title: "Happy life"
            },
            {
                title: "Another work"
            }
        ]
    },
    {
        class: "btn-danger",
        title: "Danger left",
        arrow: "dropstart",
        btn: "",
        children: [
            {
                title: "Threat"
            },
            {
                title: "Dangerous"
            },
            {
                title: "Alert "
            }
        ]
    }
]
export const helper: carddropdown[] = [
    {
        class: "btn-secondary",
        title: "Helper Card",
        cardtitle: "Learn More!",
        desc: "There is a lot of information available here"
    },
    {
        class: "btn-warning text-white",
        title: "Warning Card",
        cardtitle: "Warning!",
        desc: "Please! Check your notifications."
    },
    {
        class: "btn-info text-white",
        title: "Alert Card",
        cardtitle: "Danger",
        desc: "It's a danger path."
    }
]
export const simple: simpleaccordion[] = [
    {
        hederid: "headingOne",
        id: "#collapseOne",
        ids: "collapseOne",
        title: "What do web designers do?",
        one: true,
        isActive: true,
        childern: [
            {
                desc: " Web design<em class='text-danger'> identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements."
            }
        ]
    },
    {
        hederid: "headingTwo",
        id: "#collapseTwo",
        ids: "collapseTwo",
        title: "What is the use of web design?",
        two: true,
        isActive: false,
        childern: [
            {
                desc: "<strong> Search engine optimization: </strong> Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it."
            },
            {
                desc: "<strong> Mobile responsiveness:</strong> Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease."
            },
            {
                desc: " <strong> Improved sales:</strong>Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales."
            }
        ]
    },
    {
        hederid: "headingThree",
        id: "#collapseThree",
        ids: "collapseThree",
        title: "What are the elements of web design?",
        three: true,
        isActive: false,
        childern: [
            {
                title: "Layout"
            },
            {
                title: "Images"
            },
            {
                title: "Visual hierarchy"
            },
            {
                title: "Color scheme"
            },
            {
                title: "Typography"
            },
            {
                title: "Navigation"
            },
            {
                title: "Readability"
            },
            {
                title: "Content"
            }
        ]
    }
]
export const flush: simpleaccordion[] = [
    {
        hederid: "flush-headingOne",
        id: "#flush-collapseOne",
        ids: "flush-collapseOne",
        title: "What is bootstrap?",
        isActive: true,
        childern: [
            {
                title: "--> Bootstrap is the most popular HTML, CSS and JavaScript framework for developing  a responsive and mobile friendly website."
            },
            {
                title: "--> It is absolutely free to download and use."
            }
        ]
    },
    {
        hederid: "flush-headingTwo",
        id: "#flush-collapseTwo",
        ids: "flush-collapseTwo",
        title: "Why Should You Use Bootstrap?",
        isActive: false,
        childern: [
            {
                title: "First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started."
            },
            {
                title: "One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them."
            },
            {
                title: "You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. "
            },
            {
                title: "To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects."
            }
        ]
    },
    {
        hederid: "flush-headingThree",
        id: "#flush-collapseThree",
        ids: "flush-collapseThree",
        title: "Bootstrap Image System",
        isActive: false,
        childern: [
            {
                title: "Bootstrap handles the image display and responsiveness with its predefined HTML and CSS rules."
            },
            {
                title: "Adding the .img-responsive class will automatically resize images based on the users' screen size. This will benefit your website’s performance, as reducing image sizes is part of the site optimization process."
            },
            {
                title: "Bootstrap also provides additional classes like .img-circle and .img-rounded, which help to modify the images' shape."
            }
        ]
    }
]
export const multiples: datas[] = [
    {
        ids: "#multiCollapseExample1",
        control: "multiCollapseExample1",
        title: "Toggle first element",
        class: "btn-primary",
        isActive: false
    },
    {
        ids: "#multiCollapseExample2",
        control: "multiCollapseExample2",
        title: "Toggle second element",
        isActive: false,
        class: "btn-warning"
    },
    {
        ids: ".multi-collapse",
        control: "multiCollapseExample1 multiCollapseExample2",
        title: "Toggle both elements",
        isActive: false,
        class: "btn-success"
    }
]
export const multipledata: multipless[] = [
    {
        ids: "multiCollapseExample1",
        class: "bg-light-primary",
        desc: "The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from it's current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.",
        isActive: false
    },
    {
        ids: "multiCollapseExample2",
        class: "bg-light-warning",
        desc: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.",
        isActive: false
    }
]
export const iconaccodion: simpleaccordion[] = [
    {
        hederid: "panelsStayOpen-headingOne",
        id: "#panelsStayOpen-collapseOne",
        ids: "panelsStayOpen-collapseOne",
        title: "Keep in touch",
        one: true,
        isActive: false,
        childern: [
            {
                desc: "<em class='txt-danger'> ' This page might not behave as expected because WindowsInternet Explorer isn't configured to load unsigned ActiveX controls.'</em> or 'Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer.' (Both phrased as conditions that may cause future problems.)"
            }
        ]
    },
    {
        hederid: "panelsStayOpen-headingTwo",
        id: "#panelsStayOpen-collapseTwo",
        ids: "panelsStayOpen-collapseTwo",
        title: "Chats with others",
        two: true,
        isActive: false,
        childern: [
            {
                desc: "You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails."
            },
            {
                desc: "<strong>Chat:</strong> Use when you prefer a dedicated chat experience and don't mind switching between different apps."
            }
        ]
    },
    {
        hederid: "panelsStayOpen-headingThree",
        id: "#panelsStayOpen-collapseThree",
        ids: "panelsStayOpen-collapseThree",
        title: "Right way to code",
        one: true,
        isActive: false,
        childern: [
            {
                desc: "1) Decide on the indentation and keep it that way."
            },
            {
                desc: "2) Make comments."
            },
            {
                desc: "3) Consistent name scheme."
            },
            {
                desc: "4) Don't repeat code."
            },
            {
                desc: "5) Avoid writing long code lines."
            },
            {
                desc: "6) Break down a big task into smaller chunks."
            },
            {
                desc: "7) Organize your program into smaller files."
            },
            {
                desc: "8) Write clever code that is also readable."
            }
        ]
    }
]
export const collapse: simpleaccordion[] = [
    {
        hederid: "#collapseExample",
        id: "collapseExample",
        title: "Link with href",
        isActive: false,
        childern: [
            {
                desc: "Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."
            }
        ]
    },
    {
        hederid: "#collapseExample1",
        id: "collapseExample1",
        title: "Button with data-bs-target",
        isActive: false,
        childern: [
            {
                desc: "Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."
            }
        ]
    }
]
export const verticals: itemtab[] = [
    {
        ids: "ver-pills-components",
        active: true,
        childern: [
            {
                title: " If you are a business owner, your website is absolutely one of the most important tools you have in your arsenal to get more - and better - clients and customers or a good one from a great one? Here are 10 qualities that a great website will need. Whether or not you end up retaining makespace based web designers, you should find them helpful:"
            },
            {
                title: "--> Navigation"
            },
            {
                title: "--> Visual Design"
            },
            {
                title: "--> Web Friendly"
            },
            {
                title: "--> Conversion"
            }
        ]
    },
    {
        ids: "ver-pills-pages",
        active: false,
        childern: [
            {
                title: "Available pages in Theme:"
            },
            {
                title: " Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader.",
                html: true,
                strong: "Typography:"
            },
            {
                title: "  A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI). ",
                html: true,
                strong: " Tooltip:"
            }
        ]
    },
    {
        ids: "ver-pills-settings",
        active: false,
        childern: [
            {
                title: " Like a mission statement, a website's purpose gives the primary reason for the site's existence in the world. Whether for education, advocacy, service provision, community organizing, etc.",
                html: true,
                strong: "Site purpose"
            },
            {
                title: "  It's important to figure out as many of these in advance as you can for the sake of a more coherent design.",
                html: true,
                strong: "Features"
            }
        ]
    }
]
export const justifys: justifytabs[] = [
    {
        ids: "j-pills-web-designer",
        active: false,
        children: [
            {
                img: "avtar/3.jpg",
                name: "Kathy M. Anderson",
                phone: "440-494-0729"
            },
            {
                img: "avtar/4.jpg",
                name: "Lillian J. Goodfellow",
                phone: "239-664-7751"
            },
            {
                img: "avtar/7.jpg",
                name: "Carolyn A. Sutton",
                phone: "218-793-6609"
            },
            {
                img: "avtar/11.jpg",
                name: "Mary O. Miller",
                phone: "720-744-0921"
            },
            {
                img: "avtar/16.jpg",
                name: "Patricia H. Hummel",
                phone: "314-445-1451"
            },
            {
                img: "blog/4.jpg",
                name: "Minnie F. Evans",
                phone: "718-740-8438"
            }
        ]
    },
    {
        ids: "j-pills-UX-designer",
        active: true,
        children: [
            {
                img: "blog/9.jpg",
                name: "Thomas A. Leroy",
                phone: "305-539-6871"
            },
            {
                img: "blog/12.png",
                name: "Mark S. Ward",
                phone: "303-561-8880"
            },
            {
                img: "blog/14.png",
                name: "Emily T. Hooper",
                phone: "301-553-1836"
            },
            {
                img: "blog/comment.jpg",
                name: "Natasha W. Watson",
                phone: "267-605-4499"
            },
            {
                img: "blog/9.jpg",
                name: "Jennifer A. Camacho",
                phone: "770-527-7554"
            },
            {
                img: "avtar/3.jpg",
                name: "Ann J. Strickland",
                phone: "469-218-4678"
            }
        ]
    },
    {
        ids: "j-pills-IOT-developer",
        active: false,
        children: [
            {
                img: "avtar/11.jpg",
                name: "Jaclyn T. Duncan",
                phone: "413-618-9222"
            },
            {
                img: "avtar/16.jpg",
                name: "Christine H. Lin",
                phone: "909-219-0342"
            },
            {
                img: "avtar/3.jpg",
                name: "Ronnie S. Mountain",
                phone: "978-426-9732"
            },
            {
                img: "blog/12.png",
                name: "Louise A. Hilliard",
                phone: "502-262-5600"
            },
            {
                img: "blog/comment.jpg",
                name: "Kayla Hutt",
                phone: "312-456-8275"
            },
            {
                img: "blog/4.jpg",
                name: "Amber Cecil",
                phone: "802-662-2407"
            }
        ]
    }
]
export const material: UserData[] = [
    {
        ids: "topline-top-user",
        title: "User Details:",
        active: true,
        no: "#",
        name: "Name",
        country: "Country",
        contact: "Contact No",
        children: [
            {
                row: "1",
                name: "Neha",
                coutry: "India",
                cont: "5698741236"
            },
            {
                row: "2",
                name: "Jacklin",
                coutry: "Thailand",
                cont: "7800030320"
            }
        ]
    },
    {
        ids: "topline-top-description",
        title: "Description:",
        active: false,
        no: "Technology",
        name: "Interest",
        country: "Salary Expected ",
        children: [
            {
                name: "Web Designer",
                coutry: "HTML,CSS,JS,SCSS",
                cont: "45000"
            },
            {
                name: "UX Designer",
                coutry: "Figma,Photoshop,craft",
                cont: "20000"
            }
        ]
    },
    {
        ids: "topline-top-review",
        title: "Review:",
        active: false,
        no: "#",
        name: "Name",
        country: "Country",
        contact: "Rating ",
        children: [
            {
                row: "1",
                name: "Neha",
                coutry: "India",
                star: 5
            },
            {
                row: "3",
                name: "Irfan",
                coutry: "India",
                star: 3
            }
        ]
    }
]
export const defaults: item[] = [
    {
        title: "Logo Design"
    },
    {
        title: "Web Design & Development"
    },
    {
        title: "E-Commerce"
    },
    {
        title: "SEO"
    }
]
export const active: subs[] = [
    {
        title: "UI Kits",
        class: "active bg-warning-light"
    },
    {
        title: "Wow Animations"
    },
    {
        title: "Apex Charts"
    },
    {
        title: "Starter Kits"
    }
]
export const flushs: item[] = [
    {
        title: "PRODUCT"
    },
    {
        title: "PRODUCT DETAILS"
    },
    {
        title: "CART "
    },
    {
        title: "CHECKOUT"
    }
]
export const contextual: contextualclasses[] = [
    {
        class: "list-light-primary",
        color: "Primary",
        txt: "text-primary fw-bold",
        title: ".list-light-primary"
    },
    {
        class: "list-light-secondary",
        color: "Secondary",
        txt: "text-secondary fw-bold",
        title: ".list-light-secondary"
    },
    {
        class: "list-light-success",
        color: "Success",
        txt: "text-success fw-bold",
        title: ".list-light-success"
    },
    {
        class: "list-light-danger",
        color: "Danger",
        txt: "text-danger fw-bold",
        title: ".list-light-danger"
    },
    {
        class: "list-light-warning",
        color: "Warning",
        txt: "text-warning fw-bold",
        title: ".list-light-warning"
    },
    {
        class: "list-light-info",
        color: "Info",
        txt: "text-info fw-bold",
        title: ".list-light-info"
    }
]
export const horizontal: HorizontalSection[] = [
    {
        id: "1",
        children: [
            {
                title: "Product ",
                class: "border-left-primary"
            },
            {
                title: "Product details"
            },
            {
                title: "Pricing"
            },
            {
                title: "Payment details"
            },
            {
                title: "Checkout"
            },
            {
                title: "Mega options "
            }
        ]
    },
    {
        id: "2",
        children: [
            {
                title: "Basic table",
                class: "border-left-secondary"
            },
            {
                title: "Sizing table"
            },
            {
                title: "Border table"
            },
            {
                title: "Basic inputs"
            },
            {
                title: "Form validations"
            }
        ]
    },
    {
        id: "3",
        children: [
            {
                title: "Flat style",
                class: "border-left-warning"
            },
            {
                title: "Edge style"
            },
            {
                title: "Button group"
            },
            {
                title: "Rating"
            },
            {
                title: "Crypto"
            }
        ]
    },
    {
        id: "4",
        children: [
            {
                title: "Blog",
                class: "border-left-success"
            },
            {
                title: "Blog details"
            },
            {
                title: "Blog single"
            },
            {
                title: "Order history"
            }
        ]
    },
    {
        id: "5",
        children: [
            {
                title: "Gallery grid",
                class: "border-left-info"
            },
            {
                title: "Gallery desc"
            },
            {
                title: "Masonry Desc"
            }
        ]
    }
]
export const customs: CustomSection[] = [
    {
        class: "active bg-primary",
        name: "Molly Boake",
        email: "MollyBoake@rhyta.com",
        img: "user/1.jpg",
        day: "5 days ago",
        followClass: "",
        titleClass: "txt-light",
        desc: "Next step is to choose a tone of voice for your content type. From casual to convincing, pick one from 20+ tones in the dropdown.Why did we say “snag eyeballs” instead of “get attention?” Why do we say “brick-and-mortar words” instead of “concrete words?” Because, in your email subject lines, it’s better to use words that people can picture.",
        follow: "20K Followers"
    },
    {
        class: "list-hover-primary",
        name: "Gabrielle Fahey",
        email: "GabrielleFahey@dayrep.com",
        img: "user/3.png",
        day: "10 days ago",
        titleClass: "",
        followClass: "text-muted",
        desc: "Your aim with this blog is to advertise yourself and your services in blog design. That means it's vital to create content about just that: blog design. Anything else on your page may act as a distraction to your potential customers, and you don't want that!",
        follow: "100 Followers"
    },
    {
        class: "list-hover-primary",
        name: "Lucinda Moseley",
        email: "LucindaMoseley@teleworm.us",
        img: "user/2.jpg",
        day: "3 days ago",
        titleClass: "",
        followClass: "text-muted",
        desc: "People who are looking to hire a web designer may not know what to look out for. This will give you a chance to prove your trustworthiness by providing potential customers with advice and will let you sell your services by highlighting their best qualities.",
        follow: "23M Followers"
    }
]
export const checkbox: CheckboxSection[] = [
    {
        class: "checkbox-primary active",
        ids: "firstCheckbox",
        title: "Auto Start",
        text: "text-primary"
    },
    {
        class: "checkbox-secondary",
        ids: "secondCheckbox",
        title: "Auto Update",
        text: "text-secondary"
    },
    {
        class: "checkbox-info",
        ids: "thirdCheckbox",
        title: "Don't check auth key",
        text: "text-info"
    },
    {
        class: "checkbox-warning",
        ids: "fourCheckbox",
        title: "Success all",
        text: "text-warning"
    }
]
export const radio: RadioSection[] = [
    {
        class: "active checkbox-danger",
        ids: "firstRadio",
        title: "Meditations",
        checked: true
    },
    {
        class: "checkbox-primary",
        ids: "secondRadio",
        title: "Read a book",
        checked: false
    },
    {
        class: "checkbox-success",
        ids: "thirdRadio",
        title: "Learn to code",
        checked: false
    },
    {
        class: "checkbox-info",
        ids: "FourRadio",
        title: "Drink more water",
        checked: false
    }
]
export const numbers: subs[] = [
    {
        class: "text-primary",
        title: "known for delivery of useful and usable solutions"
    },
    {
        class: "text-danger",
        title: "Solve your problem with us"
    },
    {
        class: "text-success",
        title: "Certified Professionals"
    },
    {
        class: "text-warning",
        title: "Growth-Driven"
    }
]
export const badge: badgess[] = [
    {
        title: "Stella Nowland",
        class: "bg-warning",
        badge: "Freelance"
    },
    {
        title: "Lola Stanford",
        class: "bg-danger text-white",
        badge: "Issue"
    },
    {
        title: "Caitlin Coungeau",
        class: "bg-primary text-white",
        badge: "Social"
    },
    {
        title: "Graciela W. McClaran",
        class: "bg-danger text-white",
        badge: "Issue"
    }
]
export const disabld: DisabledSection[] = [
    {
        img: "user/1.jpg",
        class: "list-hover-primary active",
        title: "Teresa J. Mosteller"
    },
    {
        img: "user/3.png",
        class: "list-hover-primary",
        title: "Gloria D. Acheson"
    },
    {
        img: "user/2.jpg",
        class: "disabled",
        title: "Sharon C. Obrien"
    },
    {
        img: "user/5.jpg",
        class: "disabled",
        title: "Bryan A. Owens"
    }
]
export const scrollable: ScrollableSection[] = [
    {
        img: "user/9.jpg",
        class: "active list-hover-primary",
        email: "MollyBoake@rhyta.com",
        title: "Molly Boake",
        day: "5 days ago"
    },
    {
        img: "user/10.jpg",
        class: "bg-light-hover-primary",
        email: "GabrielleFahey@dayrep.com",
        title: "Gabrielle Fahey",
        day: "10 days ago"
    },
    {
        img: "user/2.jpg",
        class: "bg-light-hover-primary",
        email: "LucindaMoseley@teleworm.us",
        title: "Lucinda Moseley",
        day: "3 days ago"
    },
    {
        img: "user/12.png",
        class: "bg-light-hover-primary",
        email: "FrancisKHenriques@teleworm.us",
        title: "Francis K. Henriques",
        day: "2 days ago"
    },
    {
        img: "user/14.png",
        class: "bg-light-hover-primary",
        email: "JoseASeay@rhyta.com",
        title: "Jose A. Seay",
        day: "15 days ago"
    },
    {
        img: "user/3.jpg",
        class: "bg-light-hover-primary",
        email: "PhilFCunningham@dayrep.com",
        title: "Phil F. Cunningham",
        day: "6 days ago"
    },
    {
        img: "user/7.jpg",
        class: "bg-light-hover-primary",
        email: "RichardEJohnson@teleworm.us",
        title: "Richard E. Johnson",
        day: "20 days ago"
    },
    {
        img: "user/2.png",
        class: "bg-light-hover-primary",
        email: "LawrenceLNash@jourrapide.com",
        title: "Lawrence L. Nash",
        day: "8 days ago"
    }
]