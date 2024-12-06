import { series7, series8, chartOptions7, chartOptions8, series10, series11, series20, chartOptions20, series19, chartOptions19, series12, chartOptions10, chartOptions11, chartOptions12, chartOptions15, chartOptions16 } from "@/core/data/dashboards-chart"
import { series, chartOptions, series2, chartOptions2, series3, chartOptions3 } from "@/core/data/widgets-chart"
interface data {
    img: string,
    class: string
}
export interface JobData {
    icon: string;
    numbar: string;
    title: string;
    class: string
}

export interface JobTable {
    time: string;
    job: string;
    company: string;
    img: string;
    name: string;
}
export interface HistoryItem {
    img: string;
    name: string;
    invoice: string;
    credit: string;
    date: string;
    time: string;
    status: string;
    class: string;
    sub: string;
    textclass: string
}
export interface LogItem {
    class?: string;
    img: string;
    title: string;
    sub: string;
    time: string;
}
export interface ActivityItem {
    class: string;
    svgclass: string;
    icon: string;
    title: string;
    sub: string;
    time: string;
}
export interface TopItem {
    img: string,
    name: string,
    icon: string,
    sub: string,
    class: string,
    status: string,
    price: string
}
export interface InvoiceItem {
    checked: boolean;
    name: string;
    date: string;
    payment: string;
    id: string;
    amount: string;
    class: string;
    status: string;
    for: string;
}
export interface userItem {
    img: string,
    name: string,
    status: string,
    contery: string,
    lightclass: string,
    class: string,
    popular: string
}
export interface selesItem {
    icon: string,
    name: string,
    sub: string,
    price: string,
    sales: string,
    class: string,
    stroke: string
}
export interface bestSellor {
    img: string,
    name: string,
    year: string,
    date: string,
    product: string,
    country: string,
    total: string,
    status: string,
    class: string
}
interface SwiperChild {
    value: number,
    lightclass: string;
    badgeclass: string;
    badge: string;
    img: string;
    textclass: string;
    sale: string;
    product: string;
    price: string;
    del: string;
}

interface SwiperItem {
    id: number;
    colclass: string;
    children: SwiperChild[];
}
interface TimelineChild {
    img: string;
}
interface TimelineItem {
    dotclass: string;
    date: string;
    title: string;
    desc: string;
    circledot: string;
    imgs: boolean;
    activeline: boolean
    children?: TimelineChild[];
}
export interface TargetItem {
    class: string,
    title: string,
    status: string,
    priceclass?: string,
    price: string
}
export interface item {
    class: string,
    img: string
}
export interface OrderItem {
    img: string,
    name: string,
    year: string,
    product: string,
    amount: string,
    vendor: string,
    status: string,
    bgclass: string,
    class: string,
    rating: string,
    vote: string,
}
interface UpcomingChild {
    time: string;
    class: string;
    title: string;
    desc: string;
    dotclass: string;
}


