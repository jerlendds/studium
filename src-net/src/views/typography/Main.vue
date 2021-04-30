<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Typography</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: HEADING -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Heading</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#heading"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="heading" class="p-5">
            <div class="preview">
              <div>
                <h1 class="text-4xl font-medium leading-none">h1. Heading 1</h1>
                <h2 class="text-3xl font-medium leading-none mt-3">
                  h2. Heading 2
                </h2>
                <h3 class="text-2xl font-medium leading-none mt-3">
                  h3. Heading 3
                </h3>
                <h4 class="text-xl font-medium leading-none mt-3">
                  h4. Heading 4
                </h4>
                <h5 class="text-lg font-medium leading-none mt-3">
                  h5. Heading 5
                </h5>
                <h6 class="font-medium leading-none mt-3">h6. Heading 6</h6>
              </div>
              <div class="mt-5">
                <h1 class="text-4xl text-theme-1 font-medium leading-none">
                  h1. Heading 1
                </h1>
                <h2
                  class="text-3xl text-gray-700 dark:text-gray-600 font-medium leading-none mt-3"
                >
                  h2. Heading 2
                </h2>
                <h3 class="text-2xl text-theme-9 font-medium leading-none mt-3">
                  h3. Heading 3
                </h3>
                <h4 class="text-xl text-theme-12 font-medium leading-none mt-3">
                  h4. Heading 4
                </h4>
                <h5 class="text-lg text-theme-6 font-medium leading-none mt-3">
                  h5. Heading 5
                </h5>
                <h6 class="text-gray-600 font-medium leading-none mt-3">
                  h6. Heading 6
                </h6>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-heading"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-heading" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        <h1 class="text-4xl font-medium leading-none">h1. Heading 1</h1>
                        <h2 class="text-3xl font-medium leading-none mt-3">
                          h2. Heading 2
                        </h2>
                        <h3 class="text-2xl font-medium leading-none mt-3">
                          h3. Heading 3
                        </h3>
                        <h4 class="text-xl font-medium leading-none mt-3">
                          h4. Heading 4
                        </h4>
                        <h5 class="text-lg font-medium leading-none mt-3">
                          h5. Heading 5
                        </h5>
                        <h6 class="font-medium leading-none mt-3">h6. Heading 6</h6>
                      </div>
                      <div class="mt-5">
                        <h1 class="text-4xl text-theme-1 font-medium leading-none">
                          h1. Heading 1
                        </h1>
                        <h2
                          class="text-3xl text-gray-700 dark:text-gray-600 font-medium leading-none mt-3"
                        >
                          h2. Heading 2
                        </h2>
                        <h3 class="text-2xl text-theme-9 font-medium leading-none mt-3">
                          h3. Heading 3
                        </h3>
                        <h4 class="text-xl text-theme-12 font-medium leading-none mt-3">
                          h4. Heading 4
                        </h4>
                        <h5 class="text-lg text-theme-6 font-medium leading-none mt-3">
                          h5. Heading 5
                        </h5>
                        <h6 class="text-gray-600 font-medium leading-none mt-3">
                          h6. Heading 6
                        </h6>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: HEADING -->
        <!-- BEGIN: TEXT SETTINGS -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Text Settings</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#text-settings"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="text-settings" class="p-5">
            <div class="preview">
              <div>
                <div class="font-normal">Example text</div>
                <div class="font-medium">Example medium text</div>
                <div class="font-semibold">Example semibold text</div>
                <div class="font-bold">Example bolder text</div>
                <div class="font-extrabold">Example boldest text</div>
              </div>
              <div class="mt-5">
                <div class="uppercase">Example uppercase text</div>
                <div class="lowercase">Example lowercase text</div>
                <div class="capitalize">Example capitalized text</div>
                <div class="normal-case">Example cursive text</div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-text-settings"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-text-settings" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        <div class="font-normal">Example text</div>
                        <div class="font-medium">Example medium text</div>
                        <div class="font-semibold">Example semibold text</div>
                        <div class="font-bold">Example bolder text</div>
                        <div class="font-extrabold">Example boldest text</div>
                      </div>
                      <div class="mt-5">
                        <div class="uppercase">Example uppercase text</div>
                        <div class="lowercase">Example lowercase text</div>
                        <div class="capitalize">Example capitalized text</div>
                        <div class="normal-case">Example cursive text</div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: TEXT SETTINGS -->
        <!-- BEGIN: COMMON ELEMENTS -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Common Elements</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#common-elements"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="common-elements" class="p-5">
            <div class="preview">
              <div>
                You can use the mark tag to
                <mark class="p-1 bg-yellow-200">highlight</mark> text.
              </div>
              <del class="block mt-1"
                >This line of text is meant to be treated as deleted text.</del
              >
              <s class="block mt-1"
                >This line of text is meant to be treated as no longer
                accurate.</s
              >
              <ins class="block mt-1"
                >This line of text is meant to be treated as an addition to the
                document.</ins
              >
              <u class="block mt-1"
                >This line of text will render as underlined</u
              >
              <small class="block mt-1"
                >This line of text is meant to be treated as fine print.</small
              >
              <strong class="block mt-1"
                >This line rendered as bold text.</strong
              >
              <em class="block mt-1">This line rendered as italicized text.</em>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-common-elements"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-common-elements" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        You can use the mark tag to
                        <mark class="p-1 bg-yellow-200">highlight</mark> text.
                      </div>
                      <del class="block mt-1"
                        >This line of text is meant to be treated as deleted text.</del
                      >
                      <s class="block mt-1"
                        >This line of text is meant to be treated as no longer
                        accurate.</s
                      >
                      <ins class="block mt-1"
                        >This line of text is meant to be treated as an addition to the
                        document.</ins
                      >
                      <u class="block mt-1"
                        >This line of text will render as underlined</u
                      >
                      <small class="block mt-1"
                        >This line of text is meant to be treated as fine print.</small
                      >
                      <strong class="block mt-1"
                        >This line rendered as bold text.</strong
                      >
                      <em class="block mt-1">This line rendered as italicized text.</em>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: COMMON ELEMENTS -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: BADGES -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Badges</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#badge"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="badge" class="p-5">
            <div class="preview">
              <div class="font-medium">Basic Badge</div>
              <div class="mt-2">
                <span
                  class="text-xs px-1 rounded-full bg-theme-1 text-white mr-1"
                  >1</span
                >
                <span
                  class="text-xs px-1 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span
                  class="text-xs px-1 rounded-full bg-theme-9 text-white mr-1"
                  >3</span
                >
                <span
                  class="text-xs px-1 rounded-full bg-theme-12 text-white mr-1"
                  >4</span
                >
                <span
                  class="text-xs px-1 rounded-full bg-theme-6 text-white mr-1"
                  >5</span
                >
                <span
                  class="text-xs px-1 rounded-full bg-gray-200 text-gray-600 mr-1"
                  >6</span
                >
              </div>
              <div class="font-medium mt-6">Badge Sizes</div>
              <div class="mt-3">
                <span class="px-2 py-1 rounded-full bg-theme-1 text-white mr-1"
                  >1</span
                >
                <span
                  class="px-2 py-1 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span class="px-2 py-1 rounded-full bg-theme-9 text-white mr-1"
                  >3</span
                >
                <span class="px-2 py-1 rounded-full bg-theme-12 text-white mr-1"
                  >4</span
                >
                <span class="px-2 py-1 rounded-full bg-theme-6 text-white mr-1"
                  >5</span
                >
                <span
                  class="px-2 py-1 rounded-full bg-gray-200 text-gray-600 mr-1"
                  >6</span
                >
              </div>
              <div class="mt-4">
                <span class="px-3 py-2 rounded-full bg-theme-1 text-white mr-1"
                  >1</span
                >
                <span
                  class="px-3 py-2 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span class="px-3 py-2 rounded-full bg-theme-9 text-white mr-1"
                  >3</span
                >
                <span class="px-3 py-2 rounded-full bg-theme-12 text-white mr-1"
                  >4</span
                >
                <span class="px-3 py-2 rounded-full bg-theme-6 text-white mr-1"
                  >5</span
                >
                <span
                  class="px-3 py-2 rounded-full bg-gray-200 text-gray-600 mr-1"
                  >6</span
                >
              </div>
              <div class="mt-6">
                <span class="px-4 py-3 rounded-full bg-theme-1 text-white mr-1"
                  >1</span
                >
                <span
                  class="px-4 py-3 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span class="px-4 py-3 rounded-full bg-theme-9 text-white mr-1"
                  >3</span
                >
                <span class="px-4 py-3 rounded-full bg-theme-12 text-white mr-1"
                  >4</span
                >
                <span class="px-4 py-3 rounded-full bg-theme-6 text-white mr-1"
                  >5</span
                >
                <span
                  class="px-4 py-3 rounded-full bg-gray-200 text-gray-600 mr-1"
                  >6</span
                >
              </div>
              <div class="font-medium mt-10">Square Badge</div>
              <div class="mt-2">
                <span class="text-xs px-1 bg-theme-1 text-white mr-1">1</span>
                <span
                  class="text-xs px-1 border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span class="text-xs px-1 bg-theme-9 text-white mr-1">3</span>
                <span class="text-xs px-1 bg-theme-12 text-white mr-1">4</span>
                <span class="text-xs px-1 bg-theme-6 text-white mr-1">5</span>
                <span class="text-xs px-1 bg-gray-200 text-gray-600 mr-1"
                  >6</span
                >
              </div>
              <div class="font-medium mt-6">Outline Badge</div>
              <div class="mt-4">
                <span
                  class="px-3 py-2 rounded-full border border-theme-1 text-theme-1 dark:text-theme-10 dark:border-theme-10 mr-1"
                  >1</span
                >
                <span
                  class="px-3 py-2 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                  >2</span
                >
                <span
                  class="px-3 py-2 rounded-full border border-theme-9 text-theme-9 dark:border-theme-9 mr-1"
                  >3</span
                >
                <span
                  class="px-3 py-2 rounded-full border border-theme-12 text-theme-12 dark:border-theme-12 mr-1"
                  >4</span
                >
                <span
                  class="px-3 py-2 rounded-full border border-theme-6 text-theme-6 dark:border-theme-6 mr-1"
                  >5</span
                >
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-badge"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-badge" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="font-medium">Basic Badge</div>
                      <div class="mt-2">
                        <span
                          class="text-xs px-1 rounded-full bg-theme-1 text-white mr-1"
                          >1</span
                        >
                        <span
                          class="text-xs px-1 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span
                          class="text-xs px-1 rounded-full bg-theme-9 text-white mr-1"
                          >3</span
                        >
                        <span
                          class="text-xs px-1 rounded-full bg-theme-12 text-white mr-1"
                          >4</span
                        >
                        <span
                          class="text-xs px-1 rounded-full bg-theme-6 text-white mr-1"
                          >5</span
                        >
                        <span
                          class="text-xs px-1 rounded-full bg-gray-200 text-gray-600 mr-1"
                          >6</span
                        >
                      </div>
                      <div class="font-medium mt-6">Badge Sizes</div>
                      <div class="mt-3">
                        <span class="px-2 py-1 rounded-full bg-theme-1 text-white mr-1"
                          >1</span
                        >
                        <span
                          class="px-2 py-1 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span class="px-2 py-1 rounded-full bg-theme-9 text-white mr-1"
                          >3</span
                        >
                        <span class="px-2 py-1 rounded-full bg-theme-12 text-white mr-1"
                          >4</span
                        >
                        <span class="px-2 py-1 rounded-full bg-theme-6 text-white mr-1"
                          >5</span
                        >
                        <span
                          class="px-2 py-1 rounded-full bg-gray-200 text-gray-600 mr-1"
                          >6</span
                        >
                      </div>
                      <div class="mt-4">
                        <span class="px-3 py-2 rounded-full bg-theme-1 text-white mr-1"
                          >1</span
                        >
                        <span
                          class="px-3 py-2 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span class="px-3 py-2 rounded-full bg-theme-9 text-white mr-1"
                          >3</span
                        >
                        <span class="px-3 py-2 rounded-full bg-theme-12 text-white mr-1"
                          >4</span
                        >
                        <span class="px-3 py-2 rounded-full bg-theme-6 text-white mr-1"
                          >5</span
                        >
                        <span
                          class="px-3 py-2 rounded-full bg-gray-200 text-gray-600 mr-1"
                          >6</span
                        >
                      </div>
                      <div class="mt-6">
                        <span class="px-4 py-3 rounded-full bg-theme-1 text-white mr-1"
                          >1</span
                        >
                        <span
                          class="px-4 py-3 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span class="px-4 py-3 rounded-full bg-theme-9 text-white mr-1"
                          >3</span
                        >
                        <span class="px-4 py-3 rounded-full bg-theme-12 text-white mr-1"
                          >4</span
                        >
                        <span class="px-4 py-3 rounded-full bg-theme-6 text-white mr-1"
                          >5</span
                        >
                        <span
                          class="px-4 py-3 rounded-full bg-gray-200 text-gray-600 mr-1"
                          >6</span
                        >
                      </div>
                      <div class="font-medium mt-10">Square Badge</div>
                      <div class="mt-2">
                        <span class="text-xs px-1 bg-theme-1 text-white mr-1">1</span>
                        <span
                          class="text-xs px-1 border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span class="text-xs px-1 bg-theme-9 text-white mr-1">3</span>
                        <span class="text-xs px-1 bg-theme-12 text-white mr-1">4</span>
                        <span class="text-xs px-1 bg-theme-6 text-white mr-1">5</span>
                        <span class="text-xs px-1 bg-gray-200 text-gray-600 mr-1"
                          >6</span
                        >
                      </div>
                      <div class="font-medium mt-6">Outline Badge</div>
                      <div class="mt-4">
                        <span
                          class="px-3 py-2 rounded-full border border-theme-1 text-theme-1 dark:text-theme-10 dark:border-theme-10 mr-1"
                          >1</span
                        >
                        <span
                          class="px-3 py-2 rounded-full border text-gray-700 dark:text-gray-600 dark:border-dark-5 mr-1"
                          >2</span
                        >
                        <span
                          class="px-3 py-2 rounded-full border border-theme-9 text-theme-9 dark:border-theme-9 mr-1"
                          >3</span
                        >
                        <span
                          class="px-3 py-2 rounded-full border border-theme-12 text-theme-12 dark:border-theme-12 mr-1"
                          >4</span
                        >
                        <span
                          class="px-3 py-2 rounded-full border border-theme-6 text-theme-6 dark:border-theme-6 mr-1"
                          >5</span
                        >
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: BADGES -->
        <!-- BEGIN: SEPARATOR -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Separator</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#separator"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="separator" class="p-5">
            <div class="preview">
              <div
                class="w-full border-t border-gray-200 dark:border-dark-5 border-dashed"
              ></div>
              <div
                class="w-full border-t border-gray-200 dark:border-dark-5 mt-5"
              ></div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-separator"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-separator" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="w-full border-t border-gray-200 dark:border-dark-5 border-dashed"
                      ></div>
                      <div
                        class="w-full border-t border-gray-200 dark:border-dark-5 mt-5"
                      ></div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: SEPARATOR -->
        <!-- BEGIN: Devider -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Devider</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-6"
                >Show example code</label
              >
              <input
                id="show-example-6"
                data-target="#devider"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="devider" class="p-5">
            <div class="preview">
              <div
                class="w-full flex justify-center border-t border-gray-200 dark:border-dark-5 mt-2"
              >
                <div class="bg-white dark:bg-dark-3 px-5 -mt-3 text-gray-600">
                  or
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-devider"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-devider" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="w-full flex justify-center border-t border-gray-200 dark:border-dark-5 mt-2"
                      >
                        <div class="bg-white dark:bg-dark-3 px-5 -mt-3 text-gray-600">
                          or
                        </div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Devider -->
        <!-- BEGIN: Links -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Links</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-7"
                >Show example code</label
              >
              <input
                id="show-example-7"
                data-target="#link"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="link" class="p-5">
            <div class="preview">
              <div>
                <a href="" class="text-theme-1 block font-normal"
                  >Example text</a
                >
                <a href="" class="text-theme-1 block font-medium"
                  >Example medium text</a
                >
                <a href="" class="text-theme-1 block font-semibold"
                  >Example semibold text</a
                >
                <a href="" class="text-theme-1 block font-bold"
                  >Example bolder text</a
                >
                <a href="" class="text-theme-1 block font-extrabold"
                  >Example boldest text</a
                >
              </div>
              <div class="mt-5">
                <a href="" class="text-theme-1 block">Primary state</a>
                <a href="" class="text-gray-700 dark:text-gray-600 block"
                  >Secondary state</a
                >
                <a href="" class="text-theme-9 block">Success state</a>
                <a href="" class="text-theme-12 block">Warning state</a>
                <a href="" class="text-theme-6 block">Danger state</a>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-link"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-link" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        <a href="" class="text-theme-1 block font-normal"
                          >Example text</a
                        >
                        <a href="" class="text-theme-1 block font-medium"
                          >Example medium text</a
                        >
                        <a href="" class="text-theme-1 block font-semibold"
                          >Example semibold text</a
                        >
                        <a href="" class="text-theme-1 block font-bold"
                          >Example bolder text</a
                        >
                        <a href="" class="text-theme-1 block font-extrabold"
                          >Example boldest text</a
                        >
                      </div>
                      <div class="mt-5">
                        <a href="" class="text-theme-1 block">Primary state</a>
                        <a href="" class="text-gray-700 dark:text-gray-600 block"
                          >Secondary state</a
                        >
                        <a href="" class="text-theme-9 block">Success state</a>
                        <a href="" class="text-theme-12 block">Warning state</a>
                        <a href="" class="text-theme-6 block">Danger state</a>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Links -->
      </div>
    </div>
  </div>
</template>
