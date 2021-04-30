<template>
  <Chart
    type="bar"
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            label: "Html Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 200, 250, 200, 500, 450, 850, 1050],
            backgroundColor: "#3160D8"
          },
          {
            label: "VueJs Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [0, 300, 400, 560, 320, 600, 720, 850],
            backgroundColor: "#cbd5e0"
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
                fontColor: "#777777",
                callback: function(value) {
                  return "$" + value;
                }
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
                fontColor: "#777777"
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
