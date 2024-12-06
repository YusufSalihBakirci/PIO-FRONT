(function($) {
    "use strict";
    var sparkline_chart = {
      init: function() {
        setTimeout(function(){
            $("#simple-line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
                type: 'line',
                width: '100%',
                height: '150',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#2e8e87',
                fillColor: 'transparent',
                highlightLineColor: '#2e8e87',
                highlightSpotColor: '#2e8e87',
                targetColor: '#2e8e87',
                performanceColor: '#2e8e87',
                boxFillColor: '#2e8e87',
                medianColor: '#2e8e87',
                minSpotColor: '#2e8e87'
            });
      })
    }
};
  sparkline_chart.init()
})(jQuery);
