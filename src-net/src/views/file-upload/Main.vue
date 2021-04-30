<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Dropzone</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Single File Upload -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Single File Upload</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#single-file-upload"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="single-file-upload" class="p-5">
            <div class="preview">
              <Dropzone
                ref-key="dropzoneSingleRef"
                :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  maxFiles: 1,
                  headers: { 'My-Awesome-Header': 'header value' }
                }"
                class="dropzone"
              >
                <div class="text-lg font-medium">
                  Drop files here or click to upload.
                </div>
                <div class="text-gray-600">
                  This is just a demo dropzone. Selected files are
                  <span class="font-medium">not</span> actually uploaded.
                </div>
              </Dropzone>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-single-file-upload"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-single-file-upload" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <Dropzone
                        ref-key="dropzoneSingleRef"
                        :options="{
                          url: 'https://httpbin.org/post',
                          thumbnailWidth: 150,
                          maxFilesize: 0.5,
                          maxFiles: 1,
                          headers: { 'My-Awesome-Header': 'header value' }
                        }"
                        class="dropzone"
                      >
                        <div class="text-lg font-medium">
                          Drop files here or click to upload.
                        </div>
                        <div class="text-gray-600">
                          This is just a demo dropzone. Selected files are
                          <span class="font-medium">not</span> actually uploaded.
                        </div>
                      </Dropzone>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Single File Upload -->
        <!-- BEGIN: Multiple File Upload -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Multiple File Upload</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#multiple-file-upload"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="multiple-file-upload" class="p-5">
            <div class="preview">
              <Dropzone
                ref-key="dropzoneMultipleRef"
                :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  headers: { 'My-Awesome-Header': 'header value' }
                }"
                class="dropzone"
              >
                <div class="text-lg font-medium">
                  Drop files here or click to upload.
                </div>
                <div class="text-gray-600">
                  This is just a demo dropzone. Selected files are
                  <span class="font-medium">not</span> actually uploaded.
                </div>
              </Dropzone>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-multiple-file-upload"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-multiple-file-upload"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <Dropzone
                        ref-key="dropzoneMultipleRef"
                        :options="{
                          url: 'https://httpbin.org/post',
                          thumbnailWidth: 150,
                          maxFilesize: 0.5,
                          headers: { 'My-Awesome-Header': 'header value' }
                        }"
                        class="dropzone"
                      >
                        <div class="text-lg font-medium">
                          Drop files here or click to upload.
                        </div>
                        <div class="text-gray-600">
                          This is just a demo dropzone. Selected files are
                          <span class="font-medium">not</span> actually uploaded.
                        </div>
                      </Dropzone>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Multiple File Upload -->
      </div>
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: File Type Validation -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">File Type Validation</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#file-type-validation"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="file-type-validation" class="p-5">
            <div class="preview">
              <Dropzone
                ref-key="dropzoneValidationRef"
                :options="{
                  url: 'https://httpbin.org/post',
                  thumbnailWidth: 150,
                  maxFilesize: 0.5,
                  acceptedFiles: 'image/jpeg|image/png|image/jpg',
                  headers: { 'My-Awesome-Header': 'header value' }
                }"
                class="dropzone"
              >
                <div class="text-lg font-medium">
                  Drop files here or click to upload.
                </div>
                <div class="text-gray-600">
                  This is just a demo dropzone. Selected files are
                  <span class="font-medium">not</span> actually uploaded.
                </div>
              </Dropzone>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-file-type-validation"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight
                  id="copy-file-type-validation"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <Dropzone
                        ref-key="dropzoneValidationRef"
                        :options="{
                          url: 'https://httpbin.org/post',
                          thumbnailWidth: 150,
                          maxFilesize: 0.5,
                          acceptedFiles: 'image/jpeg|image/png|image/jpg',
                          headers: { 'My-Awesome-Header': 'header value' }
                        }"
                        class="dropzone"
                      >
                        <div class="text-lg font-medium">
                          Drop files here or click to upload.
                        </div>
                        <div class="text-gray-600">
                          This is just a demo dropzone. Selected files are
                          <span class="font-medium">not</span> actually uploaded.
                        </div>
                      </Dropzone>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: File Type Validation -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide, onMounted } from "vue";

export default defineComponent({
  setup() {
    const dropzoneSingleRef = ref();
    const dropzoneMultipleRef = ref();
    const dropzoneValidationRef = ref();

    provide("bind[dropzoneSingleRef]", el => {
      dropzoneSingleRef.value = el;
    });

    provide("bind[dropzoneMultipleRef]", el => {
      dropzoneMultipleRef.value = el;
    });

    provide("bind[dropzoneValidationRef]", el => {
      dropzoneValidationRef.value = el;
    });

    onMounted(() => {
      const elDropzoneSingleRef = dropzoneSingleRef.value;
      elDropzoneSingleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneSingleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });

      const elDropzoneMultipleRef = dropzoneMultipleRef.value;
      elDropzoneMultipleRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneMultipleRef.dropzone.on("error", () => {
        alert("No more files please!");
      });

      const elDropzoneValidationRef = dropzoneValidationRef.value;
      elDropzoneValidationRef.dropzone.on("success", () => {
        alert("Added file.");
      });
      elDropzoneValidationRef.dropzone.on("error", () => {
        alert("No more files please!");
      });
    });
  }
});
</script>
