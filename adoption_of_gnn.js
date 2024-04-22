var GraphNeuralNetworksPublications = {
    '2015': 3,
    '2016': 3,
    '2017': 23,
    '2018': 109,
    '2019': 581,
    '2020': 1727,
    '2021': 3357,
    '2022': 5410,
    '2023': 7551,
}

var GraphNeuralNetworksPublicationsImportanConf = {
    2023: {
        'AAAI Conference on Artificial Intelligence': 80,
        'International Conference on Machine Learning': 55,
        'Neural Information Processing Systems': 102,
        'International Conference on Learning Representations': 46,
        'IEEE Transactions on Neural Networks and Learning Systems': 31,
        'International Joint Conference on Artificial Intelligence': 33,
        'Expert systems with applications': 33,
        'Applied Soft Computing': 12,
        'Neurocomputing': 7
    },
    2019: {
        'Neural Information Processing Systems': 26,
        'International Conference on Learning Representations': 22,
        'International Conference on Machine Learning': 22,
        'AAAI Conference on Artificial Intelligence': 26,
        'International Joint Conference on Artificial Intelligence': 14,
        'IEEE Transactions on Neural Networks and Learning Systems': 4
    },
    2022: {
        'IEEE Transactions on Neural Networks and Learning Systems': 38,
        'AAAI Conference on Artificial Intelligence': 58,
        'International Conference on Machine Learning': 44,
        'Neural Information Processing Systems': 92,
        'International Joint Conference on Artificial Intelligence': 39,
        'International Conference on Learning Representations': 55,
        'Applied Soft Computing': 6,
        'Expert systems with applications': 11,
        'Neurocomputing': 14
    },
    2021: {
        'International Conference on Machine Learning': 31,
        'International Conference on Learning Representations': 47,
        'AAAI Conference on Artificial Intelligence': 70,
        'Neural Information Processing Systems': 72,
        'International Joint Conference on Artificial Intelligence': 32,
        'IEEE Transactions on Neural Networks and Learning Systems': 31,
        'Neurocomputing': 15,
        'Applied Soft Computing': 3,
        'Expert systems with applications': 6
    },
    2020: {
        'Neural Information Processing Systems': 67,
        'International Conference on Machine Learning': 24,
        'International Conference on Learning Representations': 31,
        'AAAI Conference on Artificial Intelligence': 54,
        'International Joint Conference on Artificial Intelligence': 34,
        'Neurocomputing': 9,
        'IEEE Transactions on Neural Networks and Learning Systems': 7,
        'Expert systems with applications': 2
    },
    2018: {
        'International Conference on Machine Learning': 5,
        'AAAI Conference on Artificial Intelligence': 8,
        'Neural Information Processing Systems': 8,
        'International Conference on Learning Representations': 9,
        'International Joint Conference on Artificial Intelligence': 3,
        'IEEE Transactions on Neural Networks and Learning Systems': 2
    },
    2017: {
        'International Conference on Learning Representations': 5,
        'International Joint Conference on Artificial Intelligence': 2,
        'Neural Information Processing Systems': 2
    },
    2015: { 'International Conference on Learning Representations': 2 }
};


(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('dark', {
        "color": [
            "#dd6b66",
            "#759aa0",
            "#e69d87",
            "#8dc1a9",
            "#ea7e53",
            "#eedd78",
            "#73a373",
            "#73b9bc",
            "#7289ab",
            "#91ca8c",
            "#f49f42"
        ],
        "backgroundColor": "rgba(51,51,51,1)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#eeeeee"
            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#fd1050",
                "color0": "#0cf49b",
                "borderColor": "#fd1050",
                "borderColor0": "#0cf49b",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "circle",
            "smooth": false,
            "color": [
                "#dd6b66",
                "#759aa0",
                "#e69d87",
                "#8dc1a9",
                "#ea7e53",
                "#eedd78",
                "#73a373",
                "#73b9bc",
                "#7289ab",
                "#91ca8c",
                "#f49f42"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eee",
                "borderColor": "#444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#aaaaaa"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#aaaaaa"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#aaaaaa"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#eeeeee"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#eeeeee"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#aaaaaa"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#eeeeee",
                    "width": "1"
                },
                "crossStyle": {
                    "color": "#eeeeee",
                    "width": "1"
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#eeeeee",
                "width": 1
            },
            "itemStyle": {
                "color": "#dd6b66",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#eeeeee",
                "borderColor": "#eeeeee",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#a9334c"
                },
                "controlStyle": {
                    "color": "#eeeeee",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#eeeeee"
                }
            }
        },
        "visualMap": {
            "color": [
                "#bf444c",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(255,255,255,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#eeeeee"
            }
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    });
}));


