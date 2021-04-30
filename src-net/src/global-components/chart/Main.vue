<template>
  <canvas ref="chartRef"></canvas>
</template>

<script>
import { defineComponent, onMounted, ref, inject, watch } from "vue";
import { helper as $h } from "@/utils/helper";
import Chart from "chart.js";

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      default: "line",
      validator: value => {
        return ["line", "pie", "doughnut", "bar"].indexOf(value) !== -1;
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    refKey: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const chartRef = ref();
    const init = () => {
      const canvas = chartRef.value?.getContext("2d");
      const chart = new Chart(canvas, {
        type: props.type,
        data: $h.toRaw(props.data),
        options: props.options
      });

      watch(props, () => {
        chart.data = $h.toRaw(props.data);
        chart.options = props.options;
        chart.update();
      });

      // Attach ChartJs instance
      chartRef.value.instance = chart;
    };

    const setSize = () => {
      if (props.width) {
        cash(chartRef.value).attr({
          width: props.width
        });
      }

      if (props.height) {
        cash(chartRef.value).attr({
          height: props.height
        });
      }
    };

    const bindInstance = () => {
      if (props.refKey) {
        const bind = inject(`bind[${props.refKey}]`);
        if (bind) {
          bind(chartRef.value);
        }
      }
    };

    onMounted(() => {
      bindInstance();
      setSize();
      init();
    });

    return {
      chartRef
    };
  }
});
</script>
