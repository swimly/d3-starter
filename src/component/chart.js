import * as d3 from 'd3';
export default class Chart {
  constructor (dom, options) {
    this.dom = dom;
    this.options = options;
    this.init(this.dom, this.options);
  }
  init (dom, options) {
    console.log(options)
    d3.select(dom)
    .append('svg')
    .attr('width', options.grid.width)
    .attr('height', options.grid.height)
    return this;
  }
  xAxis () {

  }
}
