<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Accordion</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Accordion -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Accordion</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-1"
                >Show example code</label
              >
              <input
                id="show-example-1"
                data-target="#basic-accordion"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-accordion" class="p-5">
            <div class="preview">
              <div id="faq-accordion-1" class="accordion">
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-accordion"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-basic-accordion" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div id="faq-accordion-1" class="accordion">
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </div>
                          </div>
                        </div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Accordion -->
      <!-- BEGIN: Boxed Accordion -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Boxed Accordion</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <label class="form-check-label ml-0 sm:ml-2" for="show-example-2"
                >Show example code</label
              >
              <input
                id="show-example-2"
                data-target="#boxed-accordion"
                class="show-code form-check-switch mr-0 ml-3"
                type="checkbox"
              />
            </div>
          </div>
          <div id="boxed-accordion" class="p-5">
            <div class="preview">
              <div id="faq-accordion-2" class="accordion accordion-boxed">
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
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
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-boxed-accordion"
                class="copy-code btn py-1 px-2 btn-outline-secondary"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto mt-3 rounded-md">
                <Highlight id="copy-boxed-accordion" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div id="faq-accordion-2" class="accordion accordion-boxed">
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
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
                              printer took a galley of type and scrambled it to make a
                              type specimen book. It has survived not only five
                              centuries, but also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </div>
                          </div>
                        </div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Boxed Accordion -->
    </div>
  </div>
</template>
