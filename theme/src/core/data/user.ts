interface FormField {
    class: string;
    placeholder: string;
    type: string;
    title: string;
}
interface count {
    title: string
}
interface UserEdit {
    title: string;
    date: string;
    class: string;
    status: string;
    price: string;
}

interface Data {
    img: string;
    name: string;
    email: string;
    follower: string;
    following: string;
    post: string;
}
export const edit: FormField[] = [
    {
        class: "col-md-5",
        placeholder: "Company",
        type: "text",
        title: "Company"
    },
    {
        class: "col-sm-6 col-md-3",
        placeholder: "Username",
        type: "text",
        title: "Username"
    },
    {
        class: "col-sm-6 col-md-4",
        placeholder: "Email",
        type: "email",
        title: "Email address"
    },
    {
        class: "col-sm-6 col-md-6",
        placeholder: "First Name",
        type: "text",
        title: "First Name"
    },
    {
        class: "col-sm-6 col-md-6",
        placeholder: "Last Name",
        type: "text",
        title: "Last Name"
    },
    {
        class: "col-md-12",
        placeholder: "Home Address",
        type: "text",
        title: "Address"
    },
    {
        class: "col-sm-6 col-md-4",
        placeholder: "City",
        type: "text",
        title: "City"
    },
    {
        class: "col-sm-6 col-md-3",
        placeholder: "ZIP Code",
        type: "number",
        title: "Postal Code"
    }
]
export const country: count[] = [
    {
        title: "--Select--"
    },
    {
        title: "Germany"
    },
    {
        title: "Canada"
    },
    {
        title: "Usa"
    },
    {
        title: "Aus"
    }
]
export const useredit: UserEdit[] = [
    {
        title: "Untrammelled prevents",
        date: "28 May 2024",
        class: "badge badge-light-success",
        status: "Completed",
        price: "$56,908"
    },
    {
        title: "Untrammelled prevents",
        date: "12 June 2024",
        class: " badge badge-light-danger",
        status: "On going",
        price: "$45,087"
    },
    {
        title: "Untrammelled prevents",
        date: "12 July 2024",
        class: "badge badge-light-warning",
        status: "Pending",
        price: "$60,123"
    },
    {
        title: "Untrammelled prevents",
        date: "14 June 2024",
        class: "badge badge-light-warning",
        status: "Pending",
        price: "$70,435"
    },
    {
        title: "Untrammelled prevents",
        date: "25 June 2024",
        class: "badge badge-light-success",
        status: "Completed",
        price: "$15,987"
    }
]
export const data: Data[] = [
    {
        img: "other-images/profile.png",

        name: "Brooklyn Simmons",
        email: "@brookly.simmons",
        follower: "34.0k",
        following: "897",
        post: "1,908"
    },
    {
        img: "avtar/3.jpg",

        name: "Mark Jecno",
        email: "@mark.jeco",
        follower: "12.0k",
        following: "1400",
        post: "875"
    },
    {
        img: "avtar/11.jpg",

        name: "Dev John",
        email: "@john.dev",
        follower: "15.0k",
        following: "91",
        post: "1874"
    },
    {
        img: "avtar/16.jpg",

        name: "Johan Deo",
        email: "@deo.johan",
        follower: "8.0k",
        following: "570",
        post: "500"
    },
    {
        img: "user/7.jpg",

        name: "Douglas Reichel",
        email: "@reichel.douglas",
        follower: "460",
        following: "2k",
        post: "460"
    },
    {
        img: "avtar/4.jpg",

        name: "Lisa lillian",
        email: "@lisa.lillian",
        follower: "547",
        following: "3.5k",
        post: "547"
    },
    {
        img: "user/1.jpg",

        name: "Olivia rose",
        email: "@rose.olivia",
        follower: "1k",
        following: "742",
        post: "868"
    },
    {
        img: "user/2.png",

        name: "Sarah Karen",
        email: "@karen.sarah",
        follower: "2.5k",
        following: "864",
        post: "972"
    }
]