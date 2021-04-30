<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Progressbar</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Progressbar -->
      <div class="intro-y col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Progressbar</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-progressbar"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-progressbar" class="p-5">
            <div class="preview">
              <div class="progress">
                <div
                  class="progress-bar w-1/2 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-2/3 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-3/4 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-progressbar"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-progressbar" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="progress">
                        <div
                          class="progress-bar w-1/2 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress mt-3">
                        <div
                          class="progress-bar w-2/3 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress mt-3">
                        <div
                          class="progress-bar w-3/4 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Progressbar with Label
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#progressbar-label"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-label" class="p-5">
            <div class="preview">
              <div class="progress h-4 rounded">
                <div
                  class="progress-bar w-1/2 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
              <div class="progress h-4 rounded mt-3">
                <div
                  class="progress-bar w-2/3 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              <div class="progress h-4 rounded mt-3">
                <div
                  class="progress-bar w-3/4 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-label"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-progressbar-label" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="progress h-4 rounded">
                        <div
                          class="progress-bar w-1/2 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          50%
                        </div>
                      </div>
                      <div class="progress h-4 rounded mt-3">
                        <div
                          class="progress-bar w-2/3 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          60%
                        </div>
                      </div>
                      <div class="progress h-4 rounded mt-3">
                        <div
                          class="progress-bar w-3/4 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          70%
                        </div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Progressbar -->
      <!-- BEGIN: Progressbar Height -->
      <div class="intro-y col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Progressbar Height</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#progressbar-height"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-height" class="p-5">
            <div class="preview">
              <div class="progress h-1 rounded">
                <div
                  class="progress-bar w-1/2 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress rounded mt-3">
                <div
                  class="progress-bar w-2/3 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress h-3 rounded mt-3">
                <div
                  class="progress-bar w-3/4 bg-theme-1 rounded"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-height"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-progressbar-height" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="progress h-1 rounded">
                        <div
                          class="progress-bar w-1/2 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress rounded mt-3">
                        <div
                          class="progress-bar w-2/3 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress h-3 rounded mt-3">
                        <div
                          class="progress-bar w-3/4 bg-theme-1 rounded"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Progressbar Color</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#progressbar-color"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-color" class="p-5">
            <div class="preview">
              <div class="progress">
                <div
                  class="progress-bar w-1/2 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-2/3 bg-theme-9"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-3/4 bg-theme-12"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="progress mt-3">
                <div
                  class="progress-bar w-3/4 bg-theme-6"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-color"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-progressbar-color" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="progress">
                        <div
                          class="progress-bar w-1/2 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress mt-3">
                        <div
                          class="progress-bar w-2/3 bg-theme-9"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress mt-3">
                        <div
                          class="progress-bar w-3/4 bg-theme-12"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress mt-3">
                        <div
                          class="progress-bar w-3/4 bg-theme-6"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Progressbar Height -->
    </div>
  </div>
</template>
