var secondary = localStorage.getItem('secondary_color') || "#f39159";
var primary = localStorage.getItem('primary_color') || "#308e87";
import { monthDataSeries1, chartDatas } from "@/core/data/chart-data"
var trigoStrength = 3;
var iteration = 11;

interface CustomFunction {
    (params: {
        seriesIndex: number;
        dataPointIndex: number;
        w: any;
    }): any;
}

const customFunction1: CustomFunction = ({ seriesIndex, dataPointIndex, w }) => {
    return w.globals.series[seriesIndex][dataPointIndex];
};

const customFunction2: CustomFunction = ({ seriesIndex, dataPointIndex, w }) => {
    const o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
    const h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
    const l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
    const c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
    return "";
};


export const series = [
    {
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
export const series2 = [
    {
        name: "series1",
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
export const series3 = [
    {
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
export const series4 = [
    {
        name: "Profit",
        data: [100, 50, 25, 50, 30, 50, 70],
    },
    {
        name: "Revenue",
        data: [70, 20, 55, 45, 35, 110, 85],
    },
    {
        name: "Cash Flow",
        data: [85, 55, 100, 35, 90, 60, 80],
    },
]
export const series5 = [90, 63, 50]
export const series6 = [
    {
        name: "Process 1",
        data: [44],
    },
]
export const series7 = [
    {
        name: "Dispatched",
        data: [40],
    },
]
export const series8 = [
    {
        name: "Reach Station",
        data: [50],
    },
]
export const series9 = [
    {
        name: "Out for delivery",
        data: [60],
    },
]
export const series10 = [
    {
        name: "Delivered",
        data: [74],
    },
]
export const series11 = [
    {
        name: "TEAM A",
        data: [50, 120, 90, 100, 70, 95, 40, 55, 30, 0],
    },
    {
        name: "TEAM B",
        data: [35, 60, 40, 90, 70, 110, 90, 120, 60, 0],
    },
]
export const series12 = [
    {
        data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
    },
]
export const series13 = [
    {
        data: [
            20, 120, 15, 100, 120, 60, 150, 70, 100, 80, 105, 20, 70, 60, 10, 12,
            10, 130, 60, 80, 40, 140, 110, 150, 30, 75, 20, 45, 15, 130, 10, 30,
            15, 110, 65, 130, 0,
        ],
    },
]

export const series14 = [
    {
        name: "STOCK ABC",
        data: monthDataSeries1[0].prices,
    },
]
export const series15 = chartDatas
export const series16 = [
    {
        name: "Load Average",
        type: "column",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            {
                min: 10,
                max: 110,
            }
        ),
    },
    {
        name: "Social Media",
        type: "line",
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
]
export const series17 = [
    {
        name: "Running",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            {
                min: 30,
                max: 110,
            }
        ),
    },
    {
        name: "Waiting",
        data: generateMinuteWiseTimeSeries(
            new Date("12/12/2016 00:20:00").getTime(),
            12,
            {
                min: 30,
                max: 110,
            }
        ),
    },
]
export const series18 = [
    {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: "Series 2",
        data: [20, 30, 40, 80, 20, 80],
    },
]
export const series19 = [
    {
        name: "Bubble1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble3",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
    {
        name: "Bubble4",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
        }),
    },
]

export const chartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 200,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        show: false,
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00",
            "2018-09-19T07:30:00",
            "2018-09-19T08:30:00",
            "2018-09-19T09:30:00",
            "2018-09-19T10:30:00",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            top: -25,
            right: -60,
            bottom: -40,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [primary],

    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 100,
                },
            },
        },
    ],
}
export const chartOptions2 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 200,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        show: false,
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00",
            "2018-09-19T07:30:00",
            "2018-09-19T08:30:00",
            "2018-09-19T09:30:00",
            "2018-09-19T10:30:00",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            top: -25,
            right: -60,
            bottom: -40,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [secondary],
    series: [
        {
            name: "series1",
            data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
        },
    ],
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 100,
                },
            },
        },
    ],
}
export const chartOptions3 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 200,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        show: false,
        type: "datetime",
        categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00",
            "2018-09-19T07:30:00",
            "2018-09-19T08:30:00",
            "2018-09-19T09:30:00",
            "2018-09-19T10:30:00",
        ],
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            left: -10,
            top: -25,
            right: -60,
            bottom: -40,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: ["#3eb95f"],

    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 100,
                },
            },
        },
    ],
}
export const chartOptions4 = {
    chart: {
        type: "bar",
        height: 380,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "30%",
            endingShape: "rounded",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
        curve: "smooth",
        lineCap: "butt",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        floating: false,
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "#C4C4C4",
        },
    },
    yaxis: {
        title: {
            text: "Dollars in thounand",
            style: {
                fontSize: "14px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
            },
        },
    },
    colors: [secondary, "#3eb95f", primary],
    fill: {
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100],
        },
    },
    tooltip: {
        y: {
            formatter: function (val: string) {
                return "$ " + val + " thousands";
            },
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                }
            }
        }
    ]
}
export const chartOptions5 = {
    chart: {
        type: "radialBar",
        height: 375,
        offsetY: -30,
        offsetX: 20,
    },
    plotOptions: {
        radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
                margin: 10,
                size: "30%",
                background: "transparent",
            },
            track: {
                show: true,
                background: "#f2f2f2",
                strokeWidth: "10%",
                opacity: 1,
                margin: 3,
            },
        },
    },
    series: [90, 63, 50],
    labels: ["Skill 01", "Skill 02", "Skill 03"],
    legend: {
        show: true,
        fontSize: "16px",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 500,
        labels: {
            colors: "#2C323F",
        },
        markers: {
            width: 86,
            height: 18,
            radius: 3,
        },
    },
    colors: [secondary, primary, "#3eb95f"],
    responsive: [
        {
            breakpoint: 767,
            options: {
              title: {
                style: {
                  fontSize: "16px",
                },
              },
            },
          },
          {
            breakpoint: 420,
            options: {
              chart: {
                offsetY: 0,
                offsetX: 0,
              },
              legend: {
                position: 'bottom'
              },
            },
          },
]
}
export const chartOptions6 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: [primary],
                backgroundBarOpacity: 0.2,
            },
        },
    },
    colors: [primary],
    stroke: {
        width: 0,
    },
    fill: {
        colors: [primary],
        type: "gradient",
        gradient: {
            gradientToColors: [primary],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Packed",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "44%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Packed"],
    },
    yaxis: {
        max: 100,
    },

    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions7 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: [secondary],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: [secondary],
    stroke: {
        width: 0,
    },

    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Dispatched",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "44%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Process 2"],
    },
    yaxis: {
        max: 100,
    },
    fill: {
        colors: [secondary],
        type: "gradient",
        gradient: {
            inverseColors: false,
            gradientToColors: [secondary],
        },
    },
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions8 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: ["#a927f9"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#a927f9"],
    stroke: {
        width: 0,
    },
    series: [
        {
            name: "Reach Station",
            data: [50],
        },
    ],
    fill: {
        colors: ["#a927f9"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#a927f9"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Reach Station",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "50%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Reach Station"],
    },
    yaxis: {
        max: 100,
    },
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions9 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: ["#F8D62B"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#F8D62B"],
    stroke: {
        width: 0,
    },

    fill: {
        colors: ["#F8D62B"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#F8D62B"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Out for delivery",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "60%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Out for delivery"],
    },
    yaxis: {
        max: 100,
    },
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions10 = {
    chart: {
        height: 70,
        type: "bar",
        stacked: true,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: "15%",
            colors: {
                backgroundBarColors: ["#3eb95f"],
                backgroundBarOpacity: 0.2,
                backgroundBarRadius: 10,
            },
        },
    },
    colors: ["#3eb95f"],
    stroke: {
        width: 0,
    },

    fill: {
        colors: ["#3eb95f"],
        type: "gradient",
        gradient: {
            gradientToColors: ["#3eb95f"],
        },
    },
    title: {
        floating: true,
        offsetX: -10,
        offsetY: 5,
        text: "Delivered",
        style: {
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
        },
    },
    subtitle: {
        floating: true,
        align: "right",
        offsetY: 0,
        text: "74%",
        style: {
            fontSize: "14px",
        },
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        categories: ["Delivered"],
    },
    yaxis: {
        max: 100,
    },
    responsive: [
        {
            breakpoint: 767,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions11 = {
    chart: {
        height: 320,
        type: "area",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: 0,
    },
    fill: {
        colors: [primary, secondary],
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: 0,
            right: -120,
            bottom: 10,
        },
    },
    colors: [primary, secondary],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",],
    markers: {
        size: 0,
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
        axisBorder: {
            color: "rgba(196,196,196, 0.3)",
        },
    },
    yaxis: [
        {
            title: {
                text: "Dollars in thounand",
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y: number) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            },
        },
    },
}
export const chartOptions12 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 300,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -55,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [primary],
    series: [
        {
            data: [70, 60, 82, 80, 60, 90, 70, 120, 50, 60, 0],
        },
    ],
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
}
export const chartOptions13 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 400,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Jan", "Feb", "Mar", "Apr", "May","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Jan", "Feb", "Mar", "Apr", "May",
        ],
        tickAmount: 5,
        tickPlacement: "between",
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
    grid: {
        borderColor: "rgba(196,196,196, 0.3)",
        padding: {
            top: -20,
            right: -16,
            bottom: 0,
        },
    },
    fill: {
        opacity: 0.2,
    },
    colors: [primary],

    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm",
        },
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                chart: {
                    height: 200,
                },
            },
        },
    ],
}
export const chartOptions14 = {
    chart: {
        height: 400,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    annotations: {
        yaxis: [
            {
                y: 8200,
                y2: 8400,
                borderColor: "#F99B0D",
                fillColor: "#F99B0D",
                opacity: 0.1,
                label: {
                    borderColor: "#F99B0D",
                    offsetX: -30,
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#F99B0D",
                    },
                    text: "Y-axis range",
                },
            },
        ],
        xaxis: [
            {
                x: new Date("15 Nov 2017").getTime(),
                strokeDashArray: 0,
                borderColor: primary,
                label: {
                    borderColor: primary,
                    offsetY: 20,
                    style: {
                        color: "#fff",
                        background: primary,
                    },
                    text: "Anno Test",
                },
            },
            {
                x: new Date("17 Nov 2017").getTime(),
                x2: new Date("18 Nov 2017").getTime(),
                fillColor: "#83BF6E",
                opacity: 0.1,
                label: {
                    borderColor: "##83BF6E",
                    style: {
                        fontSize: "10px",
                        color: "#fff",
                        background: "#83BF6E",
                    },
                    offsetY: 20,
                    text: "X-axis range",
                },
            },
        ],
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 3,
        curve: "smooth",
    },
    grid: {
        padding: {
            right: 30,
            left: 20,
        },
    },
    title: {
        text: "Line with Annotations",
        align: "left",
        style: {
            fontSize: "18px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
        },
    },
    colors: [secondary],
    labels: monthDataSeries1[0].dates,
    xaxis: {
        type: "datetime",
    },
    responsive: [
        {
            breakpoint: 576,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions15 = {
    plotOptions: {
        candlestick: {
            colors: {
                upward: '#f39159',
                downward: '#308e87'
            },
        },
    },
    legend: {
        show: false,
    },
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.2,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
        },
    },
    chart: {
        height: 450,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    stroke: {
        curve: "smooth",
        width: [1, 1],
    },
    tooltip: {
        shared: true,
        custom: [
            customFunction1, customFunction2
        ],
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    grid: {
        strokeDashArray: 3,
        position: "back",
        row: {
            opacity: 0.5,
        },
        column: {
            opacity: 0.5,
        },
    },
    responsive: [
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
export const chartOptions16 = {
    chart: {
        height: 350,
        type: "line",

        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0,
    },

    title: {
        text: "Average",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    subtitle: {
        text: "17%",
        floating: true,
        align: "right",
        offsetY: 0,
        style: {
            fontSize: "20px",
            fontWeight: 500,
        },
    },
    fill: {
        colors: [primary],
        type: "gradient",
        gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    legend: {
        show: false,
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                subtitle: {
                    style: {
                        fontSize: "18px",
                    },
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                subtitle: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions17 = {
    chart: {
        height: 350,
        type: "line",
        stacked: true,
        animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
                speed: 1000,
            },
        },

        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "straight",
        width: 5,
    },
    grid: {
        padding: {
            left: 0,
            right: 0,
        },
    },
    fill: {
        opacity: 0.9,
    },
    colors: [primary, secondary],
    markers: {
        size: 0,
        hover: {
            size: 0,
        },
    },

    xaxis: {
        type: "datetime",
        range: 2700000,
    },
    yaxis: {
        decimalsInFloat: 1,
    },
    title: {
        text: "Processes",
        align: "left",
        style: {
            fontSize: "12px",
        },
    },
    legend: {
        show: true,
        floating: true,
        horizontalAlign: "right",
        onItemClick: {
            toggleDataSeries: false,
        },
        position: "top",
        offsetY: -33,
        offsetX: 60,
    },
    responsive: [
        {
            breakpoint: 1366,
            options: {
                title: {
                    style: {
                        fontSize: "18px",
                    },
                },
            },
        },
        {
            breakpoint: 992,
            options: {
                title: {
                    style: {
                        fontSize: "16px",
                    },
                },
            },
        },
    ],
}
export const chartOptions18 = {
    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "Reflected",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
        },
    },
    colors: [primary, secondary],
    chart: {
        height: 300,
        type: "radar",
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
        },
    },

    title: {
        text: "Radar Chart - Multi Series",
    },
    stroke: {
        width: 0,
    },
    markers: {
        size: 0,
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
}
export const chartOptions19 = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 320,
        type: "bubble",
    },
    dataLabels: {
        enabled: false,
    },

    fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.7,
            stops: [0, 100],
        },
    },
    colors: [
        primary,
        secondary,
        "#3eb95f",
        primary,
    ],
    title: {
        text: "Simple Bubble Chart",
    },
    xaxis: {
        tickAmount: 12,
        type: "category",
    },
    yaxis: {
        max: 70,
    },
}


export function generateData(baseval: number, count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}

export function getRandom() {
    var i = iteration;
    return (
        (Math.sin(i / trigoStrength) * (i / trigoStrength) +
            i / trigoStrength +
            1) *
        (trigoStrength * 2)
    );
}

export function generateMinuteWiseTimeSeries(baseval: number, count: number, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y =
            (Math.sin(i / trigoStrength) * (i / trigoStrength) +
                i / trigoStrength +
                1) *
            (trigoStrength * 2);

        series.push([x, y]);
        baseval += 300000;
        i++;
    }
    return series;
}
