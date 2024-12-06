interface ButtonItem {
    btnclass?: string;
    icon?: string;
    title?: string;
}
interface FileItem {
    id?: string
    icon: string;
    title: string;
    store?: string;
    time?: string;
}
interface DocumentItem {
    id: number;
    icon: string;
    name: string;
    day: string;
}
interface StorageItem {
    id: number;
    name: string;
    icon: string;
    time: string;
    file: string;
}
export const filebtn: ButtonItem[] = [
    {
        btnclass: "btn-primary",
        icon: "home",
        title: "Home"
    },
    {
        btnclass: "btn-light font-dark",
        icon: "folder",
        title: "All"
    },
    {
        btnclass: "btn-light font-dark",
        icon: "clock",
        title: "Recent "
    },
    {
        btnclass: "btn-light font-dark",
        icon: "star",
        title: "Starred"
    },
    {
        btnclass: "btn-light font-dark",
        icon: "alert-circle",
        title: "Recovery "
    },
    {
        btnclass: "btn-light font-dark",
        icon: "trash-2",
        title: "Deleted"
    }
]
export const quicks: FileItem[] = [
    {
        icon: "fa-brands fa-youtube text-danger",
        title: "Videos"
    },
    {
        icon: "fa-solid fa-table-cells text-info",
        title: "Apps"
    },
    {
        icon: "fa-solid fa-file text-secondary",
        title: "Document"
    },
    {
        icon: "fa-solid fa-music text-warning",
        title: "Music"
    },
    {
        icon: "fa-solid fa-download text-primary",
        title: "Download"
    },
    {
        icon: "fa-solid fa-folder text-info",
        title: "Folder"
    },
    {
        icon: "fa-solid fa-file-zipper text-secondary",
        title: "Zip"
    },
    {
        icon: "fa-solid fa-trash text-danger",
        title: "Trash"
    }
]
export const folders: StorageItem[] = [
    {
        id: 1,
        name: "Tivo admin",
        icon: "fa-solid fa-file-zipper text-secondary fs-1",
        time: "2 Hour ago",
        file: "20 file"
    },
    {
        id: 2,
        name: "Viho admin",
        icon: "fa-solid fa-folder text-secondary fs-1",
        time: "3 Hour ago",
        file: "14 file"
    },
    {
        id: 3,
        name: "Unice admin",
        icon: "fa-solid fa-file-zipper text-secondary fs-1",
        time: "  3 Day ago",
        file: "15 file"
    },
    {
        id: 4,
        name: "Koho admin",
        icon: "fa-solid fa-folder text-secondary fs-1",
        time: "1 Day ago",
        file: "10 file"
    }
]
export const files: FileItem[] = [
    {
        icon: "fa-solid fa-folder text-info fs-4",
        title: "Logo.psd",
        store: "7 Hour ago, 2.0 MB",

    },
    {
        icon: "fa-solid fa-file-excel text-success fs-4",
        title: "Backend.xls",
        store: "2 Day ago, 3.0 GB",

    },
    {
        icon: "fa-solid fa-file-zipper text-secondary fs-4",
        title: "Project.zip",
        store: "1 Day ago, 1.9 GB",

    },
    {
        icon: "fa-solid fa-folder text-info fs-4",
        title: "Report.font",
        store: "1 Day ago, 0.9 KB",

    }
]