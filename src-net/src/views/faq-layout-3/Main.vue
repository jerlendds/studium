<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">FAQ Layout</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: FAQ Menu -->
      <div class="intro-y col-span-12 lg:col-span-4 xl:col-span-3">
        <div class="box mt-5">
          <div class="px-4 pb-3 pt-5">
            <a
              class="flex rounded-lg items-center px-4 py-2 bg-theme-1 text-white font-medium"
              href=""
            >
              <ActivityIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">About Our Products</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <BoxIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Related License</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <LockIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Single Application License</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <SettingsIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Multi Application License</div>
            </a>
          </div>
          <div class="px-4 py-3 border-t border-gray-200 dark:border-dark-5">
            <a class="flex items-center px-4 py-2" href="">
              <ActivityIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Trem of Use</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <BoxIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Author Fees</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <LockIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Product Review</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <SettingsIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Privacy Policy</div>
            </a>
          </div>
          <div
            class="px-4 pt-3 pb-5 border-t border-gray-200 dark:border-dark-5"
          >
            <a class="flex items-center px-4 py-2" href="">
              <ActivityIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">About Our Products</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <BoxIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Related License</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <LockIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Single Application License</div>
            </a>
            <a class="flex items-center px-4 py-2 mt-1" href="">
              <SettingsIcon class="w-4 h-4 mr-2" />
              <div class="flex-1 truncate">Multi Application License</div>
            </a>
          </div>
        </div>
      </div>
      <!-- END: FAQ Menu -->
      <!-- BEGIN: FAQ Content -->
      <div class="intro-y col-span-12 lg:col-span-8 xl:col-span-9">
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">About Our Products</h2>
          </div>
          <div id="faq-accordion-1" class="accordion accordion-boxed p-5">
            <div class="accordion-item">
              <div id="faq-accordion-content-1" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-1"
                  aria-expanded="true"
                  aria-controls="faq-accordion-collapse-1"
                >
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </button>
              </div>
              <div
                id="faq-accordion-collapse-1"
                class="accordion-collapse collapse show"
                aria-labelledby="faq-accordion-content-1"
                data-bs-parent="#faq-accordion-1"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-2" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-2"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-2"
                >
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </button>
              </div>
              <div
                id="faq-accordion-collapse-2"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-2"
                data-bs-parent="#faq-accordion-1"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-3" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-3"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-3"
                >
                  How To Troubleshoot Common HTTP Error Codes
                </button>
              </div>
              <div
                id="faq-accordion-collapse-3"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-3"
                data-bs-parent="#faq-accordion-1"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-4" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-4"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-4"
                >
                  An Introduction to Securing your Linux VPS
                </button>
              </div>
              <div
                id="faq-accordion-collapse-4"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-4"
                data-bs-parent="#faq-accordion-1"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Single Application License
            </h2>
          </div>
          <div id="faq-accordion-2" class="accordion accordion-boxed p-5">
            <div class="accordion-item">
              <div id="faq-accordion-content-1" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-5"
                  aria-expanded="true"
                  aria-controls="faq-accordion-collapse-5"
                >
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </button>
              </div>
              <div
                id="faq-accordion-collapse-5"
                class="accordion-collapse collapse show"
                aria-labelledby="faq-accordion-content-1"
                data-bs-parent="#faq-accordion-2"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-2" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-6"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-6"
                >
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </button>
              </div>
              <div
                id="faq-accordion-collapse-6"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-2"
                data-bs-parent="#faq-accordion-2"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-3" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-7"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-7"
                >
                  How To Troubleshoot Common HTTP Error Codes
                </button>
              </div>
              <div
                id="faq-accordion-collapse-7"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-3"
                data-bs-parent="#faq-accordion-2"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-4" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-8"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-8"
                >
                  An Introduction to Securing your Linux VPS
                </button>
              </div>
              <div
                id="faq-accordion-collapse-8"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-4"
                data-bs-parent="#faq-accordion-2"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Multi Application License
            </h2>
          </div>
          <div id="faq-accordion-3" class="accordion accordion-boxed p-5">
            <div class="accordion-item">
              <div id="faq-accordion-content-1" class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-9"
                  aria-expanded="true"
                  aria-controls="faq-accordion-collapse-9"
                >
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </button>
              </div>
              <div
                id="faq-accordion-collapse-9"
                class="accordion-collapse collapse show"
                aria-labelledby="faq-accordion-content-1"
                data-bs-parent="#faq-accordion-3"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-2" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-10"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-10"
                >
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </button>
              </div>
              <div
                id="faq-accordion-collapse-10"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-2"
                data-bs-parent="#faq-accordion-3"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-3" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-11"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-11"
                >
                  How To Troubleshoot Common HTTP Error Codes
                </button>
              </div>
              <div
                id="faq-accordion-collapse-11"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-3"
                data-bs-parent="#faq-accordion-3"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div id="faq-accordion-content-4" class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-accordion-collapse-12"
                  aria-expanded="false"
                  aria-controls="faq-accordion-collapse-12"
                >
                  An Introduction to Securing your Linux VPS
                </button>
              </div>
              <div
                id="faq-accordion-collapse-12"
                class="accordion-collapse collapse"
                aria-labelledby="faq-accordion-content-4"
                data-bs-parent="#faq-accordion-3"
              >
                <div
                  class="accordion-body text-gray-700 dark:text-gray-600 leading-relaxed"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: FAQ Content -->
    </div>
  </div>
</template>
