<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Chart</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Vertical Bar Chart -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#vertical-bar-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="vertical-bar-chart" class="p-5">
            <div class="preview">
              <VerticalBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-vertical-bar-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-vertical-bar-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <VerticalBarChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Vertical Bar Chart -->
        <!-- BEGIN: Horizontal Bar Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Horizontal Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#horizontal-bar-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="horizontal-bar-chart" class="p-5">
            <div class="preview">
              <HorizontalBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-horizontal-bar-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-horizontal-bar-chart"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <HorizontalBarChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Horizontal Bar Chart -->
        <!-- BEGIN: Donut Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Donut Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#donut-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="donut-chart" class="p-5">
            <div class="preview">
              <DonutChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-donut-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-donut-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <DonutChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Donut Chart -->
      </div>
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Stacked Bar Chart -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Stacked Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#stacked-bar-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="stacked-bar-chart" class="p-5">
            <div class="preview">
              <StackedBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-stacked-bar-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-stacked-bar-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <StackedBarChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Stacked Bar Chart -->
        <!-- BEGIN: Line Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Line Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#line-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="line-chart" class="p-5">
            <div class="preview">
              <LineChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-line-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-line-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <LineChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Line Chart -->
        <!-- BEGIN: Pie Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Pie Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#pie-chart"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="pie-chart" class="p-5">
            <div class="preview">
              <PieChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-pie-chart"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-pie-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <PieChart :height="200" />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pie Chart -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";
import StackedBarChart from "@/components/stacked-bar-chart/Main.vue";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main.vue";
import LineChart from "@/components/line-chart/Main.vue";
import DonutChart from "@/components/donut-chart/Main.vue";
import PieChart from "@/components/pie-chart/Main.vue";

export default defineComponent({
  components: {
    VerticalBarChart,
    StackedBarChart,
    HorizontalBarChart,
    LineChart,
    DonutChart,
    PieChart
  }
});
</script>
