<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Alert</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Alert -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-alert" class="p-5">
            <div class="preview">
              <div class="alert alert-primary show mb-2" role="alert">
                Awesome simple alert
              </div>
              <div class="alert alert-secondary show mb-2" role="alert">
                Awesome simple alert
              </div>
              <div class="alert alert-success show mb-2" role="alert">
                Awesome simple alert
              </div>
              <div class="alert alert-warning show mb-2" role="alert">
                Awesome simple alert
              </div>
              <div class="alert alert-danger show mb-2" role="alert">
                Awesome simple alert
              </div>
              <div class="alert alert-dark show mb-2" role="alert">
                Awesome simple alert
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="alert alert-primary show mb-2" role="alert">Awesome simple alert</div>
                      <div class="alert alert-secondary show mb-2" role="alert">Awesome simple alert</div>
                      <div class="alert alert-success show mb-2" role="alert">Awesome simple alert</div>
                      <div class="alert alert-warning show mb-2" role="alert">Awesome simple alert</div>
                      <div class="alert alert-danger show mb-2" role="alert">Awesome simple alert</div>
                      <div class="alert alert-dark show mb-2" role="alert">Awesome simple alert</div>
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
            <h2 class="font-medium text-base mr-auto">Icon Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#icon-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-alert" class="p-5">
            <div class="preview">
              <div
                class="alert alert-primary show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="alert alert-secondary show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="alert alert-success show flex items-center mb-2"
                role="alert"
              >
                <AlerttriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="alert alert-warning show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="alert alert-danger show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="alert alert-dark show flex items-center mb-2"
                role="alert"
              >
                <AlerttriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-icon-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="alert alert-primary show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-secondary show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-success show flex items-center mb-2"
                        role="alert"
                      >
                        <AlerttriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-warning show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-danger show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-dark show flex items-center mb-2"
                        role="alert"
                      >
                        <AlerttriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
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
              Additional Content Alerts
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#additional-content-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="additional-content-alert" class="p-5">
            <div class="preview">
              <div class="alert alert-primary show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="alert alert-secondary show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="alert alert-success show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="alert alert-warning show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="alert alert-danger show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="alert alert-dark show mb-2" role="alert">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-additional-content-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-additional-content-alert"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="alert alert-primary show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                      <div class="alert alert-secondary show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                      <div class="alert alert-success show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                      <div class="alert alert-warning show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                      <div class="alert alert-danger show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                      <div class="alert alert-dark show mb-2" role="alert">
                          <div class="flex items-center">
                              <div class="font-medium text-lg">Awesome alert with additional info</div>
                              <div class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto">New</div>
                          </div>
                          <div class="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Alert -->
      <!-- BEGIN: Icon & Dismiss Alert -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Icon & Dismiss Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#icon-dismiss-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-dismiss-alert" class="p-5">
            <div class="preview">
              <div
                class="alert alert-primary alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-secondary alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-success alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-warning alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-danger alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-dark alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-dismiss-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-icon-dismiss-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="alert alert-primary alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-secondary alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-success alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-warning alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-danger alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-dark alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
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
            <h2 class="font-medium text-base mr-auto">Outline Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#outline-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="outline-alert" class="p-5">
            <div class="preview">
              <div
                class="alert alert-outline-primary alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-outline-secondary alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-outline-success alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-outline-warning alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-outline-danger alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
              <div
                class="alert alert-outline-dark alert-dismissible show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                >
                  <XIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-outline-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-outline-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="alert alert-outline-primary alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-outline-secondary alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-outline-success alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-outline-warning alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-outline-danger alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
                      </div>
                      <div
                        class="alert alert-outline-dark alert-dismissible show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                        >
                          <XIcon class="w-4 h-4" />
                        </button>
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
            <h2 class="font-medium text-base mr-auto">Soft Color Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#softcolor-alert"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="softcolor-alert" class="p-5">
            <div class="preview">
              <div
                class="alert alert-primary-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="alert alert-secondary-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </div>
              <div
                class="alert alert-success-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </div>
              <div
                class="alert alert-warning-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="alert alert-danger-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </div>
              <div
                class="alert alert-dark-soft show flex items-center mb-2"
                role="alert"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-softcolor-alert"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-softcolor-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="alert alert-primary-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-secondary-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                      </div>
                      <div
                        class="alert alert-success-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                      </div>
                      <div
                        class="alert alert-warning-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                      </div>
                      <div
                        class="alert alert-danger-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                      </div>
                      <div
                        class="alert alert-dark-soft show flex items-center mb-2"
                        role="alert"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" /> Awesome alert with
                        icon
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Icon & Dismiss Alert -->
    </div>
  </div>
</template>
