<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Dropdown</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Dropdown -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Dropdown</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-dropdown" class="p-5">
            <div class="preview">
              <div class="flex justify-center">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Show Dropdown
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-dropdown" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex justify-center">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Show Dropdown
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
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
              Header & Footer Dropdown
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#header-footer-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="header-footer-dropdown" class="p-5">
            <div class="preview">
              <div class="flex justify-center">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Show Dropdown
                  </button>
                  <div class="dropdown-menu w-56">
                    <div class="dropdown-menu__content box dark:bg-dark-1">
                      <div
                        class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                      >
                        Export Options
                      </div>
                      <div class="p-2">
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <ActivityIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Export to PDF
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <BoxIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Export to Excel
                          <div
                            class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                          >
                            10
                          </div>
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <LayoutIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Export to CSV
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <SidebarIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Export to Word
                        </a>
                      </div>
                      <div
                        class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                      >
                        <button type="button" class="btn btn-primary py-1 px-2">
                          Settings
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary py-1 px-2 ml-auto"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-header-footer-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-header-footer" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex justify-center">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Show Dropdown
                          </button>
                          <div class="dropdown-menu w-56">
                            <div class="dropdown-menu__content box dark:bg-dark-1">
                              <div
                                class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                              >
                                Export Options
                              </div>
                              <div class="p-2">
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <ActivityIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Export to PDF
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <BoxIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Export to Excel
                                  <div
                                    class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                                  >
                                    10
                                  </div>
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <LayoutIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Export to CSV
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <SidebarIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Export to Word
                                </a>
                              </div>
                              <div
                                class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                              >
                                <button type="button" class="btn btn-primary py-1 px-2">
                                  Settings
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-secondary py-1 px-2 ml-auto"
                                >
                                  View Profile
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
            <h2 class="font-medium text-base mr-auto">Icon Dropdown</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#icon-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-dropdown" class="p-5">
            <div class="preview">
              <div class="flex justify-center">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Show Dropdown
                  </button>
                  <div class="dropdown-menu w-48">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <Edit2Icon class="w-4 h-4 mr-2" /> New Dropdown
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <TrashIcon class="w-4 h-4 mr-2" /> Delete Dropdown
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-icon-dropdown" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex justify-center">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Show Dropdown
                          </button>
                          <div class="dropdown-menu w-48">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >
                                <Edit2Icon class="w-4 h-4 mr-2" /> New Dropdown
                              </a>
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >
                                <TrashIcon class="w-4 h-4 mr-2" /> Delete Dropdown
                              </a>
                            </div>
                          </div>
                        </div>
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
              Programmatically Show/Hide Dropdown
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#programmatically-show-hide-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="programmatically-show-hide-dropdown" class="p-5">
            <div class="preview">
              <div class="text-center">
                <!-- BEGIN: Show Modal Toggle -->
                <button class="btn btn-primary w-40 mr-1 mb-2" @click="show">
                  Show
                </button>
                <!-- END: Show Modal Toggle -->
                <!-- BEGIN: Hide Modal Toggle -->
                <button class="btn btn-primary w-40 mr-1 mb-2" @click="hide">
                  Hide
                </button>
                <!-- END: Hide Modal Toggle -->
                <!-- BEGIN: Toggle Modal Toggle -->
                <button class="btn btn-primary w-40 mr-1 mb-2" @click="toggle">
                  Toggle
                </button>
                <!-- END: Toggle Modal Toggle -->
                <!-- BEGIN: Dropdown Content -->
                <div
                  id="programmatically-dropdown"
                  class="dropdown inline-block"
                >
                  <button
                    class="dropdown-toggle btn btn-primary w-40 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Example Dropdown
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <!-- END: Dropdown Content -->
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-programmatically-show-hide-dropdown-html"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-programmatically-show-hide-dropdown-html"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="text-center">
                        <!-- BEGIN: Show Modal Toggle -->
                        <button class="btn btn-primary w-40 mr-1 mb-2" @click="show">
                          Show
                        </button>
                        <!-- END: Show Modal Toggle -->
                        <!-- BEGIN: Hide Modal Toggle -->
                        <button class="btn btn-primary w-40 mr-1 mb-2" @click="hide">
                          Hide
                        </button>
                        <!-- END: Hide Modal Toggle -->
                        <!-- BEGIN: Toggle Modal Toggle -->
                        <button class="btn btn-primary w-40 mr-1 mb-2" @click="toggle">
                          Toggle
                        </button>
                        <!-- END: Toggle Modal Toggle -->
                        <!-- BEGIN: Dropdown Content -->
                        <div
                          id="programmatically-dropdown"
                          class="dropdown inline-block"
                        >
                          <button
                            class="dropdown-toggle btn btn-primary w-40 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Example Dropdown
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <!-- END: Dropdown Content -->
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
              <button
                data-target="#copy-programmatically-show-hide-dropdown-js"
                class="copy-code btn py-1 px-2 btn-outline-secondary mt-5"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-programmatically-show-hide-dropdown-js"
                  class="source-preview"
                >
                  <code
                    class="javascript text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                        // Show dropdown
                        cash(\'#programmatically-show-dropdown\').on(\'click\', function() {
                            cash(\'#programmatically-dropdown\').dropdown(\'show\')
                        })

                        // Hide dropdown
                        cash(\'#programmatically-hide-dropdown\').on(\'click\', function() {
                            cash(\'#programmatically-dropdown\').dropdown(\'hide\')
                        })

                        // Toggle dropdown
                        cash(\'#programmatically-toggle-dropdown\').on(\'click\', function() {
                            cash(\'#programmatically-dropdown\').dropdown(\'toggle\')
                        })
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
              Dropdown with close button
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#button-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="button-dropdown" class="p-5">
            <div class="preview">
              <div class="text-center">
                <div
                  class="dropdown inline-block"
                  data-placement="bottom-start"
                >
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Filter Dropdown
                    <ChevronDownIcon class="w-4 h-4 ml-2" />
                  </button>
                  <div class="dropdown-menu">
                    <div class="dropdown-menu__content box p-5">
                      <div>
                        <div class="text-xs">From</div>
                        <input
                          type="text"
                          class="form-control mt-2 flex-1"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div class="mt-3">
                        <div class="text-xs">To</div>
                        <input
                          type="text"
                          class="form-control mt-2 flex-1"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div class="flex items-center mt-3">
                        <button
                          data-dismiss="dropdown"
                          class="btn btn-secondary w-32 ml-auto"
                        >
                          Close
                        </button>
                        <button class="btn btn-primary w-32 ml-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-button-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-button-dropdown" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="text-center">
                        <div
                          class="dropdown inline-block"
                          data-placement="bottom-start"
                        >
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Filter Dropdown
                            <ChevronDownIcon class="w-4 h-4 ml-2" />
                          </button>
                          <div class="dropdown-menu">
                            <div class="dropdown-menu__content box p-5">
                              <div>
                                <div class="text-xs">From</div>
                                <input
                                  type="text"
                                  class="form-control mt-2 flex-1"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <div class="mt-3">
                                <div class="text-xs">To</div>
                                <input
                                  type="text"
                                  class="form-control mt-2 flex-1"
                                  placeholder="example@gmail.com"
                                />
                              </div>
                              <div class="flex items-center mt-3">
                                <button
                                  data-dismiss="dropdown"
                                  class="btn btn-secondary w-32 ml-auto"
                                >
                                  Close
                                </button>
                                <button class="btn btn-primary w-32 ml-2">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
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
      <!-- END: Basic Dropdown -->
      <!-- BEGIN: Header & Footer Dropdown -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Scrolled Dropdown</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#scrolled-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="scrolled-dropdown" class="p-5">
            <div class="preview">
              <div class="flex justify-center">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Show Dropdown
                  </button>
                  <div class="dropdown-menu w-40">
                    <div
                      class="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                    >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >January</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >February</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >March</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >June</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >July</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-scrolled-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-scrolled-dropdown" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex justify-center">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Show Dropdown
                          </button>
                          <div class="dropdown-menu w-40">
                            <div
                              class="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                            >
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >January</a
                              >
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >February</a
                              >
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >March</a
                              >
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >June</a
                              >
                              <a
                                href=""
                                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >July</a
                              >
                            </div>
                          </div>
                        </div>
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
              Header & Icon Dropdown
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-7"
                >Show example code</label
              >
              <input
                id="show-example-7"
                data-target="#header-icon-dropdown"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="header-icon-dropdown" class="p-5">
            <div class="preview">
              <div class="flex justify-center">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-primary"
                    aria-expanded="false"
                  >
                    Show Dropdown
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1">
                      <div
                        class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                      >
                        Export Tools
                      </div>
                      <div class="p-2">
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <PrinterIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Print
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <ExternalLinkIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          Excel
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <FileTextIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          CSV
                        </a>
                        <a
                          href=""
                          class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >
                          <ArchiveIcon
                            class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                          />
                          PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-header-icon-dropdown"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-header-icon" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex justify-center">
                        <div class="dropdown">
                          <button
                            class="dropdown-toggle btn btn-primary"
                            aria-expanded="false"
                          >
                            Show Dropdown
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1">
                              <div
                                class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                              >
                                Export Tools
                              </div>
                              <div class="p-2">
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <PrinterIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Print
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <ExternalLinkIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  Excel
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <FileTextIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  CSV
                                </a>
                                <a
                                  href=""
                                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                  <ArchiveIcon
                                    class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                                  />
                                  PDF
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
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
            <h2 class="font-medium text-base mr-auto">Dropdown Placement</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-8"
                >Show example code</label
              >
              <input
                id="show-example-8"
                data-target="#dropdown-placement"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="dropdown-placement" class="p-5">
            <div class="preview">
              <div class="text-center">
                <div class="dropdown inline-block" data-placement="top-start">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Top Start
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="top">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Top
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="top-end">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Top End
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="right-start">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Right Start
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="right">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Right
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="right-end">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Right End
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="bottom-end">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Bottom End
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="bottom">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Bottom
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown inline-block"
                  data-placement="bottom-start"
                >
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Bottom Start
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="left-start">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Left Start
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="left">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Left
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
                <div class="dropdown inline-block" data-placement="left-end">
                  <button
                    class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                    aria-expanded="false"
                  >
                    Left End
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >New Dropdown</a
                      >
                      <a
                        href=""
                        class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >Delete Dropdown</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-dropdown-placement"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-dropdown-placement" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="text-center">
                        <div class="dropdown inline-block" data-placement="top-start">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Top Start
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="top">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Top
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="top-end">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Top End
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="right-start">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Right Start
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="right">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Right
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="right-end">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Right End
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="bottom-end">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Bottom End
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="bottom">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Bottom
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div
                          class="dropdown inline-block"
                          data-placement="bottom-start"
                        >
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Bottom Start
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="left-start">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Left Start
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="left">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Left
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="dropdown inline-block" data-placement="left-end">
                          <button
                            class="dropdown-toggle btn btn-primary w-32 mr-1 mb-2"
                            aria-expanded="false"
                          >
                            Left End
                          </button>
                          <div class="dropdown-menu w-40">
                            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >New Dropdown</a
                              >
                              <a
                                href=""
                                class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >Delete Dropdown</a
                              >
                            </div>
                          </div>
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
      <!-- END: Header & Footer Dropdown -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const show = () => {
      cash("#programmatically-dropdown").dropdown("show");
    };
    const hide = () => {
      cash("#programmatically-dropdown").dropdown("hide");
    };
    const toggle = () => {
      cash("#programmatically-dropdown").dropdown("toggle");
    };

    return {
      show,
      hide,
      toggle
    };
  }
});
</script>
