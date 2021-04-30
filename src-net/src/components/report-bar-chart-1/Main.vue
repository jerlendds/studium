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
import { useStore } from "@/store";

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
    const store = useStore();
    const darkMode = computed(() => store.state.main.darkMode);
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
            borderWidth: 2,
            borderColor: "transparent",
            barPercentage: 0.5,
            barThickness: 8,
            maxBarThickness: 6.5,
            minBarLength: 2,
            data: [60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270],
            backgroundColor: "#2e51bb"
          },
          {
            label: "VueJs Template",
            borderWidth: 2,
            borderColor: "transparent",
            barPercentage: 0.5,
            barThickness: 8,
            maxBarThickness: 6.5,
            minBarLength: 2,
            data: [50, 135, 40, 180, 190, 60, 150, 90, 250, 170, 240, 250],
            backgroundColor: darkMode.value ? "#303a53" : "#ccd7e2"
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
                fontSize: 11,
                fontColor: "#718096"
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