/**
 * Line chart for the Publications for Graph Neural Networks over the years
 * 
 * 
 **/

var chart1 = echarts.init(document.getElementById('gnnPublications'), "dark");
var option1 = {
    title: {
        left: "center",
        text: 'GNN Publications Over The Years',
        textStyle: {
            fontSize: 28,
            fontWeight: 'bolder',
            color: '#e0c5a7'
        },
        padding: [20, 10, 10, 10,]

    },
    grid: {
        left: '10%',
        right: '5%',
        bottom: '15%',
        top: '20%',
        containLabel: true
    },
    calculable: true,
    xAxis: {
        type: 'category',
        data: Object.keys(GraphNeuralNetworksPublications),
        name: 'Year',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
            "color": "white",
            fontSize: 30
        },
        axisLabel: {
            fontSize: 20
        }
    },
    yAxis: {
        type: 'value',
        name: 'Number of Publications',
        nameLocation: 'middle',
        nameGap: 80,
        nameTextStyle: {
            "color": "white",
            fontSize: 30
        },
        axisLabel: {
            fontSize: 20
        }
    },
    series: [{
        data: Object.values(GraphNeuralNetworksPublications),
        type: 'line',
        lineStyle: {
            width: 4,
        },
        itemStyle: {
            color: 'rgb(255, 70, 131)'
        },
        symbol: "circle",
        symbolSize: 20,
        label: {
            show: true,
            fontSize: 20,
            backgroundColor: 'black',
            borderRadius: 20,
            padding: 5
        }
    }]
};

chart1.setOption(option1);



var chart2 = echarts.init(document.getElementById('gnnPublicationsImportantConf'), "dark");
var option2 = {
    title: {
        left: "center",
        text: 'GNN Publications in Important Conferences',
        textStyle: {
            fontSize: 28,
            fontWeight: 'bolder',
            color: '#e0c5a7'
        },
        padding: [20, 10, 10, 10,]

    },
    grid: {
        left: '10%',
        right: '5%',
        bottom: '15%',
        top: '20%',
        containLabel: true
    },
    calculable: true,
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    
    xAxis: {
        type: 'category',
        data: Object.keys(GraphNeuralNetworksPublicationsImportanConf),
        name: 'Year',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
            "color": "white",
            fontSize: 30
        },
        axisLabel: {
            fontSize: 20
        }
    },
    yAxis: {
        type: 'value',
        name: 'Number of Publications',
        nameLocation: 'middle',
        nameGap: 60,
        nameTextStyle: {
            "color": "white",
            fontSize: 30
        },
        axisLabel: {
            fontSize: 20
        }
    },
    series: Object.keys(GraphNeuralNetworksPublicationsImportanConf[2023]).map(conference => ({
        name: conference,
        type: 'bar',
        stack: 'total',
        emphasis: {
            focus: 'series'
        },
        label: {show:false},
        data: Object.keys(GraphNeuralNetworksPublicationsImportanConf).map(year => GraphNeuralNetworksPublicationsImportanConf[year][conference] || 0)
    }))
};
chart2.setOption(option2);


window.addEventListener("resize", function () {
    chart1.resize();
    chart2.resize();
});
document.getElementById('slide5Modal').addEventListener('shown.bs.modal', function (event) {
    chart1.resize();
    chart2.resize();
})