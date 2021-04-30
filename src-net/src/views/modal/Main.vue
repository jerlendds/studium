<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Modal</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Blank Modal -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Blank Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#blank-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="blank-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#basic-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="basic-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      This is totally awesome blank modal!
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-blank-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-blank-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#basic-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="basic-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              This is totally awesome blank modal!
                            </div>
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
        <!-- END: Blank Modal -->
        <!-- BEGIN: Modal Size -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Modal Size</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#modal-size"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="modal-size" class="p-5">
            <div class="preview">
              <div class="text-center">
                <!-- BEGIN: Small Modal Toggle -->
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#small-modal-size-preview"
                  class="btn btn-primary mr-1 mb-2"
                  >Show Small Modal</a
                >
                <!-- END: Small Modal Toggle -->
                <!-- BEGIN: Medium Modal Toggle -->
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#medium-modal-size-preview"
                  class="btn btn-primary mr-1 mb-2"
                  >Show Medium Modal</a
                >
                <!-- END: Medium Modal Toggle -->
                <!-- BEGIN: Large Modal Toggle -->
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#large-modal-size-preview"
                  class="btn btn-primary mr-1 mb-2"
                  >Show Large Modal</a
                >
                <!-- END: Large Modal Toggle -->
                <!-- BEGIN: Super Large Modal Toggle -->
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#superlarge-modal-size-preview"
                  class="btn btn-primary mr-1 mb-2"
                  >Show Superlarge Modal</a
                >
                <!-- END: Super Large Modal Toggle -->
              </div>
              <!-- BEGIN: Small Modal Content -->
              <div
                id="small-modal-size-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      This is totally awesome small modal!
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Small Modal Content -->
              <!-- BEGIN: Medium Modal Content -->
              <div
                id="medium-modal-size-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      This is totally awesome medium modal!
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Medium Modal Content -->
              <!-- BEGIN: Large Modal Content -->
              <div
                id="large-modal-size-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      This is totally awesome large modal!
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Large Modal Content -->
              <!-- BEGIN: Super Large Modal Content -->
              <div
                id="superlarge-modal-size-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      This is totally awesome superlarge modal!
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Super Large Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-modal-size"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-modal-size" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="text-center">
                        <!-- BEGIN: Small Modal Toggle -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#small-modal-size-preview"
                          class="btn btn-primary mr-1 mb-2"
                          >Show Small Modal</a
                        >
                        <!-- END: Small Modal Toggle -->
                        <!-- BEGIN: Medium Modal Toggle -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#medium-modal-size-preview"
                          class="btn btn-primary mr-1 mb-2"
                          >Show Medium Modal</a
                        >
                        <!-- END: Medium Modal Toggle -->
                        <!-- BEGIN: Large Modal Toggle -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#large-modal-size-preview"
                          class="btn btn-primary mr-1 mb-2"
                          >Show Large Modal</a
                        >
                        <!-- END: Large Modal Toggle -->
                        <!-- BEGIN: Super Large Modal Toggle -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#superlarge-modal-size-preview"
                          class="btn btn-primary mr-1 mb-2"
                          >Show Superlarge Modal</a
                        >
                        <!-- END: Super Large Modal Toggle -->
                      </div>
                      <!-- BEGIN: Small Modal Content -->
                      <div
                        id="small-modal-size-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-sm">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              This is totally awesome small modal!
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Small Modal Content -->
                      <!-- BEGIN: Medium Modal Content -->
                      <div
                        id="medium-modal-size-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              This is totally awesome medium modal!
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Medium Modal Content -->
                      <!-- BEGIN: Large Modal Content -->
                      <div
                        id="large-modal-size-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              This is totally awesome large modal!
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Large Modal Content -->
                      <!-- BEGIN: Super Large Modal Content -->
                      <div
                        id="superlarge-modal-size-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              This is totally awesome superlarge modal!
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Super Large Modal Content -->
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Modal Size -->
        <!-- BEGIN: Programmatically Show/Hide Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Programmatically Show/Hide Modal
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#programmatically-show-hide-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="programmatically-show-hide-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Show Modal Toggle -->
              <div class="text-center">
                <a
                  id="programmatically-show-modal"
                  href="javascript:;"
                  class="btn btn-primary mr-1 mb-2"
                  @click="showProgrammaticallyShowModal()"
                  >Show Modal</a
                >
              </div>
              <!-- END: Show Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="programmatically-modal"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-10 text-center">
                      <!-- BEGIN: Hide Modal Toggle -->
                      <a
                        id="programmatically-hide-modal"
                        href="javascript:;"
                        class="btn btn-primary mr-1"
                        @click="hideProgrammaticallyShowModal()"
                        >Hide Modal</a
                      >
                      <!-- END: Hide Modal Toggle -->
                      <!-- BEGIN: Toggle Modal Toggle -->
                      <a
                        id="programmatically-toggle-modal"
                        href="javascript:;"
                        class="btn btn-primary mr-1"
                        @click="toggleProgrammaticallyShowModal()"
                        >Toggle Modal</a
                      >
                      <!-- END: Toggle Modal Toggle -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-programmatically-show-hide-modal-js"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-programmatically-show-hide-modal-js"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Show Modal Toggle -->
                      <div class="text-center">
                        <a
                          id="programmatically-show-modal"
                          href="javascript:;"
                          class="btn btn-primary mr-1 mb-2"
                          @click="showProgrammaticallyShowModal()"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Show Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="programmatically-modal"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-10 text-center">
                              <!-- BEGIN: Hide Modal Toggle -->
                              <a
                                id="programmatically-hide-modal"
                                href="javascript:;"
                                class="btn btn-primary mr-1"
                                @click="hideProgrammaticallyShowModal()"
                                >Hide Modal</a
                              >
                              <!-- END: Hide Modal Toggle -->
                              <!-- BEGIN: Toggle Modal Toggle -->
                              <a
                                id="programmatically-toggle-modal"
                                href="javascript:;"
                                class="btn btn-primary mr-1"
                                @click="toggleProgrammaticallyShowModal()"
                                >Toggle Modal</a
                              >
                              <!-- END: Toggle Modal Toggle -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Modal Content -->
                    </textarea>
                  </code>
                </Highlight>
              </div>
              <button
                data-target="#copy-programmatically-show-hide-modal-html"
                class="copy-code btn py-1 px-2 btn-outline-secondary mt-5"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-programmatically-show-hide-modal-html"
                  class="source-preview"
                >
                  <code
                    class="javascript text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      // Show modal
                      const showProgrammaticallyShowModal = () => {
                        cash("#programmatically-modal").modal("show");
                      };

                      // Hide modal
                      const hideProgrammaticallyShowModal = () => {
                        cash("#programmatically-modal").modal("hide");
                      };

                      // Toggle modal
                      const toggleProgrammaticallyShowModal = () => {
                        cash("#programmatically-modal").modal("toggle");
                      };
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Programmatically Show/Hide Modal -->
        <!-- BEGIN: Warning Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Warning Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#warning-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="warning-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#warning-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="warning-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-0">
                      <div class="p-5 text-center">
                        <XCircleIcon
                          class="w-16 h-16 text-theme-12 mx-auto mt-3"
                        />
                        <div class="text-3xl mt-5">Oops...</div>
                        <div class="text-gray-600 mt-2">
                          Something went wrong!
                        </div>
                      </div>
                      <div class="px-5 pb-8 text-center">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn w-24 btn-primary"
                        >
                          Ok
                        </button>
                      </div>
                      <div
                        class="p-5 text-center border-t border-gray-200 dark:border-dark-5"
                      >
                        <a href="" class="text-theme-1 dark:text-theme-10"
                          >Why do I have this issue?</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-warning-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-warning-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#warning-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="warning-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-0">
                              <div class="p-5 text-center">
                                <XCircleIcon
                                  class="w-16 h-16 text-theme-12 mx-auto mt-3"
                                />
                                <div class="text-3xl mt-5">Oops...</div>
                                <div class="text-gray-600 mt-2">
                                  Something went wrong!
                                </div>
                              </div>
                              <div class="px-5 pb-8 text-center">
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  class="btn w-24 btn-primary"
                                >
                                  Ok
                                </button>
                              </div>
                              <div
                                class="p-5 text-center border-t border-gray-200 dark:border-dark-5"
                              >
                                <a href="" class="text-theme-1 dark:text-theme-10"
                                  >Why do I have this issue?</a
                                >
                              </div>
                            </div>
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
        <!-- END: Warning Modal -->
        <!-- BEGIN: Modal With Close Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Modal With Close Button
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#button-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="button-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#button-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="button-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <a data-dismiss="modal" href="javascript:;">
                      <XIcon class="w-8 h-8 text-gray-500" />
                    </a>
                    <div class="modal-body p-0">
                      <div class="p-5 text-center">
                        <CheckCircleIcon
                          class="w-16 h-16 text-theme-9 mx-auto mt-3"
                        />
                        <div class="text-3xl mt-5">Modal Example</div>
                        <div class="text-gray-600 mt-2">
                          Modal with close button
                        </div>
                      </div>
                      <div class="px-5 pb-8 text-center">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-primary w-24"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-button-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-button-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#button-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="button-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <a data-dismiss="modal" href="javascript:;">
                              <XIcon class="w-8 h-8 text-gray-500" />
                            </a>
                            <div class="modal-body p-0">
                              <div class="p-5 text-center">
                                <CheckCircleIcon class="w-16 h-16 text-theme-9 mx-auto mt-3" />
                                <div class="text-3xl mt-5">Modal Example</div>
                                <div class="text-gray-600 mt-2">
                                  Modal with close button
                                </div>
                              </div>
                              <div class="px-5 pb-8 text-center">
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  class="btn btn-primary w-24"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
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
        <!-- END: Modal With Close Button -->
        <!-- BEGIN: Static Backdrop Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Static Backdrop Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-11"
                >Show example code</label
              >
              <input
                id="show-example-11"
                data-target="#static-backdrop-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="static-backdrop-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#static-backdrop-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="static-backdrop-modal-preview"
                class="modal"
                data-backdrop="static"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body px-5 py-10">
                      <div class="text-center">
                        <div class="mb-5">
                          I will not close if you click outside me. Don't even
                          try to press escape key.
                        </div>
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-primary w-24"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-button-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-button-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#static-backdrop-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="static-backdrop-modal-preview"
                        class="modal"
                        data-backdrop="static"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body px-5 py-10">
                              <div class="text-center">
                                <div class="mb-5">
                                  I will not close if you click outside me. Don't even
                                  try to press escape key.
                                </div>
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  class="btn btn-primary w-24"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
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
        <!-- END: Static Backdrop Modal -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Overlapping Modal -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Overlapping Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#overlapping-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="overlapping-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#overlapping-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="overlapping-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body px-5 py-10">
                      <div class="text-center">
                        <div class="mb-5">
                          Click button bellow to show overlapping modal!
                        </div>
                        <!-- BEGIN: Overlapping Modal Toggle -->
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#next-overlapping-modal-preview"
                          class="btn btn-primary"
                          >Show Overlapping Modal</a
                        >
                        <!-- END: Overlapping Modal Toggle -->
                      </div>
                      <!-- BEGIN: Overlapping Modal Content -->
                      <div
                        id="next-overlapping-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body text-center">
                              This is totally awesome overlapping modal!
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- END: Overlapping Modal Content -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-overlapping-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-overlapping-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#overlapping-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="overlapping-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body px-5 py-10">
                              <div class="text-center">
                                <div class="mb-5">
                                  Click button bellow to show overlapping modal!
                                </div>
                                <!-- BEGIN: Overlapping Modal Toggle -->
                                <a
                                  href="javascript:;"
                                  data-toggle="modal"
                                  data-target="#next-overlapping-modal-preview"
                                  class="btn btn-primary"
                                  >Show Overlapping Modal</a
                                >
                                <!-- END: Overlapping Modal Toggle -->
                              </div>
                              <!-- BEGIN: Overlapping Modal Content -->
                              <div
                                id="next-overlapping-modal-preview"
                                class="modal"
                                tabindex="-1"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-body text-center">
                                      This is totally awesome overlapping modal!
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- END: Overlapping Modal Content -->
                            </div>
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
        <!-- END: Overlapping Modal -->
        <!-- BEGIN: Header & Footer Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Header & Footer Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-7"
                >Show example code</label
              >
              <input
                id="show-example-7"
                data-target="#header-footer-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="header-footer-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#header-footer-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="header-footer-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- BEGIN: Modal Header -->
                    <div class="modal-header">
                      <h2 class="font-medium text-base mr-auto">
                        Broadcast Message
                      </h2>
                      <button class="btn btn-outline-secondary hidden sm:flex">
                        <FileIcon class="w-4 h-4 mr-2" />
                        Download Docs
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
                        <label for="modal-form-1" class="form-label"
                          >From</label
                        >
                        <input
                          id="modal-form-1"
                          type="text"
                          class="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-form-2" class="form-label">To</label>
                        <input
                          id="modal-form-2"
                          type="text"
                          class="form-control"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-form-3" class="form-label"
                          >Subject</label
                        >
                        <input
                          id="modal-form-3"
                          type="text"
                          class="form-control"
                          placeholder="Important Meeting"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-form-4" class="form-label"
                          >Has the Words</label
                        >
                        <input
                          id="modal-form-4"
                          type="text"
                          class="form-control"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-form-5" class="form-label"
                          >Doesn't Have</label
                        >
                        <input
                          id="modal-form-5"
                          type="text"
                          class="form-control"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div class="col-span-12 sm:col-span-6">
                        <label for="modal-form-6" class="form-label"
                          >Size</label
                        >
                        <select id="modal-form-6" class="form-select">
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </select>
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
                        Send
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
                data-target="#copy-header-footer-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-header-footer-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#header-footer-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="header-footer-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <!-- BEGIN: Modal Header -->
                            <div class="modal-header">
                              <h2 class="font-medium text-base mr-auto">
                                Broadcast Message
                              </h2>
                              <button class="btn btn-outline-secondary hidden sm:flex">
                                <FileIcon class="w-4 h-4 mr-2" />
                                Download Docs
                              </button>
                              <div class="dropdown sm:hidden">
                                <a
                                  class="dropdown-toggle w-5 h-5 block"
                                  href="javascript:;"
                                  aria-expanded="false"
                                >
                                  <MoreHorizontalIcon class="w-5 h-5 text-gray-600 dark:text-gray-600" />
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
                                <label for="modal-form-1" class="form-label"
                                  >From</label
                                >
                                <input
                                  id="modal-form-1"
                                  type="text"
                                  class="form-control"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-form-2" class="form-label">To</label>
                                <input
                                  id="modal-form-2"
                                  type="text"
                                  class="form-control"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-form-3" class="form-label"
                                  >Subject</label
                                >
                                <input
                                  id="modal-form-3"
                                  type="text"
                                  class="form-control"
                                  placeholder="Important Meeting"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-form-4" class="form-label"
                                  >Has the Words</label
                                >
                                <input
                                  id="modal-form-4"
                                  type="text"
                                  class="form-control"
                                  placeholder="Job, Work, Documentation"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-form-5" class="form-label"
                                  >Doesn't Have</label
                                >
                                <input
                                  id="modal-form-5"
                                  type="text"
                                  class="form-control"
                                  placeholder="Job, Work, Documentation"
                                />
                              </div>
                              <div class="col-span-12 sm:col-span-6">
                                <label for="modal-form-6" class="form-label"
                                  >Size</label
                                >
                                <select id="modal-form-6" class="form-select">
                                  <option>10</option>
                                  <option>25</option>
                                  <option>35</option>
                                  <option>50</option>
                                </select>
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
                                Send
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
        <!-- END: Header & Footer Modal -->
        <!-- BEGIN: Delete Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Delete Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-8"
                >Show example code</label
              >
              <input
                id="show-example-8"
                data-target="#delete-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="delete-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#delete-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="delete-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-0">
                      <div class="p-5 text-center">
                        <XCircleIcon
                          class="w-16 h-16 text-theme-6 mx-auto mt-3"
                        />
                        <div class="text-3xl mt-5">Are you sure?</div>
                        <div class="text-gray-600 mt-2">
                          Do you really want to delete these records? <br />This
                          process cannot be undone.
                        </div>
                      </div>
                      <div class="px-5 pb-8 text-center">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
                        >
                          Cancel
                        </button>
                        <button type="button" class="btn btn-danger w-24">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-delete-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-delete-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#delete-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="delete-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-0">
                              <div class="p-5 text-center">
                                <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
                                <div class="text-3xl mt-5">Are you sure?</div>
                                <div class="text-gray-600 mt-2">
                                  Do you really want to delete these records? <br />This
                                  process cannot be undone.
                                </div>
                              </div>
                              <div class="px-5 pb-8 text-center">
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  class="btn btn-outline-secondary w-24 dark:border-dark-5 dark:text-gray-300 mr-1"
                                >
                                  Cancel
                                </button>
                                <button type="button" class="btn btn-danger w-24">
                                  Delete
                                </button>
                              </div>
                            </div>
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
        <!-- END: Delete Modal -->
        <!-- BEGIN: Success Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Success Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-9"
                >Show example code</label
              >
              <input
                id="show-example-9"
                data-target="#success-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="success-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#success-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="success-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body p-0">
                      <div class="p-5 text-center">
                        <CheckCircleIcon
                          class="w-16 h-16 text-theme-9 mx-auto mt-3"
                        />
                        <div class="text-3xl mt-5">Good job!</div>
                        <div class="text-gray-600 mt-2">
                          You clicked the button!
                        </div>
                      </div>
                      <div class="px-5 pb-8 text-center">
                        <button
                          type="button"
                          data-dismiss="modal"
                          class="btn btn-primary w-24"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-success-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-success-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#success-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="success-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body p-0">
                              <div class="p-5 text-center">
                                <CheckCircleIcon class="w-16 h-16 text-theme-9 mx-auto mt-3" />
                                <div class="text-3xl mt-5">Good job!</div>
                                <div class="text-gray-600 mt-2">
                                  You clicked the button!
                                </div>
                              </div>
                              <div class="px-5 pb-8 text-center">
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  class="btn btn-primary w-24"
                                >
                                  Ok
                                </button>
                              </div>
                            </div>
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
        <!-- END: Success Modal -->
        <!-- BEGIN: Tiny Slider Modal -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Tiny Slider Modal</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-10"
                >Show example code</label
              >
              <input
                id="show-example-10"
                data-target="#tiny-slider-modal"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="tiny-slider-modal" class="p-5">
            <div class="preview">
              <!-- BEGIN: Modal Toggle -->
              <div class="text-center">
                <a
                  href="javascript:;"
                  data-toggle="modal"
                  data-target="#tiny-slider-modal-preview"
                  class="btn btn-primary"
                  >Show Modal</a
                >
              </div>
              <!-- END: Modal Toggle -->
              <!-- BEGIN: Modal Content -->
              <div
                id="tiny-slider-modal-preview"
                class="modal"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="mx-6">
                        <TinySlider
                          :options="{
                            mouseDrag: true,
                            autoplay: false,
                            controls: true,
                            center: true,
                            items: 1,
                            nav: false,
                            speed: 500,
                            responsive: {
                              600: {
                                items: 2
                              }
                            }
                          }"
                        >
                          <div class="h-56 px-2">
                            <div
                              class="h-full image-fit rounded-md overflow-hidden"
                            >
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="
                                  require(`@/assets/images/${
                                    $f()[0].images[0]
                                  }`)
                                "
                              />
                            </div>
                          </div>
                          <div class="h-56 px-2">
                            <div
                              class="h-full image-fit rounded-md overflow-hidden"
                            >
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="
                                  require(`@/assets/images/${
                                    $f()[0].images[1]
                                  }`)
                                "
                              />
                            </div>
                          </div>
                          <div class="h-56 px-2">
                            <div
                              class="h-full image-fit rounded-md overflow-hidden"
                            >
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="
                                  require(`@/assets/images/${
                                    $f()[0].images[2]
                                  }`)
                                "
                              />
                            </div>
                          </div>
                          <div class="h-56 px-2">
                            <div
                              class="h-full image-fit rounded-md overflow-hidden"
                            >
                              <img
                                alt="Icewall Tailwind HTML Admin Template"
                                :src="
                                  require(`@/assets/images/${
                                    $f()[0].images[3]
                                  }`)
                                "
                              />
                            </div>
                          </div>
                        </TinySlider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- END: Modal Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-tiny-slider-modal"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-tiny-slider-modal" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Modal Toggle -->
                      <div class="text-center">
                        <a
                          href="javascript:;"
                          data-toggle="modal"
                          data-target="#tiny-slider-modal-preview"
                          class="btn btn-primary"
                          >Show Modal</a
                        >
                      </div>
                      <!-- END: Modal Toggle -->
                      <!-- BEGIN: Modal Content -->
                      <div
                        id="tiny-slider-modal-preview"
                        class="modal"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-body">
                              <div class="mx-6">
                                <TinySlider
                                  :options="{
                                    mouseDrag: true,
                                    autoplay: false,
                                    controls: true,
                                    center: true,
                                    items: 1,
                                    nav: false,
                                    speed: 500,
                                    responsive: {
                                      600: {
                                        items: 2
                                      }
                                    }
                                  }"
                                >
                                  <div class="h-56 px-2">
                                    <div
                                      class="h-full image-fit rounded-md overflow-hidden"
                                    >
                                      <img
                                        alt="Icewall Tailwind HTML Admin Template"
                                        :src="
                                          require(`@/assets/images/${
                                            $f()[0].images[0]
                                          }`)
                                        "
                                      />
                                    </div>
                                  </div>
                                  <div class="h-56 px-2">
                                    <div
                                      class="h-full image-fit rounded-md overflow-hidden"
                                    >
                                      <img
                                        alt="Icewall Tailwind HTML Admin Template"
                                        :src="
                                          require(`@/assets/images/${
                                            $f()[0].images[1]
                                          }`)
                                        "
                                      />
                                    </div>
                                  </div>
                                  <div class="h-56 px-2">
                                    <div
                                      class="h-full image-fit rounded-md overflow-hidden"
                                    >
                                      <img
                                        alt="Icewall Tailwind HTML Admin Template"
                                        :src="
                                          require(`@/assets/images/${
                                            $f()[0].images[2]
                                          }`)
                                        "
                                      />
                                    </div>
                                  </div>
                                  <div class="h-56 px-2">
                                    <div
                                      class="h-full image-fit rounded-md overflow-hidden"
                                    >
                                      <img
                                        alt="Icewall Tailwind HTML Admin Template"
                                        :src="
                                          require(`@/assets/images/${
                                            $f()[0].images[3]
                                          }`)
                                        "
                                      />
                                    </div>
                                  </div>
                                </TinySlider>
                              </div>
                            </div>
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
        <!-- END: Tiny Slider Modal -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const showProgrammaticallyShowModal = () => {
      cash("#programmatically-modal").modal("show");
    };
    const hideProgrammaticallyShowModal = () => {
      cash("#programmatically-modal").modal("hide");
    };
    const toggleProgrammaticallyShowModal = () => {
      cash("#programmatically-modal").modal("toggle");
    };

    return {
      showProgrammaticallyShowModal,
      hideProgrammaticallyShowModal,
      toggleProgrammaticallyShowModal
    };
  }
});
</script>
