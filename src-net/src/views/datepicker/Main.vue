<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Datepicker</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Basic Datepicker -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Date Picker</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-datepicker"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-datepicker" class="p-5">
            <div class="preview">
              <Litepicker
                v-model="date"
                :options="{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control w-56 block mx-auto"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-datepicker"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-datepicker" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <Litepicker
                        v-model="date"
                        :options="{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }"
                        class="form-control w-56 block mx-auto"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Basic Datepicker -->
        <!-- BEGIN: Input Group -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Input Group</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#input-group-datepicker"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="input-group-datepicker" class="p-5">
            <div class="preview">
              <div class="relative w-56 mx-auto">
                <div
                  class="absolute rounded-l w-10 h-full flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4"
                >
                  <CalendarIcon class="w-4 h-4" />
                </div>
                <Litepicker
                  v-model="date"
                  :options="{
                    autoApply: false,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true
                    }
                  }"
                  class="form-control pl-12"
                />
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-input-group-datepicker"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-input-group-datepicker"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="relative w-56 mx-auto">
                        <div
                          class="absolute rounded-l w-10 h-full flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4"
                        >
                          <CalendarIcon class="w-4 h-4" />
                        </div>
                        <Litepicker
                          v-model="date"
                          :options="{
                            autoApply: false,
                            showWeekNumbers: true,
                            dropdowns: {
                              minYear: 1990,
                              maxYear: null,
                              months: true,
                              years: true
                            }
                          }"
                          class="form-control pl-12"
                        />
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Input Group -->
      </div>
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Daterange Picker -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Date Range Picker</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#daterangepicker"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="daterangepicker" class="p-5">
            <div class="preview">
              <Litepicker
                v-model="daterange"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                class="form-control w-56 block mx-auto"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-daterangepicker"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-daterangepicker" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <Litepicker
                        v-model="daterange"
                        :options="{
                          autoApply: false,
                          singleMode: false,
                          numberOfColumns: 2,
                          numberOfMonths: 2,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true
                          }
                        }"
                        class="form-control w-56 block mx-auto"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Daterange Picker -->
        <!-- BEGIN: Modal Datepicker -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Modal Date Picker</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#modal-datepicker"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="modal-datepicker" class="p-5">
            <div class="preview">
              <!-- BEGIN: Show Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#datepicker-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Show Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="datepicker-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- BEGIN: Modal Header -->
                    <div class="modal-header">
                      <h2 class="font-medium text-base mr-auto">
                        Filter by Date
                      </h2>
                      <button class="btn btn-outline-secondary hidden sm:flex">
                        <FileIcon class="w-4 h-4 mr-2" /> Download Docs
                      </button>
                      <div class="dropdown sm:hidden">
                        <a
                          class="dropdown-toggle w-5 h-5 block"
                          href="javascript:;"
                          aria-expanded="false"
                        >
                          <MoreHorizontalIcon
                            class="w-5 h-5 text-gray-600 dark:text-gray-600"
                          />
                        </a>
                        <div class="dropdown-menu w-40">
                          <div
                            class="dropdown-menu__content box dark:bg-dark-1 p-2"
                          >
                            <a
                              href="javascript:;"
                              class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <FileIcon class="w-4 h-4 mr-2" />
                              Download Docs
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- END: Modal Header -->
                    <!-- BEGIN: Modal Body -->
                    <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-datepicker-1" class="form-label"
                          >From</label
                        >
                        <Litepicker
                          id="modal-datepicker-1"
                          v-model="date"
                          :options="{
                            autoApply: false,
                            showWeekNumbers: true,
                            dropdowns: {
                              minYear: 1990,
                              maxYear: null,
                              months: true,
                              years: true
                            }
                          }"
                          class="form-control"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-datepicker-2" class="form-label"
                          >To</label
                        >
                        <Litepicker
                          id="modal-datepicker-2"
                          v-model="date"
                          :options="{
                            autoApply: false,
                            showWeekNumbers: true,
                            dropdowns: {
                              minYear: 1990,
                              maxYear: null,
                              months: true,
                              years: true
                            }
                          }"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <!-- END: Modal Body -->
                    <!-- BEGIN: Modal Footer -->
                    <div class="modal-footer text-right">
                      <button
                        type="button"
                        data-dismiss="modal"
                        class="btn btn-outline-secondary w-20 mr-1"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary w-20">
                        Submit
                      </button>
                    </div>
                    <!-- END: Modal Footer -->
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-modal-datepicker"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-modal-datepicker" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Show Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#datepicker-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Show Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        class="modal"
                        id="datepicker-modal-preview"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- BEGIN: Modal Header -->
                            <div class="modal-header">
                              <h2 class="font-medium text-base mr-auto">
                                Filter by Date
                              </h2>
                              <button class="btn btn-outline-secondary hidden sm:flex">
                                <FileIcon class="w-4 h-4 mr-2" /> Download Docs
                              </button>
                              <div class="dropdown sm:hidden">
                                <a
                                  class="dropdown-toggle w-5 h-5 block"
                                  href="javascript:;"
                                  aria-expanded="false"
                                >
                                  <MoreHorizontalIcon
                                    class="w-5 h-5 text-gray-600 dark:text-gray-600"
                                  />
                                </a>
                                <div class="dropdown-menu w-40">
                                  <div
                                    class="dropdown-menu__content box dark:bg-dark-1 p-2"
                                  >
                                    <a
                                      href="javascript:;"
                                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                    >
                                      <FileIcon class="w-4 h-4 mr-2" />
                                      Download Docs
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- END: Modal Header -->
                            <!-- BEGIN: Modal Body -->
                            <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-datepicker-1" class="form-label"
                                  >From</label
                                >
                                <Litepicker
                                  id="modal-datepicker-1"
                                  v-model="date"
                                  :options="{
                                    autoApply: false,
                                    showWeekNumbers: true,
                                    dropdowns: {
                                      minYear: 1990,
                                      maxYear: null,
                                      months: true,
                                      years: true
                                    }
                                  }"
                                  class="form-control"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-datepicker-2" class="form-label"
                                  >To</label
                                >
                                <Litepicker
                                  id="modal-datepicker-2"
                                  v-model="date"
                                  :options="{
                                    autoApply: false,
                                    showWeekNumbers: true,
                                    dropdowns: {
                                      minYear: 1990,
                                      maxYear: null,
                                      months: true,
                                      years: true
                                    }
                                  }"
                                  class="form-control"
                                />
                              </div>
                            </div>
                            <!-- END: Modal Body -->
                            <!-- BEGIN: Modal Footer -->
                            <div class="modal-footer text-right">
                              <button
                                type="button"
                                data-dismiss="modal"
                                class="btn btn-outline-secondary w-20 mr-1"
                              >
                                Cancel
                              </button>
                              <button type="button" class="btn btn-primary w-20">
                                Submit
                              </button>
                            </div>
                            <!-- END: Modal Footer -->
                          </div>
                        </div>
                      </div>
                      <!-- END: Modal Content -->
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Modal Datepicker -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const date = ref("");
    const daterange = ref("");

    return {
      date,
      daterange
    };
  }
});
</script>
