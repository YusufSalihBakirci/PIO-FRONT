interface lists {
    title: string,
    date: string,
    month: string,
    hits: string,
    img: string,
    desc: string
}
interface detail {
    imge: string,
    title: string,
    desc: string,
    date: string,
    hits: string
}
interface singl {
    imge: string,
    name: string,
    dep: string,
    hits: string,
    comments: string,
    desc: string
}
export const list: lists[] = [
    {
        title: "Perspiciatis unde omnis iste natus",
        date: "02",
        month: "March 2024",
        hits: "0",
        img: "blog/blog-2.jpg",
        desc: "Discover the hidden gems of our enchanting visiting area, where nature's beauty meets captivating history."
    },
    {
        title: "Perspiciatis unde omnis iste natus",
        date: "03",
        month: "January 2024",
        hits: "02",
        img: "blog/blog-3.jpg",
        desc: "Embrace the charm and adventure that awaits you in our vibrant visiting area, a destination like no other"
    }
]
export const details: detail[] = [
    {
        imge: "blog/blog-5.jpg",
        title: "Black color is important.",
        desc: " Unraveling the Elegance of Modern Fashion Trends",
        date: "20 April 2024",
        hits: "0"
    },
    {
        imge: "blog/blog-6.jpg",
        title: "Men's Jacket",
        desc: "Navigating the Digital Frontier: Insights into the World of Tech",
        date: "19 April 2024",
        hits: "0"
    },
    {
        imge: "blog/blog-5.jpg",
        title: "Black color is important.",
        desc: "Wanderlust Chronicles: Exploring the World, One Adventure at a Time",
        date: "15 April 2024",
        hits: "0"
    },
    {
        imge: "blog/blog-6.jpg",
        title: "Men's Jacket",
        desc: "Stronger Every Day: Empowering Your Body and Mind for Success",
        date: "11 April 2024",
        hits: "0"
    }
]
export const single: singl[] = [
    {
        imge: "blog/4.jpg",
        name: "Jhon Quil",
        dep: "Developer",
        hits: "06",
        comments: "158",
        desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        imge: "blog/12.png",
        name: "Mark Ateer",
        dep: "Designer",
        hits: "08",
        comments: "418",
        desc: "From the east coast to the west, each river has its own beauty and character. Each river has its own story. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        imge: "blog/14.png",
        name: "Greg Arias",
        dep: "Developer",
        hits: "02",
        comments: "428",
        desc: "Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    }
]