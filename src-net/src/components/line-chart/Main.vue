<template>
  <Chart
    type="line"
    :width="width"
    :height="height"
    :data="data"
    :options="options"
  />
</template>

<script>
import { defineComponent, computed } from "vue";

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
    const data = computed(() => {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Html Template",
            data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
            borderWidth: 2,
            borderColor: "#3160D8",
            backgroundColor: "transparent",
            pointBorderColor: "transparent"
          },
          {
            label: "VueJs Template",
            data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
            borderWidth: 2,
            borderDash: [2, 2],
            borderColor: "#a0afbf",
            backgroundColor: "transparent",
            pointBorderColor: "transparent"
          }
        ]
      };
    });
    const options = computed(() => {
      return {
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: "12",
                fontColor: "#777777"
              },
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: "12",
                fontColor: "#777777",
                callback: function(value) {
                  return "$" + value;
                }
              },
              gridLines: {
                color: "#D8D8D8",
                zeroLineColor: "#D8D8D8",
                borderDash: [2, 2],
                zeroLineBorderDash: [2, 2],
                drawBorder: false
              }
            }
          ]
        }
      };
    });

    return {
      data,
      options
    };
  }
});
</script>
