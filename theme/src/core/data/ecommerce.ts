interface ProductStep {
    id: string;
    icon: string;
    title: string;
    desc: string;
}
interface ProductCategory {
    title: string;
}
interface PricingOption {
    for: string;
    title: string;
    checked: boolean
}
interface FormField {
    for: string;
    title: string;
    type: string;
}
interface Dimension {
    placeholder: string;
    class: string;
}
interface ProductDetail {
    title: string;
    decs: string;
    space: string;
    class?: string;
}
interface SocialLink {
    link: string;
    icon: string;
}
interface Brand {
    name: string;
}
interface CollectionItem {
    icon: string;
    title: string;
    desc: string;
}
interface ProductItem {
    img: string;
    name: string;
    sku: string;
    category: string;
    price: string;
    qty: string;
    status: string;
    statusclass: string;
    rating: string;
    product: string;
}
interface Product {
    img: string;
    title: string;
}
interface Order {
    id: number;
    img: string;
    product: string;
    status: string;
    size: string;
    color: string;
    articleNumber: number;
    units: number;
    price: number;
}
interface InvoiceItem {
    class?: string;
    class1?: string;
    name: string;
    style?: string;
    style1?: string;
    title: string;
}
interface DataTableItem {
    style?: string;
    children?: {
        class?: string;
        title?: string;
        style?: string;
        class1?: string;
    }[];
}
interface AddressItem {
    style: string;
    class: string;
    add: string;
    namestyle: string;
    name: string;
    descclass: string;
    desc: string;
    numberclass: string;
    number: string;
}
interface InvoiceTable {
    class?: string;
    style?: string;
    img?: string;
    title?: string;
    subtitle?: string;
    qty?: string;
    price?: string;
    width?: string;
    total?: string;
}

interface FooterInvoice {
    title: string;
    style: string;
    price: string;
    style1: string;
}

interface TableResponsive {
    title?: string;
    name?: string;
    width?: string;
    add?: string;
    number?: string;
    data?: string
}

interface InvoiceHeader {
    style: string;
    title: string;
}

interface InvoiceFooter {
    title: string;
    price: string;
}

interface InvoiceAdd {
    style: string;
    title: string;
}

interface Data {
    style: string;
    title: string;
}

interface Table {
    title?: string;
    desc?: string;
    hours?: string;
    rate?: string;
    Subtotal?: string;
}
interface item {
    image: string;
    name: string;
    category: string;
    color: string;
    status: string;
}
export interface WishlistItem {
    name: string;
    img: string;
    star1: string;
    star2: string;
    price: string;
    color: string;
    stock: string;
}
export interface PricingItem {
    id: number;
    title: string;
    price: string;
    disk: string;
    email: string;
    Sub: string;
    domains: string;
}
export interface SimplePricingItem {
    id: number;
    title: string;
    price: string;
}

