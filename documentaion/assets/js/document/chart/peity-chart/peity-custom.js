$(".bar-colours-3").peity("bar", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 145)
    return "rgb(30, " + g + ", 135)"
  },
  width: '100',
  height: '82'
})
