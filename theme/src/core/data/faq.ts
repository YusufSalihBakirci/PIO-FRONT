interface item {
    col: string,
    title: string,
    desc: string,
    icon: string
}
interface simpleaccordion {
    hederid?: string;
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
interface late {
    icon: string,
    title: string,
    time: string
}
interface featured {
    imge: string,
    title: string,
    desc: string,
    date: string,
    star: number,

}
interface articles {
    title: string,
    icon: string,
    desc: string
}
export const wid: item[] = [
    {
        col: "col-xl-4 box-col-6",
        title: "Articles",
        desc: "The usefulness and usability of a website, not its aesthetic design, define its success or failure. User-centric design has become the norm for effective and financially motivated web design since the visitor to the website is the only one who clicks the mouse and thus determines everything. After all, a feature might as well not exist if people can't utilise it.",
        icon: "file-text"
    },
    {
        col: "col-xl-4 col-sm-6 box-col-6",
        title: "Knowledgebase",
        desc: "A knowledge base acts as a central repository for knowledge, data, and information pertaining to a certain subject or thing. Its main goal is to make it easier for consumers to obtain information quickly and conveniently so they can solve problems, find solutions, and make wise decisions.",
        icon: "book-open"
    },
    {
        col: "col-xl-4 col-sm-6 box-col-12",
        title: "Support",
        desc: "Email, chat, forums, and a social media interface (and monitoring) are all part of real-time online assistance, which helps in reacting to public complaints and comments. Taking care of returns or repairs may fall under this.",
        icon: "aperture"
    }
]
export const quik: simpleaccordion[] = [
    {
        id: "#collapseicon",
        ids: "collapseicon",
        title: "Integrating WordPress with Your Website?",
        isActive: false,
        childern: [
            {
                title: "A excellent method to add dynamic content, make site management simple, and access the extensive ecosystem of WordPress plugins and themes is by integrating WordPress with your website."
            }
        ]
    },
    {
        id: "#collapseicon2",
        ids: "collapseicon2",
        title: "How do you set an image as the background of a web page?",
        isActive: false,
        childern: [
            {
                title: "Background photos give a website an aesthetically pleasing and engaging backdrop. There are several applications for these photos."
            }
        ]
    },
    {
        id: "#collapseicon3",
        ids: "collapseicon3",
        title: "What is W3C and how does it affect web design?",
        isActive: false,
        childern: [
            {
                title: "The World Wide online Consortium (W3C), a global organisation, supports online development. The public, organisation members, a full-time staff, and invited international experts work together to develop Web Standards."
            }
        ]
    },
    {
        id: "#collapseicon4",
        ids: "collapseicon4",
        title: "Describe CSS file and its benefits.",
        isActive: false,
        childern: [
            {
                title: "Cascading Style Sheets, or CSS, is a language for creating style sheets. In essence, it regulates and supervises how information should be presented in speech, writing, visual media, and other forms of media. You may modify the text's colour, font, spacing between paragraphs, size, and order with CSS."
            }
        ]
    },
]
export const intell: simpleaccordion[] = [
    {
        id: "#collapseicon5",
        ids: "collapseicon5",
        title: " How to ticket work as web designer?",
        isActive: false,
        childern: [
            {
                title: "Create an account on the chosen ticketing platform and set up your workspace. Customize it according to your projects and team, if applicable. Set permissions and access levels for team members and clients, if necessary."
            }
        ]
    },
    {
        id: "#collapseicon6",
        ids: "collapseicon6",
        title: "What are WordPress Plugins?",
        isActive: false,
        childern: [
            {
                title: "Individual pieces of software called WordPress plugins let you extend the functionality of your website. You may install each of these pieces of software on your WordPress website."
            }
        ]
    },
    {
        id: "#collapseicon7",
        ids: "collapseicon7",
        title: "How many tables are there by default in WordPress?",
        isActive: false,
        childern: [
            {
                title: "Tables are the equivalent of shelves in WordPress databases. WordPress websites come with 12 tables by default. Each table can only contain specific types of data. "
            }
        ]
    }
]
export const selling: simpleaccordion[] = [
    {
        id: "#collapseicon8",
        ids: "collapseicon8",
        title: "What exactly does a talented UX designer do?",
        isActive: false,
        childern: [
            {
                title: "While there is no right or incorrect response, a professional designer should be well-versed in UX and be able to provide a complete end-to-end UX design process."
            }
        ]
    },
    {
        id: "#collapseicon9",
        ids: "collapseicon9",
        title: "Can you explain why widgets don't appear in the sidebar?",
        isActive: false,
        childern: [
            {
                title: "Users must first make sure that the themes they are using support the widget before adding it. It's conceivable that the issue is brought on by a lack of functionality."
            }
        ]
    },
    {
        id: "#collapseicon10",
        ids: "collapseicon10",
        title: "Sell me on the benefits of UX design investment?",
        isActive: false,
        childern: [
            {
                title: "In addition to improving user experience, UX-driven product design is a wise commercial decision. "
            }
        ]
    },
    {
        id: "#collapseicon11",
        ids: "collapseicon11",
        title: "What is source code?",
        isActive: false,
        childern: [
            {
                title: "The core of a computer programme is called the source code, which is produced by a programmer and frequently takes the form of functions, descriptions, definitions, calls, procedures, and other operational declarations."
            }
        ]
    },
]
export const users: simpleaccordion[] = [
    {
        id: "#collapseicon12",
        ids: "collapseicon12",
        title: "In Java, how do you reverse a string?",
        isActive: false,
        childern: [
            {
                title: "The string may be turned into a character array, which you can iterate through from beginning to finish. The characters can be added to a string builder to create the reversed string."
            }
        ]
    },
    {
        id: "#collapseicon13",
        ids: "collapseicon13",
        title: "Can you help me out by writing a Java programme for the Fibonacci series?",
        isActive: false,
        childern: [
            {
                title: "This particular activity, which is the question, may demonstrate your proficiency with using Java code to carry out a task."
            }
        ]
    },
    {
        id: "#collapseicon14",
        ids: "collapseicon14",
        title: " To reverse a string without utilising the built-in string function.",
        isActive: false,
        childern: [
            {
                title: "Another unique Java coding activity that the interviewer could use to gauge your Java expertise."
            }
        ]
    },
    {
        id: "#collapseicon15",
        ids: "collapseicon15",
        title: "Describe the information architecture.",
        isActive: false,
        childern: [
            {
                title: "The planning, structuring, and labelling of content in a thorough, logical, and long-lasting manner is referred to as information architecture (IA). It allows for the obvious and intelligible organising and classification of material, enabling visitors to quickly discover what they're looking for."
            }
        ]
    },
    {
        id: "#collapseicon16",
        ids: "collapseicon16",
        title: "Describe doctype in details",
        isActive: false,
        childern: [
            {
                title: "A declaration of the document type, known as DOCTYPE, is required at the start of every HTML or XHTML document; this declaration is frequently the first line of code."
            }
        ]
    },
]
export const latest: late[] = [
    {
        icon: "rotate-cw",
        title: "<a href='#'>David Linner </a>requested money back for a double debit card charge",
        time: "10 minutes ago"
    },
    {
        icon: "dollar-sign",
        title: "All sellers have received monthly payouts",
        time: "2 hours ago"
    },
    {
        icon: "link",
        title: "User Christopher <a href='#'>Wallace</a> is on hold and awaiting for staff reply",
        time: "45 minutes ago"
    },
    {
        icon: "check",
        title: "Ticket #43683 has been closed by <a href='#'>Victoria Wilson</a>",
        time: "Dec 7, 11:48"
    }
]
export const featured: featured[] = [
    {
        imge: "faq/1.jpg",
        title: "Web Design",
        desc: "Web Design Trends: Provide an overview of current web design trends, such as minimalist design, microinteractions, dark mode, and immersive experiences.",
        date: "Dec 15, 2024",
        star: 5,

    },
    {
        imge: "faq/2.jpg",
        title: "Web Development",
        desc: "Web development is a vast field, and there are many other aspects and technologies involved. It's important to continuously learn and keep up with the latest trends and technologies to stay.",
        date: "Mar 02, 2024",
        star: 4,

    },
    {
        imge: "faq/3.jpg",
        title: "UI Design",
        desc: "UI design is an iterative process that involves research, ideation, prototyping, testing, and refinement. It requires a blend of creativity, user empathy, and understanding of design.",
        date: "Feb 04, 2024",
        star: 5,

    },
    {
        imge: "faq/4.jpg",
        title: "UX Design",
        desc: "UX design is a holistic approach that focuses on understanding and meeting user needs, ultimately aiming to create products that are valuable, usable, and delightful for the users.",
        date: "Jan 18, 2024",
        star: 4,

    }
]
export const articles: articles[] = [
    {
        title: "Using Video",
        icon: "codepen",
        desc: "The web is a very big place, and if you are the typical internet base user."
    },
    {
        title: "Vel illum qu",
        icon: "codepen",
        desc: "A book giving information on many subjects or on many aspects of one subject."
    },
    {
        title: "Cum sociis natoqu",
        icon: "codepen",
        desc: "Simple demos of frequently asked questions about using the information resources"
    }
]
export const articles1: articles[] = [
    {
        title: "Donec pede justo",
        icon: "file-text",
        desc: " Website is the process of ensuring that the pages on the website conform."
    },
    {
        title: "Nam quam nunc",
        icon: "file-text",
        desc: "Tailwind is so low-level, it never encourages you to design the same site twice."
    },
    {
        title: "Using Video",
        icon: "file-text",
        desc: "A book giving information on many subjects or on many aspects of one subject."
    }
]
export const articles2: articles[] = [
    {
        title: "Vel illum qu",
        icon: "youtube",
        desc: "Simple demos of frequently asked questions about using the information resources"
    },
    {
        title: "Cum sociis natoqu",
        icon: "youtube",
        desc: "Website is the process of ensuring that the pages on the website conform."
    },
    {
        title: "Donec pede justo",
        icon: "youtube",
        desc: "Web is so high-level, it never encourages you to design the same site twice"
    }
]