interface BookmarkSidebarItem {
    id: string;
    href: string;
    controls: string;
    title?: string;
    actve?: string;
    fav?: boolean;
}
interface DataItem {
    id: number;
    fillstar: boolean;
    image: string;
    title: string;
    website_url: string;
    desc: string;
    collection: string;
}
export const bookmarksidebar: BookmarkSidebarItem[] = [
    {
        id: "pills-created-tab",
        href: "#pills-created",
        controls: "pills-created",
        title: "Created by me",
        actve: "active"
    },
    {
        id: "pills-favourites-tab",
        href: "#pills-favourites",
        controls: "pills-favourites",
        title: "Favourites",
        fav: true
    },
    {
        id: "pills-shared-tab",
        href: "#pills-shared",
        controls: "pills-shared",
        title: "Shared with me"
    },
    {
        id: "pills-bookmark-tab",
        href: "#pills-bookmark",
        controls: "pills-bookmark",
        title: "My bookmark"
    }
]
export const bookmarks: BookmarkSidebarItem[] = [
    {
        id: "pills-notification-tab",
        href: "#pills-notification",
        controls: "pills-notification",
        title: "notification"
    },
    {
        id: "pills-newsletter-tab",
        href: "#pills-newsletter",
        controls: "pills-newsletter",
        title: "Newsletter"
    },
    {
        id: "pills-business-tab",
        href: "#pills-business",
        controls: "pills-business-tab",
        title: "Business"
    },
    {
        id: "pills-holidays-tab",
        href: "#pills-holidays",
        controls: "pills-holidays-tab",
        title: "Holidays"
    },
    {
        id: "pills-important-tab",
        href: "#pills-important",
        controls: "pills-important-tab",
        title: "Important"
    },
    {
        id: "pills-orgenization-tab",
        href: "#pills-orgenization",
        controls: "pills-orgenization-tab",
        title: "Organization"
    }
]
export const data: DataItem[] = [
    {
        id: 1,
        fillstar: false,
        image: "lightgallry/01.jpg",
        title: "Admin Template",
        website_url: "http://admin.pixelstrap.com/Xolo/ltr/index.html",
        desc: "Xolo is beautifully crafted, clean and modern designed admin theme with 6 different demos and light - dark versions.",
        collection: "General"
    },
    {
        id: 2,
        fillstar: true,
        image: "lightgallry/02.jpg",
        title: "Universal Template",
        website_url: "https://angular.pixelstrap.com/universal/landing",
        desc: "Universal is beautifully crafted, clean and modern designed admin theme",
        collection: "General"
    },
    {
        id: 3,
        fillstar: false,
        image: "lightgallry/03.jpg",
        title: "Angular Theme",
        website_url: "https://angular.pixelstrap.com/Xolo/landing",
        desc: "Xolo is beautifully crafted, clean and modern designed admin theme",
        collection: "Fs"
    },
    {
        id: 4,
        fillstar: false,
        image: "lightgallry/04.jpg",
        title: "Multikart Admin",
        website_url: "http://themes.pixelstrap.com/multikart/back-end/index.html",
        desc: "Multikart Admin is modern designed admin theme",
        collection: "General"
    },
    {
        id: 5,
        fillstar: false,
        image: "lightgallry/05.jpg",
        title: "Ecommerece theme",
        website_url: "http://themes.pixelstrap.com/multikart",
        desc: "Multikart HTML template is an apparently simple but highly functional tempalate designed for creating a flourisahing online business.",
        collection: "General"
    },
    {
        id: 6,
        fillstar: false,
        image: "lightgallry/06.jpg",
        title: "Tovo app landing page",
        website_url: "http://vue.pixelstrap.com/tovo/home-one",
        desc: "Amazing Landing Page With Easy Customization",
        collection: "Fs"
    }
]