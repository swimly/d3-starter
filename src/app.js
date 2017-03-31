import './assets/css/main.scss'
import './assets/css/app.css'
import Bar from './component/bar'
let bar = Bar.init({
  dom: '#bar',
  grid: {
    x1: 40,
    x2: 40,
    y1: 30,
    y2: 40
  },
  xAxis: [{
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六']
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [
    {
      data: [39, 29, 10, 50, 19,60],
      itemStyle: {
        barWidth: 40,
        barGap: 0.3, //0.1*30为实际空格
        textStyle: {
          show: true
        }
      },
    }
  ]
});
