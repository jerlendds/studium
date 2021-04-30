<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Tail Select</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Basic Select -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Select</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-select"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-select" class="p-5">
            <div class="preview">
              <!-- BEGIN: Basic Select -->
              <div>
                <label>Basic</label>
                <div class="mt-2">
                  <TailSelect
                    v-model="select"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TailSelect>
                </div>
              </div>
              <!-- END: Basic Select -->
              <!-- BEGIN: Nested Select -->
              <div class="mt-3">
                <label>Nested</label>
                <div class="mt-2">
                  <TailSelect
                    v-model="select"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <optgroup label="American Actors">
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </optgroup>
                    <optgroup label="American Actresses">
                      <option value="6">Scarlett Johansson</option>
                      <option value="7">Jessica Alba</option>
                      <option value="8">Jennifer Lawrence</option>
                      <option value="9">Emma Stone</option>
                      <option value="10">Angelina Jolie</option>
                    </optgroup>
                  </TailSelect>
                </div>
              </div>
              <!-- END: Nested Select -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-select"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-select" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <!-- BEGIN: Basic Select -->
                      <div>
                        <label>Basic</label>
                        <div class="mt-2">
                          <TailSelect
                            v-model="select"
                            :options="{
                              search: true,
                              classNames: 'w-full'
                            }"
                          >
                            <option value="1">Leonardo DiCaprio</option>
                            <option value="2">Johnny Deep</option>
                            <option value="3">Robert Downey, Jr</option>
                            <option value="4">Samuel L. Jackson</option>
                            <option value="5">Morgan Freeman</option>
                          </TailSelect>
                        </div>
                      </div>
                      <!-- END: Basic Select -->
                      <!-- BEGIN: Nested Select -->
                      <div class="mt-3">
                        <label>Nested</label>
                        <div class="mt-2">
                          <TailSelect
                            v-model="select"
                            :options="{
                              search: true,
                              classNames: 'w-full'
                            }"
                          >
                            <optgroup label="American Actors">
                              <option value="1">Leonardo DiCaprio</option>
                              <option value="2">Johnny Deep</option>
                              <option value="3">Robert Downey, Jr</option>
                              <option value="4">Samuel L. Jackson</option>
                              <option value="5">Morgan Freeman</option>
                            </optgroup>
                            <optgroup label="American Actresses">
                              <option value="6">Scarlett Johansson</option>
                              <option value="7">Jessica Alba</option>
                              <option value="8">Jennifer Lawrence</option>
                              <option value="9">Emma Stone</option>
                              <option value="10">Angelina Jolie</option>
                            </optgroup>
                          </TailSelect>
                        </div>
                      </div>
                      <!-- END: Nested Select -->
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Basic Select -->
        <!-- BEGIN: Multi Select -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Multi Select</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#multi-select"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="multi-select" class="p-5">
            <div class="preview">
              <TailSelect
                v-model="select"
                :options="{
                  search: true,
                  descriptions: true,
                  hideSelected: true,
                  hideDisabled: true,
                  multiLimit: 15,
                  multiShowCount: false,
                  multiContainer: true,
                  classNames: 'w-full'
                }"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TailSelect>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-multi-select"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-multi-select" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <TailSelect
                        v-model="select"
                        :options="{
                          search: true,
                          descriptions: true,
                          hideSelected: true,
                          hideDisabled: true,
                          multiLimit: 15,
                          multiShowCount: false,
                          multiContainer: true,
                          classNames: 'w-full'
                        }"
                        multiple
                      >
                        <option value="1">Leonardo DiCaprio</option>
                        <option value="2">Johnny Deep</option>
                        <option value="3">Robert Downey, Jr</option>
                        <option value="4">Samuel L. Jackson</option>
                        <option value="5">Morgan Freeman</option>
                      </TailSelect>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Multi Select -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Input Group -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Input Group</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#input-group"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="input-group" class="p-5">
            <div class="preview">
              <div class="flex">
                <div
                  class="z-30 rounded-l w-10 flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4 -mr-1"
                >
                  @
                </div>
                <TailSelect
                  v-model="select"
                  :options="{
                    search: true,
                    classNames: 'w-full'
                  }"
                >
                  <option value="1">Leonardo DiCaprio</option>
                  <option value="2">Johnny Deep</option>
                  <option value="3">Robert Downey, Jr</option>
                  <option value="4">Samuel L. Jackson</option>
                  <option value="5">Morgan Freeman</option>
                </TailSelect>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-input-group"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-input-group" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="flex">
                        <div
                          class="z-30 rounded-l w-10 flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4 -mr-1"
                        >
                          @
                        </div>
                        <TailSelect
                          v-model="select"
                          :options="{
                            search: true,
                            classNames: 'w-full'
                          }"
                        >
                          <option value="1">Leonardo DiCaprio</option>
                          <option value="2">Johnny Deep</option>
                          <option value="3">Robert Downey, Jr</option>
                          <option value="4">Samuel L. Jackson</option>
                          <option value="5">Morgan Freeman</option>
                        </TailSelect>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Input Group -->
        <!-- BEGIN: Hiding Search Box -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Hiding Search Box</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#hiding-searchbox"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="hiding-searchbox" class="p-5">
            <div class="preview">
              <TailSelect
                v-model="select"
                :options="{
                  classNames: 'w-full'
                }"
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TailSelect>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-hiding-searchbox"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-hiding-searchbox" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <TailSelect
                        v-model="select"
                        :options="{
                          classNames: 'w-full'
                        }"
                      >
                        <option value="1">Leonardo DiCaprio</option>
                        <option value="2">Johnny Deep</option>
                        <option value="3">Robert Downey, Jr</option>
                        <option value="4">Samuel L. Jackson</option>
                        <option value="5">Morgan Freeman</option>
                      </TailSelect>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Hiding Search Box -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const select = ref("1");

    return {
      select
    };
  }
});
</script>
