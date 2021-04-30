<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Form Validation</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Validation -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Implementation</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#form-validation"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="form-validation" class="p-5">
            <div class="preview">
              <!-- BEGIN: Validation Form -->
              <form class="validate-form" @submit.prevent="save">
                <div class="input-form">
                  <label
                    for="validation-form-1"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Name
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Required, at least 2 characters</span
                    >
                  </label>
                  <input
                    id="validation-form-1"
                    v-model.trim="validate.name.$model"
                    type="text"
                    name="name"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.name.$error }"
                    placeholder="John Legend"
                  />
                  <template v-if="validate.name.$error">
                    <div
                      v-for="(error, index) in validate.name.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-2"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Email
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Required, email address format</span
                    >
                  </label>
                  <input
                    id="validation-form-2"
                    v-model.trim="validate.email.$model"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.email.$error }"
                    placeholder="example@gmail.com"
                  />
                  <template v-if="validate.email.$error">
                    <div
                      v-for="(error, index) in validate.email.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-3"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Password
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Required, at least 6 characters</span
                    >
                  </label>
                  <input
                    id="validation-form-3"
                    v-model.trim="validate.password.$model"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.password.$error }"
                    placeholder="secret"
                  />
                  <template v-if="validate.password.$error">
                    <div
                      v-for="(error, index) in validate.password.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-4"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Age
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Required, integer only & maximum 3 characters</span
                    >
                  </label>
                  <input
                    id="validation-form-4"
                    v-model.trim="validate.age.$model"
                    type="number"
                    name="age"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.age.$error }"
                    placeholder="21"
                  />
                  <template v-if="validate.age.$error">
                    <div
                      v-for="(error, index) in validate.age.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-5"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Profile URL
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Optional, URL format</span
                    >
                  </label>
                  <input
                    id="validation-form-5"
                    v-model.trim="validate.url.$model"
                    type="url"
                    name="url"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.url.$error }"
                    placeholder="https://google.com"
                  />
                  <template v-if="validate.url.$error">
                    <div
                      v-for="(error, index) in validate.url.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <div class="input-form mt-3">
                  <label
                    for="validation-form-6"
                    class="form-label w-full flex flex-col sm:flex-row"
                  >
                    Comment
                    <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                      >Required, at least 10 characters</span
                    >
                  </label>
                  <textarea
                    id="validation-form-6"
                    v-model.trim="validate.comment.$model"
                    class="form-control"
                    :class="{ 'border-theme-6': validate.comment.$error }"
                    name="comment"
                    placeholder="Type your comments"
                  ></textarea>
                  <template v-if="validate.comment.$error">
                    <div
                      v-for="(error, index) in validate.comment.$errors"
                      :key="index"
                      class="text-theme-6 mt-2"
                    >
                      {{ error.$message }}
                    </div>
                  </template>
                </div>
                <button type="submit" class="btn btn-primary mt-5">
                  Register
                </button>
              </form>
              <!-- END: Validation Form -->
              <!-- BEGIN: Success Notification Content -->
              <div
                id="success-notification-content"
                class="toastify-content hidden flex"
              >
                <CheckCircleIcon class="text-theme-9" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Registration success!</div>
                  <div class="text-gray-600 mt-1">
                    Please check your e-mail for further info!
                  </div>
                </div>
              </div>
              <!-- END: Success Notification Content -->
              <!-- BEGIN: Failed Notification Content -->
              <div
                id="failed-notification-content"
                class="toastify-content hidden flex"
              >
                <XCircleIcon class="text-theme-6" />
                <div class="ml-4 mr-4">
                  <div class="font-medium">Registration failed!</div>
                  <div class="text-gray-600 mt-1">
                    Please check the fileld form.
                  </div>
                </div>
              </div>
              <!-- END: Failed Notification Content -->
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-form-validation"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-form-validation" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      const formData = reactive({
                        name: "",
                        email: "",
                        password: "",
                        age: "",
                        url: "",
                        comment: ""
                      });
                      const rules = {
                        name: {
                          required,
                          minLength: minLength(2)
                        },
                        email: {
                          required,
                          email
                        },
                        password: {
                          required,
                          minLength: minLength(6)
                        },
                        age: {
                          required,
                          integer,
                          maxLength: maxLength(3)
                        },
                        url: {
                          url
                        },
                        comment: {
                          required,
                          minLength: minLength(10)
                        }
                      };
                      const validate = useVuelidate(rules, toRefs(formData));
                      const save = () => {
                        validate.value.$touch();
                        console.log(validate.value);
                        if (validate.value.$invalid) {
                          Toastify({
                            text: "Registration failed, please check the fileld form.",
                            duration: 3000,
                            newWindow: true,
                            close: true,
                            gravity: "top",
                            position: "right",
                            backgroundColor: "#D32929",
                            stopOnFocus: true,
                            className: "toastify-content"
                          }).showToast();
                        } else {
                          Toastify({
                            text: "Registration success!",
                            duration: 3000,
                            newWindow: true,
                            close: true,
                            gravity: "top",
                            position: "right",
                            backgroundColor: "#91C714",
                            stopOnFocus: true,
                            className: "toastify-content"
                          }).showToast();
                        }
                      };
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Form Validation -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Toastify from "toastify-js";

export default defineComponent({
  setup() {
    const formData = reactive({
      name: "",
      email: "",
      password: "",
      age: "",
      url: "",
      comment: ""
    });
    const rules = {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      age: {
        required,
        integer,
        maxLength: maxLength(3)
      },
      url: {
        url
      },
      comment: {
        required,
        minLength: minLength(10)
      }
    };
    const validate = useVuelidate(rules, toRefs(formData));
    const save = () => {
      validate.value.$touch();
      if (validate.value.$invalid) {
        Toastify({
          node: cash("#failed-notification-content")
            .clone()
            .removeClass("hidden")[0],
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true
        }).showToast();
      } else {
        Toastify({
          node: cash("#success-notification-content")
            .clone()
            .removeClass("hidden")[0],
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true
        }).showToast();
      }
    };

    return {
      validate,
      formData,
      save
    };
  }
});
</script>
