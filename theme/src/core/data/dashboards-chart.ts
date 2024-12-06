import { data, data1 } from "@/core/data/chart-data"
var secondary = localStorage.getItem('secondary_color') || "#f39159";
var primary = localStorage.getItem('primary_color') || "#308e87";
export const series = [
    {
        name: "Active",
        data: [5000, 6000, 7800, 4000, 5000],
    },
    {
        name: "Bounce",
        data: [8000, 9600, 5600, 9000, 8000],
    },
]
export const series1 = [76, 67, 61, 90]
export const series2 = [
    {
        name: "Network",
        data: [
            {
                x: "Jan",
                y: 50,
            },
            {
                x: "Feb",
                y: 600,
            },
            {
                x: "Mar",
                y: 350,
            },
            {
                x: "Apr",
                y: 410,
            },
            {
                x: "May",
                y: 410,
            },
            {
                x: "Jun",
                y: 600,
            },
            {
                x: "Jul",
                y: 500,
            },
            {
                x: "Aug",
                y: 500,
            },
            {
                x: "Sep",
                y: 800,
            },
            {
                x: "Oct",
                y: 410,
            },
            {
                x: "Nov",
                y: 350,
            },
            {
                x: "Dec",
                y: 410,
            },
        ],
    },
]
export const series3 = [46]
export const series4 = [
    {
        name: "series1",
        data: [2.8, 4.2, 2.9, 3, 4, 4.8, 3.3, 4, 4, 3.6],
    },
    {
        name: "series2",
        data: [2, 6, 5, 4.3, 2, 1.8, 2.2, 3, 3, 2.6],
    },
]
export const series5 = [
    {
        name: "Revenue",
        data: [
            60, 70, 48, 55, 48, 40, 50, 65, 52, 70, 60, 68, 50, 65, 41, 58, 70, 41,
            58, 70, 41, 58, 70, 41, 58, 70,
        ],
    },
]
export const series6 = [
    {
        name: "Earning",
        type: "area",
        data: [50, 60, 55, 45, 40, 45, 50, 48, 55, 40, 45, 40, 48, 50, 48, 40],
    },
]
export const series7 = [
    {
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 5],
    },
    {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 10],
    },
]
export const series8 = [
    {
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 5],
    },
    {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 10],
    },
]
export const series9 = [70]
export const series10 = data
export const series11 = data1
export const series12 = data
export const series13 = [
    {
        name: "Good",
        data: [380, 600, 500, 800, 650, 480, 520, 380, 620, 400, 380, 550],
    },
    {
        name: "Very Good",
        data: [690, 500, 600, 600, 500, 650, 800, 400, 400, 550, 450, 500],
    },
]
export const series14 = [80, 50, 30, 60]
export const series15 = [76, 67, 61, 90]
export const series16 = [70]
export const series19 = [
    {
        name: "Daily",
        data: [
            2.15, 3, 1.5, 2, 2.4, 3, 2.4, 2.8, 1.5, 1.7, 3, 2.5, 3, 2, 2.15, 3,
            1.1,
        ],
    },
    {
        name: "Weekly",
        data: [
            -2.15, -3, -1.5, -2, -2.4, -3, -2.4, -2.8, -1.5, -1.7, -3, -2.5, -3,
            -2, -2.15, -3, -1.1,
        ],
    },
    {
        name: "Monthly",
        data: [
            -2.25, -2.35, -2.45, -2.55, -2.65, -2.75, -2.85, -2.95, -3.0, -3.1,
            -3.2, -3.25, -3.1, -3.0, -2.95, -2.85, -2.75,
        ],
    },
    {
        name: "Yearly",
        data: [
            2.25, 2.35, 2.45, 2.55, 2.65, 2.75, 2.85, 2.95, 3.0, 3.1, 3.2, 3.25,
            3.1, 3.0, 2.95, 2.85, 2.75,
        ],
    },
]
export const series20 = [
    {
        name: "Desktops",
        data: [210, 180, 650, 200, 600, 100, 800, 300, 500],
    },
]

