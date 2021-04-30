<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Regular Table</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Basic Table -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Basic Table</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table mt-5">
                  <thead>
                    <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                      <th
                        class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                      <td class="border-b border-gray-600">1</td>
                      <td class="border-b border-gray-600">Angelina</td>
                      <td class="border-b border-gray-600">Jolie</td>
                      <td class="border-b border-gray-600">@angelinajolie</td>
                    </tr>
                    <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                      <td class="border-b border-gray-600">2</td>
                      <td class="border-b border-gray-600">Brad</td>
                      <td class="border-b border-gray-600">Pitt</td>
                      <td class="border-b border-gray-600">@bradpitt</td>
                    </tr>
                    <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                      <td class="border-b border-gray-600">3</td>
                      <td class="border-b border-gray-600">Charlie</td>
                      <td class="border-b border-gray-600">Hunnam</td>
                      <td class="border-b border-gray-600">@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table class="table mt-5">
                          <thead>
                            <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                              <th
                                class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 border-gray-600 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                              <td class="border-b border-gray-600">1</td>
                              <td class="border-b border-gray-600">Angelina</td>
                              <td class="border-b border-gray-600">Jolie</td>
                              <td class="border-b border-gray-600">@angelinajolie</td>
                            </tr>
                            <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                              <td class="border-b border-gray-600">2</td>
                              <td class="border-b border-gray-600">Brad</td>
                              <td class="border-b border-gray-600">Pitt</td>
                              <td class="border-b border-gray-600">@bradpitt</td>
                            </tr>
                            <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                              <td class="border-b border-gray-600">3</td>
                              <td class="border-b border-gray-600">Charlie</td>
                              <td class="border-b border-gray-600">Hunnam</td>
                              <td class="border-b border-gray-600">@charliehunnam</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Basic Table -->
        <!-- BEGIN: Bordered Table -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Bordered Table</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#bordered-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="bordered-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border">1</td>
                      <td class="border">Angelina</td>
                      <td class="border">Jolie</td>
                      <td class="border">@angelinajolie</td>
                    </tr>
                    <tr>
                      <td class="border">2</td>
                      <td class="border">Brad</td>
                      <td class="border">Pitt</td>
                      <td class="border">@bradpitt</td>
                    </tr>
                    <tr>
                      <td class="border">3</td>
                      <td class="border">Charlie</td>
                      <td class="border">Hunnam</td>
                      <td class="border">@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-bordered-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-bordered-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border">1</td>
                              <td class="border">Angelina</td>
                              <td class="border">Jolie</td>
                              <td class="border">@angelinajolie</td>
                            </tr>
                            <tr>
                              <td class="border">2</td>
                              <td class="border">Brad</td>
                              <td class="border">Pitt</td>
                              <td class="border">@bradpitt</td>
                            </tr>
                            <tr>
                              <td class="border">3</td>
                              <td class="border">Charlie</td>
                              <td class="border">Hunnam</td>
                              <td class="border">@charliehunnam</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Bordered Table -->
        <!-- BEGIN: Hoverable Table -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Hoverable Table</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#hoverable-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="hoverable-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-gray-200">
                      <td class="border">1</td>
                      <td class="border">Angelina</td>
                      <td class="border">Jolie</td>
                      <td class="border">@angelinajolie</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                      <td class="border">2</td>
                      <td class="border">Brad</td>
                      <td class="border">Pitt</td>
                      <td class="border">@bradpitt</td>
                    </tr>
                    <tr class="hover:bg-gray-200">
                      <td class="border">3</td>
                      <td class="border">Charlie</td>
                      <td class="border">Hunnam</td>
                      <td class="border">@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-hoverable-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-hoverable-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="hover:bg-gray-200">
                              <td class="border">1</td>
                              <td class="border">Angelina</td>
                              <td class="border">Jolie</td>
                              <td class="border">@angelinajolie</td>
                            </tr>
                            <tr class="hover:bg-gray-200">
                              <td class="border">2</td>
                              <td class="border">Brad</td>
                              <td class="border">Pitt</td>
                              <td class="border">@bradpitt</td>
                            </tr>
                            <tr class="hover:bg-gray-200">
                              <td class="border">3</td>
                              <td class="border">Charlie</td>
                              <td class="border">Hunnam</td>
                              <td class="border">@charliehunnam</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Hoverable Table -->
        <!-- BEGIN: Table Row States -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Table Row States</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#row-states-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="row-states-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-theme-1 text-white">
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr class="bg-theme-6 text-white">
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr class="bg-theme-11 text-white">
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-row-states-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-row-states-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-theme-1 text-white">
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr class="bg-theme-6 text-white">
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr class="bg-theme-11 text-white">
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Table Row States -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Table Head Options -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Table Head Options</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#head-options-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="head-options-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                      <th class="whitespace-nowrap">#</th>
                      <th class="whitespace-nowrap">First Name</th>
                      <th class="whitespace-nowrap">Last Name</th>
                      <th class="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table mt-5">
                  <thead>
                    <tr class="bg-gray-200 text-gray-700">
                      <th class="whitespace-nowrap">#</th>
                      <th class="whitespace-nowrap">First Name</th>
                      <th class="whitespace-nowrap">Last Name</th>
                      <th class="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-head-options-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-head-options-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr class="bg-gray-700 dark:bg-dark-1 text-white">
                              <th class="whitespace-nowrap">#</th>
                              <th class="whitespace-nowrap">First Name</th>
                              <th class="whitespace-nowrap">Last Name</th>
                              <th class="whitespace-nowrap">Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table class="table mt-5">
                          <thead>
                            <tr class="bg-gray-200 text-gray-700">
                              <th class="whitespace-nowrap">#</th>
                              <th class="whitespace-nowrap">First Name</th>
                              <th class="whitespace-nowrap">Last Name</th>
                              <th class="whitespace-nowrap">Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Table Head Options -->
        <!-- BEGIN: Responsive Table -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Responsive Table</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#responsive-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="responsive-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Email
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b whitespace-nowrap">1</td>
                      <td class="border-b whitespace-nowrap">Angelina</td>
                      <td class="border-b whitespace-nowrap">Jolie</td>
                      <td class="border-b whitespace-nowrap">@angelinajolie</td>
                      <td class="border-b whitespace-nowrap">
                        angelinajolie@gmail.com
                      </td>
                      <td class="border-b whitespace-nowrap">
                        260 W. Storm Street New York, NY 10025.
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b whitespace-nowrap">2</td>
                      <td class="border-b whitespace-nowrap">Brad</td>
                      <td class="border-b whitespace-nowrap">Pitt</td>
                      <td class="border-b whitespace-nowrap">@bradpitt</td>
                      <td class="border-b whitespace-nowrap">
                        bradpitt@gmail.com
                      </td>
                      <td class="border-b whitespace-nowrap">
                        47 Division St. Buffalo, NY 14241.
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b whitespace-nowrap">3</td>
                      <td class="border-b whitespace-nowrap">Charlie</td>
                      <td class="border-b whitespace-nowrap">Hunnam</td>
                      <td class="border-b whitespace-nowrap">@charliehunnam</td>
                      <td class="border-b whitespace-nowrap">
                        charliehunnam@gmail.com
                      </td>
                      <td class="border-b whitespace-nowrap">
                        8023 Amerige Street Harriman, NY 10926.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-responsive-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-responsive-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Email
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Address
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border-b whitespace-nowrap">1</td>
                              <td class="border-b whitespace-nowrap">Angelina</td>
                              <td class="border-b whitespace-nowrap">Jolie</td>
                              <td class="border-b whitespace-nowrap">@angelinajolie</td>
                              <td class="border-b whitespace-nowrap">
                                angelinajolie@gmail.com
                              </td>
                              <td class="border-b whitespace-nowrap">
                                260 W. Storm Street New York, NY 10025.
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b whitespace-nowrap">2</td>
                              <td class="border-b whitespace-nowrap">Brad</td>
                              <td class="border-b whitespace-nowrap">Pitt</td>
                              <td class="border-b whitespace-nowrap">@bradpitt</td>
                              <td class="border-b whitespace-nowrap">
                                bradpitt@gmail.com
                              </td>
                              <td class="border-b whitespace-nowrap">
                                47 Division St. Buffalo, NY 14241.
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b whitespace-nowrap">3</td>
                              <td class="border-b whitespace-nowrap">Charlie</td>
                              <td class="border-b whitespace-nowrap">Hunnam</td>
                              <td class="border-b whitespace-nowrap">@charliehunnam</td>
                              <td class="border-b whitespace-nowrap">
                                charliehunnam@gmail.com
                              </td>
                              <td class="border-b whitespace-nowrap">
                                8023 Amerige Street Harriman, NY 10926.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Responsive Table -->
        <!-- BEGIN: Small Table -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Small Table</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-7"
                >Show example code</label
              >
              <input
                id="show-example-7"
                data-target="#small-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="small-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table table--sm">
                  <thead>
                    <tr>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-small-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-small-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table table--sm">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Small Table -->
        <!-- BEGIN: Striped Rows -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200"
          >
            <h2 class="font-medium text-base mr-auto">Striped Rows</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-8"
                >Show example code</label
              >
              <input
                id="show-example-8"
                data-target="#striped-rows-table"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="striped-rows-table" class="p-5">
            <div class="preview">
              <div class="overflow-x-auto">
                <table class="table">
                  <thead>
                    <tr>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        #
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        First Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Last Name
                      </th>
                      <th
                        class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                      >
                        Username
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-gray-200 dark:bg-dark-1">
                      <td class="border-b dark:border-dark-5">1</td>
                      <td class="border-b dark:border-dark-5">Angelina</td>
                      <td class="border-b dark:border-dark-5">Jolie</td>
                      <td class="border-b dark:border-dark-5">
                        @angelinajolie
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b dark:border-dark-5">2</td>
                      <td class="border-b dark:border-dark-5">Brad</td>
                      <td class="border-b dark:border-dark-5">Pitt</td>
                      <td class="border-b dark:border-dark-5">@bradpitt</td>
                    </tr>
                    <tr class="bg-gray-200 dark:bg-dark-1">
                      <td class="border-b dark:border-dark-5">3</td>
                      <td class="border-b dark:border-dark-5">Charlie</td>
                      <td class="border-b dark:border-dark-5">Hunnam</td>
                      <td class="border-b dark:border-dark-5">
                        @charliehunnam
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-striped-rows-table"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-striped-rows-table" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="overflow-x-auto">
                        <table class="table">
                          <thead>
                            <tr>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                #
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                First Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Last Name
                              </th>
                              <th
                                class="border-b-2 dark:border-dark-5 whitespace-nowrap"
                              >
                                Username
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-gray-200 dark:bg-dark-1">
                              <td class="border-b dark:border-dark-5">1</td>
                              <td class="border-b dark:border-dark-5">Angelina</td>
                              <td class="border-b dark:border-dark-5">Jolie</td>
                              <td class="border-b dark:border-dark-5">
                                @angelinajolie
                              </td>
                            </tr>
                            <tr>
                              <td class="border-b dark:border-dark-5">2</td>
                              <td class="border-b dark:border-dark-5">Brad</td>
                              <td class="border-b dark:border-dark-5">Pitt</td>
                              <td class="border-b dark:border-dark-5">@bradpitt</td>
                            </tr>
                            <tr class="bg-gray-200 dark:bg-dark-1">
                              <td class="border-b dark:border-dark-5">3</td>
                              <td class="border-b dark:border-dark-5">Charlie</td>
                              <td class="border-b dark:border-dark-5">Hunnam</td>
                              <td class="border-b dark:border-dark-5">
                                @charliehunnam
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Striped Rows -->
      </div>
    </div>
  </div>
</template>
