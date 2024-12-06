interface image {
    img: string,
    active: boolean
}
interface imgs {
    img: string
}
interface cap {
    img: string,
    active: boolean,
    title: string,
    desc: string
}
export const slidesonly: image[] = [
    {
        img: "slider/11.jpg",
        active: true
    },
    {
        img: "slider/9.jpg",
        active: false
    },
    {
        img: "slider/6.jpg",
        active: false
    }
]
export const autoplay: imgs[] = [
    {
        img: "slider/1.jpg"
    },
    {
        img: "slider/2.jpg"
    },
    {
        img: "slider/3.jpg"
    },
    {
        img: "slider/4.jpg"
    },
    {
        img: "slider/5.jpg"
    },
    {
        img: "slider/6.jpg"
    },
    {
        img: "slider/7.jpg"
    },
    {
        img: "slider/8.jpg"
    },
    {
        img: "slider/9.jpg"
    },
    {
        img: "slider/10.jpg"
    },
    {
        img: "slider/11.jpg"
    }
]
export const indicators: image[] = [
    {
        img: "slider/3.jpg",
        active: true
    },
    {
        img: "slider/8.jpg",
        active: false
    },
    {
        img: "slider/10.jpg",
        active: false
    }
]
export const captions: cap[] = [
    {
        img: "slider/9.jpg",
        title: "The area in the house that is most comfortable.",
        desc: "You can watch folks you wouldn't have in your house amuse you in your living room thanks to the development of television.",
        active: true
    },
    {
        img: "slider/1.jpg",
        title: "Drawing Room",
        active: false,
        desc: "Regardless of how big or tiny your home is, think about hiring an interior designer. They give you a calm living atmosphere in addition to decorating your home."
    },
    {
        img: "slider/2.jpg",
        title: "House Interior",
        active: false,
        desc: "If you want to alter your way of life, start with redesigning your house's interior."
    }
]
export const cross: image[] = [
    {
        img: "slider/1.jpg",
        active: true
    },
    {
        img: "slider/11.jpg",
        active: false
    },
    {
        img: "slider/7.jpg",
        active: false
    },
    {
        img: "slider/10.jpg",
        active: false
    }
]
export const individual: image[] = [
    {
        img: "slider/5.jpg",
        active: true
    },
    {
        img: "slider/2.jpg",
        active: false
    },
    {
        img: "slider/10.jpg",
        active: false
    }
]
export const disable: image[] = [
    {
        img: "slider/4.jpg",
        active: true
    },
    {
        img: "slider/8.jpg",
        active: false
    },
    {
        img: "slider/6.jpg",
        active: false
    }
]
export const dark: cap[] = [
    {
        img: "slider/1.jpg",
        title: "We decorate our homes",
        desc: "If you have been dreaming about bringing your living room together, our designers are here to help. Come see what we can do for your space.",
        active: true
    },
    {
        img: "slider/3.jpg",
        title: "This couch is a great topic of conversation.",
        desc: "A sofa is the ideal spot to enjoy a movie, nod off, and wake up.",
        active: false
    },
    {
        img: "slider/6.jpg",
        title: "Sometimes all you really need to unwind is a comfortable couch.",
        desc: "A house you can create with your friends is a great place.",
        active: false
    }
]