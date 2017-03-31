import './assets/css/main.scss'
import './assets/css/app.css'
import Chart from './component/chart'
let chart = new Chart('#bar', {
  title: {
      text: 'ECharts 入门示例'
  },
  grid: {
    width: '100%',
    height: '100%',
  },
  tooltip: {},
  legend: {
      data:['销量']
  },
  xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
});
