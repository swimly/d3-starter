import * as d3 from 'd3';
export default class Chart {
  constructor (param) {
    this.param = param;
  }
  setDom (param) {
    this.canvas = d3.select(param.dom).append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    // for(let key in param.grid){
    //   this.canvas.attr(key, param.grid[key])
    // }
    this.height = document.querySelector(param.dom).offsetHeight;
    // x轴比例尺
    this.xScale = d3.scale.linear()
    .domain([0, d3.max(param.series[0].data)])
    .range([0, this.canvas[0].parentNode.clientWidth])
    // y轴比例尺
    this.yScale = d3.scale.linear()
    .domain([0, d3.max(param.series[0].data)])
    .range([this.height-50, 0])
    //横坐标轴 默认横坐标轴的高度是50px
    this.xAxis = d3.svg.axis()
    .scale(this.xScale)
    .orient('bottom')
    .ticks(4)
    //定义y轴
    this.yAxis = d3.svg.axis()
    .scale(this.yScale)
    .orient("left");

    return this;
  }
}
