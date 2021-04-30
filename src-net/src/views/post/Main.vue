<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Add New Post</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <div class="dropdown mr-2">
          <button
            class="dropdown-toggle btn box text-gray-700 dark:text-gray-300 flex items-center"
            aria-expanded="false"
          >
            English <ChevronDownIcon class="w-4 h-4 ml-2" />
          </button>
          <div class="dropdown-menu w-40">
            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate">English</span>
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate">Indonesian</span>
              </a>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn box text-gray-700 dark:text-gray-300 mr-2 flex items-center ml-auto sm:ml-0"
        >
          <EyeIcon class="w-4 h-4 mr-2" /> Preview
        </button>
        <div class="dropdown">
          <button
            class="dropdown-toggle btn btn-primary shadow-md flex items-center"
            aria-expanded="false"
          >
            Save <ChevronDownIcon class="w-4 h-4 ml-2" />
          </button>
          <div class="dropdown-menu w-40">
            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> As New Post
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> As Draft
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to Word
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
      <!-- BEGIN: Post Content -->
      <div class="intro-y col-span-12 lg:col-span-8">
        <input
          type="text"
          class="intro-y form-control py-3 px-4 box pr-10 placeholder-theme-13"
          placeholder="Title"
        />
        <div class="post intro-y overflow-hidden box mt-5">
          <div
            class="post__tabs nav nav-tabs flex-col sm:flex-row bg-gray-300 dark:bg-dark-2 text-gray-600"
            role="tablist"
          >
            <Tippy
              id="content-tab"
              tag="a"
              content="Fill in the article content"
              data-toggle="tab"
              data-target="#content"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center active"
              role="tab"
              aria-controls="content"
              aria-selected="true"
            >
              <FileTextIcon class="w-4 h-4 mr-2" /> Content
            </Tippy>
            <Tippy
              id="meta-title-tab"
              tag="a"
              content="Adjust the meta title"
              data-toggle="tab"
              data-target="#meta-title"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center"
              role="tab"
              aria-selected="false"
            >
              <CodeIcon class="w-4 h-4 mr-2" /> Meta Title
            </Tippy>
            <Tippy
              id="keywords-tab"
              tag="a"
              content="Use search keywords"
              data-toggle="tab"
              data-target="#keywords"
              href="javascript:;"
              class="w-full sm:w-40 py-4 text-center flex justify-center items-center"
              role="tab"
              aria-selected="false"
            >
              <AlignLeftIcon class="w-4 h-4 mr-2" /> Keywords
            </Tippy>
          </div>
          <div class="post__content tab-content">
            <div
              id="content"
              class="tab-pane p-5 active"
              role="tabpanel"
              aria-labelledby="content-tab"
            >
              <div
                class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
              >
                <div
                  class="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"
                >
                  <ChevronDownIcon class="w-4 h-4 mr-2" /> Text Content
                </div>
                <div class="mt-5">
                  <CKEditor
                    v-model="editorData"
                    :editor="classicEditor"
                    :config="editorConfig"
                  />
                </div>
              </div>
              <div
                class="border border-gray-200 dark:border-dark-5 rounded-md p-5 mt-5"
              >
                <div
                  class="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"
                >
                  <ChevronDownIcon class="w-4 h-4 mr-2" />
                  Caption & Images
                </div>
                <div class="mt-5">
                  <div>
                    <label for="post-form-7" class="form-label">Caption</label>
                    <input
                      id="post-form-7"
                      type="text"
                      class="form-control"
                      placeholder="Write caption"
                    />
                  </div>
                  <div class="mt-3">
                    <label class="form-label">Upload Image</label>
                    <div
                      class="border-2 border-dashed dark:border-dark-5 rounded-md pt-4"
                    >
                      <div class="flex flex-wrap px-4">
                        <div
                          v-for="(faker, fakerKey) in $_.take($f(), 4)"
                          :key="fakerKey"
                          class="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                        >
                          <img
                            class="rounded-md"
                            alt="Icewall Tailwind HTML Admin Template"
                            :src="require(`@/assets/images/${faker.images[0]}`)"
                          />
                          <Tippy
                            tag="div"
                            content="Remove this image?"
                            class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                          >
                            <xIcon class="w-4 h-4" />
                          </Tippy>
                        </div>
                      </div>
                      <div
                        class="px-4 pb-4 flex items-center cursor-pointer relative"
                      >
                        <ImageIcon class="w-4 h-4 mr-2" />
                        <span class="text-theme-1 dark:text-theme-10 mr-1"
                          >Upload a file</span
                        >
                        or drag and drop
                        <input
                          type="file"
                          class="w-full h-full top-0 left-0 absolute opacity-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Post Content -->
      <!-- BEGIN: Post Info -->
      <div class="col-span-12 lg:col-span-4">
        <div class="intro-y box p-5">
          <div>
            <label class="form-label">Written By</label>
            <div class="dropdown">
              <div
                class="dropdown-toggle btn w-full btn-outline-secondary dark:bg-dark-2 dark:border-dark-2 flex items-center justify-start"
                role="button"
                aria-expanded="false"
              >
                <div class="w-6 h-6 image-fit mr-3">
                  <img
                    class="rounded"
                    alt="Icewall Tailwind HTML Admin Template"
                    :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                  />
                </div>
                <div class="truncate">{{ $f()[0].users[0].name }}</div>
                <ChevronDownIcon class="w-4 h-4 ml-auto" />
              </div>
              <div class="dropdown-menu w-full">
                <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                  <a
                    v-for="(faker, fakerKey) in $_.take($f(), 5)"
                    :key="fakerKey"
                    href="javascript:;"
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  >
                    <div class="w-6 h-6 absolute image-fit mr-3">
                      <img
                        class="rounded"
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${faker.photos[0]}`)"
                      />
                    </div>
                    <div class="ml-8 pl-1">{{ faker.users[0].name }}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label for="post-form-2" class="form-label">Post Date</label>
            <Litepicker
              id="post-form-2"
              v-model="salesReportFilter"
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
          <div class="mt-3">
            <label for="post-form-3" class="form-label">Categories</label>
            <TailSelect
              id="post-form-3"
              v-model="categories"
              :options="{
                search: false,
                hideSelected: true,
                hideDisabled: true,
                multiLimit: 15,
                multiShowCount: false,
                multiContainer: true,
                classNames: 'w-full'
              }"
              multiple
            >
              <option value="1">Horror</option>
              <option value="2">Sci-fi</option>
              <option value="3">Action</option>
              <option value="4">Drama</option>
              <option value="5">Comedy</option>
            </TailSelect>
          </div>
          <div class="mt-3">
            <label for="post-form-4" class="form-label">Tags</label>
            <TailSelect
              id="post-form-4"
              v-model="tags"
              :options="{
                search: false,
                hideSelected: true,
                hideDisabled: true,
                multiLimit: 15,
                multiShowCount: false,
                multiContainer: true,
                classNames: 'w-full'
              }"
              multiple
            >
              <option value="1" selected>Leonardo DiCaprio</option>
              <option value="2">Johnny Deep</option>
              <option value="3" selected>Robert Downey, Jr</option>
              <option value="4">Samuel L. Jackson</option>
              <option value="5">Morgan Freeman</option>
            </TailSelect>
          </div>
          <div class="form-check flex-col items-start mt-3">
            <label for="post-form-5" class="form-check-label ml-0 mb-2"
              >Published</label
            >
            <input id="post-form-5" class="form-check-switch" type="checkbox" />
          </div>
          <div class="form-check flex-col items-start mt-3">
            <label for="post-form-6" class="form-check-label ml-0 mb-2"
              >Show Author Name</label
            >
            <input id="post-form-6" class="form-check-switch" type="checkbox" />
          </div>
        </div>
      </div>
      <!-- END: Post Info -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import CodePlugin from "@ckeditor/ckeditor5-basic-styles/src/code";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import EasyImagePlugin from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import ImagePlugin from "@ckeditor/ckeditor5-image/src/image";
import ImageUploadPlugin from "@ckeditor/ckeditor5-image/src/imageupload";
import CloudServicesPlugin from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HeadingButtonsUI from "@ckeditor/ckeditor5-heading/src/headingbuttonsui";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";

export default defineComponent({
  setup() {
    const categories = ref(["1", "2"]);
    const tags = ref(["1", "2"]);
    const salesReportFilter = ref("");
    const classicEditor = ClassicEditor;
    const editorConfig = {
      cloudServices: {
        tokenUrl: "",
        uploadUrl: ""
      },
      plugins: [
        Font,
        EssentialsPlugin,
        BoldPlugin,
        UnderlinePlugin,
        StrikethroughPlugin,
        ItalicPlugin,
        LinkPlugin,
        ParagraphPlugin,
        CodePlugin,
        SubscriptPlugin,
        SuperscriptPlugin,
        EasyImagePlugin,
        ImagePlugin,
        ImageUploadPlugin,
        CloudServicesPlugin,
        Heading,
        HeadingButtonsUI,
        Highlight
      ],
      toolbar: {
        items: [
          "fontSize",
          "fontFamily",
          "fontColor",
          "fontBackgroundColor",
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          "subscript",
          "superscript",
          "link",
          "undo",
          "redo",
          "imageUpload",
          "highlight"
        ]
      }
    };
    const editorData = ref("<p>Content of the editor.</p>");

    return {
      categories,
      tags,
      salesReportFilter,
      classicEditor,
      editorConfig,
      editorData
    };
  }
});
</script>
