<template>
  <div>
    <div class="flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">CKEditor</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Simple Editor -->
      <div class="col-span-12 lg:col-span-6">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Simple Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#simple-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="simple-editor" class="p-5">
            <div class="preview">
              <CKEditor
                v-model="editorData"
                :editor="classicEditor"
                :config="simpleEditorConfig"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-simple-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-simple-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <CKEditor
                        v-model="editorData"
                        :editor="classicEditor"
                        :config="simpleEditorConfig"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Simple Editor -->
      <!-- BEGIN: Standard Editor -->
      <div class="col-span-12 lg:col-span-6">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Standard Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#standard-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="standard-editor" class="p-5">
            <div class="preview">
              <CKEditor
                v-model="editorData"
                :editor="classicEditor"
                :config="editorConfig"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-standard-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-standard-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <CKEditor
                        v-model="editorData"
                        :editor="classicEditor"
                        :config="editorConfig"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Standard Editor -->
      <!-- BEGIN: Inline Editor -->
      <div class="col-span-12 lg:col-span-6">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Inline Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-3"
                >Show example code</label
              >
              <input
                id="show-example-3"
                data-target="#inline-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="inline-editor" class="p-5">
            <div class="preview">
              <CKEditor
                v-model="editorData"
                :editor="inlineEditor"
                :config="editorConfig"
                class="border"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-inline-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-inline-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <CKEditor
                        v-model="editorData"
                        :editor="inlineEditor"
                        :config="editorConfig"
                        class="border"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Inline Editor -->
      <!-- BEGIN: Balloon Editor -->
      <div class="col-span-12 lg:col-span-6">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Balloon Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-4"
                >Show example code</label
              >
              <input
                id="show-example-4"
                data-target="#balloon-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="balloon-editor" class="p-5">
            <div class="preview">
              <CKEditor
                v-model="editorData"
                :editor="balloonEditor"
                :config="editorConfig"
              />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-balloon-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-balloon-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <CKEditor
                        v-model="editorData"
                        :editor="balloonEditor"
                        :config="editorConfig"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Balloon Editor -->
      <!-- BEGIN: Document Editor -->
      <div class="col-span-12">
        <div class="box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Document Editor</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-5"
                >Show example code</label
              >
              <input
                id="show-example-5"
                data-target="#document-editor"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="document-editor" class="p-5">
            <div class="preview">
              <div class="document-editor">
                <div
                  ref="document-editor-toolbar"
                  class="document-editor__toolbar"
                ></div>
                <div class="document-editor__editable-container">
                  <div class="document-editor__editable">
                    <CKEditor
                      v-model="editorData"
                      :editor="documentEditor"
                      :config="editorConfig"
                      @ready="initDocumentEditor"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-document-editor"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-document-editor" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <CKEditor
                        v-model="editorData"
                        :editor="documentEditor"
                        :config="editorConfig"
                        @ready="initDocumentEditor"
                      />
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Document Editor -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import DocumentEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
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
    const date = ref("");
    const classicEditor = ClassicEditor;
    const inlineEditor = InlineEditor;
    const balloonEditor = BalloonEditor;
    const documentEditor = DocumentEditor;
    const simpleEditorConfig = {
      plugins: [
        ParagraphPlugin,
        BoldPlugin,
        UnderlinePlugin,
        ItalicPlugin,
        LinkPlugin
      ],
      toolbar: {
        items: ["bold", "italic", "underline", "link"]
      }
    };
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
    const initDocumentEditor = editor => {
      const toolbarContainer = document.querySelector(
        ".document-editor__toolbar"
      );
      toolbarContainer?.appendChild(editor.ui.view.toolbar.element);
      const win = window;
      win.editor = editor;
    };

    return {
      date,
      classicEditor,
      inlineEditor,
      balloonEditor,
      documentEditor,
      simpleEditorConfig,
      editorConfig,
      editorData,
      initDocumentEditor
    };
  }
});
</script>
