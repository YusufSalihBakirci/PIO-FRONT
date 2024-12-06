interface item {
    col: string,
    title: string,
    desc: string,
    icon: string
}
interface categorys {
    articles: string,
    articles1: string,
    articles2: string,
    articles3: string,
    articles4: string,
    see: string,
    badge: boolean,
    badge1?: string,
    badge2?: string,
    badges?: string,
    badge3?: string
}
interface featureds {
    imge: string,
    title: string,
    desc: string,
    date: string,
    star: number
}
interface articles {
    title: string,
    icon: string,
    desc: string
}
export const wid: item[] = [
    {
        col: "col-xl-4 col-sm-6",
        title: "Articles",
        desc: "The usefulness and usability of a website, not its aesthetic design, define its success or failure. User-centric design has become the norm for effective and financially motivated web design since the visitor to the website is the only one who clicks the mouse and thus determines everything. After all, a feature might as well not exist if people can't utilise it.",
        icon: "book-open"
    },
    {
        col: "col-xl-4 col-sm-6",
        title: "Knowledgebase",
        desc: "A knowledge base acts as a central repository for knowledge, data, and information pertaining to a certain subject or thing. Its main goal is to make it easier for consumers to obtain information quickly and conveniently so they can solve problems, find solutions, and make wise decisions.",
        icon: "aperture"
    },
    {
        col: "col-xl-4",
        title: "Support",
        desc: "Email, chat, forums, and a social media interface (and monitoring) are all part of real-time online assistance, which helps in reacting to public complaints and comments. Taking care of returns or repairs may fall under this.",
        icon: "file-text"
    }
]
export const category: categorys[] = [
    {
        articles: "Quick Questions are answered",
        articles1: "Lorem Ipsum is simply dummy text of the printing",
        articles2: "Lorem Ipsum has been the industry's standard dummy",
        articles3: "When an unknown printer took a galley",
        articles4: "But also the leap into electronic typesetting,",
        see: "40",
        badge: true,
        badges: "New"
    },
    {
        articles: " Integrating WordPress with Your Website",
        articles1: "It was popularised in the 1960s with the release",
        articles2: "Etraset sheets containing Lorem Ipsum passages",
        articles3: "Desktop publishing software like Aldus PageMaker",
        articles4: "Making this the first true generator on the Internet.",
        see: "90",
        badge: true,
        badge1: "Review",
        badges: "Articles"
    },
    {
        articles: "WordPress Site Maintenance",
        articles1: "Lorem, ipsum dolor sit amet consectetur adipisicing",
        articles2: "Normal distribution of letters, as opposed to using",
        articles3: "Lorem Ipsum, you need to be sure there isn't anything",
        articles4: "Repetition, injected humour, or non words etc",
        see: "40",
        badge: true,
        badge2: "Closed"
    },
    {
        articles: "Meta Tags in WordPress",
        articles1: "Nemo enim ipsam voluptatem quia voluptas sit",
        articles2: "Ipsum quia dolor sit amet, consectetur",
        articles3: "Sed quia non numquam eius modi tempora incidunt",
        articles4: "Lorem eum fugiat quo voluptas nulla pariatu",
        see: "90",
        badge: true,
        badge1: "Popular"
    },
    {
        articles: "WordPress in Your Language",
        articles1: "Desktop publishing software like Aldus PageMaker",
        articles2: "Etraset sheets containing Lorem Ipsum passages",
        articles3: "It was popularised in the 1960s with the release",
        articles4: "Making this the first true generator on the Internet",
        see: "50",
        badge: true,
        badge3: "Closed"
    },
    {
        articles: "Know Your Sources",
        articles1: "The point of using Lorem Ipsum",
        articles2: "It has a more-or-less normal distribution of letters",
        articles3: "Et harum quidem rerum facilis est et expedita",
        articles4: "Nam libero tempore, cum soluta nobis est eligendi",
        see: "26",
        badge: true,
        badges: "Article"
    },
    {
        articles: "Validating a Website",
        articles1: "When our power of choice is untrammelled        ",
        articles2: "It will frequently occur that pleasures",
        articles3: "who fail in their duty through weakness        ",
        articles4: "At vero eos et accusamus et iusto",
        see: "10",
        badge: true,
        badge1: "Review",
        badges: "Closed"
    },
    {
        articles: "Quick Questions are answered",
        articles1: "Quis autem vel eum iure reprehenderit",
        articles2: "Ducimus blanditiis praesentium voluptatum        ",
        articles3: "Omnis voluptas assumenda est",
        articles4: "Produces no resultant pleasure",
        see: "21",
        badge: true,
        badge2: "Popular",
        badges: "Review"
    },
    {
        articles: "Integrating WordPress with Your Website",
        articles1: "Lorem Ipsum passage, and going through",
        articles2: "The first line of Lorem Ipsum, Lorem ipsum",
        articles3: "Thus comes from a line in section",
        articles4: "First true generator on the Internet",
        see: "34",
        badge: true,
        badge3: "On hold"
    }
]
export const featured: featureds[] = [
    {
        imge: "faq/1.jpg",
        title: "Web Design",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        date: "Dec 15, 2024",
        star: 2
    },
    {
        imge: "faq/2.jpg",
        title: "Web Development",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        date: "Jan 08, 2024",
        star: 3
    },
    {
        imge: "faq/3.jpg",
        title: "UI Design",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        date: "Feb 15, 2024",
        star: 1
    },

    {
        imge: "faq/3.jpg",
        title: "UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        date: "Sept 10, 2024",
        star: 2
    }
]
export const articles: articles[] = [
    {
        title: "Using Video",
        icon: "codepen",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Vel illum qu",
        icon: "codepen",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Cum sociis natoqu",
        icon: "codepen",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    }
]
export const articles1: articles[] = [
    {
        title: "Donec pede justo",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Nam quam nunc",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Using Video ",
        icon: "file-text",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    }
]
export const articles2: articles[] = [
    {
        title: "Vel illum qu",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Cum sociis natoqu",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    },
    {
        title: "Donec pede justo",
        icon: "youtube",
        desc: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
    }
]