var seq = 0;
var delays = 80;
var durations = 500;
export const chart8 = {
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        series: [
            [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
            [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
            [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
            [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
        ]
    },
    options: {
        low: 0,
        showArea: false, fullWidth: true,
    },
    eventHandlers: [{
        event: 'draw',
        fn(data: any) {
            seq++;
            if (data.type === 'line') {
                data.element.animate({
                    opacity: {
                        begin: seq * delays + 1000,
                        dur: durations,
                        from: 0,
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y, easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x, easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x, easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x, easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0, to: 1, easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'], easing: 'easeOutQuart'
                };
                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'], easing: 'easeOutQuart'
                };
                var animations: any = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0, to: 1, easing: 'easeOutQuart'
                };
                data.element.animate(animations);
            }
        }
    }]
}
export const chart2 = {
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        series: [
            [1, 5, 2, 5, 4, 3],
            [2, 3, 4, 8, 1, 2],
            [5, 4, 3, 2, 1, 0.5]
        ]
    },
    options: {
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
    },
    eventHandlers: [{
        event: 'draw',
        fn(data: any) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),

                    }
                });
            }
        }
    }]
}
export const chart6 = {
    data: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
    },
    options: {
        donut: true,
        showLabel: false,
    },
    eventHandlers: [{
        event: 'draw',
        fn(data: any) {
            if (data.type === 'slice') {
                const pathLength = data.element._node.getTotalLength();
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px',

                });
                const animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        begin: 1000 * data.index,
                        from: -pathLength + 'px',
                        to: '0px',
                        fill: 'freeze'
                    }
                };

                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px'
                });
                data.element.animate(animationDefinition, false);
            }
        }
    }]
}
export const chart4 = {
    data: {
        abels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    },
    options: {
        high: 3,
        low: -3,
        showArea: true,
        showLine: false,
        showPoint: false,
        fullWidth: true,
        axisX: {
            showLabel: false,
            showGrid: false
        },
    },
}
export const chart5 = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    },
    options: {
        low: 0,
        showArea: true,
    },
}
export const chart10 = {
    data: {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
            [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
    },
    options: {
        high: 10,
        low: -10,
        axisX: {
            labelInterpolationFnc: function (value: string, index: number) {
                return index % 2 === 0 ? value : null;
            }
        },
    },
}
export const chart7 = {
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q13', 'Q14'],
        series: [
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
            [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]
        ]
    },
    options: {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function (value: number) {
                return (value / 1000) + 'k';
            }
        },
    },
}
export const chart11 = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    },
    options: {
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 70
        },
    },
}
export const chart9 = {
    data: {
        labels: ['2010-11', '2011-12', '2012-13', '2013-13', '2014-15', '2015-16', '2016-17', '2017-18'],
        series: [
            [0.9, 0.4, 1.5, 4.9, 3, 3.8, 3.8, 1.9],
            [6.4, 5.7, 7, 4.95, 3, 3.8, 3.8, 1.9],
            [4.3, 2.3, 3.6, 4.5, 5, 2.8, 3.3, 4.3],
            [3.8, 4.1, 2.8, 1.8, 2.2, 1.9, 6.7, 2.9]
        ]
    },
    options: {
        seriesBarDistance: 15,
        horizontalBars: false,
        axisY: {
            offset: 20
        },
    },
    responsiveOptions: [
        ['screen and (min-width: 1200px) and (max-width: 1366px)', {
            seriesBarDistance: 10
        }],
        ['screen and (max-width: 767px)', {
            seriesBarDistance: 10
        }],
        ['screen and (max-width: 480px)', {
            stackBars: true,
            seriesBarDistance: 6,
        }]
    ]
}
export const chart1 = {
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    },
    options: {
        fullWidth: true,
        chartPadding: {
            right: 40
        }
    },
}
export const chart12 = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [
            [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
            [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null],
            [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
            [{ x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: undefined }, { x: 6, y: 4 }, { x: 7, y: null }, { x: 8, y: 4 }, { x: 9, y: 4 }]
        ]
    },
    options: {
        fullWidth: true,
        chartPadding: {
            right: 10
        },
        low: 0
    },
}
export const chart13 = {
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [
            [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
            [
                10,
                15,
                null,
                12,
                null,
                10,
                12,
                15,
                null,
                null,
                12,
                null,
                14,
                null,
                null,
                null,
            ],
            [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null],
            [
                { x: 3, y: 3 },
                { x: 4, y: 3 },
                { x: 5, y: undefined },
                { x: 6, y: 4 },
                { x: 7, y: null },
                { x: 8, y: 4 },
                { x: 9, y: 4 },
            ],
        ],
    },
    options: {
        fullWidth: true,
        chartPadding: {
            right: 10,
        },
        fillHoles: true,
        low: 0
    }
}