export const add: ProductStep[] = [
    {
        id: "#detail-product",
        icon: "product-detail",
        title: "Add Product Details",
        desc: "Add Product name & details"
    },
    {
        id: "#gallery-product",
        icon: "product-gallery",
        title: "Product Gallery",
        desc: "Thumbnail & Add Product Gallery"
    },
    {
        id: "#category-product",
        icon: "product-category",
        title: "Product Categories",
        desc: "Add Product category, Status and Tags"
    },
    {
        id: "#pricings",
        icon: "pricing",
        title: "Selling Prices",
        desc: "Add Product basic price & Discount"
    },
    {
        id: "#advance-product",
        icon: "advance",
        title: "Advance",
        desc: "Add Meta details & Inventory details"
    }
]
export const category: ProductCategory[] = [
    {
        title: "Toys & games"
    },
    {
        title: "Sportswear"
    },
    {
        title: "Jewellery"
    },
    {
        title: "Furniture and Decor"
    },
    {
        title: "Health, Personal Care, and Beauty"
    },
    {
        title: "Auto and Parts"
    },
    {
        title: "Baby Care Products"
    }
]
export const status: ProductCategory[] = [
    {
        title: "Publish"
    },
    {
        title: "Drafts"
    },
    {
        title: "Unpublish"
    }
]
export const currency: ProductCategory[] = [
    {
        title: "Dollar $"
    },
    {
        title: "Euro €"
    },
    {
        title: "Rupees ₹"
    },
    {
        title: "British pounds £"
    },
    {
        title: "Russian Ruble ₽"
    },
    {
        title: "Japanese Yen ¥"
    },
    {
        title: "Singapore Dollar S$"
    }
]
export const discount: PricingOption[] = [
    {
        for: "radio-icon",
        title: "Fixed Price",
        checked: false
    },
    {
        for: "radio-icon4",
        title: "BOGO(Buy one, Get one)",
        checked: true
    },
    {
        for: "radio-icon5",
        title: "Seasonal or holiday discount",
        checked: false
    },
    {
        for: "radio-icon6",
        title: "Percentage-based discount(%)",
        checked: false
    },
    {
        for: "radio-icon7",
        title: "Volume or bulk discount",
        checked: false
    }
]
export const inventory: FormField[] = [
    {
        for: "exampleFormControlInput1",
        title: "SKU",
        type: "text"
    },
    {
        for: "exampleFormControlInput1",
        title: "Stock Quantity",
        type: "number"
    },
    {
        for: "exampleFormControlInput1",
        title: "Restock Date",
        type: "number"
    },
    {
        for: "exampleFormControlInput1",
        title: "Pre-Order",
        type: "number"
    }
]
export const stock: ProductCategory[] = [
    {
        title: "Low Stock (5 or less)"
    },
    {
        title: "Low Stock (10 or less)"
    },
    {
        title: "Low Stock (20 or less)"
    },
    {
        title: "Low Stock (25 or less)"
    },
    {
        title: "Low Stock (30 or less)"
    }
]
export const availability: ProductCategory[] = [
    {
        title: "In stock"
    },
    {
        title: "Out of stock"
    },
    {
        title: "Pre-order"
    }
]
export const state: ProductCategory[] = [
    {
        title: "State"
    },
    {
        title: "Gujarat"
    },
    {
        title: "Punjab"
    },
    {
        title: "Himachal pradesh"
    },
    {
        title: "Goa"
    },
    {
        title: "Sikkim"
    },
    {
        title: "Telangana"
    }
]
export const shipping: ProductCategory[] = [
    {
        title: "Basic Shipping"
    },
    {
        title: "Expedited Shipping"
    },
    {
        title: "International Shipping"
    },
    {
        title: "Free Shipping"
    },
    {
        title: "Same-Day or Next-Day Shipping"
    },
    {
        title: "Flat Rate Shipping"
    },
    {
        title: "Local Pickup"
    }
]
export const dimensions: Dimension[] = [
    {
        placeholder: "Length[l]",
        class: "col-md-4 col-sm-6"
    },
    {
        placeholder: "Width[w]",
        class: "col-md-4 col-sm-6"
    },
    {
        placeholder: "Height[h]",
        class: "col-md-4"
    }
]
export const detail: ProductDetail[] = [
    {
        title: "Brand &nbsp;&nbsp;&nbsp;:",
        decs: "Pixelstrap",
        space: "&nbsp;&nbsp;&nbsp;"
    },
    {
        title: "Availability &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;",
        decs: "In stock",
        space: "&nbsp;&nbsp;&nbsp;",
        class: "text-success"
    },
    {
        title: "Seller &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;",
        decs: "ABC",
        space: "&nbsp;&nbsp;&nbsp;"
    },
    {
        title: "Fabric &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;",
        decs: "Cotton",
        space: "&nbsp;&nbsp;&nbsp;"
    }

]
export const social: SocialLink[] = [
    {
        link: "https://www.facebook.com/",
        icon: "fa-brands fa-facebook-f"
    },
    {
        link: "https://accounts.google.com/",
        icon: "fa-brands fa-google-plus-g"
    },
    {
        link: "https://twitter.com/",
        icon: "fa-brands fa-twitter"
    },
    {
        link: "https://www.instagram.com/",
        icon: "fa-brands fa-instagram"
    },
    {
        link: "https://rss.app/",
        icon: "fa-solid fa-rss"
    }
]
export const brand: Brand[] = [
    {
        name: "Clothing"
    },
    {
        name: "Bags"
    },
    {
        name: "Footwear"
    },
    {
        name: "Watches"
    },
    {
        name: "ACCESSORIES"
    }
]
export const collection: CollectionItem[] = [
    {
        icon: "truck",
        title: "Free Shipping",
        desc: "Free Shipping World Wide"
    },
    {
        icon: "clock",
        title: "24 X 7 Service ",
        desc: "Online Service For New Customer"
    },
    {
        icon: "gift",
        title: "Festival Offer",
        desc: "New Online Special Festival"
    },
    {
        icon: "credit-card",
        title: "Online Payment ",
        desc: "Contrary To Popular Belief. "
    }
]
export const CategoryPageTableData: item[] = [
    {
        image: "product/1.png",
        name: "T-Shirts",
        category: "Special PriceGet at flat ₹229",
        color: "badge-light-primary",
        status: "Clothing",
    },
    {
        image: "product/category/1.png",
        name: "Shoes",
        category: "Special PriceGet at flat ₹229",
        color: "badge-light-primary",
        status: "Footwear",
    },
    {
        image: "product/category/2.png",
        name: "Handbags",
        category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        color: "badge-light-secondary",
        status: "Accessories",
    },
    {
        image: "product/product-categories/1.png",
        name: "Chairs",
        category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        color: "badge-light-secondary",
        status: "Electronic",
    },
    {
        image: "product/category/3.png",
        name: "Toys",
        category: "Assembling Shape Educational Toys (Multicolor)",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/category/4.png",
        name: "Slipper",
        category: "Easy to wear and comfortable slip on slippers",
        color: "badge-light-primary",
        status: "Footwear",
    },
    {
        image: "product/category/5.png",
        name: "Cameras",
        category: "Our computers and tablets include all the big brands.",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/2.png",
        name: "T-Shirts",
        category: "Special PriceGet at flat ₹100",
        color: "badge-light-primary",
        status: "Clothing",
    },
    {
        image: "product/product-categories/watch.png",
        name: "Watches",
        category: "Experience luxury and precision with our meticulously crafted timepieces",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/12.png",
        name: "T-Shirts",
        category: "Special PriceGet at flat ₹300",
        color: "badge-light-primary",
        status: "Clothing",
    },
    {
        image: "product/category/1.png",
        name: "Shoes",
        category: "Up to ₹300, on orders of ₹1750 and above T&C",
        color: "badge-light-primary",
        status: "Footwear",
    },
    {
        image: "product/category/3.png",
        name: "Toys",
        category: "Assembling Shape Educational Toys (Multicolor)",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/category/4.png",
        name: "Slipper",
        category: "Easy to wear and comfortable slip on slippers",
        color: "badge-light-primary",
        status: "Footwear",
    },
    {
        image: "product/category/5.png",
        name: "Cameras",
        category: "Our computers and tablets include all the big brands.",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/product-categories/watch.png",
        name: "Watches",
        category: "Experience luxury and precision with our meticulously crafted timepieces",
        color: "badge-light-success",
        status: "Electronic",
    },
    {
        image: "product/1.png",
        name: "T-Shirts",
        category: "Special PriceGet at flat ₹229",
        color: "badge-light-primary",
        status: "Clothing",
    },
    {
        image: "product/category/1.png",
        name: "Shoes",
        category: "Up to ₹300, on orders of ₹1750 and above T&C",
        color: "badge-light-primary",
        status: "Footwear",
    },
    {
        image: "product/category/2.png",
        name: "Handbags",
        category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        color: "badge-light-secondary",
        status: "Accessories",
    },
    {
        image: "product/product-categories/1.png",
        name: "Chairs",
        category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
        color: "badge-light-secondary",
        status: "Electronic",
    },
]
export const product: ProductCategory[] = [
    {
        title: "Choose Product"
    },
    {
        title: "Apple iphone 13 Pro"
    },
    {
        title: "Wood Chair"
    },
    {
        title: "M185 Compact Wireless Mouse"
    }
]
export const categorys: ProductCategory[] = [
    {
        title: "Choose Category"
    },
    {
        title: "Furniture"
    },
    {
        title: "Smart Gadgets"
    },
    {
        title: "Electrics"
    }
]
export const subcategory: ProductCategory[] = [
    {
        title: "Choose Sub Category"
    },
    {
        title: "Smart Phones"
    },
    {
        title: "Smart Watches"
    },
    {
        title: "Wireless headphone"
    }
]
export const statu: ProductCategory[] = [
    {
        title: "Status"
    },
    {
        title: "Sold Out"
    },
    {
        title: "In Stock"
    },
    {
        title: "Pre Order"
    },
    {
        title: "Limited Stock"
    }
]
export const price: ProductCategory[] = [
    {
        title: "Price"
    },
    {
        title: "56000.00"
    },
    {
        title: "19000.00"
    },
    {
        title: "10000.00"
    },
    {
        title: "15000.00"
    },
    {
        title: "99000.00"
    }
]
export const productlist: ProductItem[] = [
    {
        img: "product/product-categories/laptop.png",
        name: "Apple Desktop 2024",
        sku: "02145YK796",
        category: "Laptops",
        price: "56000.00",
        qty: "13",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/phone.png",
        name: "Apple iphone 13 Pro",
        sku: "56379FG3AW",
        category: "Smart Phones",
        price: "19000.00",
        qty: "48",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "3",
        product: ""
    },
    {
        img: "product/product-categories/headphone.png",
        name: "Headphones",
        sku: "33KR5689B1",
        category: "Smart Headphones",
        price: "10000.00",
        qty: "5",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/wireless-headphone.png",
        name: "wireless-headphone",
        sku: "AD6789HEY0",
        category: "Smart Headphones ",
        price: "15000.00",
        qty: "4",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "product/1.png",
        name: "Wood Chair",
        sku: "456DF78DFQ",
        category: "Furniture",
        price: "99000.00",
        qty: "2",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "5",
        product: ""
    },
    {
        img: "email-template/3.png",
        name: "Wood Chair",
        sku: "5633GD3K54",
        category: "Furniture",
        price: "1000.00",
        qty: "8",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/ipad.png",
        name: "MacBook Air 13.3-inch",
        sku: "589KO8PPQ8",
        category: "Laptops ",
        price: "45000.00",
        qty: "10",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "product/product-categories/mouse.png",
        name: "M185 Compact Wireless Mouse",
        sku: "02145YK796",
        category: "E-Commerce",
        price: "56000.00",
        qty: "13",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "2",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/1.png",
        name: "Wood chairs",
        sku: "568GH3LLQ2",
        category: "Furniture",
        price: "78000.00",
        qty: "50",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: ""
    },
    {
        img: "product/product-categories/watch.png",
        name: "Smart watch",
        sku: "58FR7K34F6",
        category: "Electric",
        price: "25000.00",
        qty: "48",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/dvd.png",
        name: "DVD",
        sku: "HG5667DFQ1",
        category: "Electric",
        price: "5600.00",
        qty: "10",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: ""
    },
    {
        img: "product/product-categories/speaker.png",
        name: "Speakers",
        sku: "02145YK796",
        category: "Electric",
        price: "12200.00",
        qty: "50",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "product/product-categories/phone.png",
        name: "Apple iphone 13 Pro",
        sku: "56379FG3AW",
        category: "Smart Phones",
        price: "19000.00",
        qty: "48",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "3",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/headphone.png",
        name: "Headphones",
        sku: "33KR5689B1",
        category: "Smart Headphones",
        price: "10000.00",
        qty: "5",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: ""
    },
    {
        img: "product/product-categories/1.png",
        name: "Wood chairs",
        sku: "568GH3LLQ2",
        category: "Furniture",
        price: "78000.00",
        qty: "50",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: ""
    },
    {
        img: "product/product-categories/watch.png",
        name: "Smart watch",
        sku: "58FR7K34F6",
        category: "Electric",
        price: "25000.00",
        qty: "48",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/phone.png",
        name: "Apple iphone 13 Pro",
        sku: "56379FG3AW",
        category: "Smart Phones",
        price: "19000.00",
        qty: "48",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: ""
    },
    {
        img: "product/product-categories/headphone.png",
        name: "Headphones",
        sku: "33KR5689B1",
        category: "Smart Headphones",
        price: "10000.00",
        qty: "5",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "3",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/wireless-headphone.png",
        name: "wireless-headphone",
        sku: "AD6789HEY0",
        category: "Smart Headphones",
        price: "15000.00",
        qty: "4",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/1.png",
        name: "Wood Chair",
        sku: "456DF78DFQ",
        category: "Furniture",
        price: "99000.00",
        qty: "2",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "email-template/3.png",
        name: "Wood Chair",
        sku: "5633GD3K54",
        category: "Furniture",
        price: "1000.00",
        qty: "8",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "3",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/laptop.png",
        name: "Apple Desktop 2024",
        sku: "02145YK796",
        category: "Laptops",
        price: "56000.00",
        qty: "13",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "product/product-categories/phone.png",
        name: "Apple iphone 13 Pro",
        sku: "56379FG3AW",
        category: "Smart Phones",
        price: "19000.00",
        qty: "48",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/headphone.png",
        name: "Headphones",
        sku: "33KR5689B1",
        category: "Smart Headphones",
        price: "10000.00",
        qty: "5",
        status: "In Stock",
        statusclass: "badge-light-primary",
        rating: "5",
        product: "Apple iphone 13 Pro"
    },
    {
        img: "product/product-categories/wireless-headphone.png",
        name: "wireless-headphone",
        sku: "AD6789HEY0",
        category: "Smart Headphones",
        price: "15000.00",
        qty: "4",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "4",
        product: ""
    },
    {
        img: "product/1.png",
        name: "Wood Chair",
        sku: "456DF78DFQ",
        category: "Furniture",
        price: "99000.00",
        qty: "2",
        status: "Sold Out",
        statusclass: "badge-light-secondary",
        rating: "2",
        product: "Apple iphone 13 Pro"
    }
]
export const news: Product[] = [
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women Shorts"
    },
    {
        img: "ecommerce/product-table-4.png",
        title: "Cyclamen "
    },
    {
        img: "ecommerce/product-table-3.png",
        title: "Men Solid Denim jacket"
    },
    {
        img: "ecommerce/product-table-2.png",
        title: "Blue shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "red shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "Red shirt"
    },
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women shorts"
    }
]
export const cancals: Product[] = [
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women Shorts"
    },
    {
        img: "ecommerce/product-table-4.png",
        title: "Cyclamen "
    },
    {
        img: "ecommerce/product-table-3.png",
        title: "Men Solid Denim jacket"
    },
    {
        img: "ecommerce/product-table-2.png",
        title: "Blue shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "red shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "Red shirt"
    },
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women shorts"
    }
]
export const shippeds: Product[] = [
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women Shorts"
    },
    {
        img: "ecommerce/product-table-4.png",
        title: "Cyclamen "
    },
    {
        img: "ecommerce/product-table-3.png",
        title: "Men Solid Denim jacket"
    },
    {
        img: "ecommerce/product-table-2.png",
        title: "Blue shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "red shirt"
    },
    {
        img: "ecommerce/product-table-1.png",
        title: "Red shirt"
    },
    {
        img: "ecommerce/product-table-6.png",
        title: "Women Top"
    },
    {
        img: "ecommerce/product-table-5.png",
        title: "Women shorts"
    }
]
export const orderhistory: Order[] = [
    {
        id: 1,
        img: "product/1.png",
        product: "Party Wear Gown",
        status: "Processing",
        size: "M",
        color: "Red",
        articleNumber: 4215738,
        units: 2,
        price: 21
    },
    {
        id: 2,
        img: "product/13.png",
        product: "Fancy watch",
        status: "Processing",
        size: "Free Size",
        color: "Brown",
        articleNumber: 5476182,
        units: 1,
        price: 10
    },
    {
        id: 3,
        img: "product/4.png",
        product: "Man shoes",
        status: "Processing",
        size: "8",
        color: "Black & white",
        articleNumber: 1756457,
        units: 1,
        price: 18
    },
    {
        id: 4,
        img: "product/10.png",
        product: "Ladies side bag",
        status: "Shipped",
        size: "Medium",
        color: "Yellow",
        articleNumber: 7451725,
        units: 1,
        price: 13
    },
    {
        id: 5,
        img: "product/12.png",
        product: "Ladies Hills",
        status: "Shipped",
        size: "8",
        color: "Pink",
        articleNumber: 4127421,
        units: 2,
        price: 10
    },
    {
        id: 6,
        img: "product/3.png",
        product: "Fancy Ladies Jacket",
        status: "Shipped",
        size: "XL",
        color: "Red",
        articleNumber: 3581714,
        units: 2,
        price: 24
    },
    {
        id: 7,
        img: "product/2.png",
        product: "Ladies Handbag",
        status: "Shipped",
        size: "Small",
        color: "Brown",
        articleNumber: 6748142,
        units: 1,
        price: 15
    },
    {
        id: 8,
        img: "product/15.png",
        product: "I phone 13 mobile",
        status: "Cancelled",
        size: "Small",
        color: "Blue",
        articleNumber: 5748214,
        units: 1,
        price: 250
    },
    {
        id: 9,
        img: "product/14.png",
        product: "Smart Watch",
        status: "Cancelled",
        size: "Free Size",
        color: "Black",
        articleNumber: 2471254,
        units: 2,
        price: 30
    },
    {
        id: 10,
        img: "product/11.png",
        product: "Slipper",
        status: "Cancelled",
        size: "6",
        color: "Brown",
        articleNumber: 8475112,
        units: 1,
        price: 6
    },
    {
        id: 11,
        img: "product/2.png",
        product: "Ladies Handbag",
        status: "Shipped",
        size: "Small",
        color: "Brown",
        articleNumber: 6748142,
        units: 1,
        price: 30
    },
    {
        id: 12,
        img: "product/15.png",
        product: "I phone 13 mobile",
        status: "Cancelled",
        size: "Small",
        color: "Blue",
        articleNumber: 5748214,
        units: 1,
        price: 250
    },
    {
        id: 13,
        img: "product/14.png",
        product: "Smart Watch",
        status: "Cancelled",
        size: "Free Size",
        color: "Black",
        articleNumber: 2471254,
        units: 2,
        price: 30
    },
    {
        id: 14,
        img: "product/11.png",
        product: "Slipper",
        status: "Cancelled",
        size: "6",
        color: "Brown",
        articleNumber: 8475112,
        units: 1,
        price: 6
    },
    {
        id: 15,
        img: "product/1.png",
        product: "Party Wear Gown",
        status: "Processing",
        size: "M",
        color: "Red",
        articleNumber: 4215738,
        units: 2,
        price: 21
    },
    {
        id: 16,
        img: "product/13.png",
        product: "Fancy watch",
        status: "Processing",
        size: "Free Size",
        color: "Brown",
        articleNumber: 5476182,
        units: 1,
        price: 10
    },
    {
        id: 17,
        img: "product/4.png",
        product: "Man shoes",
        status: "Processing",
        size: "8",
        color: "Black & white",
        articleNumber: 1756457,
        units: 1,
        price: 18
    },
    {
        id: 18,
        img: "product/10.png",
        product: "Ladies side bag",
        status: "Shipped",
        size: "Medium",
        color: "Yellow",
        articleNumber: 7451725,
        units: 1,
        price: 13
    },
    {
        id: 19,
        img: "product/12.png",
        product: "Ladies Hills",
        status: "Shipped",
        size: "8",
        color: "Pink",
        articleNumber: 4127421,
        units: 2,
        price: 10
    },
    {
        id: 20,
        img: "product/3.png",
        product: "Fancy Ladies Jacket",
        status: "Shipped",
        size: "XL",
        color: "Red",
        articleNumber: 3581714,
        units: 2,
        price: 24
    }
]
export const whislist: WishlistItem[] = [
    {
        name: "Women's Top",
        img: "ecommerce/product-table-6.png",
        star1: "fa-star-o",
        star2: "fa-star-o",
        price: "220",
        color: "text-success",
        stock: "In stock"
    },
    {
        name: "Men's Jacket",
        img: "ecommerce/product-table-2.png",
        star1: "fa-star",
        star2: "fa-star-half-o",
        price: "250",
        color: "text-danger",
        stock: "Out of stock"
    },
    {
        name: "Women's T-shirt",
        img: "ecommerce/product-table-4.png",
        star1: "fa-star",
        star2: "fa-star-half-o",
        price: "200",
        color: "text-danger",
        stock: "Out of stock"
    },
    {
        name: "Denim Jacket",
        img: "ecommerce/product-table-4.png",
        star1: "fa-star-half-o",
        star2: "fa-star-o",
        price: "300",
        color: "text-success",
        stock: "In stock"
    },
    {
        name: "Women's Dress",
        img: "ecommerce/product-table-5.png",
        star1: "fa-star-half-o",
        star2: "fa-star-o",
        price: "150",
        color: "text-danger",
        stock: "Out of stock"
    },
    {
        name: "Women's Jacket",
        img: "ecommerce/product-table-6.png",
        star1: "fa-star",
        star2: "fa-star",
        price: "250",
        color: "text-success",
        stock: "In stock"
    },
    {
        name: "Women's Dress",
        img: "ecommerce/product-table-5.png",
        star1: "fa-star-half-o",
        star2: "fa-star-o",
        price: "150",
        color: "text-danger",
        stock: "Out of stock"
    },
    {
        name: "Men's Shirt",
        img: "ecommerce/product-table-1.png",
        star1: "fa-star",
        star2: "fa-star-o",
        price: "210",
        color: "text-success",
        stock: "In stock"
    },
    {
        name: "Men's Shirt",
        img: "ecommerce/product-table-6.png",
        star1: "fa-star-half-o",
        star2: "fa-star-o",
        price: "150",
        color: "text-danger",
        stock: "out of stock"
    },
    {
        name: "Women's Top",
        img: "ecommerce/product-table-6.png",
        star1: "fa-star-o",
        star2: "fa-star-o",
        price: "120",
        color: "text-danger",
        stock: "Out of stock"
    },
    {
        name: "Men's Jacket",
        img: "ecommerce/product-table-2.png",
        star1: "fa-star",
        star2: "fa-star-half-o",
        price: "300",
        color: "text-success",
        stock: "In stock"
    },
    {
        name: " Women's T-shirt",
        img: "ecommerce/product-table-4.png",
        star1: "fa-star",
        star2: "fa-star-half-o",
        price: "150",
        color: "text-danger",
        stock: "Out of stock"
    }
]
export const pricing: PricingItem[] = [
    {
        id: 1,
        title: "standard",
        price: "10",
        disk: "50GB Disk Space",
        email: "50 Email Accounts",

        Sub: "Maintenance",
        domains: "15 Subdomains"
    },
    {
        id: 2,
        title: "PREMIUM",
        price: "20",
        disk: "10% on all product",
        email: "50 Email Accounts",

        Sub: "Maintenance",
        domains: "15 Subdomains"
    },
    {
        id: 3,
        title: " AUTHER PACK",
        price: "50",
        disk: "Upload 50 product",
        email: "50 Email Accounts",

        Sub: "Maintenance",
        domains: "15 Subdomains"
    },
    {
        id: 4,
        title: "auther pack",
        price: "50",
        disk: "Upload 50 product",
        email: "50 Email Accounts",

        Sub: "Maintenance",
        domains: "15 Subdomains"
    }
]
export const simplePricing: SimplePricingItem[] = [
    {
        id: 1,
        title: "Standard",
        price: "$15"
    },
    {
        id: 2,
        title: "Business",
        price: "$25"
    },
    {
        id: 3,
        title: "Premium",
        price: "$35"
    },
    {
        id: 4,
        title: "Extra",
        price: "$45"
    }
]
export const invoice: InvoiceItem[] = [
    {
        class: "width: 36%",
        class1: "opacity: 0.8",
        name: "Billed To",
        style: "width: 46%",
        title: "Admiro Matchett Vandelay Group LTD"
    },
    {
        class: "width: 21%;",
        class1: "opacity: 0.8",
        name: "Invoice Date",
        title: "09/03/2024"
    },
    {
        class1: "color: opacity: 0.8",
        name: "Invoice Number",
        title: "#VL25000365"
    }
]
export const datatable: DataTableItem[] = [
    {
        style: "box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;",
        children: [
            {
                class: "padding: 18px 15px;display:flex;align-items: center;gap: 10px;",
                title: "Project",
                style: "min-width: 7px;height: 7px;border: 4px solid #308e87;background: #fff;border-radius: 100%;display: inline-block;"
            },
            {
                class: "padding: 18px 15px;",
                title: "$4,000.00",

            },
            {
                class: "padding: 18px 15px;",
                title: "1",

            },
            {
                class: "padding: 18px 15px;text-align: right",
                title: "$4,000.00",

            }
        ]
    },
    {
        style: "box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;",
        children: [
            {
                class: "padding: 18px 15px;display:flex;align-items: center;gap: 10px;",
                title: "Creative Design",
                style: "min-width: 7px;height: 7px;border: 4px solid #FF3364;background: #fff;border-radius: 100%;display: inline-block;"
            },
            {
                class: "padding: 18px 15px;",
                title: "$8,000.00",

            },
            {
                class: "padding: 18px 15px;",
                title: "2",

            },
            {
                class: "padding: 18px 15px;text-align: right",
                title: "$16,000.00",

            }
        ]
    },
    {
        style: "box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;",
        children: [
            {
                class: "padding: 18px 15px;display:flex;align-items: center;gap: 10px;",
                title: "Web Development",
                style: "min-width: 7px;height: 7px;border: 4px solid #FFAE46;background: #fff;border-radius: 100%;display: inline-block;"
            },
            {
                class: "padding: 18px 15px;",
                title: "$2,000.00",

            },
            {
                class: "padding: 18px 15px;",
                title: "2",

            },
            {
                class: "padding: 18px 15px; text-align: right",
                title: "$4,000.00",

            }
        ]
    },
    {
        style: "box-shadow: 0px 10.9412px 10.9412px rgba(82, 77, 141, 0.04), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671);border-radius: 5.47059px;",
        children: [
            {
                class: "padding: 18px 15px;display:flex;align-items: center;gap: 10px;",
                title: "Graphics Design",
                style: "min-width: 7px;height: 7px;border: 4px solid #54BA4A;background: #fff;border-radius: 100%;display: inline-block;"
            },
            {
                class: "padding: 18px 15px;",
                title: "$2,000.00",

            },
            {
                class: "padding: 18px 15px;",
                title: "1",

            },
            {
                class: "padding: 18px 15px; text-align: right",
                title: "$2,000.00",

            }
        ]
    },
    {
        children: [
            {
                class: "",
                title: "",
                style: ""
            },
            {
                class: "",
                title: "",

            },
            {
                class: "padding: 5px 0; padding-top: 15px;",
                title: "Subtotal",

            },
            {
                class: "padding: 5px 0;text-align: right;padding-top: 15px;",
                title: "$26,000.00",

            }
        ]
    },
    {
        children: [
            {
                class: "",
                title: "",
                style: ""
            },
            {
                class: "",
                title: "",

            },
            {
                class: "padding: 5px 0;padding-top: 0;",
                title: "Tax(5%)",

            },
            {
                class: "padding: 5px 0;text-align: right;padding-top: 0;",
                title: "$1,000.00",

            }
        ]
    },
    {
        children: [
            {
                class: "",
                title: "",
                style: ""
            },
            {
                class: "",
                title: "",

            },
            {
                class: "padding: 10px 0;",
                title: "Amount Due (USD)",
                class1: "font-weight: 600;"

            },
            {
                class: "padding: 10px 0;text-align: right",
                title: "$27,000.00",
                class1: "font-weight: 600;"
            }
        ]
    }
]
export const invoice2: InvoiceItem[] = [
    {
        style: "display:flex;align-items:center; gap: 6px;flex-wrap: wrap;min-width: 136px;",
        style1: "opacity: 0.8; font-size: 16px; font-weight: 500;",
        name: "Invoice No.",
        class: "margin:0;font-weight:400; font-size: 16px",
        title: "#VL25000365"
    },
    {
        style: "display:flex;align-items:center; gap: 6px;flex-wrap: wrap;min-width: 136px;",
        style1: "opacity: 0.8; font-size: 16px; font-weight: 500;",
        name: "Date : ",
        class: "margin:0;font-weight:400; font-size: 16px",
        title: "09/03/2024"
    },
    {
        style: "display:flex;align-items:center; gap: 6px; flex-wrap: wrap;min-width: 146px;",
        style1: "opacity: 0.8; font-size: 16px; font-weight: 500;",
        name: "Payment Status :",
        class: "margin:0;font-weight:400; font-size: 16px;padding:6px 18px; background-color:rgba(84, 186, 74, 0.1);color:#0DA759; border-radius: 5px;",
        title: "Paid"
    },
    {
        style: "display:flex;align-items:center; gap: 6px; flex-wrap: wrap;",
        style1: "opacity: 0.8; font-size: 16px; font-weight: 500;min-width: 136px;",
        name: "Total Amount :",
        class: "margin:0;font-weight:400; font-size: 16px",
        title: "$26,410.00"
    }
]
export const addres: AddressItem[] = [
    {
        style: "width:70%; min-width: 304px;",
        class: "opacity: 0.8; font-size: 16px; font-weight: 500;",
        add: "BILLING ADDRESS",
        namestyle: "font-weight:400; margin: 12px 0 6px 0; font-size: 16px;",
        name: "Brooklyn Simmons",
        descclass: "width: 54%; display:block; line-height: 1.5; opacity: 0.8; font-size: 16px; font-weight: 400;",
        desc: " 2118 Thornridge Cir. Syracuse, Connecticut 35624, United State",
        numberclass: "line-height:2.6; opacity: 0.8; font-size: 16px; font-weight: 400;",
        number: " Phone : (239) 555-0108"
    },
    {
        style: "min-width: 280px;",
        class: "opacity: 0.8;font-size: 16px; font-weight: 500;",
        add: "SHIPPING ADDRESS",
        namestyle: "font-weight:400; margin: 12px 0 6px 0; font-size: 16px;",
        name: "Cameron Williamson",
        descclass: "width: 95%; display:block; line-height: 1.5; opacity: 0.8; font-size: 16px; font-weight: 400;",
        desc: " 2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
        numberclass: "line-height:2.6; opacity: 0.8; font-size: 16px; font-weight: 400;",
        number: "Phone : (219) 555-0114"
    }
]
export const invoiceheader: ProductCategory[] = [
    {
        title: "Products"
    },
    {
        title: "Quantity"
    },
    {
        title: "Price"
    },
    {
        title: "Unit"
    },
    {
        title: "Vat %"
    },
    {
        title: "Total"
    }
]
export const invoicetable1: InvoiceTable[] = [
    {
        class: "invoice-dark",
        style: "background-color: rgba(48, 142, 135, 0.1);box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);",
        img: "product/product-categories/laptop.png",
        title: "Apple Desktop",
        subtitle: "#XDG-6437",
        qty: "2",
        price: "$100",
        width: "width: 12%;",
        total: "$200"
    },
    {
        style: "box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);",
        img: "product/product-categories/watch.png",
        title: "Smart Watch",
        subtitle: "#XDG-6437",
        qty: "1",
        price: "$200",
        width: "width: 12%;",
        total: "$200"
    },
    {
        class: "invoice-dark",
        style: "background-color: rgba(48, 142, 135, 0.1);box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);",
        img: "product/product-categories/phone.png",
        title: "Apple iphone 13 Pro",
        subtitle: "#XDG-6437",
        qty: "1",
        price: "$10,000",
        width: "width: 12%;",
        total: "$10,000"
    },
    {
        style: "box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);",
        img: "product/product-categories/headphone.png",
        title: "Wireless Headphone",
        subtitle: "#XDG-6437",
        qty: "2",
        price: "$8,000",
        width: "width: 12%;",
        total: "$16,000"
    }
]
export const footerinvoice: FooterInvoice[] = [
    {
        title: "Subtotal :",
        style: "padding: 5px 24px 5px 0; padding-top: 15px;",
        price: "$26,400.00",
        style1: "padding: 5px 24px 5px 0; padding-top: 15px;"
    },
    {
        title: "VAT(0%) :",
        style: "padding: 5px 24px 5px 0;",
        price: "$0.00",
        style1: "padding: 5px 0;text-align: left;padding-top: 0;"
    },
    {
        title: "Shipping Rate :",
        style: "padding: 5px 24px 5px 0;min-width: 200px;",
        price: "$10.00",
        style1: "padding: 5px 0;text-align: left;padding-top: 0;"
    }
]
export const tableresponsive: TableResponsive[] = [
    {
        title: "CLIENT DETAILS",
        name: "Brooklyn Simmons",
        width: "width: 54%;",
        add: "2118 Thornridge Cir. Syracuse, Connecticut 35624, United State",
        number: "Phone : (239) 555-0108"
    },
    {
        title: "SHIPPING ADDRESS",
        name: "Brooklyn Simmons",
        add: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
        number: "Phone : (219) 555-0114"
    }
]
export const invoiceheader1: InvoiceHeader[] = [
    {
        style: "padding: 18px 15px; text-align: left",
        title: "Description",

    },
    {
        style: "padding: 18px 15px; text-align: center; border-inline: 3px solid #fff;",
        title: "Qty",

    },
    {
        style: "padding: 18px 15px; text-align: center;border-right: 3px solid #fff;",
        title: "Price",

    },
    {
        style: "padding: 18px 15px; text-align: center",
        title: "Subtotal",

    }
]
export const invoicetable2: InvoiceTable[] = [
    {
        style: "width: 3px; height: 37px; background-color:#308e87; ",
        title: "HTML Admin template",
        subtitle: "Regular License",
        qty: "2",
        price: "$35",
        total: "$70"
    },
    {
        style: "width: 3px; height: 37px; background-color:#FFAE46;  display:",
        title: "React Admin template",
        subtitle: "Regular License",
        qty: "1",
        price: "$25",
        total: "$50"
    },
    {
        style: "width: 3px; height: 37px; background-color:#0DA759; display:",
        title: "Laravel Admin template",
        subtitle: "Regular License",
        qty: "2",
        price: "$30",
        total: "$60"
    },
    {
        style: "width: 3px; height: 37px; background-color:#48A3D7; display:",
        title: "Vuejs Admin template",
        subtitle: "Regular License",
        qty: "3",
        price: "$20",
        total: "$60"
    }
]
export const tableresponsive1: TableResponsive[] = [
    {
        title: "Date :",
        data: "10 Mar, 2024"
    },
    {
        title: "Invoice No :",
        data: "#VL25000365"
    },
    {
        title: "Account No :",
        data: "0981234098765"
    },
    {
        title: "Due Amount :",
        data: "$7860.00"
    }
]
export const invoiceheader2: InvoiceHeader[] = [
    {
        style: "padding: 18px 15px;text-align: left; position: relative; border-top-left-radius: 10px;",
        title: "Description"
    },
    {
        style: "padding: 18px 15px;text-align: center",
        title: "Unite Price"
    },
    {
        style: "padding: 18px 15px;text-align: center",
        title: "Quantity"
    },
    {
        style: "padding: 18px 15px;text-align: center;position: relative; border-top-right-radius: 10px;",
        title: "Subtotal"
    }
]
export const invoicetable3: InvoiceTable[] = [
    {
        style: "padding: 30px;",
        title: "Proposal & Brochure Design",
        subtitle: "Regular License",
        price: "$300.00",
        qty: "1",
        total: "$300.00"
    },
    {
        style: "padding: 0 30px 30px;",
        title: "Web design and development",
        subtitle: "Regular License",
        price: "$400.00",
        qty: "2",
        total: "$800.00"
    },
    {
        style: "padding: 0 30px 30px;",
        title: "Logo & Brand design",
        subtitle: "Regular License",
        price: "$240.00",
        qty: "2",
        total: "$4800.00"
    },
    {
        style: "padding: 0 30px 30px;",
        title: "Stationary Design",
        subtitle: "Regular License",
        price: "$100.00",
        qty: "1",
        total: "$100.00"
    }
]
export const invoicefooter: InvoiceFooter[] = [
    {
        title: "Subtotal",
        price: "$6100.00"
    },
    {
        title: "Tax",
        price: "$50.00"
    },
    {
        title: "Discount",
        price: "$30.00"
    }
]
export const invoiceadd: InvoiceAdd[] = [
    {
        style: "font-weight:600;font-size: 16px; color: #308e87; display: block; margin-bottom: 8px;",
        title: "Brooklyn Simmons"
    },
    {
        style: "width: 75%; display:block; line-height: 1.5;  font-size: 16px; font-weight: 400;opacity: 0.8;",
        title: "2972  Westheimer Rd. Santa Ana, Illinois 85486 "
    },
    {
        style: "line-height:1.9;  font-size: 16px; font-weight: 400;opacity: 0.8; display:block;",
        title: "Phone : (219) 555-0114"
    },
    {
        style: "line-height:1.7;  font-size: 16px; font-weight: 400;opacity: 0.8; display:block;",
        title: "Email : yourmail@themesforest.com"
    },
    {
        style: "line-height:1.7;  font-size: 16px; font-weight: 400;opacity: 0.8; display:block;",
        title: "Website: www.websites.com"
    }
]
export const invoiceadd1: InvoiceAdd[] = [
    {
        style: "display:block; line-height: 1.5;  font-size: 16px; font-weight: 400;opacity: 0.8;",
        title: "2118 Thornridge Cir. Syracuse, Connecticut 35624, United State"
    },
    {
        style: "display:block; line-height: 1.5;  font-size: 16px; font-weight: 400;opacity: 0.8;",
        title: "Phone : (239) 555-0108"
    },
    {
        style: "display:block; line-height: 1.5;  font-size: 16px; font-weight: 400;opacity: 0.8;",
        title: "Email : Admiro@themesforest.com"
    },
    {
        style: "display:block; line-height: 1.5;  font-size: 16px; font-weight: 400;opacity: 0.8;",
        title: "Website: www.Admirothemes.com"
    }
]
export const data1: Data[] = [
    {
        style: "font-size: 16px; display:block; font-weight: 600; color:rgba(48, 142, 135, 1); margin-bottom: 14px;",
        title: "Invoice to :"
    },
    {
        style: "font-size: 16px; display:block; font-weight: 600; color:#308e87; margin-bottom: 8px;",
        title: "Brooklyn Simmons"
    },
    {
        style: "font-size: 16px; display:block;  opacity: 0.8; margin-bottom: 8px; width: 72%; line-height: 1.4;",
        title: "2972 Westheimer Rd. Santa Ana, Illinois 85486"
    },
    {
        style: "font-size: 16px; display:block;  opacity: 0.8; margin-bottom: 8px;",
        title: "Phone : (219) 555-0114"
    },
    {
        style: "font-size: 16px; display:block;  opacity: 0.8; margin-bottom: 8px;",
        title: "Email : yourmail@themesforest.com"
    },
    {
        style: "font-size: 16px; display:block;  opacity: 0.8; margin-bottom: 8px;",
        title: "Website: www.websites.com"
    }
]
export const data2: Data[] = [
    {
        style: "font-size: 16px;color: #308e87; display: block; font-weight: 600; margin-bottom: 20px;",
        title: "Bank Transfer"
    },
    {
        style: "color: #308e87; display: block; margin-bottom: 12px; font-weight: 600;",
        title: "Leslie Alexander"
    },
    {
        style: "display: block;  font-size: 16px; margin-bottom: 12px;",
        title: "Bank Account : 0981234098765"
    },
    {
        style: "display: block;  font-size: 16px; margin-bottom: 12px;",
        title: "Code : LEF098756"
    }
]
export const tables: Table[] = [
    {
        title: "Date :",
        desc: "10 Mar, 2024"
    },
    {
        title: "Invoice No :",
        desc: "#VL25000365"
    },
    {
        title: "Account No :",
        desc: "0981234098765"
    },
    {
        title: " Due Amount :",
        desc: "$7860.00"
    }
]
export const tableheader: Data[] = [
    {
        style: "padding: 18px 15px;text-align: center; position: relative; border-top-left-radius: 10px;",
        title: "No."
    },
    {
        style: "padding: 18px 16px;text-align: left;",
        title: "Description"
    },
    {
        style: "padding: 18px 15px;text-align: center",
        title: "Unite Price"
    },
    {
        style: "padding: 18px 15px;text-align: center",
        title: "Quantity"
    },
    {
        style: "padding: 18px 15px;text-align: center;position: relative; border-top-right-radius: 10px;",
        title: "Subtotal"
    }
]
export const tablesection = [
    {
        style: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        nostyle: "opacity: 0.8; font-weight: 600;",
        no: "1",
        titleclass: "padding: 16px; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        titlestyle: "font-weight:600; margin:4px 0px; font-size: 16px; color: #308e87;",
        title: "Proposal & Brochure Design",
        substyle: "opacity: 0.8; font-size: 16px;",
        subtitle: "Regular License",
        pricestyle: "width: 12%; text-align: center;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        priceclass: "font-weight: 600;",
        price: "$300.00",
        qtystyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        qty: "1",
        totalstyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        total: "$300.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        nostyle: "opacity: 0.8;font-weight: 600;",
        no: "2",
        titleclass: "padding: 16px;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        titlestyle: "font-weight:600; margin:4px 0px; font-size: 16px; color: #308e87;",
        title: "Web design and development",
        substyle: "opacity: 0.8; font-size: 16px;",
        subtitle: "Regular License",
        pricestyle: "width: 12%; text-align: center;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        priceclass: "font-weight: 600;",
        price: "$400.00",
        qtystyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        qty: "2",
        totalstyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        total: "$800.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        nostyle: "opacity: 0.8;font-weight: 600;",
        no: "3",
        titleclass: "padding: 16px;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        titlestyle: "font-weight:600; margin:4px 0px; font-size: 16px; color: #308e87;",
        title: "Logo & Brand design",
        substyle: "opacity: 0.8; font-size: 16px;",
        subtitle: "Regular License",
        pricestyle: "width: 12%; text-align: center;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        priceclass: "font-weight: 600;",
        price: "$240.00",
        qtystyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        qty: "2",
        totalstyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        total: "$4800.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        nostyle: "opacity: 0.8;font-weight: 600;",
        no: "4",
        titleclass: "padding: 16px;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        titlestyle: "font-weight:600; margin:4px 0px; font-size: 16px; color: #308e87;",
        title: "Stationary Design",
        substyle: "opacity: 0.8; font-size: 16px;",
        subtitle: "Regular License",
        pricestyle: "width: 12%; text-align: center;border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        priceclass: "font-weight: 600;",
        price: "$100.00",
        qtystyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);",
        qty: "1",
        totalstyle: "width: 12%; text-align: center; border-bottom: 1px dashed rgba(82, 82, 108, 0.2);background: rgba(48, 142, 135 , 0.1);",
        total: "$100.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "",
        nostyle: "",
        no: "",
        titleclass: "",
        titlestyle: "",
        title: "",
        substyle: "",
        subtitle: "",
        pricestyle: "",
        priceclass: "opacity: 0.8;font-weight: 600;",
        price: "",
        qtystyle: "text-align: center; padding:35px 0 18px;",
        qty: "Subtotal",
        totalstyle: "text-align: center;background: var(--light-shade-primary); display: block; padding:35px 0 18px;",
        total: "$6100.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "",
        nostyle: "",
        no: "",
        titleclass: "",
        titlestyle: "",
        title: "",
        substyle: "",
        subtitle: "",
        pricestyle: "",
        priceclass: "opacity: 0.8;font-weight: 600;",
        price: "",
        qtystyle: "width: 12%; text-align: center;",
        qty: "VAT / Tax 15%",
        totalstyle: "text-align: center;background: var(--light-shade-primary); display:block; padding-bottom: 18px;",
        total: "$50.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "",
        nostyle: "",
        no: "",
        titleclass: "",
        titlestyle: "",
        title: "",
        substyle: "",
        subtitle: "",
        pricestyle: "",
        priceclass: "opacity: 0.8;font-weight: 600;",
        price: "",
        qtystyle: "width: 12%; text-align: center;",
        qty: "Discount",
        totalstyle: "text-align: center;background: var(--light-shade-primary); display: block; padding-bottom: 18px;",
        total: "$30.00",
        totalclass: "color: #308e87; font-weight: 600;opacity: 0.9;"
    },
    {
        style: "",
        nostyle: "",
        no: "",
        titleclass: "",
        titlestyle: "",
        title: "",
        substyle: "",
        subtitle: "",
        pricestyle: "",
        priceclass: "opacity: 0.8;font-weight: 600;",
        price: "",
        qtystyle: "width: 12%; text-align: center;",
        qty: "Total Due",
        totalstyle: "text-align: center;background: var(--light-shade-primary);",
        total: "$6120.00",
        totalclass: "color: #ffffff; font-weight: 600;opacity: 0.9;background: #308e87; padding: 12px 37px; margin-top: 0px; display: block;"
    }
]
export const invoice6: Table[] = [

    {
        title: "Red Shirt",
        desc: "Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.",
        hours: "3",
        rate: "$75",
        Subtotal: "$375.00"
    }, {
        title: "Brown Dress",
        desc: "Aask - Brown Polyester Blend Women's Fit & Flare Dress.",
        hours: "5",
        rate: "$75",
        Subtotal: "$225.00"
    },
    {
        title: "Flower Dress",
        desc: "Skyblue Flower Printed Sleevless Strappy Dress.",
        hours: "10",
        rate: "$75",
        Subtotal: "$750.00"
    },
    {
        title: "Red Skirt",
        desc: "R L F - Red Cotton Blend Women's A-Line Skirt.",
        hours: "10",
        rate: "$75",
        Subtotal: "$750.00"
    }
]