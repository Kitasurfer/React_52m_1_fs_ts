function genData(len, offset) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    let x = Math.random() * 10;
    let y =
      Math.sin(x) -
      x * (len % 2 ? 0.1 : -0.1) * Math.random() +
      (offset || 0) / 10;
    arr.push([x, y]);
  }
  return arr;
}

const data1 = genData(5e5);
const data2 = genData(5e5, 10);

option = {
  title: {
    text: echarts.format.addCommas(data1.length + data2.length) + ' Points'
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
    right: 10
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
  series: [
    {
      name: 'A',
      type: 'scatter',
      data: data1,
      dimensions: ['x', 'y'],
      symbolSize: 3,
      itemStyle: {
        color: function (params) {
          let age = params.data[0] * 10; // Пример возрастной шкалы
          if (age < 3) return 'pink'; // Ясли
          if (age < 7) return 'red'; // Садик
          if (age < 19) return 'orange'; // Школа
          if (age < 24) return 'yellow'; // Университет
          if (age === 25) return 'hotpink'; // Свадьба
          if (age < 70) return 'green'; // Работа
          return 'lightgray'; // Непрожитые дни
        },
        opacity: 0.6
      },
      large: true
    },
    {
      name: 'B',
      type: 'scatter',
      data: data2,
      dimensions: ['x', 'y'],
      symbolSize: 3,
      itemStyle: {
        color: function (params) {
          let age = params.data[0] * 10; // Аналогичная цветовая логика
          if (age < 3) return 'pink';
          if (age < 7) return 'red';
          if (age < 19) return 'orange';
          if (age < 24) return 'yellow';
          if (age === 25) return 'hotpink';
          if (age < 70) return 'green';
          return 'lightgray';
        },
        opacity: 0.6
      },
      large: true
    }
  ]
};
