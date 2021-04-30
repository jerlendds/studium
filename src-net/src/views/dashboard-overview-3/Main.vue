<template>
  <div>
    <div class="relative">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xl:col-span-9 xxl:col-span-9 z-10">
          <div class="mt-6 -mb-6 intro-y">
            <div
              class="alert alert-dismissible show box bg-theme-3 text-white flex items-center mb-6"
              role="alert"
            >
              <span>
                Introducing new dashboard! Download now at
                <a
                  href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                  class="underline ml-1"
                  target="blank"
                  >themeforest.net</a
                >.
                <button
                  class="btn border-transparent bg-white bg-opacity-20 dark:bg-dark-1 hover:bg-opacity-30 py-0.5 px-2 -my-3 ml-2"
                >
                  Detail
                </button>
              </span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              >
                <XIcon class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div class="mt-14 mb-3 grid grid-cols-12 sm:gap-10 intro-y">
            <div
              class="col-span-12 sm:col-span-6 md:col-span-4 py-6 sm:pl-5 md:pl-0 lg:pl-5 relative text-center sm:text-left"
            >
              <div
                class="absolute pt-0.5 xxl:pt-0 mt-5 xxl:mt-6 top-0 right-0 dropdown"
              >
                <a
                  class="dropdown-toggle block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreVerticalIcon class="w-5 h-5 text-gray-600" />
                </a>
                <div class="dropdown-menu w-40">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2  rounded-md"
                    >
                      <FileTextIcon class="w-4 h-4 mr-2" />
                      Monthly Report
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2  rounded-md"
                    >
                      <FileTextIcon class="w-4 h-4 mr-2" />
                      Annual Report
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-sm xxl:text-base font-medium -mb-1">
                Hi Angelina,
                <span class="text-gray-700 dark:text-gray-500 font-normal"
                  >welcome back!</span
                >
              </div>
              <div
                class="text-base xxl:text-lg justify-center sm:justify-start flex items-center text-gray-700 dark:text-gray-500 leading-3 mt-14 xxl:mt-24"
              >
                My Total Assets
                <Tippy
                  tag="div"
                  content="Total value of your sales: $158.409.416"
                >
                  <AlertCircleIcon class="w-5 h-5 ml-1.5" />
                </Tippy>
              </div>
              <div class="xxl:flex mt-5 mb-3">
                <div class="flex items-center justify-center sm:justify-start">
                  <div
                    class="relative text-3xl xxl:text-4xl font-bold leading-6 pl-4"
                  >
                    <span
                      class="absolute text-xl xxl:text-2xl top-0 left-0 -mt-1.5 xxl:mt-0"
                      >$</span
                    >
                    18,402,210
                  </div>
                  <a class="text-gray-600 ml-4 xxl:ml-16" href="">
                    <RefreshCcwIcon class="w-5 h-5" />
                  </a>
                </div>
                <div
                  class="mt-5 xxl:flex xxl:justify-center xxl:mt-0 xxl:-ml-20 xxl:w-14 xxl:flex-none xxl:pl-1"
                >
                  <Tippy
                    tag="div"
                    class="font-medium inline-flex bg-theme-9 text-white rounded-full px-2 py-1 text-xs xxl:text-sm xxl:p-0 xxl:text-theme-9 xxl:bg-transparent xxl:flex items-center cursor-pointer xxl:justify-center"
                    content="49% Higher than last month"
                  >
                    49%
                    <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
              </div>
              <div class="text-gray-600 text-xs mt-5">
                Last updated 1 hour ago
              </div>
              <div
                class="xxl:text-base text-gray-700 dark:text-gray-500 mt-6 -mb-1"
              >
                Total net margin
                <span class="font-medium text-gray-800 dark:text-gray-400"
                  >$921,050</span
                >
              </div>
              <div class="mt-14 xxl:mt-24 dropdown">
                <button
                  class="dropdown-toggle btn btn-rounded-primary w-44 xxl:w-52 px-4 relative justify-start"
                  aria-expanded="false"
                >
                  Download Reports
                  <span
                    class="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-1"
                  >
                    <ChevronDownIcon class="w-4 h-4" />
                  </span>
                </button>
                <div class="dropdown-menu w-44 xxl:w-52">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2  rounded-md"
                    >
                      <FileTextIcon class="w-4 h-4 mr-2" />
                      Monthly Report
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2  rounded-md"
                    >
                      <FileTextIcon class="w-4 h-4 mr-2" />
                      Annual Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row-start-2 md:row-start-auto col-span-12 md:col-span-4 py-6 border-black border-opacity-10 border-t md:border-t-0 md:border-l md:border-r border-dashed px-10 sm:px-28 md:px-5 -mx-5"
            >
              <div class="flex flex-wrap items-center">
                <div
                  class="flex items-center w-full sm:w-auto justify-center sm:justify-start mr-auto mb-5 xxl:mb-0"
                >
                  <div class="w-2 h-2 bg-theme-1 rounded-full -mt-4"></div>
                  <div class="ml-3.5">
                    <div
                      class="relative text-xl xxl:text-2xl font-medium leading-6 xxl:leading-5 pl-3.5"
                    >
                      <span
                        class="absolute text-base xxl:text-lg font-bold top-0 left-0 xxl:-mt-1.5"
                        >$</span
                      >
                      47,578.77
                    </div>
                    <div class="text-gray-600 dark:text-gray-600 mt-2">
                      Yearly budget
                    </div>
                  </div>
                </div>
                <select
                  class="form-select bg-transparent border-black border-opacity-10 dark:bg-transparent dark:border-opacity-100 dark:border-dark-5 mx-auto sm:mx-0 py-1.5 px-3 w-auto -mt-2"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </select>
              </div>
              <div class="mt-12 text-xs text-gray-700 dark:text-gray-500">
                You have spent about 35% of your annual budget.
              </div>
              <ReportBarChart1 class="mt-4" :height="267" />
            </div>
            <div
              class="col-span-12 sm:col-span-6 md:col-span-4 py-6 border-black border-opacity-10 border-t sm:border-t-0 border-l md:border-l-0 border-dashed -ml-4 pl-4 md:ml-0 md:pl-0"
            >
              <div
                class="boxed-tabs nav nav-tabs justify-center w-3/4 xxl:w-4/6 bg-theme-8 bg-opacity-50 text-gray-600 dark:bg-dark-2 dark:text-gray-500 rounded-md p-1 mx-auto"
                role="tablist"
              >
                <a
                  id="active-users-tab"
                  data-toggle="tab"
                  data-target="#active-users"
                  href="javascript:;"
                  class="btn flex-1 border-0 shadow-none py-1 px-2 active"
                  role="tab"
                  aria-controls="active-users"
                  aria-selected="true"
                  >Active</a
                >
                <a
                  id="inactive-users-tab"
                  data-toggle="tab"
                  data-target="#inactive-users"
                  href="javascript:;"
                  class="btn flex-1 border-0 shadow-none py-1 px-2"
                  role="tab"
                  aria-selected="false"
                  >Inactive</a
                >
              </div>
              <div class="tab-content mt-6">
                <div
                  id="active-users"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="active-users-tab"
                >
                  <div class="relative">
                    <ReportDonutChart2 :height="190" class="mt-8" />
                    <div
                      class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0"
                    >
                      <div class="text-xl xxl:text-2xl font-medium">2.501</div>
                      <div class="text-gray-600 dark:text-gray-600 mt-0.5">
                        Active Users
                      </div>
                    </div>
                  </div>
                  <div class="mx-auto w-10/12 xxl:w-2/3 mt-8">
                    <div class="flex items-center">
                      <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                      <span class="truncate">17 - 30 Years old</span>
                      <div
                        class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                      ></div>
                      <span class="font-medium xl:ml-auto">62%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                      <span class="truncate">31 - 50 Years old</span>
                      <div
                        class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                      ></div>
                      <span class="font-medium xl:ml-auto">33%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                      <span class="truncate">>= 50 Years old</span>
                      <div
                        class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                      ></div>
                      <span class="font-medium xl:ml-auto">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="report-box-3 px-5 pt-8 pb-14 col-span-12 z-10">
          <div class="grid grid-cols-12 gap-6 relative intro-y">
            <div
              class="col-span-12 sm:col-span-4 xl:col-span-3 px-0 lg:px-6 xl:px-0 xxl:px-6"
            >
              <div class="flex items-center flex-wrap lg:flex-nowrap gap-3">
                <div
                  class="sm:w-full lg:w-auto text-lg font-medium truncate mr-auto"
                >
                  Summary Report
                </div>
                <div
                  class="py-1 px-2 rounded-full text-xs bg-theme-8 bg-opacity-90 dark:bg-dark-5 text-gray-700 dark:text-gray-300 cursor-pointer truncate"
                >
                  180 Campaign
                </div>
              </div>
              <div class="px-10 sm:px-0">
                <SimpleLineChart3 :height="110" class="mt-8" />
              </div>
            </div>
            <div
              class="col-span-12 sm:col-span-4 xl:col-span-3 px-0 lg:px-6 xl:px-0 xxl:px-6"
            >
              <div class="flex items-center flex-wrap lg:flex-nowrap gap-3">
                <div
                  class="sm:w-full lg:w-auto text-lg font-medium truncate mr-auto"
                >
                  Social Media
                </div>
                <a
                  href=""
                  class="flex items-center text-theme-1 dark:text-theme-10"
                >
                  <div class="truncate xxl:mr-auto">View Details</div>
                  <ArrowRightIcon class="w-4 h-4 ml-3" />
                </a>
              </div>
              <div class="flex items-center justify-center mt-10">
                <div class="text-right">
                  <div class="dark:text-gray-300 text-3xl font-medium">149</div>
                  <div class="truncate mt-1 text-gray-600 dark:text-gray-600">
                    Active Lenders
                  </div>
                </div>
                <div
                  class="w-px h-16 border border-r border-dashed border-gray-400 dark:border-dark-5 mx-4 xl:mx-6"
                ></div>
                <div>
                  <div class="dark:text-gray-300 text-3xl font-medium">135</div>
                  <div class="truncate mt-1 text-gray-600 dark:text-gray-600">
                    Total Lenders
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-span-12 sm:col-span-4 xl:col-span-3 px-0 lg:px-6 xl:px-0 xxl:px-6"
            >
              <div class="flex items-center flex-wrap lg:flex-nowrap gap-3">
                <div
                  class="sm:w-full lg:w-auto text-lg font-medium truncate mr-auto"
                >
                  Posted Ads
                </div>
                <div
                  class="py-1 px-2 rounded-full text-xs bg-theme-8 bg-opacity-90 dark:bg-dark-5 text-gray-700 dark:text-gray-300 cursor-pointer truncate"
                >
                  320 Followers
                </div>
              </div>
              <div class="px-10 sm:px-0">
                <SimpleLineChart4 :height="110" class="mt-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="report-box-4 w-full h-full grid grid-cols-12 gap-6 xl:absolute -mt-8 xl:mt-0 pb-6 xl:pb-0 top-0 right-0 z-30 xl:z-auto"
      >
        <div class="col-span-12 xl:col-span-3 xl:col-start-10 xl:pb-16 z-30">
          <div class="h-full flex flex-col">
            <div class="box p-5 mt-6 bg-theme-3 intro-x">
              <div class="flex flex-wrap gap-3">
                <div class="mr-auto">
                  <div
                    class="text-white text-opacity-70 flex items-center leading-3"
                  >
                    AVAILABLE FUNDS
                    <Tippy
                      tag="div"
                      content="Total value of your sales: $158.409.416"
                    >
                      <AlertCircleIcon class="w-4 h-4 ml-1.5" />
                    </Tippy>
                  </div>
                  <div
                    class="text-white relative text-2xl font-medium leading-5 pl-3.5 mt-3.5"
                  >
                    <span
                      class="absolute text-lg font-bold top-0 left-0 -mt-1.5"
                      >$</span
                    >
                    47,578.77
                  </div>
                </div>
                <a
                  class="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-1 bg-opacity-20 hover:bg-opacity-30 text-white"
                  href=""
                >
                  <PlusIcon class="w-6 h-6" />
                </a>
              </div>
            </div>
            <div class="report-box-4__content xl:min-h-0 intro-x">
              <div class="max-h-full xl:overflow-y-auto box mt-5">
                <div
                  class="bg-white dark:bg-dark-3 xl:sticky top-0 px-5 pt-5 pb-6"
                >
                  <div class="flex items-center">
                    <div class="text-lg font-medium truncate mr-5">
                      Summary Report
                    </div>
                    <a
                      href=""
                      class="ml-auto flex items-center text-theme-1 dark:text-theme-10"
                    >
                      <RefreshCcwIcon class="w-4 h-4 mr-3" />
                      Refresh
                    </a>
                  </div>
                  <div
                    class="boxed-tabs nav nav-tabs justify-center border border-gray-400 border-dashed text-gray-600 dark:border-gray-700 dark:bg-dark-3 dark:text-gray-500 rounded-md p-1 mt-5 mx-auto"
                    role="tablist"
                  >
                    <a
                      id="active-users-tab"
                      data-toggle="tab"
                      data-target="#active-users"
                      href="javascript:;"
                      class="btn flex-1 border-0 shadow-none py-1 px-2 active"
                      role="tab"
                      aria-controls="active-users"
                      aria-selected="true"
                      >Weekly</a
                    >
                    <a
                      id="inactive-users-tab"
                      data-toggle="tab"
                      data-target="#inactive-users"
                      href="javascript:;"
                      class="btn flex-1 border-0 shadow-none py-1 px-2"
                      role="tab"
                      aria-selected="false"
                      >Monthly</a
                    >
                  </div>
                </div>
                <div class="tab-content px-5 pb-5">
                  <div
                    id="active-users"
                    class="tab-pane active grid grid-cols-12 gap-y-6"
                    role="tabpanel"
                    aria-labelledby="active-users-tab"
                  >
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Unpaid Loan
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">$155.430.000</div>
                        <Tippy
                          tag="div"
                          class="text-theme-6 flex text-xs font-medium cursor-pointer ml-2"
                          content="2% Lower than last month"
                        >
                          2%
                          <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Active Funding Partner
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">52 Partner</div>
                        <Tippy
                          tag="div"
                          class="text-theme-9 flex text-xs font-medium cursor-pointer ml-2"
                          content="0.1% Lower than last month"
                        >
                          49%
                          <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Paid Installment
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">$75.430.000</div>
                        <Tippy
                          tag="div"
                          class="text-theme-9 flex text-xs font-medium cursor-pointer ml-2"
                          content="49% Higher than last month"
                        >
                          36%
                          <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Success Payment
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">100%</div>
                      </div>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Waiting For Disbursement
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">0</div>
                      </div>
                    </div>
                    <div
                      class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-12"
                    >
                      <div class="text-gray-600 dark:text-gray-500">
                        Unpaid Loan
                      </div>
                      <div class="mt-1.5 flex items-center">
                        <div class="text-lg">$21.430.000</div>
                        <Tippy
                          tag="div"
                          class="text-theme-6 flex text-xs font-medium cursor-pointer ml-2"
                          content="2% Lower than last month"
                        >
                          23%
                          <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <button
                      class="btn btn-outline-secondary col-span-12 border-gray-400 border-dashed relative justify-start mb-2"
                    >
                      <div class="truncate mr-5">My Portfolio Details</div>
                      <span
                        class="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5"
                      >
                        <ArrowRightIcon class="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="report-box-3 report-box-3--content grid grid-cols-12 gap-6 xl:-mt-5 xxl:-mt-8 -mb-10 z-40 xxl:z-10"
    >
      <div class="col-span-12 xxl:col-span-9">
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Official Store -->
          <div class="col-span-12 xl:col-span-8 mt-6">
            <div class="intro-y block sm:flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Official Store</h2>
              <div
                class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
              >
                <MapPinIcon
                  class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <input
                  type="text"
                  class="form-control sm:w-40 box pl-10"
                  placeholder="Filter by city"
                />
              </div>
            </div>
            <div class="intro-y box p-5 mt-12 sm:mt-5">
              <div>
                250 Official stores in 21 countries, click the marker to see
                location details.
              </div>
              <ReportMap class="report-maps mt-5 bg-gray-200 rounded-md" />
            </div>
          </div>
          <!-- END: Official Store -->
          <!-- BEGIN: Weekly Best Sellers -->
          <div class="col-span-12 xl:col-span-4 mt-6">
            <div class="intro-y flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Weekly Best Sellers
              </h2>
            </div>
            <div class="mt-5">
              <div
                v-for="(faker, fakerKey) in $_.take($f(), 4)"
                :key="fakerKey"
                class="intro-y"
              >
                <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                  <div
                    class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                  >
                    <img
                      alt="Rubick Tailwind HTML Admin Template"
                      :src="require(`@/assets/images/${faker.photos[0]}`)"
                    />
                  </div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">
                      {{ faker.users[0].name }}
                    </div>
                    <div class="text-gray-600 text-xs mt-0.5">
                      {{ faker.dates[0] }}
                    </div>
                  </div>
                  <div
                    class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium"
                  >
                    137 Sales
                  </div>
                </div>
              </div>
              <a
                href=""
                class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
                >View More</a
              >
            </div>
          </div>
          <!-- END: Weekly Best Sellers -->
          <!-- BEGIN: Weekly Top Products -->
          <div class="col-span-12 mt-6">
            <div class="intro-y block sm:flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Weekly Top Products
              </h2>
              <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                <button
                  class="btn box flex items-center text-gray-700 dark:text-gray-300"
                >
                  <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                  Export to Excel
                </button>
                <button
                  class="ml-3 btn box flex items-center text-gray-700 dark:text-gray-300"
                >
                  <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                  Export to PDF
                </button>
              </div>
            </div>
            <div class="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <table class="table table-report sm:mt-2">
                <thead>
                  <tr>
                    <th class="whitespace-nowrap">IMAGES</th>
                    <th class="whitespace-nowrap">PRODUCT NAME</th>
                    <th class="text-center whitespace-nowrap">STOCK</th>
                    <th class="text-center whitespace-nowrap">STATUS</th>
                    <th class="text-center whitespace-nowrap">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(faker, fakerKey) in $_.take($f(), 4)"
                    :key="fakerKey"
                    class="intro-x"
                  >
                    <td class="w-40">
                      <div class="flex">
                        <div class="w-10 h-10 image-fit zoom-in">
                          <Tippy
                            tag="img"
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-full"
                            :src="require(`@/assets/images/${faker.images[0]}`)"
                            :content="`Uploaded at ${faker.dates[0]}`"
                          />
                        </div>
                        <div class="w-10 h-10 image-fit zoom-in -ml-5">
                          <Tippy
                            tag="img"
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-full"
                            :src="require(`@/assets/images/${faker.images[1]}`)"
                            :content="`Uploaded at ${faker.dates[1]}`"
                          />
                        </div>
                        <div class="w-10 h-10 image-fit zoom-in -ml-5">
                          <Tippy
                            tag="img"
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-full"
                            :src="require(`@/assets/images/${faker.images[2]}`)"
                            :content="`Uploaded at ${faker.dates[2]}`"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="" class="font-medium whitespace-nowrap">{{
                        faker.products[0].name
                      }}</a>
                      <div
                        class="text-gray-600 text-xs whitespace-nowrap mt-0.5"
                      >
                        {{ faker.products[0].category }}
                      </div>
                    </td>
                    <td class="text-center">{{ faker.stocks[0] }}</td>
                    <td class="w-40">
                      <div
                        class="flex items-center justify-center"
                        :class="{
                          'text-theme-9': faker.trueFalse[0],
                          'text-theme-6': !faker.trueFalse[0]
                        }"
                      >
                        <CheckSquareIcon class="w-4 h-4 mr-2" />
                        {{ faker.trueFalse[0] ? "Active" : "Inactive" }}
                      </div>
                    </td>
                    <td class="table-report__action w-56">
                      <div class="flex justify-center items-center">
                        <a class="flex items-center mr-3" href="">
                          <CheckSquareIcon class="w-4 h-4 mr-1" />
                          Edit
                        </a>
                        <a class="flex items-center text-theme-6" href="">
                          <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3"
            >
              <ul class="pagination">
                <li>
                  <a class="pagination__link" href="">
                    <ChevronsLeftIcon class="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <ChevronLeftIcon class="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">...</a>
                </li>
                <li>
                  <a class="pagination__link" href="">1</a>
                </li>
                <li>
                  <a class="pagination__link pagination__link--active" href=""
                    >2</a
                  >
                </li>
                <li>
                  <a class="pagination__link" href="">3</a>
                </li>
                <li>
                  <a class="pagination__link" href="">...</a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <ChevronsRightIcon class="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a class="pagination__link" href="">
                    <ChevronRightIcon class="w-4 h-4" />
                  </a>
                </li>
              </ul>
              <select class="w-20 form-select box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
          </div>
          <!-- END: Weekly Top Products -->
        </div>
      </div>
      <div class="col-span-12 xxl:col-span-3 relative z-10">
        <div class="xxl:border-l border-theme-5 pb-10">
          <div class="xxl:pl-6 grid grid-cols-12 gap-6">
            <!-- BEGIN: Recent Activities -->
            <div
              class="col-span-12 md:col-span-6 xxl:col-span-12 mt-3 xxl:mt-6"
            >
              <div class="intro-x flex items-center h-10">
                <h2 class="text-lg font-medium truncate mr-5">
                  Recent Activities
                </h2>
                <a
                  href=""
                  class="ml-auto text-theme-1 dark:text-theme-10 truncate"
                  >Show More</a
                >
              </div>
              <div class="report-timeline mt-5 relative">
                <div class="intro-x relative flex items-center mb-3">
                  <div class="report-timeline__image">
                    <div
                      class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                    >
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[9].photos[0]}`)"
                      />
                    </div>
                  </div>
                  <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div class="flex items-center">
                      <div class="font-medium">
                        {{ $f()[9].users[0].name }}
                      </div>
                      <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div class="text-gray-600 mt-1">Has joined the team</div>
                  </div>
                </div>
                <div class="intro-x relative flex items-center mb-3">
                  <div class="report-timeline__image">
                    <div
                      class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                    >
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[8].photos[0]}`)"
                      />
                    </div>
                  </div>
                  <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div class="flex items-center">
                      <div class="font-medium">
                        {{ $f()[8].users[0].name }}
                      </div>
                      <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div class="text-gray-600">
                      <div class="mt-1">Added 3 new photos</div>
                      <div class="flex mt-2">
                        <Tippy
                          tag="div"
                          class="w-8 h-8 image-fit mr-1 zoom-in"
                          :content="$f()[0].products[0].name"
                        >
                          <img
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-md border border-white"
                            :src="
                              require(`@/assets/images/${$f()[8].images[0]}`)
                            "
                          />
                        </Tippy>
                        <Tippy
                          tag="div"
                          class="w-8 h-8 image-fit mr-1 zoom-in"
                          :content="$f()[1].products[0].name"
                        >
                          <img
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-md border border-white"
                            :src="
                              require(`@/assets/images/${$f()[8].images[1]}`)
                            "
                          />
                        </Tippy>
                        <Tippy
                          tag="div"
                          class="w-8 h-8 image-fit mr-1 zoom-in"
                          :content="$f()[2].products[0].name"
                        >
                          <img
                            alt="Icewall Tailwind HTML Admin Template"
                            class="rounded-md border border-white"
                            :src="
                              require(`@/assets/images/${$f()[8].images[2]}`)
                            "
                          />
                        </Tippy>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="intro-x text-gray-500 text-xs text-center my-4">
                  12 November
                </div>
                <div class="intro-x relative flex items-center mb-3">
                  <div class="report-timeline__image">
                    <div
                      class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                    >
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[7].photos[0]}`)"
                      />
                    </div>
                  </div>
                  <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div class="flex items-center">
                      <div class="font-medium">
                        {{ $f()[7].users[0].name }}
                      </div>
                      <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div class="text-gray-600 mt-1">
                      Has changed
                      <a class="text-theme-1 dark:text-theme-10" href="">{{
                        $f()[7].products[0].name
                      }}</a>
                      price and description
                    </div>
                  </div>
                </div>
                <div class="intro-x relative flex items-center mb-3">
                  <div class="report-timeline__image">
                    <div
                      class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                    >
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${$f()[6].photos[0]}`)"
                      />
                    </div>
                  </div>
                  <div class="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div class="flex items-center">
                      <div class="font-medium">
                        {{ $f()[6].users[0].name }}
                      </div>
                      <div class="text-xs text-gray-500 ml-auto">07:00 PM</div>
                    </div>
                    <div class="text-gray-600 mt-1">
                      Has changed
                      <a class="text-theme-1 dark:text-theme-10" href="">{{
                        $f()[6].products[0].name
                      }}</a>
                      description
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- END: Recent Activities -->
            <!-- BEGIN: Transactions -->
            <div class="col-span-12 md:col-span-6 xxl:col-span-12 mt-3">
              <div class="intro-x flex items-center h-10">
                <h2 class="text-lg font-medium truncate mr-5">Transactions</h2>
              </div>
              <div class="mt-5">
                <div
                  v-for="(faker, fakerKey) in $_.take($f(), 5)"
                  :key="fakerKey"
                  class="intro-x"
                >
                  <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                    <div
                      class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden"
                    >
                      <img
                        alt="Icewall Tailwind HTML Admin Template"
                        :src="require(`@/assets/images/${faker.photos[0]}`)"
                      />
                    </div>
                    <div class="ml-4 mr-auto">
                      <div class="font-medium">
                        {{ faker.users[0].name }}
                      </div>
                      <div class="text-gray-600 text-xs mt-0.5">
                        {{ faker.dates[0] }}
                      </div>
                    </div>
                    <div
                      :class="{
                        'text-theme-9': faker.trueFalse[0],
                        'text-theme-6': !faker.trueFalse[0]
                      }"
                    >
                      {{ faker.trueFalse[0] ? "+" : "-" }}${{ faker.totals[0] }}
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  class="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
                  >View More</a
                >
              </div>
            </div>
            <!-- END: Transactions -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ReportDonutChart2 from "@/components/report-donut-chart-2/Main.vue";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";
import SimpleLineChart3 from "@/components/simple-line-chart-3/Main.vue";
import SimpleLineChart4 from "@/components/simple-line-chart-4/Main.vue";

export default defineComponent({
  components: {
    ReportDonutChart2,
    ReportBarChart1,
    ReportMap,
    SimpleLineChart3,
    SimpleLineChart4
  }
});
</script>
