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
        icon: "flag-icon-de",
        lan: "Deutsch",
        txt: "DE"
    },
    {
        icon: "flag-icon-es",
        lan: "Español",
        txt: "ES"
    },
    {
        icon: "flag-icon-fr",
        lan: "Français",
        txt: "FR"
    },
    {
        icon: "flag-icon-pt",
        lan: "Português",
        txt: "PT",
        span: "(BR)"
    },
    {
        icon: "flag-icon-cn",
        txt: "CN",
        lan: "简体中文"
    },
    {
        icon: "flag-icon-ae",
        lan: "لعربية",
        span: "(AR)",
        txt: "AR"
    }
]