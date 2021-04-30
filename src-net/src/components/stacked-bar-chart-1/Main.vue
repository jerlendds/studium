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
import { helper as $h } from "@/utils/helper";

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
        labels: [...Array(16).keys()],
        datasets: [
          {
            label: "Html Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: "#3160D8",
            data: $h.randomNumbers(-100, 100, 16)
          },
          {
            label: "VueJs Template",
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: "#cbd5e0",
            data: $h.randomNumbers(-100, 100, 16)
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
              stacked: true,
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
              stacked: true,
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
