<template>
  <Chart
    type="bar"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
    ref-key="reportBarChartRef"
  />
</template>

<script>
import { defineComponent, onMounted, computed, ref, provide } from "vue";

export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  setup() {
    const reportBarChartRef = ref();

    provide("bind[reportBarChartRef]", el => {
      reportBarChartRef.value = el;
    });

    // Fake visitor data
    const reportBarChartData = new Array(40).fill(0).map((data, key) => {
      if (key % 3 == 0 || key % 5 == 0) {
        return Math.ceil(Math.random() * (0 - 20) + 20);
      } else {
        return Math.ceil(Math.random() * (0 - 7) + 7);
      }
    });
    // Fake visitor bar color
    const reportBarChartColor = reportBarChartData.map(data => {
      if (data >= 8 && data <= 14) {
        return "#1c3faaa6";
      } else if (data >= 15) {
        return "#1C3FAA";
      }

      return "#1c3faa59";
    });
    const data = computed(() => {
      return {
        labels: reportBarChartData,
        datasets: [
          {
            label: "Html Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: reportBarChartData,
            backgroundColor: reportBarChartColor
          }
        ]
      };
    });
    const options = computed(() => {
      return {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      };
    });

    onMounted(() => {
      setInterval(() => {
        const chartInstance = reportBarChartRef.value.instance;
        const chartConfig = chartInstance.config;

        // Swap visitor data
        const newData = chartConfig.data.datasets[0].data[0];
        chartConfig.data.datasets[0].data.shift();
        chartConfig.data.datasets[0].data.push(newData);
        chartInstance.update();

        // Swap visitor bar color
        const newColor = chartConfig.data.datasets[0].backgroundColor[0];
        chartConfig.data.datasets[0].backgroundColor.shift();
        chartConfig.data.datasets[0].backgroundColor.push(newColor);
        chartInstance.update();
      }, 1000);
    });

    return {
      data,
      options
    };
  }
});
</script>
