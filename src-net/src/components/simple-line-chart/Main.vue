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
    },
    lineColor: {
      type: String,
      default: ""
    }
  },
  setup(props) {
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
            label: "# of Votes",
            data: $h.randomNumbers(0, 5, 12),
            borderWidth: 2,
            borderColor: props.lineColor.length ? props.lineColor : "#3160D8",
            backgroundColor: "transparent",
            pointBorderColor: "transparent"
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

    return {
      data,
      options
    };
  }
});
</script>