export const chartOptions = {
    chart: {
        type: "bar",
        height: 225,
        offsetX: -20,
        offsetY: 10,
        toolbar: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "75%",
            borderRadius: 2,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 6,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        borderColor: "#e5e5e5",
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    colors: [secondary, primary],
    xaxis: {
        categories: ["Aug", "Sep", "Oct", "Nov", "Dec"],
        tickAmount: 4,
        tickPlacement: "between",
        labels: {
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans', sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        categories: ["$ 2000", "$ 4000", "$ 6000", "$ 8000", "$10 000"],
        labels: {
            formatter: function (val: string) {
                return "$" + val;
            },
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans, sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
    },
    fill: {
        opacity: 1,
    },
    responsive: [
        {
            breakpoint: 1541,
            options: {
                chart: {
                    height: 233,
                },
                plotOptions: {
                    bar: {
                        columnWidth: "80%",
                    },
                },
                grid: {
                    padding: {
                        right: 0,
                    },
                },
            },
        },
    ],
}
export const chartOptions1 = {
    chart: {
        height: 380,
        type: "radialBar",
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined,
            },
            dataLabels: {
                name: {
                    fontSize: "22px",
                },
                value: {
                    fontSize: "16px",
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w: number) {
                        return 249;
                    },
                },
            },
            track: {
                background: "var(--body-color)",
            },
        },
    },
    colors: [
        primary,
        secondary,
        "#ea9200",
        "#e74b2b",
    ],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0,
        },
        formatter: function (seriesName: string, opts: any) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
            vertical: 2,
        },
    },
    responsive: [
        {
            breakpoint: 1711,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 1591,
            options: {
                chart: {
                    height: 320,
                },
            },
        },
        {
            breakpoint: 1481,
            options: {
                chart: {
                    height: 300,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1435,
            options: {
                chart: {
                    offsetX: -20,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 240,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 380,
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 335,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 300,
                },
                legend: {
                    show: false,
                },
            },
        },
    ],
}
export const chartOptions2 = {
    chart: {
        type: "area",
        height: 350,
        animations: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    grid: {
        show: true,
        borderColor: "#e5e5e5",
    },
    fill: {
        opacity: 0.8,
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [],
        },
    },
    colors: [primary],
    markers: {
        size: 6,
        colors: "var(--body-color)",
        strokeColor: primary,
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 0,
        hover: {
            size: 9,
        },
    },
    tooltip: {
        intersect: true,
        shared: false,
    },
    theme: {
        palette: "palette1",
    },
    yaxis: {
        categories: [
            "000k",
            "100k",
            "200k",
            "300k",
            "400k",
            "500k",
            "300k",
            "400k",
            "500k",
        ],
        labels: {
            formatter: function (val: string) {
                return val + "k";
            },
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans, sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans', sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 255,
                },
            },
        },
        {
            breakpoint: 1321,
            options: {
                chart: {
                    height: 260,
                },
            },
        },
        {
            breakpoint: 1252,
            options: {
                chart: {
                    height: 275,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 360,
                },
            },
        },
        {
            breakpoint: 481,
            options: {
                chart: {
                    height: 260,
                    offsetY: 20,
                },
            },
        },
    ],
}
export const chartOptions3 = {
    chart: {
        type: "radialBar",
        offsetY: -10,
        height: 400,
        sparkline: {
            enabled: false,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "rgba(48, 142, 135, 0.12)",
                strokeWidth: "100%",
            },
            dataLabels: {
                name: {
                    show: true,
                    offsetY: -20,
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#292929",
                },
                value: {
                    offsetY: -10,
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#AAA3A0",
                },
            },
        },
        bar: {
            horizontal: false,
            dataLabels: {
                position: "bottom",
            },
        },
    },
    labels: ["March. 2024"],
    stroke: {
        lineCap: "round",
    },
    grid: {
        padding: {
            top: -40,
        },
    },
    colors: [primary],
    responsive: [
        {
            breakpoint: 1557,
            options: {
                chart: {
                    height: 365,
                },
            },
        },
        {
            breakpoint: 1491,
            options: {
                chart: {
                    height: 330,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 380,
                },
            },
        },
        {
            breakpoint: 1240,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 400,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
    ],
}
export const chartOptions4 = {
    chart: {
        height: 270,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: [secondary, primary],
    stroke: {
        curve: "smooth",
        width: 5,
    },
    grid: {
        show: true,
        borderColor: "#E5E5E5",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                fontSize: '14px',
                colors: "#AAA3A0",
            },
            formatter: (value: TemplateStringsArray) => {
                return `$ ${value}000`;
            },
        },
    },
    xaxis: {
        type: "category",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
        ],
        tickAmount: 18,
        labels: {
            minHeight: undefined,
            maxHeight: 28,
            offsetX: 10,
            offsetY: 0,
            style: {
                fontWeight: 500,
                fontSize: '14px',
                colors: "#AAA3A0",
            },
            tooltip: {
                enabled: false,
            },
        },
        axisBorder: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 361,
            options: {
                chart: {
                    height: 190,
                },
            },
        },
    ],
}
export const chartOptions5 = {
    chart: {
        type: "bar",
        height: 250,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "60%",
        },
    },
    colors: [primary],
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    fill: {
        opacity: 0.2,
    },
    tooltip: {
        enabled: false,
    },
    states: {
        normal: {
            filter: {
                type: "none",
            },
        },
        hover: {
            filter: {
                type: "none",
            },
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: "none",
            },
        },
    },
}
export const chartOptions6 = {
    annotations: {
        points: [
            {
                x: 250,
                y: 45,
                marker: {
                    size: 10,
                    fillColor: "#fff",
                    strokeColor: primary,
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    chart: {
        height: 345,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        width: [4, 3],
        curve: "smooth",
    },
    grid: {
        show: false,
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "50%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: [primary],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            opacityFrom: 0.9,
            opacityTo: 0,
            stops: [0, 100],
        },
    },
    xaxis: {
        tickAmount: undefined,
        tickPlacement: "String",
        offsetX: 0,
        offsetY: 0,
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "", "", "", "",
        ],
        labels: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            low: 0,
            offsetX: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        min: 0,
        tickAmount: 6,
        tickPlacement: "between",
        show: false,
    },
    tooltip: {
        x: {
            format: "MM",
        },
    },
    responsive: [
        {
            breakpoint: 1875,
            options: {
                annotations: {
                    points: [],
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    height: 365,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
        {
            breakpoint: 768,
            options: {
                chart: {
                    height: 370,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 250,
                },
            },
        },
    ],
}
export const chartOptions7 = {
    chart: {
        type: "bar",
        height: 153,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 0,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#D5E8E6", primary],
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1661,
            options: {
                chart: {
                    width: 150,
                    offsetX: -30,
                },
            },
        },
        {
            breakpoint: 1451,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                    height: 140,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 150,
                    height: 130,
                },
            },
        },
    ],
}
export const chartOptions8 = {
    chart: {
        type: "bar",
        height: 153,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 0,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#faded1", secondary],
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1601,
            options: {
                chart: {
                    width: 150,
                    offsetX: -30,
                },
            },
        },
        {
            breakpoint: 1451,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                    height: 140,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 150,
                    height: 130,
                },
            },
        },
    ],
}
export const chartOptions9 = {
    chart: {
        height: 350,
        type: "radialBar",
        offsetY: 0,
    },
    stroke: {
        dashArray: 20,
        curve: "smooth",
        lineCap: "round",
    },
    grid: {
        padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: "75%",
                image: require('@/assets/images/apexchart/radial-image.png'),
                imageWidth: 210,
                imageHeight: 210,
                imageClipped: false,
            },
            track: {
                show: true,
                background: "#EDF6F0",
                strokeWidth: "97%",
                opacity: 0.4,
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: "20px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,

                    fontFamily: '"Nunito Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#292929",
                    offsetY: 6,
                    formatter: function (val: string) {
                        return val + "%";
                    },
                },
            },
        },
    },
    labels: ["Selling rate", "Returning: 3.2k"],
    colors: [primary, secondary],
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1580,
            options: {
                chart: {
                    height: 340,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "75%",
                            imageWidth: 150,
                            imageHeight: 150,
                        },
                        dataLabels: {
                            name: {
                                fontSize: "14px",
                                offsetY: -8,
                            },
                            value: {
                                fontSize: "18px",
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1535,
            options: {
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "68%",
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1501,
            options: {
                chart: {
                    height: 350,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "75%",
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1370,
            options: {
                chart: {
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1321,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
    ],
}
export const chartOptions10 = {
    annotations: {
        points: [
            {
                x: new Date("03 Dec 2012").getTime(),
                y: 36.22,
                marker: {
                    size: 8,
                    fillColor: primary,
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: "smooth",
        lineCap: "square",
        colors: undefined,
        width: 3,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        show: false,
        padding: {
            top: -40,
            right: 0,
            bottom: -40,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: [primary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
}
export const chartOptions11 = {
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    annotations: {
        points: [
            {
                x: new Date("22 Nov 2012").getTime(),
                y: 35.23,
                marker: {
                    size: 8,
                    fillColor: secondary,
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: false,
        padding: {
            top: -40,
            right: 0,
            bottom: -40,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: [secondary],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
}
export const chartOptions12 = {
    annotations: {
        points: [
            {
                x: new Date("29 Nov 2012").getTime(),
                y: 39.28,
                marker: {
                    size: 8,
                    fillColor: "#E6B54D",
                    strokeColor: "#fff",
                    strokeWidth: 5,
                    radius: 5,
                },
            },
        ],
    },
    chart: {
        type: "area",
        height: 170,
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        show: false,
        padding: {
            top: -40,
            right: 0,
            bottom: -40,
            left: 0,
        },
    },
    legend: {
        show: false,
    },
    colors: ["#E6B54D"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
}
export const chartOptions13 = {
    colors: [primary, secondary],
    chart: {
        type: "bar",
        height: 325,
        offsetX: 0,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40%",
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
    },
    grid: {
        show: true,
        borderColor: "#E5E5E5",
        position: "back",
    },
    dataLabels: {
        enabled: false,
    },

    tooltip: {
        enabled: false,
    },
    yaxis: {
        show: true,
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
            formatter: (value: string) => {
                return `${value}k`;
            },
        },
    },
    xaxis: {
        show: true,
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",

        ],
        labels: {
            show: true,
            style: {
                fontWeight: 500,
                colors: "#AAA3A0",
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1600,
            options: {
                chart: {
                    height: 360,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
                    },
                ],
            },
        },
        {
            breakpoint: 531,
            options: {
                chart: {
                    height: 200,
                },
                series: [
                    {
                        name: "Good",
                        data: [170, 250, 350, 150, 230, 120, 330],
                    },
                    {
                        name: "Very Good",
                        data: [290, 180, 120, 290, 370, 250, 230],
                    },
                ],
            },
        },
    ],
}
export const chartOptions14 = {
    chart: {
        width: 360,
        type: "donut",
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 1330,
            options: {
                chart: {
                    width: 280,
                },
            },
        },
        {
            breakpoint: 680,
            options: {
                chart: {
                    width: 250,
                },
            },
        }
    ],
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "83%",
                labels: {
                    show: true,
                    name: {
                        offsetY: 4,
                    },
                    total: {
                        show: true,
                        fontSize: "20px",
                        fontFamily: "Outfit', sans-serif",
                        fontWeight: 800,
                        label: 'Reading',
                        formatter: () => "80",
                    },
                },
            },
        },
    },
    labels: ['Reading', 'Writing', 'Video', 'Assignments'],
    legend: {
        position: "bottom",
        offsetY: 0,
        height: 50,
    },
    colors: [primary, "#E6B54D", "#E74B2B", secondary],
}
export const chartOptions15 = {
    chart: {
        type: "bar",
        height: 110,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 0,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#D5E8E6", primary],
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1661,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1300,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 670,
            options: {
                chart: {
                    offsetX: -30,
                },
            },
        },
    ],
}
export const chartOptions16 = {
    chart: {
        type: "bar",
        height: 110,
        stacked: true,
        stackType: "100%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "40px",
            borderRadius: 0,
        },
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 1,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    colors: ["#faded1", secondary],
    xaxis: {
        show: false,
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    tooltip: {
        marker: {
            show: false,
        },
        fixed: {
            enabled: false,
            position: "bottomRight",
            offsetX: 0,
            offsetY: 0,
        },
    },
    responsive: [
        {
            breakpoint: 1661,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1300,
            options: {
                chart: {
                    width: 130,
                },
            },
        },
        {
            breakpoint: 670,
            options: {
                chart: {
                    offsetX: -30,
                },
            },
        },
    ],
}
export const chartOptions17 = {
    chart: {
        height: 300,
        type: "radialBar",
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "30%",
                background: "transparent",
                image: undefined,
            },
            dataLabels: {
                name: {
                    fontSize: "22px",
                },
                value: {
                    fontSize: "16px",
                },
                total: {
                    show: true,
                    label: "Total",
                    formatter: function (w: number) {
                        return 249;
                    },
                },
            },
            track: {
                background: "var(--body-color)",
            },
        },
    },

    colors: [
        primary, secondary, "#ea9200", "#e74b2b",
    ],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0,
        },
        formatter: function (seriesName: string, opts: any) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
            vertical: 2,
        },
    },
    responsive: [
        {
            breakpoint: 1445,

            options: {
                chart: {

                    offsetX: -10,
                },
                legend: {
                    show: false,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 2,
                            size: "20%",
                        },
                        dataLabels: {
                            total: {
                                show: false,
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1435,

            options: {
                chart: {
                    offsetX: 10,
                },
            },
        },
        {
            breakpoint: 1430,

            options: {
                chart: {
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1400,

            options: {
                chart: {
                    height: 250,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1240,

            options: {
                chart: {
                    height: 235,
                    offsetX: -10,
                },
            },
        },
        {
            breakpoint: 1200,
            options: {
                chart: {
                    height: 300,
                    offsetX: -10,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 5,
                            size: "30%",
                        },
                        dataLabels: {
                            total: {
                                show: true,
                            },
                        },
                    },
                },
            },
        },
    ],
}
export const chartOptions18 = {
    chart: {
        height: 345,
        type: "radialBar",
        offsetY: 0,
    },

    stroke: {
        dashArray: 20,
        curve: "smooth",
        lineCap: "round",
    },
    grid: {
        padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
                size: "75%",
                image: require('@/assets/images/apexchart/radial-image.png'),
                imageWidth: 200,
                imageHeight: 200,
                imageClipped: false,
            },
            track: {
                show: true,
                background: "var(--body-color)",
                strokeWidth: "97%",
                opacity: 0.4,
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: "20px",
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    fontFamily: '"Nunito Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#292929",
                    offsetY: 6,
                    formatter: function (val: string) {
                        return val + "%";
                    },
                },
            },
        },
    },
    labels: ["Selling rate", "Returning: 3.2k"],
    colors: [primary, secondary],
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1621,
            options: {
                chart: {
                    height: 340,
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        hollow: {
                            size: "75%",
                            image: "../assets/images/apexchart/radial-image.png",
                            imageWidth: 170,
                            imageHeight: 170,
                        },
                    },
                },
            },
        },
        {
            breakpoint: 1581,
            options: {
                chart: {
                    height: 300,
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "14px",
                            },
                            value: {
                                fontSize: "16px",
                            },
                        },
                    },
                },
            },
        },
        {
            breakpoint: 531,
            options: {
                chart: {
                    height: 300,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%",
                            imageWidth: 150,
                            imageHeight: 150,
                        },
                    },
                },
            },
        },
        {
            breakpoint: 426,
            options: {
                chart: {
                    height: 280,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "70%",
                            imageWidth: 100,
                            imageHeight: 100,
                        },
                    },
                },
            },
        },
    ],
}
export const chartOptions19 = {
    chart: {
        type: "bar",
        width: 180,
        height: 120,
        stacked: true,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            vertical: true,
            columnWidth: "40%",
            barHeight: "80%",
            startingShape: "rounded",
            endingShape: "rounded",
        },
    },
    colors: [
        primary,
        primary,
        "var(--body-color)",
        "var(--body-color)",
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0,
    },
    legend: {
        show: false,
    },
    grid: {
        xaxis: {
            offsetX: -2,
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        min: -5,
        max: 5,
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    tooltip: {
        shared: false,
        x: {
            show: false,
        },
        y: {
            show: false,
        },
        z: {
            show: false,
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        offsetX: 0,
        offsetY: 0,
        labels: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        axisBorder: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        axisTicks: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1760,
            options: {
                chart: {
                    width: 160,
                },
            },
        },
        {
            breakpoint: 1601,
            options: {
                chart: {
                    height: 110,
                },
            },
        },
        {
            breakpoint: 1560,
            options: {
                chart: {
                    width: 140,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                chart: {
                    width: 120,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1110,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
        {
            breakpoint: 700,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 220,
                },
            },
        },
        {
            breakpoint: 420,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
    ],
}
export const chartOptions20 = {
    chart: {
        width: 200,
        height: 150,
        type: "line",
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: secondary,
            opacity: 0.3,
        },
        zoom: {
            enabled: false,
        },
    },
    colors: [secondary],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    tooltip: {
        x: {
            show: false,
        },
        y: {
            show: false,
        },
        z: {
            show: false,
        },
        marker: {
            show: false,
        },
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1780,
            options: {
                chart: {
                    width: 180,
                },
            },
        },
        {
            breakpoint: 1680,
            options: {
                chart: {
                    width: 160,
                },
            },
        },
        {
            breakpoint: 1601,
            options: {
                chart: {
                    height: 110,
                },
            },
        },
        {
            breakpoint: 1560,
            options: {
                chart: {
                    width: 140,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                chart: {
                    width: 120,
                },
            },
        },
        {
            breakpoint: 1400,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 1110,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
        {
            breakpoint: 700,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
        {
            breakpoint: 576,
            options: {
                chart: {
                    width: 220,
                },
            },
        },
        {
            breakpoint: 420,
            options: {
                chart: {
                    width: 150,
                },
            },
        },
    ],
}
export const chartOptions21 = {
    chart: {
        type: "area",
        height: 330,
        animations: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
    },
    grid: {
        show: true,
        borderColor: "#e5e5e5",
    },
    fill: {
        opacity: 0.8,
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 100],
            colorStops: [],
        },
    },
    colors: [primary],
    markers: {
        size: 6,
        colors: "#ffffff",
        strokeColor: primary,
        strokeWidth: 3,
        strokeOpacity: 1,
        fillOpacity: 0,
        hover: {
            size: 9,
        },
    },
    tooltip: {
        intersect: true,
        shared: false,
    },
    theme: {
        palette: "palette1",
    },
    yaxis: {
        categories: [
            "000k",
            "100k",
            "200k",
            "300k",
            "400k",
            "500k",
            "300k",
            "400k",
            "500k",
        ],
        labels: {
            formatter: function (val: string) {
                return val + "k";
            },
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans, sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "13px",
                fontFamily: "Nunito Sans', sans-serif",
                colors: "#AAA3A0",
                fontWeight: 600,
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
}
