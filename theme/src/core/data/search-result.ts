export interface TabItem {
    href: string;
    active?: string;
    icon: string;
    title: string;
    id: string;
}
export interface DataItem {
    id: number;
    title: string;
    desc: string;
    rating?: number;
    link: string;
}
export interface VideoItem {
    title: string;
    val: boolean
    children: {
        youtube: string;
        link: string;
        title: string;
    }[];
}
export const tab: TabItem[] = [
    {
        href: "#all-links",
        active: "active",
        icon: "icon-target",
        title: "All",
        id: "all-link"
    },
    {
        href: "#image-links",
        icon: "icon-image",
        title: "Images",
        id: "image-link"
    },
    {
        href: "#video-links",
        icon: "icon-video-clapper",
        title: "Videos",
        id: "video-link"
    },
    {
        href: "#audios-links",
        icon: "icon-map-alt",
        title: "Audios",
        id: "audios-link"
    },

]
export const data: DataItem[] = [
    {
        id: 1,
        title: "PixelStrap - Portfolio | ThemeForest",
        desc: "2020's Best Selling Creative WP Themes. The #1 Source of Premium WP Themes! ThemeForest 45,000+ WP Themes & Website Templates From $2. Check it Out!",
        link: "https://themeforest.net/user/pixelstrap/portfolio/"
    },
    {
        id: 2,
        title: "PixelStrap - Portfolio | ThemeForest",
        desc: "The #1 marketplace for premium website templates, including themes for WordPress, Magento, Drupal, Joomla, and more. Create a website, fast.",
        link: "PixelStrap - Portfolio | ThemeForestthemeforest.net › user ›"
    },
    {
        id: 3,
        title: "Morbi feugiat mauris vel semper fringilla.",
        desc: "Yuri introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.",
        rating: 3,
        link: "https://themeforest.net/user/pixelstrap/portfolio"
    },
    {
        id: 4,
        title: "Morbi feugiat mauris vel semper fringilla.",
        desc: "Yuri introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.",
        rating: 3,
        link: "https://themeforest.net/user/pixelstrap/portfolio"
    }
]
export const data1: DataItem[] = [
    {
        id: 1,
        title: "Pixelstrap Website Templates from ThemeForest  ",
        desc: "Get 59 pixelstrap website templates on ThemeForest. Buy pixelstrap website templates from $7. All created by our Global Community of independent Web ...",
        rating: 3,
        link: "https://themeforest.net/user/pixelstrap/portfolio"
    },
    {
        id: 2,
        title: "Morbi feugiat mauris vel semper fringilla.",
        desc: "Yuri introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.",
        rating: 3,
        link: "https://themeforest.net/user/pixelstrap/portfolio"
    },
]
export const video: VideoItem[] = [
    {
        title: "About 6,000 results (0.60 seconds)",
        val: false,
        children: [
            {
                youtube: "https://www.youtube.com/embed/CJnfAXlBRTE",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Utilize HTML, CSS, JavaScript, and UX design to create a to-do list."
            },
            {
                youtube: "https://www.youtube.com/embed/wpmHZspl4EM",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Tips for gaining proficiency in UI/UX design."
            },
            {
                youtube: "https://www.youtube.com/embed/-L4gEk7cOfk",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Tips for gaining proficiency in CSS."
            }
        ]
    },
    {
        title: "About 6,000 results (0.60 seconds)",
        val: true,
        children: [
            {
                youtube: "https://www.youtube.com/embed/CJnfAXlBRTE",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Utilize HTML, CSS, JavaScript, and UX design to create a to-do list."
            },
            {
                youtube: "https://www.youtube.com/embed/-L4gEk7cOfk",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Tips for gaining proficiency in UI/UX design."
            },
            {
                youtube: "https://www.youtube.com/embed/wpmHZspl4EM",
                link: "https://themeforest.net/user/pixelstrap/portfolio",
                title: "Tips for gaining proficiency in CSS."
            }
        ]
    }

]