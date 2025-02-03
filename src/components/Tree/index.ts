import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;

var chartDom = document.getElementById('main')!;
var myChart = echarts.init(chartDom);
var option: EChartsOption;

// Генерация данных
function genData(len: number, offset?: number) {
  let arr = new Float32Array(len * 2);
  let off = 0;
  for (let i = 0; i < len; i++) {
    let x = +Math.random() * 10;
    let y =
      +Math.sin(x) -
      x * (len % 2 ? 0.1 : -0.1) * Math.random() +
      (offset || 0) / 10;
    arr[off++] = x;
    arr[off++] = y;
  }
  return arr;
}

// Определяем данные для разных периодов жизни
const periods = [
  { name: 'Non-lived days', color: '#ffffff', data: genData(5e5) }, // Светлые точки - непрожитые дни
  { name: 'Kindergarten (0-3)', color: '#ff69b4', data: genData(5e5, 10) }, // Розовый - ясли (0-3 года)
  { name: 'Preschool (3-7)', color: '#ff7f00', data: genData(5e5, 20) }, // Оранжевый - садик (3-7 лет)
  { name: 'School (7-19)', color: '#ffff00', data: genData(5e5, 30) }, // Желтый - школа (7-19 лет)
  { name: 'University (19-24)', color: '#00ff00', data: genData(5e5, 40) }, // Зеленый - университет (19-24 года)
  { name: 'Marriage (25)', color: '#ff1493', data: genData(5e5, 50) }, // Яркий розовый - свадьба (25 лет)
  { name: 'Work (24-70)', color: '#0000ff', data: genData(5e5, 60) } // Синий - работа (24-70 лет)
];

// Создаем серию данных для графика
const seriesData = periods.map(period => ({
  name: period.name,
  type: 'scatter',
  data: period.data,
  dimensions: ['x', 'y'],
  symbolSize: 3,
  itemStyle: {
    color: period.color,
    opacity: 0.4
  },
  large: true
}));

option = {
  title: {
    text: echarts.format.addCommas(periods.reduce((acc, cur) => acc + cur.data.length / 2, 0)) + ' Points'
  },
  tooltip: {},
  toolbox: {
    left: 'center',
    feature: {
      dataZoom: {}
    }
  },
  legend: {
    orient: 'vertical',
    right: 10,
    data: periods.map(period => ({ name: period.name, icon: 'circle', textStyle: { color: period.color } }))
  },
  xAxis: [{}],
  yAxis: [{}],
  dataZoom: [
    {
      type: 'inside'
    },
    {
      type: 'slider'
    }
  ],
  animation: false,
  series: seriesData
};

option && myChart.setOption(option);