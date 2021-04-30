<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Form Layout</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Layout -->
        <div class="intro-y box p-5">
          <div>
            <label for="crud-form-1" class="form-label">Product Name</label>
            <input
              id="crud-form-1"
              type="text"
              class="form-control w-full"
              placeholder="Input text"
            />
          </div>
          <div class="mt-3">
            <label for="crud-form-2" class="form-label">Category</label>
            <TailSelect
              id="crud-form-2"
              v-model="categories"
              :options="{
                hideSelected: true,
                hideDisabled: true,
                multiLimit: 15,
                multiShowCount: false,
                multiContainer: true,
                classNames: 'w-full'
              }"
              multiple
            >
              <option value="1">Sport & Outdoor</option>
              <option value="2">PC & Laptop</option>
              <option value="3">Smartphone & Tablet</option>
              <option value="4">Photography</option>
            </TailSelect>
          </div>
          <div class="mt-3">
            <label for="crud-form-3" class="form-label">Quantity</label>
            <div class="input-group">
              <input
                id="crud-form-3"
                type="text"
                class="form-control"
                placeholder="Quantity"
                aria-describedby="input-group-1"
              />
              <div id="input-group-1" class="input-group-text">pcs</div>
            </div>
          </div>
          <div class="mt-3">
            <label for="crud-form-4" class="form-label">Weight</label>
            <div class="input-group">
              <input
                id="crud-form-4"
                type="text"
                class="form-control"
                placeholder="Weight"
                aria-describedby="input-group-2"
              />
              <div id="input-group-2" class="input-group-text">grams</div>
            </div>
          </div>
          <div class="mt-3">
            <label class="form-label">Price</label>
            <div class="sm:grid grid-cols-3 gap-2">
              <div class="input-group">
                <div id="input-group-3" class="input-group-text">Unit</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Unit"
                  aria-describedby="input-group-3"
                />
              </div>
              <div class="input-group mt-2 sm:mt-0">
                <div id="input-group-4" class="input-group-text">Wholesale</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Wholesale"
                  aria-describedby="input-group-4"
                />
              </div>
              <div class="input-group mt-2 sm:mt-0">
                <div id="input-group-5" class="input-group-text">Bulk</div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bulk"
                  aria-describedby="input-group-5"
                />
              </div>
            </div>
          </div>
          <div class="mt-3">
            <label>Active Status</label>
            <div class="mt-2">
              <input type="checkbox" class="form-check-switch" />
            </div>
          </div>
          <div class="mt-3">
            <label>Description</label>
            <div class="mt-2">
              <CKEditor
                v-model="editorData"
                :editor="classicEditor"
                :config="simpleEditorConfig"
              />
            </div>
          </div>
          <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
              Cancel
            </button>
            <button type="button" class="btn btn-primary w-24">Save</button>
          </div>
        </div>
        <!-- END: Form Layout -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";

export default defineComponent({
  setup() {
    const categories = 1;
    const classicEditor = ClassicEditor;
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
    const editorData = ref("<p>Content of the editor.</p>");

    return {
      categories,
      classicEditor,
      simpleEditorConfig,
      editorData
    };
  }
});
</script>
