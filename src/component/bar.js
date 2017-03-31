import Chart from './chart';
export default class Bar extends Chart {
  constructor (param) {
    super();
    this.param = param;
    this.setDom(param);
    this.draw(param);
  }
  draw (param) {
    this.canvas
    .append('g')
    .attr('class', 'chart-content')
    .attr('transform', 'translate(0, '+ param.grid.y1 +')')
    .selectAll('rect')
    .data(param.series[0].data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', param.grid.x1)
    .attr('y', (d, i)=>{
      return i*((this.height-param.grid.y1-param.grid.y2)/param.series[0].data.length)+((this.height-param.grid.y1-param.grid.y2)/param.series[0].data.length)/2 - param.series[0].itemStyle.barWidth/2
    })
    .attr('width', (d)=>{
      return this.xScale(d);
    })
    .attr('height', param.series[0].itemStyle.barWidth*(1-param.series[0].itemStyle.barGap))
    .attr('fill', '#1CB4AD')
    // 添加横坐标轴
    this.canvas.append('g')
    .attr('class', 'axis')
    .call(this.xAxis)
    .attr('transform', 'translate(' + param.grid.x1 + ', '+(this.height-param.grid.y1)+')')
    // 添加纵坐标
    this.canvas.append('g')
    .attr('class', 'axis')
    .attr('transform', 'translate(' + param.grid.x1 + ', 20)')
    .call(this.yAxis)
    //添加文字
    this.text = this.canvas.selectAll('.text')
    .data(param.series[0].data)
    .enter()
    .append('text')
    .attr('class', 'text')
    .attr('x', (d, i)=>{
      return param.grid.x1
    })
    .attr('y', (d, i)=>{
      return i*((this.height-param.grid.y1-param.grid.y2)/param.series[0].data.length) + param.series[0].itemStyle.barWidth + param.grid.y1
    })
    .attr('dx', (d, i)=>{
      return this.xScale(d)
    })
    .attr('dy', (d)=>{
    })
    .attr('transform', 'translate(' + 0 + ', -50%)')
    .text((d)=>{
      return d
    })
    console.log(this.linear);
  }
  static init (param) {
    return new Bar(param);
  }
}