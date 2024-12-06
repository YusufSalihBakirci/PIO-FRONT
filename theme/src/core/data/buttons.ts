interface drop {
    classes: string,
    title: string,
    text?: string
}
interface item {
    classes: string,
    checked?: boolean
}

export const button: drop[] = [
    {
        classes: "btn-primary",
        title: "Primary Button"
    },
    {
        classes: "btn-secondary",
        title: "Secondary Button"
    },
    {
        classes: "btn-info text-light",
        title: "Info Button"
    },
    {
        classes: "btn-success",
        title: "Success Button"
    },
    {
        classes: "btn-warning text-light",
        title: "Warning Button"
    },
    {
        classes: "btn-danger",
        title: "Danger Button"
    },
    {
        classes: "btn-light text-dark",
        title: "Light Button"
    }
]
export const buttons: drop[] = [
    {
        classes: "btn-primary",
        title: "Primary Button"
    },
    {
        classes: "btn-secondary",
        title: "Secondary Button"
    },
    {
        classes: "btn-success",
        title: "Success Button"
    },
    {
        classes: "btn-info text-white",
        title: "Info Button"
    },
    {
        classes: "btn-warning text-white",
        title: "Warning Button"
    },
    {
        classes: "btn-danger",
        title: "Danger Button"
    },
    {
        classes: "btn-light text-dark",
        title: "Light Button"
    }
]
export const flat: item[] = [
    {
        classes: "btn-primary"
    },
    {
        classes: "btn-secondary"
    },
    {
        classes: "btn-success"
    },
    {
        classes: "btn-info text-white"
    },
    {
        classes: "btn-warning text-white"
    },
    {
        classes: "btn-danger"
    },
    {
        classes: "btn-light text-dark"
    },
    {
        classes: "btn-dark"
    },
]
export const actives: item[] = [
    {
        classes: "btn-primary"
    },
    {
        classes: "btn-secondary"
    },
    {
        classes: "btn-success"
    },
    {
        classes: "btn-info text-white"
    },
    {
        classes: "btn-warning text-white"
    },
    {
        classes: "btn-danger text-light"
    },
    {
        classes: "btn-light text-dark"
    }
]
export const outline: drop[] = [
    {
        classes: "btn-outline-primary",
        title: "Primary Button",
        text: ""
    },
    {
        classes: "btn-outline-secondary",
        title: "Secondary Button",
        text: ""
    },
    {
        classes: "btn-outline-info",
        title: "Info Button",
        text: ""
    },
    {
        classes: "btn-outline-warning",
        title: "Warning Button",
        text: ""
    },
    {
        classes: "btn-outline-danger",
        title: "Danger Button",
        text: ""
    },
    {
        classes: "btn-outline-light ",
        text: "text-dark",
        title: "Light Button"
    }
]
