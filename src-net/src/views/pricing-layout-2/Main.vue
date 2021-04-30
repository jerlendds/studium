<template>
  <div>
    <h2 class="intro-y text-2xl font-medium mt-10 text-center mr-auto">
      Best Price & Services
    </h2>
    <!-- BEGIN: Pricing Tab -->
    <div class="intro-y flex justify-center mt-6">
      <div
        class="pricing-tabs nav nav-tabs box rounded-full overflow-hidden"
        role="tablist"
      >
        <a
          id="layout-1-monthly-fees-tab"
          data-toggle="tab"
          data-target="#layout-1-monthly-fees"
          href="javascript:;"
          class="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-nowrap text-center active"
          role="tab"
          aria-controls="layout-1-monthly-fees"
          aria-selected="true"
          >Monthly Fees</a
        >
        <a
          id="layout-1-annual-fees-tab"
          data-toggle="tab"
          data-target="#layout-1-annual-fees"
          href="javascript:;"
          class="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-nowrap text-center"
          role="tab"
          aria-controls="layout-1-annual-fees"
          aria-selected="false"
          >Annual Fees</a
        >
      </div>
    </div>
    <!-- END: Pricing Tab -->
    <!-- BEGIN: Pricing Content -->
    <div class="flex mt-10">
      <div class="tab-content">
        <div
          id="layout-1-monthly-fees"
          class="tab-pane flex flex-col lg:flex-row active"
          role="tabpanel"
          aria-labelledby="layout-1-monthly-fees-tab"
        >
          <div
            class="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0"
          >
            <div class="font-medium text-lg">Monthly Product Pricing</div>
            <div class="mt-3 lg:text-justify text-gray-700 dark:text-gray-600">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div class="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
            <BriefcaseIcon
              class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
            />
            <div class="text-xl font-medium text-center mt-10">Business</div>
            <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
              1 Domain <span class="mx-1">•</span> 10 Users
              <span class="mx-1">•</span> 20 Copies
            </div>
            <div
              class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div class="flex justify-center">
              <div class="relative text-5xl font-semibold mt-8 mx-auto">
                60
                <span
                  class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                  >$</span
                >
              </div>
            </div>
            <button
              type="button"
              class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
            >
              PURCHASE NOW
            </button>
          </div>
          <div class="intro-y flex-1 box py-16 lg:ml-5">
            <ShoppingBagIcon
              class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
            />
            <div class="text-xl font-medium text-center mt-10">Enterprise</div>
            <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
              1 Domain <span class="mx-1">•</span> 10 Users
              <span class="mx-1">•</span> 20 Copies
            </div>
            <div
              class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div class="flex justify-center">
              <div class="relative text-5xl font-semibold mt-8 mx-auto">
                120
                <span
                  class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                  >$</span
                >
              </div>
            </div>
            <button
              type="button"
              class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
            >
              PURCHASE NOW
            </button>
          </div>
        </div>
        <div
          id="layout-1-annual-fees"
          class="tab-pane flex flex-col lg:flex-row"
          role="tabpanel"
          aria-labelledby="layout-1-annual-fees-tab"
        >
          <div
            class="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0"
          >
            <div class="font-medium text-lg">Annual Product Pricing</div>
            <div class="mt-3 lg:text-justify text-gray-700 dark:text-gray-600">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.
              </p>
              <p class="mt-2">
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div class="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
            <BriefcaseIcon
              class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
            />
            <div class="text-xl font-medium text-center mt-10">Business</div>
            <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
              1 Domain <span class="mx-1">•</span> 10 Users
              <span class="mx-1">•</span> 20 Copies
            </div>
            <div
              class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div class="flex justify-center">
              <div class="relative text-5xl font-semibold mt-8 mx-auto">
                40
                <span
                  class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                  >$</span
                >
              </div>
            </div>
            <button
              type="button"
              class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
            >
              PURCHASE NOW
            </button>
          </div>
          <div class="intro-y flex-1 box py-16 lg:ml-5">
            <ShoppingBagIcon
              class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
            />
            <div class="text-xl font-medium text-center mt-10">Enterprise</div>
            <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
              1 Domain <span class="mx-1">•</span> 10 Users
              <span class="mx-1">•</span> 20 Copies
            </div>
            <div
              class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div class="flex justify-center">
              <div class="relative text-5xl font-semibold mt-8 mx-auto">
                90
                <span
                  class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                  >$</span
                >
              </div>
            </div>
            <button
              type="button"
              class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
            >
              PURCHASE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Pricing Content -->
    <div class="intro-y box mt-20 px-8 py-12">
      <h2 class="intro-y text-2xl font-medium text-center mr-auto">
        Best Price & Services
      </h2>
      <!-- BEGIN: Pricing Tab -->
      <div class="intro-y flex justify-center mt-6">
        <div
          class="pricing-tabs nav nav-tabs box dark:bg-dark-1 rounded-full overflow-hidden"
          role="tablist"
        >
          <a
            id="layout-2-monthly-fees-tab"
            data-toggle="tab"
            data-target="#layout-2-monthly-fees"
            href="javascript:;"
            class="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-nowrap text-center active"
            role="tab"
            aria-controls="layout-2-monthly-fees"
            aria-selected="true"
            >Monthly Fees</a
          >
          <a
            id="layout-2-annual-fees-tab"
            data-toggle="tab"
            data-target="#layout-2-annual-fees"
            href="javascript:;"
            class="flex-1 w-32 lg:w-40 py-2 lg:py-3 whitespace-nowrap text-center"
            role="tab"
            aria-controls="layout-2-annual-fees"
            aria-selected="false"
            >Annual Fees</a
          >
        </div>
      </div>
      <!-- END: Pricing Tab -->
      <!-- BEGIN: Pricing Content -->
      <div class="flex mt-10">
        <div class="tab-content">
          <div
            id="layout-2-monthly-fees"
            class="tab-pane flex flex-col lg:flex-row active"
            role="tabpanel"
            aria-labelledby="layout-2-monthly-fees-tab"
          >
            <div
              class="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0"
            >
              <div class="font-medium text-lg">Monthly Product Pricing</div>
              <div
                class="mt-3 lg:text-justify text-gray-700 dark:text-gray-600"
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.
                </p>
                <p class="mt-2">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </p>
              </div>
            </div>
            <div
              class="intro-y flex-1 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-200 dark:border-dark-5 py-16 lg:ml-8"
            >
              <BriefcaseIcon
                class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
              />
              <div class="text-xl font-medium text-center mt-10">Business</div>
              <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
                1 Domain <span class="mx-1">•</span> 10 Users
                <span class="mx-1">•</span> 20 Copies
              </div>
              <div
                class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div class="flex justify-center">
                <div class="relative text-5xl font-semibold mt-8 mx-auto">
                  60
                  <span
                    class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                    >$</span
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div class="intro-y flex-1 py-16">
              <ShoppingBagIcon
                class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
              />
              <div class="text-xl font-medium text-center mt-10">
                Enterprise
              </div>
              <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
                1 Domain <span class="mx-1">•</span> 10 Users
                <span class="mx-1">•</span> 20 Copies
              </div>
              <div
                class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div class="flex justify-center">
                <div class="relative text-5xl font-semibold mt-8 mx-auto">
                  120
                  <span
                    class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                    >$</span
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
          </div>
          <div
            id="layout-2-annual-fees"
            class="tab-pane flex flex-col lg:flex-row"
            role="tabpanel"
            aria-labelledby="layout-2-annual-fees-tab"
          >
            <div
              class="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0"
            >
              <div class="font-medium text-lg">Annual Product Pricing</div>
              <div class="mt-3 lg:text-justify text-gray-700">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.
                </p>
                <p class="mt-2">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </p>
              </div>
            </div>
            <div
              class="intro-y flex-1 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-200 dark:border-dark-5 py-16 lg:ml-8"
            >
              <BriefcaseIcon
                class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
              />
              <div class="text-xl font-medium text-center mt-10">Business</div>
              <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
                1 Domain <span class="mx-1">•</span> 10 Users
                <span class="mx-1">•</span> 20 Copies
              </div>
              <div
                class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div class="flex justify-center">
                <div class="relative text-5xl font-semibold mt-8 mx-auto">
                  120
                  <span
                    class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                    >$</span
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
            <div class="intro-y flex-1 py-16">
              <ShoppingBagIcon
                class="block w-12 h-12 text-theme-1 dark:text-theme-10 mx-auto"
              />
              <div class="text-xl font-medium text-center mt-10">
                Enterprise
              </div>
              <div class="text-gray-700 dark:text-gray-600 text-center mt-5">
                1 Domain <span class="mx-1">•</span> 10 Users
                <span class="mx-1">•</span> 20 Copies
              </div>
              <div
                class="text-gray-600 dark:text-gray-400 px-10 text-center mx-auto mt-2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div class="flex justify-center">
                <div class="relative text-5xl font-semibold mt-8 mx-auto">
                  210
                  <span
                    class="absolute text-2xl top-0 right-0 text-gray-500 -mr-4 mt-1"
                    >$</span
                  >
                </div>
              </div>
              <button
                type="button"
                class="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
              >
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Pricing Content -->
    </div>
  </div>
</template>
