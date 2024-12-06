export interface Personal {
    id: string;
    image: string;
    name2: string;
    name1: string;
    email: string;
    gender: string;
    day: string;
    month: string;
    year: string;
    personality: string;
    city: string;
    mobileno: string;
    website: string;
    interest: string;
    active: boolean
}
export interface Organization {
    id: number;
    name1: string;
    image: string;
    name2: string;
    email: string;
    active?: string;
    gender: string;
}
export const personal: Personal[] = [
    {
        id: "1",
        image: "user/2.png",
        name2: "Barnes",
        name1: "Bucky",
        email: "barnes@gmail.com",
        gender: "Male",
        day: "18",
        month: " May",
        year: "1994",
        personality: "Cool",
        city: "moline acres",
        mobileno: "+0 1800 76855",
        website: "www.test.com",
        interest: "photography",
        active: true,
    },
    {
        id: "2",
        image: "user/8.jpg",
        name2: "Diaz",
        name1: "Comeren",
        email: "comeren@gmail.com",
        gender: "Female",
        day: "7",
        month: "Feb ",
        year: "1995",
        personality: "Cool",
        city: "Delhi",
        mobileno: "+0 1800 55812",
        website: "www.cometest@.com",
        interest: "sports",
        active: false
    },
    {
        id: "3",
        image: "user/1.jpg",
        name2: "Bell",
        name1: "Issa",
        email: "issabell@gmail.com",
        day: "20",
        month: "Jul ",
        year: "1993",
        gender: "Male",
        personality: "Cool",
        city: "Mumbai",
        mobileno: "+0 1800 87412",
        website: "www.belltest@.com",
        interest: "cooking",
        active: false
    },
    {
        id: "4",
        image: "user/14.png",
        name2: "Jon",
        name1: "Andew",
        email: "andewjon@gmail.com",
        gender: "Male",
        day: "25",
        month: "Aug ",
        year: "1996",
        personality: "Cool",
        city: "Amreli",
        mobileno: "+0 1800 79877",
        website: "www.test@.com",
        interest: "photography",
        active: false
    },
    {
        id: "5",
        image: "user/5.jpg",
        name2: "Borne",
        name1: "Jason",
        email: "jasonb@gmail.com",
        gender: "Male",
        day: "30",
        month: "Oct ",
        year: "1992",
        personality: "Cool",
        city: "Delhi",
        mobileno: "+0 1800 11547",
        website: "www.jason@.com",
        interest: "photography",
        active: false
    },
    {
        id: "6",
        image: "avtar/11.jpg",
        name2: "Carlo",
        name1: "Monty",
        email: "monty@gmail.com",
        gender: "Male",
        day: "12",
        month: "Nov ",
        year: "1994",
        personality: "Cool",
        city: "Amreli",
        mobileno: "+0 1800 87944",
        website: "www.mon@.com",
        interest: "sports",
        active: false
    },
    {
        id: "7",
        image: "avtar/16.jpg",
        name2: "Lee",
        name1: "Brock",
        email: "lee@gmail.com",
        gender: "Male",
        day: "8",
        month: "Dec ",
        year: "1992",
        personality: "Cool",
        city: "Ahemdabad",
        mobileno: "+0 1800 58712",
        website: "www.lee.com",
        interest: "photography",
        active: false
    }
]
export const day: { value: string }[] = [
    { value: "01" },
    { value: "02" },
    { value: "03" },
    { value: "04" },
    { value: "05" },
    { value: "06" },
    { value: "07" },
    { value: "08" },
    { value: "09" },
    { value: "10" },
    { value: "11" },
    { value: "12" },
    { value: "13" },
    { value: "14" },
    { value: "15" },
    { value: "16" },
    { value: "17" },
    { value: "18" },
    { value: "19" },
    { value: "20" },
    { value: "21" },
    { value: "22" },
    { value: "23" },
    { value: "24" },
    { value: "25" },
    { value: "26" },
    { value: "27" },
    { value: "28" },
    { value: "29" },
    { value: "30" },
    { value: "31" }
]
export const month: { month: string }[] = [
    { month: "January" },
    { month: "February" },
    { month: "March" },
    { month: "April" },
    { month: "May" },
    { month: "June" },
    { month: "July" },
    { month: "August" },
    { month: "September" },
    { month: "October" },
    { month: "November" },
    { month: "December" }
]
export const organization: Organization[] = [
    {
        id: 1,
        name1: "Mark",
        image: "user/user.png",
        name2: "jecno",
        email: "markjecno@gmail.com",
        active: "active show",
        gender: "Male"
    },
    {
        id: 2,
        name1: "Jason",
        image: "user/3.jpg",
        name2: "Borne",
        email: "jasonb@gmail.com",
        active: "",
        gender: "Male"
    },
    {
        id: 3,
        name1: "Sarah",
        image: "user/4.jpg",
        name2: "Loren",
        email: "barnes@gmail.com",
        active: "",
        gender: "Female"
    },
    {
        id: 4,
        name1: "Andew",
        image: "user/10.jpg",
        name2: "Jon",
        email: "andrewj@gmail.com",
        active: "",
        gender: "Female"
    }
]