<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-6"
              :src="require(`@/assets/images/logo.svg`)"
            />
            <span class="text-white text-lg ml-3">
              Ru<span class="font-medium">bick</span>
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/illustration.svg`)"
            />
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              A few more clicks to <br />
              sign up to your account.
            </div>
            <div
              class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500"
            >
              Manage all your e-commerce accounts in one place
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Sign Up
            </h2>
            <div
              class="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center"
            >
              A few more clicks to sign in to your account. Manage all your
              e-commerce accounts in one place
            </div>
            <div class="intro-x mt-8">
              <input
                type="text"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                placeholder="First Name"
              />
              <input
                type="text"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                placeholder="Last Name"
              />
              <input
                type="text"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                placeholder="Email"
              />
              <input
                type="text"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                placeholder="Password"
              />
              <div class="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                <div class="col-span-3 h-full rounded bg-theme-9"></div>
                <div class="col-span-3 h-full rounded bg-theme-9"></div>
                <div class="col-span-3 h-full rounded bg-theme-9"></div>
                <div
                  class="col-span-3 h-full rounded bg-gray-200 dark:bg-dark-2"
                ></div>
              </div>
              <a
                href=""
                class="intro-x text-gray-600 block mt-2 text-xs sm:text-sm"
                >What is a secure password?</a
              >
              <input
                type="text"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                placeholder="Password Confirmation"
              />
            </div>
            <div
              class="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm"
            >
              <input
                id="remember-me"
                type="checkbox"
                class="form-check-input border mr-2"
              />
              <label class="cursor-pointer select-none" for="remember-me"
                >I agree to the Envato</label
              >
              <a class="text-theme-1 dark:text-theme-10 ml-1" href=""
                >Privacy Policy</a
              >.
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
              >
                Register
              </button>
              <button
                class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        <!-- END: Register Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";

export default defineComponent({
  components: {
    DarkModeSwitcher
  },
  setup() {
    onMounted(() => {
      cash("body")
        .removeClass("main")
        .removeClass("error-page")
        .addClass("login");
    });
  }
});
</script>