interface UpcomingItem {
    date: string;
    children: UpcomingChild[];
}
interface noticeItem {
    img: string,
    title: string,
    desc: string
}
interface detailsItem {
    img: string,
    name: string,
    year: string,
    product: string,
    qty: string,
    attendance: string,
    class: string,
    rating: string
}
interface tableItems {
    img: string,
    name: string,
    sub: string,
    class: string,
    time: string,
    days: string
}
interface todoList {
    class: string,
    for: string,
    checked: boolean,
    title: string,
    desc: string,
    time: string,
}
interface TableItem {
    img: string,
    name: string,
    year: string,
    subject: string,
    start: string,
    class: string,
    status: string,
    submit: string
}
interface widgetsItems {
    class: string,
    svg1: string,
    svg2: string,
    number: string,
    title: string,
    font: string,
    icon: string,
    total: string
}
interface smallItems {
    class: string,
    title: string,
    number: string,
    font: string,
    icon: string,
    total: string,
    svg: string
}
export const welcom: data[] = [
    {
        img: "dashboard-1/welcome-bg.png",
        class: "w-100"
    },
    {
        img: "dashboard-1/img-1.png",
        class: "position-absolute img-1"
    },
    {
        img: "dashboard-1/img-2.png",
        class: "position-absolute img-2"
    },
    {
        img: "dashboard-1/img-3.png",
        class: "position-absolute img-3"
    },
    {
        img: "dashboard-1/img-4.png",
        class: "position-absolute img-4"
    },
    {
        img: "dashboard-1/img-5.png",
        class: "position-absolute img-5"
    }
]
export const jobdata: JobData[] = [
    {
        icon: "job-bag",
        numbar: "40",
        title: "Total Jobs",
        class: "bg-light-primary"
    },
    {
        icon: "employees",
        numbar: "30",
        title: "Employees",
        class: "bg-light-secondary"
    },
    {
        icon: "hours-work",
        numbar: "40",
        title: "Hours of work",
        class: "bg-light-warning"
    }
]
export const jobtable: JobTable[] = [
    {
        time: "10:AM",
        job: "Maintenace",
        company: "Apple Inc.",
        img: "dashboard-1/user/1.png",
        name: "Michele Ronaldo"
    },
    {
        time: "07:AM",
        job: "General",
        company: "Hewlett packard",
        img: "dashboard-1/user/2.png",
        name: "Naomi watson"
    },
    {
        time: "03:AM",
        job: "Cleaning",
        company: "Microsoft",
        img: "dashboard-1/user/3.png",
        name: "Dann Petty"
    }
]
export const history: HistoryItem[] = [
    {
        img: "dashboard-1/icon/1.png",
        name: "Samsung TV",
        invoice: "#px0101",
        credit: "+ $3460",
        textclass: "text-success",
        date: "Jan 25",
        time: "08:35:65",
        status: "Completed",
        class: "bg-light-success border-light-success text-success",
        sub: "Item Sold"
    },
    {
        img: "dashboard-1/icon/2.png",
        name: "Spring Bed",
        invoice: " #rf304f",
        credit: "- $910",
        textclass: "text-danger",
        date: "Feb 20",
        time: "12:35:00",
        status: "Completed",
        class: "bg-light-success border-light-success text-success",
        sub: "Bought item"
    },
    {
        img: "dashboard-1/icon/3.png",
        name: "Long Dress",
        invoice: "#dnj480",
        credit: "+ $4380",
        textclass: "text-success",
        date: "Oct 25",
        time: "04:39:08",
        status: "Pending",
        class: "bg-light-warning border-light-warning text-warning",
        sub: "Bought item"
    },
    {
        img: "dashboard-1/icon/4.png",
        name: "Phillip Lightbulb",
        invoice: " #g189d0",
        credit: "+ $246",
        textclass: "text-success",
        date: "Dec 25",
        time: "08:35:65",
        status: "Canceled",
        class: "bg-light-danger border-light-danger text-danger",
        sub: "Item Sold"
    },
    {
        img: "dashboard-1/icon/5.png",
        name: "Sofa Hauga",
        invoice: "#31d8fs",
        credit: "- $220",
        textclass: "text-danger",
        date: "Jan 25",
        time: "10:20:87",
        status: "Completed",
        class: " bg-light-success border-light-success text-success",
        sub: "Item Sold"
    },
    {
        img: "dashboard-1/icon/6.png",
        name: "Apple iMac 19”",
        invoice: "#g5384h",
        credit: "+ $983",
        textclass: "text-success",
        date: "Feb 05",
        time: "10:49:50",
        status: "Completed",
        class: "bg-light-success border-light-success text-success",
        sub: "Item Sold"
    }
]
export const log: LogItem[] = [
    {
        class: "bg-success",
        img: "dashboard-1/icon/checked.png",
        title: "Route P204_salesfores created",
        sub: "Andre Sluczka",
        time: "2 hours"
    },
    {
        class: "bg-warning",
        img: "dashboard-1/icon/danger.png",
        title: "R304_salesforece undeployed",
        sub: "Fabian Beliza",
        time: "4 hours"
    },
    {
        class: "bg-danger",
        img: "dashboard-1/icon/cancel.png",
        title: "R304_salesforece failed...",
        sub: "Michael Ganatra",
        time: "10 Jun"
    },
    {
        class: "bg-success",
        img: "dashboard-1/icon/checked.png",
        title: "New environment DEV created",
        sub: "Wade Warren",
        time: "22 Jun"
    },
    {
        class: "bg-success",
        img: "dashboard-1/icon/checked.png",
        title: "Project salesforce created",
        sub: "Bessie Cooper",
        time: "10 july"
    },
    {
        class: "bg-warning",
        img: "dashboard-1/icon/danger.png",
        title: "G202_Salesforce undeployed",
        sub: "Andre Sluczka",
        time: "22 Jun"
    }
]
export const activity: ActivityItem[] = [
    {
        class: "bg-light-primary border-light-primary",
        svgclass: "stroke-primary",
        icon: "box",
        title: "Added new repository",
        sub: "Fabpot/symfony-docker",
        time: "2 hours"
    },
    {
        class: "bg-light-warning border-light-warning",
        svgclass: "stroke-warning",
        icon: "dolar",
        title: "Added new work",
        sub: "Private Contributions",
        time: "4 hours"
    },
    {
        class: "bg-light-danger border-light-danger",
        svgclass: "stroke-danger",
        icon: "round-right",
        title: "Review",
        sub: "Reviewed repositories",
        time: "10 Jun"
    },
    {
        class: "bg-light-primary border-light-primary",
        svgclass: "stroke-primary",
        icon: "pie-chart",
        title: "Upload documents",
        sub: "Development Startup",
        time: "22 Jun"
    },
    {
        class: "bg-light-warning border-light-warning",
        svgclass: "stroke-warning",
        icon: "globe",
        title: "Opened issue",
        sub: "Private Contributions",
        time: "10 july"
    },
    {
        class: "bg-light-danger border-light-danger",
        svgclass: "stroke-none",
        icon: "box-user",
        title: "Customer added by @jhon",
        sub: "Fabpot/symfony-docker",
        time: "26 Jun"
    },
    {
        class: "bg-light-primary border-light-primary",
        svgclass: "stroke-primary",
        icon: "work-bag",
        title: "Added new work",
        sub: "Contributions repositories",
        time: "22 Jun"
    }
]
export const user: TopItem[] = [
    {
        img: "dashboard-1/user/01.png",
        name: "Alice Goodwin",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        price: "$250.00"
    },
    {
        img: "dashboard-1/user/02.png",
        name: "Smith Lovell",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        price: "$682.00"
    },
    {
        img: "dashboard-1/user/03.png",
        name: "Jones Brooks",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-warning border-light-warning text-warning",
        status: "Pending",
        price: "$387.00"
    },
    {
        img: "dashboard-1/user/04.png",
        name: "Brown Acum",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-danger border-light-danger text-danger",
        status: "Canceled",
        price: "$355.00"
    },
    {
        img: "dashboard-1/user/05.png",
        name: "Evans Mayo",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        price: "$584.00"
    },
    {
        img: "dashboard-1/user/06.png",
        name: "Wilson Pipes",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        price: "$954.00"
    },
    {
        img: "dashboard-1/user/07.png",
        name: "Alice Pindar",
        icon: "map-icon",
        sub: "Texas",
        class: "bg-light-danger border-light-danger text-danger",
        status: "Canceled",
        price: "$756.00"
    }
]
export const update: LogItem[] = [
    {
        img: "dashboard-1/news-update/1.png",
        title: "Google project apply reviwe",
        sub: "Today’s news headlines,Breaking...",
        time: "2 hours"
    },
    {
        img: "dashboard-1/news-update/2.png",
        title: "Business logo create",
        sub: "check out the latest news from...",
        time: "4 hours"
    },
    {
        img: "dashboard-1/news-update/3.png",
        title: "Business project research",
        sub: "News in english: get all Breaking...",
        time: "6 hours"
    },
    {
        img: "dashboard-1/news-update/4.png",
        title: "Recruitment in it Department",
        sub: "Technology and indian business",
        time: "8 hours"
    },
    {
        img: "dashboard-1/news-update/5.png",
        title: "Business project research",
        sub: "Contributions private repositories",
        time: "1 hours"
    },
    {
        img: "dashboard-1/news-update/6.png",
        title: "Submit riverfront project",
        sub: "check out the latest news from...",
        time: "3 hours"
    },
    {
        img: "dashboard-1/news-update/7.png",
        title: "Added new work",
        sub: "Today’s news headlines,Breaking...",
        time: "5 hours"
    }
]
export const invoice: InvoiceItem[] = [
    {
        checked: false,
        name: "Comelune",
        date: "27 Nov",
        payment: "Private",
        id: "9605",
        amount: "$2,500",
        class: "bg-light-success border-light-success text-success",
        status: "Completed ",
        for: "solid1"
    },
    {
        checked: true,
        name: "Diagnos",
        date: "30 Nov",
        payment: "Bill Payment",
        id: "9548",
        amount: "$4,560",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        for: "solid2"
    },
    {
        checked: false,
        name: "Saturan",
        date: "27 Jun",
        payment: "Bill Payment",
        id: "2950",
        amount: "$4,876",
        class: "bg-light-warning border-light-warning text-warning",
        status: "Pending",
        for: "solid3"
    },
    {
        checked: true,
        name: "Williams",
        date: "16 Dec",
        payment: "Private",
        id: "1552",
        amount: "$3,876",
        class: "bg-light-danger border-light-danger text-danger",
        status: "Canceled",
        for: "solid4"
    },
    {
        checked: true,
        name: "Davies",
        date: "10 Nov",
        payment: "Bill Payment",
        id: "9567",
        amount: "$2,986",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        for: "solid5"
    },
    {
        checked: false,
        name: "Smith",
        date: "30 Nov",
        payment: "Private",
        id: "8992",
        amount: "$6,789",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        for: "solid6"
    }
]
export const userstatus: userItem[] = [
    {
        img: "dashboard-2/user/01.png",
        name: "John Deo",
        status: "(14+ Online)",
        contery: "USA",
        lightclass: "bg-light-success",
        class: "bg-success",
        popular: "60%"
    },
    {
        img: "dashboard-2/user/02.png",
        name: "Smith Lovell",
        status: "(250+ Online)",
        contery: "Angola",
        lightclass: "bg-light-warning",
        class: "bg-warning",
        popular: "40%"
    },
    {
        img: "dashboard-2/user/03.png",
        name: "Jones Brooks ",
        status: "(130+ Online)",
        contery: "America",
        lightclass: "bg-light-danger",
        class: "bg-danger",
        popular: " 80%"
    },
    {
        img: "dashboard-2/user/04.png",
        name: "Brown Acum ",
        status: "(214+ Online)",
        contery: "England",
        lightclass: "bg-success",
        class: "bg-success",
        popular: "60%"
    },
    {
        img: "dashboard-2/user/05.png",
        name: "Evans Mayo",
        status: "(250+ Online)",
        contery: "London",
        lightclass: "bg-light-warning",
        class: "bg-warning",
        popular: "60%"
    },
    {
        img: "dashboard-2/user/06.png",
        name: "Wilson Pipes",
        status: "(213+ Online)",
        contery: "Austealia",
        lightclass: "bg-light-warning",
        class: "bg-warning",
        popular: "60%"
    }
]
export const product: selesItem[] = [
    {
        icon: "headphone",
        name: "Headphones JBL JR 310 BT",
        sub: "Art.23879088",
        price: "$260.00",
        sales: "900 Sales",
        class: "bg-light-primary border-light-primary",
        stroke: "stroke-primary"
    },
    {
        icon: "samsung-mobile",
        name: "Samsung SM-G99B5",
        sub: "Art.72636892",
        price: "$340.00",
        sales: "20 Sales",
        class: "bg-light-warning border-light-warning",
        stroke: "stroke-warning"
    },
    {
        icon: "tv",
        name: "4K UHD TV Samsung",
        sub: "Art.63987987",
        price: "$750.00",
        sales: "300 Sales",
        class: "bg-light-danger border-light-danger",
        stroke: "stroke-danger"
    },
    {
        icon: "laptop",
        name: "16.5” Gaming Laptop 29...",
        sub: "Art.73497990",
        price: "$2370.00",
        sales: "300 Sales",
        class: "bg-light-primary border-light-primary",
        stroke: "stroke-primary"
    },
    {
        icon: "filmcamera",
        name: "Fujifilm x-s10 Kit 18-55mm",
        sub: "Art.37489799",
        price: "$2370.00",
        sales: "300 Sales",
        class: "bg-light-warning border-light-warning",
        stroke: "stroke-warning"
    },
    {
        icon: "smartphone",
        name: "Apple iphone 11 PRO MAX",
        sub: "Art.27389799",
        price: "$2370.00",
        sales: "300 Sales",
        class: "bg-light-danger border-light-danger",
        stroke: "stroke-dange"
    },
    {
        icon: "bulb",
        name: "Phillip Lightbulb",
        sub: "Art.74383789",
        price: "$2370.00",
        sales: "300 Sales",
        class: "bg-light-primary border-light-primary",
        stroke: "stroke-primary"
    }
]
export const stroke = [
    {
        serise: series7,
        options: chartOptions7,
        class: "badge-primary",
        total: "80%",
        price: "$3,76,793",
        value: "Our Sale Value",
        classes: "sales-chart"
    },
    {
        serise: series8,
        options: chartOptions8,
        class: "badge-secondary",
        total: "60%",
        price: "$4,26,876",
        value: "Today Stock Value",
        classes: "visitor-chart"
    }
]
export const strokeItem = [
    {
        serise: series7,
        options: chartOptions15,
        class: "badge-primary",
        total: "80%",
        price: "$3,76,793",
        value: "Our Sale Value",
        classes: "sales-chart"
    },
    {
        serise: series8,
        options: chartOptions16,
        class: "badge-secondary",
        total: "60%",
        price: "$4,26,876",
        value: "Today Stock Value",
        classes: "visitor-chart"
    }
]
export const seller: bestSellor[] = [
    {
        img: "dashboard-2/user/07.png",
        name: "Evans Mayo",
        year: "2019",
        date: "05 Aug",
        product: "Cap",
        country: "dashboard-2/flag/1.png",
        total: "$5,08,653",
        status: "Completed",
        class: "bg-light-success border-light-success text-success"
    },
    {
        img: "dashboard-2/user/08.png",
        name: "Smith Lovell",
        year: "2020",
        date: "21 March",
        product: "Branded Shoes",
        country: "dashboard-2/flag/2.png",
        total: "$37,2870",
        status: "Completed",
        class: "bg-light-success border-light-success text-success"
    },
    {
        img: "dashboard-2/user/09.png",
        name: "Jones Brooks",
        year: "2021",
        date: " 09 March",
        product: "Headphone",
        country: "dashboard-2/flag/3.png",
        total: "$3,12,233",
        status: "Pending",
        class: "bg-light-warning border-light-warning text-warning"
    },
    {
        img: "dashboard-2/user/10.png",
        name: "Brown Acum",
        year: "2021",
        date: "15 Aug",
        product: "Cell Phone",
        country: "dashboard-2/flag/4.png",
        total: "$7,48,123",
        status: "Canceled",
        class: "bg-light-danger border-light-danger text-danger"
    },
    {
        img: "dashboard-2/user/11.png",
        name: "Evans Mayo",
        year: "2022",
        date: "05 Feb",
        product: "Earings",
        country: "dashboard-2/flag/5.png",
        total: "$45,8,653",
        status: "Completed",
        class: "bg-light-success border-light-success text-success"
    },
    {
        img: "dashboard-2/user/12.png",
        name: "Wilson Pipes",
        year: "2022",
        date: "12 Jan",
        product: "Iphone 11",
        country: "dashboard-2/flag/1.png",
        total: "$5,08,653",
        status: "Completed",
        class: "bg-light-success border-light-success text-success"
    }
]
export const swipers: SwiperItem[] = [
    {
        id: 1,
        colclass: "col-xxl-3 col-xl-4 col-sm-6 box-col-6",
        children: [
            {
                value: 1,
                lightclass: "bg-light-primary",
                badgeclass: "badge-primary",
                badge: "Hot",
                img: "dashboard-2/1.png",
                textclass: "text-primary",
                sale: "Special Offer",
                product: "Smart Design Watch Multi Color",
                price: "$26.00",
                del: "&nbsp;$30.00",
            },
            {
                value: 1,
                lightclass: "bg-light-secondary",
                badgeclass: "badge-secondary",
                badge: "Hot",
                img: "dashboard-2/5.png",
                textclass: "text-secondary",
                sale: "Weekend Sale",
                product: "HeadPhone 3rd Generation",
                price: "$36.00",
                del: "&nbsp;$70.00",
            }
        ]
    },
    {
        id: 2,
        colclass: "col-xxl-3 col-xl-4 col-sm-6 box-col-6",
        children: [
            {
                value: 1,
                lightclass: "bg-light-secondary",
                badgeclass: "badge-secondary",
                badge: "Hot",
                img: "dashboard-2/2.png",
                textclass: "text-secondary",
                sale: "Weekend Sale",
                product: "AirPods 3rd Generation Silicone Skin",
                price: "$16.00",
                del: "&nbsp;$30.00",
            },
            {
                value: 1,
                lightclass: "bg-light-primary",
                badgeclass: "badge-primary",
                badge: "Hot",
                img: "dashboard-2/6.png",
                textclass: "text-primary",
                sale: "Special Offer",
                product: "Smart Design Phone Multi Color",
                price: "$86.00",
                del: "&nbsp;$60.00",
            }
        ]
    }
]
export const swipersitems: SwiperItem[] = [
    {
        id: 1,
        colclass: "col-xxl-3 col-xl-4 col-sm-6 box-col-6",
        children: [
            {
                value: 1,
                lightclass: "bg-light-primary",
                badgeclass: "badge-primary",
                badge: "Hot",
                img: "dashboard-2/1.png",
                textclass: "text-primary",
                sale: "Special Offer",
                product: "Smart Design Watch Multi Color",
                price: "$26.00",
                del: "&nbsp;$30.00",
            },
            {
                value: 1,
                lightclass: "bg-light-secondary",
                badgeclass: "badge-secondary",
                badge: "Hot",
                img: "dashboard-2/2.png",
                textclass: "text-secondary",
                sale: "Weekend Sale",
                product: "AirPods 3rd Generation Silicone Skin",
                price: "$16.00",
                del: "&nbsp;$30.00",
            }
        ]
    },
    {
        id: 2,
        colclass: "col-xxl-3 col-xl-4 col-sm-6 box-col-6",
        children: [
            {
                value: 1,
                lightclass: "bg-light-secondary",
                badgeclass: "badge-secondary",
                badge: "Hot",
                img: "dashboard-2/2.png",
                textclass: "text-secondary",
                sale: "Weekend Sale",
                product: "AirPods 3rd Generation Silicone Skin",
                price: "$16.00",
                del: "&nbsp;$30.00",
            },
            {
                value: 1,
                lightclass: "bg-light-primary",
                badgeclass: "badge-primary",
                badge: "Hot",
                img: "dashboard-2/1.png",
                textclass: "text-primary",
                sale: "Special Offer",
                product: "Smart Design Phone Multi Color",
                price: "$26.00",
                del: "&nbsp;$30.00",
            }
        ]
    }
]
export const timeline: TimelineItem[] = [
    {
        dotclass: "activity-dot-primary",
        date: "<span class='font-primary'>30-06-2022</span>&nbsp;Today",
        title: "Updated Product",
        desc: "Quisque a consequat ante sit amet magna at volutapt.",
        circledot: "circle-dot-primary",
        imgs: false,
        activeline: true
    },
    {
        dotclass: "activity-dot-secondary",
        date: "<span class='font-secondary'>30-06-2022</span>&nbsp;Today",
        title: "Jihan Doe Just like your product",
        desc: "Vestibulum nec mi suscipit, dapibus purus ane.",
        circledot: "circle-dot-secondary",
        imgs: false,
        activeline: false
    },
    {
        dotclass: "activity-dot-primary",
        date: "<span class='font-primary'>25-06-2022</span>&nbsp;Today<span class='badge badge-primary ms-2'>New</span>",
        title: "James just like your product",
        desc: "Vestibulum nec mi suscipit, dapibus purus ane.",
        circledot: "circle-dot-primary",
        imgs: true,
        activeline: false,
        children: [
            {
                img: "dashboard-2/timeline/5.png"
            },
            {
                img: "dashboard-2/timeline/6.png"
            }
        ]
    },
    {
        dotclass: "activity-dot-secondary",
        date: "<span class='font-secondary'>25-06-2022 </span>&nbsp; Tomorrow",
        title: "Today Total Revenue",
        desc: "Quisque a consequat ante sit amet magna at volutapt.",
        circledot: "circle-dot-secondary",
        imgs: false,
        activeline: false
    }
]
export const target: TargetItem[] = [
    {
        class: "bg-light-primary",
        title: "Our Target",
        status: "Completed",
        priceclass: "font-primary",
        price: "$638.930"
    },
    {
        class: "bg-primary",
        title: "We Archieve",
        status: "Completed 2 Hours",
        price: "$638.930"
    }
]
export const images: item[] = [
    {
        class: "right-1",
        img: "dashboard-2/animate/1.png"
    },
    {
        class: "right-2",
        img: "dashboard-2/animate/2.png"
    },
    {
        class: "right-3",
        img: "dashboard-2/animate/3.png"
    },
    {
        class: "right-4",
        img: "dashboard-2/animate/4.png"
    },
    {
        class: "right-5",
        img: "dashboard-2/animate/5.png"
    }
]
export const order: OrderItem[] = [
    {
        img: "dashboard-2/user/13.png",
        name: "Alice Goodwin",
        year: "2019",
        product: "Nike Tshirt",
        amount: "$49.00",
        vendor: "Palestine",
        status: "65%",
        bgclass: "bg-success",
        rating: "3.6",
        vote: "(45 votes)",
        class: "bg-light-success"
    },
    {
        img: "dashboard-2/user/14.png",
        name: "Herry Venter",
        year: "2019",
        product: "Adidas Hat",
        amount: "$30.00",
        vendor: "Serbia",
        status: "45%",
        bgclass: "bg-warning",
        rating: "2.7",
        vote: "(35 votes)",
        class: "bg-light-warning"
    },
    {
        img: "dashboard-2/user/15.png",
        name: "Loain Deo",
        year: "2019",
        product: "Wu Sneakers",
        amount: "$54.00",
        vendor: "Islamic",
        status: "85%",
        bgclass: "bg-danger",
        rating: "9.2",
        vote: "(62 votes)",
        class: "bg-light-danger"
    },
    {
        img: "dashboard-2/user/16.png",
        name: "Horen Hors",
        year: "2019",
        product: "Puma Shorts",
        amount: "$73.00",
        vendor: "Greece",
        status: "75%",
        bgclass: "bg-success",
        rating: "6.6",
        vote: "(83 votes)",
        class: "bg-light-success"
    },
    {
        img: "dashboard-2/user/17.png",
        name: "Fenter Jessy",
        year: "2019",
        product: "Nike Glove",
        amount: "$98.00",
        vendor: "Central",
        status: "65%",
        bgclass: "bg-warning",
        rating: "5.0",
        vote: "(12 votes)",
        class: "bg-light-warning"
    },
    {
        img: "dashboard-2/user/18.png",
        name: "Alice Venter",
        year: "2019",
        product: "Nike Hat",
        amount: "$26.00",
        vendor: "Palestine",
        status: "75%",
        bgclass: "bg-warning",
        rating: "3.0 ",
        vote: "(86 votes)",
        class: "bg-light-warning"
    }
]
export const design = [
    {
        colclass: "col-xxl-4 col-xl-4 col-md-6",
        img: "dashboard-3/user/20.png",
        name: "Graphic Design",
        sub: "Alice Goodwin",
        class: "bitcoin-chart",
        series: series10,
        options: chartOptions10,
        children: [
            {
                icon: "iconly-Document",
                title: "10 Lessons"
            },
            {
                icon: "iconly-Time-Square",
                title: "8 Hours"
            },
            {
                icon: "iconly-User3",
                title: "16 Students"
            },
            {
                icon: "iconly-Star",
                title: "3.6"
            }
        ]
    },
    {
        colclass: "col-xxl-4 col-xl-4 col-md-6",
        img: "dashboard-3/user/21.png",
        name: "Design Thinking",
        sub: "Alice Goodwin",
        class: "ripple-chart",
        series: series11,
        options: chartOptions11,
        children: [
            {
                icon: "iconly-Document",
                title: "112 Lessons"
            },
            {
                icon: "iconly-Time-Square",
                title: "6 Hours"
            },
            {
                icon: "iconly-User3",
                title: "20 Students"
            },
            {
                icon: "iconly-Star",
                title: "5.8"
            }
        ]
    },
    {
        colclass: "col-xxl-4 col-xl-4 col-md-12",
        img: "dashboard-3/user/22.png",
        name: "Graphic Design",
        sub: "Alice Goodwin",
        class: "ethereum-chart",
        series: series12,
        options: chartOptions12,
        children: [
            {
                icon: "iconly-Document",
                title: "18 Lessons"
            },
            {
                icon: "iconly-Time-Square",
                title: "9 Hours"
            },
            {
                icon: "iconly-User3",
                title: "10 Students"
            },
            {
                icon: "iconly-Star",
                title: "9.5"
            }
        ]
    }
]
export const upcoming: UpcomingItem[] = [
    {
        date: "15 march",
        children: [
            {
                time: "09:00",
                class: "b-l-primary",
                title: "GDM 2nd semester",
                desc: "One-line Drawing Method",
                dotclass: "circle-dot-primary"
            },
            {
                time: "10:00",
                class: "b-l-secondary",
                title: "GDM 2nd semester",
                desc: "Continuous Line Drawing",
                dotclass: "circle-dot-secondary"
            }
        ]
    },
    {
        date: "17 march",
        children: [
            {
                time: "12:00",
                class: " b-l-primary",
                title: "GDM 2nd semester",
                desc: "One-line Drawing Method",
                dotclass: "circle-dot-primary"
            },
            {
                time: "08:00",
                class: "b-l-secondary",
                title: "GDM 2nd semester",
                desc: "Continuous Line Drawing",
                dotclass: "circle-dot-secondary"
            },
            {
                time: "11:00",
                class: "b-l-primary",
                title: "GDM 2nd semester",
                desc: "Continuous Line Drawing",
                dotclass: "circle-dot-primary"
            }
        ]
    }
]
export const notice: noticeItem[] = [
    {
        img: "dashboard-1/news-update/1.png",
        title: "Virtual STEM Clubs for 4-8 with Destina...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    },
    {
        img: "dashboard-1/news-update/2.png",
        title: "Art Now Series Presents Catherine...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    },
    {
        img: "dashboard-1/news-update/3.png",
        title: "Artistic Challenges For Your Creatie...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    },
    {
        img: "dashboard-1/news-update/4.png",
        title: "Weekly Photo Challenge & Critique...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    },
    {
        img: "dashboard-1/news-update/5.png",
        title: "Art Now Series Presents Catherine...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    },
    {
        img: "dashboard-1/news-update/6.png",
        title: "Virtual STEM Clubs for 4-8 with Destina...",
        desc: "Wed, Feb 24,2022; 12:00 pm-1:00pm"
    }
]
export const details: detailsItem[] = [
    {
        img: "dashboard-3/user/7.png",
        name: "Gary Goodwin",
        year: "2019",
        product: "Dedoh5@error.com",
        qty: "QTY:12",
        attendance: "51",
        class: "bg-light-success border-light-success text-success",
        rating: "45/50"
    },
    {
        img: "dashboard-3/user/8.png",
        name: "Ralph Venter",
        year: "2019",
        product: "Norog95@fada.com",
        qty: "QTY:14",
        attendance: "95",
        class: "bg-light-success border-light-success text-success",
        rating: "30/100"
    },
    {
        img: "dashboard-3/user/9.png",
        name: "Edwin Deo",
        year: "2019",
        product: "Mopot43@fada.com",
        qty: "QTY:16",
        attendance: "94",
        class: "bg-light-warning border-light-warning text-warning",
        rating: "45/60"
    },
    {
        img: "dashboard-3/user/10.png",
        name: "Aaron Hors",
        year: "2019",
        product: "Fafiya34@fada.com",
        qty: "QTY:18",
        attendance: "62",
        class: "bg-light-danger border-light-danger text-danger",
        rating: "26/50"
    },
    {
        img: "dashboard-3/user/11.png",
        name: "Fenter Jessy",
        year: "2019",
        product: "Rewox6@erroe.com",
        qty: "QTY:20",
        attendance: "91",
        class: "bg-light-success border-light-success text-success",
        rating: "80/100"
    },
    {
        img: "dashboard-3/user/12.png",
        name: "Alice Hogan",
        year: "2019",
        product: "Alice345@fada.com",
        qty: "QTY:22",
        attendance: "93",
        class: "bg-light-success border-light-success text-success",
        rating: "45/50"
    }
]
export const course: tableItems[] = [
    {
        img: "dashboard-3/user/13.png",
        name: "Gary Goodwin",
        sub: "Elementary",
        class: "30 class",
        time: "60 hours",
        days: "5 days left"
    },
    {
        img: "dashboard-3/user/14.png",
        name: "Ralph Venter",
        sub: "Advanced",
        class: "34 class",
        time: "45 hours",
        days: "2 days left"
    },
    {
        img: "dashboard-3/user/15.png",
        name: "Edwin Deo",
        sub: "Advanced",
        class: "87 class",
        time: "23 hours",
        days: "4 days left"
    },
    {
        img: "dashboard-3/user/16.png",
        name: "Aaron Hors",
        sub: "Elementary",
        class: "12 class",
        time: "56 hours",
        days: "9 days left"
    },
    {
        img: "dashboard-3/user/17.png",
        name: "Fenter Jessy",
        sub: "Art.3748979",
        class: "65 class",
        time: "60 hours",
        days: "1 days left"
    },
    {
        img: "dashboard-3/user/18.png",
        name: "Alice Hogan",
        sub: "Art.2738979",
        class: "43 class",
        time: "78 hours",
        days: "6 days left"
    },
    {
        img: "dashboard-3/user/19.png",
        name: "Aaron Hors",
        sub: "Art.7438378",
        class: "20 class",
        time: "40 hours",
        days: "5 days left"
    }
]
export const list: todoList[] = [
    {
        class: "line-primary",
        for: "solid1",
        checked: false,
        title: "Complete English test",
        desc: "Complete english test",
        time: "2 hours",
    },
    {
        class: "line-secondary",
        for: "solid2",
        checked: true,
        title: "Prepare for History exam",
        desc: "Complete english test",
        time: "4 hours",
    },
    {
        class: "line-danger",
        for: "solid3",
        checked: false,
        title: "Finish Digital Art project",
        desc: "Make the adjustments",
        time: "6 hours",
    },
    {
        class: "line-info",
        for: "solid4",
        checked: false,
        title: "Write essay Honesty is....",
        desc: "2-3 pages, include at least 3...",
        time: "8 hours",
    },
    {
        class: "line-secondary",
        for: "solid5",
        checked: false,
        title: "Make Presentation",
        desc: "Complete english test",
        time: "1 hours",
    },
    {
        class: "line-success",
        for: "solid6",
        checked: true,
        title: "Complete English test",
        desc: "Make the adjustments",
        time: "3 hours",
    },
    {
        class: "line-warning",
        for: "solid7",
        checked: false,
        title: "Prepare for History exam",
        desc: "Complete english test",
        time: "5 hours",
    }
]
export const tables: TableItem[] = [
    {
        img: "dashboard-3/user/1.png",
        name: "Gary Goodwin",
        year: "2019",
        subject: "Accounts",
        start: "20 May",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        submit: "31 july"
    },
    {
        img: "dashboard-3/user/2.png",
        name: "Ralph Venter",
        year: "2019",
        subject: "Bus. Study",
        start: "10 May",
        class: "bg-light-success border-light-success text-success",
        status: "Completed ",
        submit: "5th Aug"
    },
    {
        img: "dashboard-3/user/3.png",
        name: "Edwin Deo",
        year: "2019",
        subject: "Mathematics",
        start: "30 Sep",
        class: "bg-light-warning border-light-warning text-warning",
        status: "Pending ",
        submit: "31 July"
    },
    {
        img: "dashboard-3/user/4.png",
        name: "Aaron Hors",
        year: "2019",
        subject: "Computer App",
        start: "13 Oct",
        class: "bg-light-danger border-light-danger text-danger",
        status: "Canceled",
        submit: "31 May"
    },
    {
        img: "dashboard-3/user/5.png",
        name: "Fenter Jessy",
        year: "2019",
        subject: " Graphic Design",
        start: "25 May",
        class: "bg-light-success border-light-success text-success",
        status: "Completed ",
        submit: "24 Oct"
    },
    {
        img: "dashboard-3/user/6.png",
        name: "Alice Hogan",
        year: "2019",
        subject: "Design Thinking",
        start: "20 Feb",
        class: "bg-light-success border-light-success text-success",
        status: "Completed",
        submit: "31 July"
    }
]
export const widgets: widgetsItems[] = [
    {
        class: "danger",
        svg1: "cart",
        svg2: "halfcircle",
        number: "10,000",
        title: "Purchase",
        font: "font-danger",
        icon: "icon-arrow-up",
        total: "+50%"
    },
    {
        class: "primary",
        svg1: "tag",
        svg2: "halfcircle",
        number: "4,200",
        title: "Sales",
        font: "font-primary",
        icon: "icon-arrow-up",
        total: "+70%"
    },
    {
        class: "secondary",
        svg1: "return-box",
        svg2: "halfcircle",
        number: "7000",
        title: "Sales return",
        font: "font-secondary",
        icon: "icon-arrow-down",
        total: "-20%"
    },
    {
        class: "success",
        svg1: "rate",
        svg2: "halfcircle",
        number: "5700",
        title: "Purchase rate",
        font: "font-success",
        icon: "icon-arrow-up",
        total: "+70%"
    }
]
export const small: smallItems[] = [
    {
        class: "primary",
        title: "New Orders",
        number: "2,435",
        font: "font-primary",
        icon: "icon-arrow-up",
        total: "+50%",
        svg: "new-order"
    },
    {
        class: "warning",
        title: "New Customers",
        number: "2,908",
        font: "font-warning",
        icon: "icon-arrow-up",
        total: "+20%",
        svg: "customers"
    },
    {
        class: "secondary",
        title: "Average Sale",
        number: "$389k",
        font: "font-secondary",
        icon: "icon-arrow-down",
        total: "-10%",
        svg: "sale"
    },
    {
        class: "success",
        title: "Gross Profit",
        number: "$3,908",
        font: "font-success",
        icon: "icon-arrow-up",
        total: "+80%",
        svg: "profit"
    }
]
export const smallchart = [
    {
        series: series19,
        option: chartOptions19,
        number: "1,80k",
        title: "Orders",
        chartclass: "order-chart"
    },
    {
        series: series20,
        option: chartOptions20,
        number: "6,90k",
        title: "Profit",
        chartclass: "profit-chart"
    }
]
export const chart = [
    {
        title: "Total Sale",
        number: "$3654.00",
        desc: "Compare to last month",
        total: "+65%",
        series: series,
        option: chartOptions,
    },
    {
        title: "Total Project",
        number: "12569",
        desc: "Compare to last month",
        total: "+65%",
        series: series2,
        option: chartOptions2,
    },
    {
        title: "Total Product",
        number: "93M",
        desc: "Compare to last month",
        total: "+65%",
        series: series3,
        option: chartOptions3,
    }
]
