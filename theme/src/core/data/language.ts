interface lang {
    icon: string,
    lan: string,
    txt: string,
    span?: string
}

export const language: lang[] = [
    {
        icon: "flag-icon-us",
        lan: "English",
        txt: "EN",
        span: "(US)"
    },
    {
        icon: "flag-icon-tr",
        lan: "Türkçe",
        span: "(TR)",
        txt: "TR"
    }
]