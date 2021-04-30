<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Slider</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Single Item -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Single Item</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#single-item-slider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="single-item-slider" class="p-5">
            <div class="preview">
              <div class="mx-6">
                <TinySlider
                  :options="{
                    controls: true
                  }"
                >
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-single-item-slider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example
                code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-single-item-slider" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="mx-6">
                        <TinySlider
                          :options="{
                            controls: true
                          }"
                        >
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                1
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                2
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                3
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                4
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                5
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                6
                              </h3>
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Single Item -->
        <!-- BEGIN: Multiple Item -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Multiple Item</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#multiple-item-slider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="multiple-item-slider" class="p-5">
            <div class="preview">
              <div class="mx-6">
                <TinySlider
                  :options="{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 3
                      },
                      480: {
                        items: 2
                      }
                    }
                  }"
                >
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        9
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-multiple-item-slider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example
                code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-multiple-item-slider"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="mx-6">
                        <TinySlider
                          :options="{
                            autoplay: false,
                            controls: true,
                            items: 1,
                            responsive: {
                              600: {
                                items: 3
                              },
                              480: {
                                items: 2
                              }
                            }
                          }"
                        >
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                1
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                2
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                3
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                4
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                5
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                6
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                7
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                8
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                9
                              </h3>
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Multiple Item -->
        <!-- BEGIN: Responsive Display -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Responsive Display</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#responsive-slider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="responsive-slider" class="p-5">
            <div class="preview">
              <div class="mx-6 mb-8">
                <TinySlider
                  :options="{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    nav: true,
                    responsive: {
                      600: {
                        items: 3
                      },
                      480: {
                        items: 2
                      }
                    }
                  }"
                >
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-responsive-slider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example
                code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-responsive-slider" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="mx-6 mb-8">
                        <TinySlider
                          :options="{
                            autoplay: false,
                            controls: true,
                            items: 1,
                            nav: true,
                            responsive: {
                              600: {
                                items: 3,
                              },
                              480: {
                                items: 2,
                              },
                            },
                          }"
                        >
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                1
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                2
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                3
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                4
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                5
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                6
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                7
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                8
                              </h3>
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Responsive Display -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Center Mode -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Center Mode</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#center-mode-slider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="center-mode-slider" class="p-5">
            <div class="preview">
              <div class="mx-6">
                <TinySlider
                  :options="{
                    autoplay: false,
                    controls: true,
                    center: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 2
                      }
                    }
                  }"
                >
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div class="h-32 px-2">
                    <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                      <h3
                        class="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-center-mode-slider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example
                code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-center-mode-slider" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="mx-6">
                        <TinySlider
                          :options="{
                            autoplay: false,
                            controls: true,
                            center: true,
                            items: 1,
                            responsive: {
                              600: {
                                items: 2,
                              },
                            },
                          }"
                        >
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                1
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                2
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                3
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                4
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                5
                              </h3>
                            </div>
                          </div>
                          <div class="h-32 px-2">
                            <div class="h-full bg-gray-200 dark:bg-dark-1 rounded-md">
                              <h3
                                class="h-full font-medium flex items-center justify-center text-2xl"
                              >
                                6
                              </h3>
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Center Mode -->
        <!-- BEGIN: Fade Animation -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Fade Animation</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#fade-animation-slider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="fade-animation-slider" class="p-5">
            <div class="preview">
              <div class="mx-6 mb-8">
                <TinySlider
                  :options="{
                    mode: 'gallery',
                    controls: true,
                    nav: true,
                    speed: 500
                  }"
                >
                  <div class="h-64 px-2">
                    <div class="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[0].images[0]}`)"
                      />
                    </div>
                  </div>
                  <div class="h-64 px-2">
                    <div class="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[1].images[1]}`)"
                      />
                    </div>
                  </div>
                  <div class="h-64 px-2">
                    <div class="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[2].images[2]}`)"
                      />
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-fade-animation-slider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <i data-feather="file" class="w-4 h-4 mr-2"></i> Copy example
                code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-fade-animation-slider"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="mx-6 mb-8">
                        <TinySlider
                          :options="{
                            mode: 'gallery',
                            controls: true,
                            nav: true,
                            speed: 500,
                          }"
                        >
                          <div class="h-64 px-2">
                            <div class="h-full image-fit rounded-md overflow-hidden">
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="require(`@/assets/images/${$f()[0].images[0]}`)"
                              />
                            </div>
                          </div>
                          <div class="h-64 px-2">
                            <div class="h-full image-fit rounded-md overflow-hidden">
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="require(`@/assets/images/${$f()[1].images[1]}`)"
                              />
                            </div>
                          </div>
                          <div class="h-64 px-2">
                            <div class="h-full image-fit rounded-md overflow-hidden">
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="require(`@/assets/images/${$f()[2].images[2]}`)"
                              />
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Fade Animation -->
      </div>
    </div>
  </div>
</template>
