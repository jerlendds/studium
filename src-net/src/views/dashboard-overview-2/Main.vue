<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: Notification -->
        <div class="col-span-12 mt-6 -mb-6 intro-y">
          <div
            class="alert alert-dismissible show box bg-theme-3 text-white flex items-center mb-6"
            role="alert"
          >
            <span
              >Introducing new dashboard! Download now at
              <a
                href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                class="underline ml-1"
                target="blank"
                >themeforest.net</a
              >.</span
            >
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
        <!-- BEGIN: Notification -->
        <!-- BEGIN: General Report -->
        <div class="col-span-12 lg:col-span-8 xl:col-span-6 mt-2">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <select class="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="custom-date">Custom Date</option>
            </select>
          </div>
          <div class="report-box-2 intro-y mt-12 sm:mt-5">
            <div class="box sm:flex">
              <div class="px-8 py-12 flex flex-col justify-center flex-1">
                <ShoppingBagIcon class="w-10 h-10 text-theme-12" />
                <div class="relative text-3xl font-bold mt-12 pl-4">
                  <span class="absolute text-xl top-0 left-0">$</span> 54.143
                </div>
                <Tippy
                  tag="div"
                  class="report-box-2__indicator bg-theme-9 cursor-pointer"
                  content="47% Higher than last month"
                >
                  47% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                </Tippy>
                <div class="mt-4 text-gray-600 dark:text-gray-600">
                  Sales earnings this month after associated author fees, &
                  before taxes.
                </div>
                <button
                  class="btn btn-outline-secondary relative justify-start rounded-full mt-12"
                >
                  Download Reports
                  <span
                    class="w-8 h-8 absolute flex justify-center items-center bg-theme-1 text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5"
                  >
                    <ArrowRightIcon class="w-4 h-4" />
                  </span>
                </button>
              </div>
              <div
                class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-gray-300 dark:border-dark-5 border-dashed"
              >
                <div class="text-gray-600 dark:text-gray-600 text-xs">
                  TOTAL TRANSACTION
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">4.501</div>
                  <Tippy
                    tag="div"
                    class="text-theme-6 flex text-xs font-medium cursor-pointer ml-2"
                    content="2% Lower than last month"
                  >
                    2%
                    <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-gray-600 dark:text-gray-600 text-xs mt-5">
                  CANCELATION CASE
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">2</div>
                  <Tippy
                    tag="div"
                    class="text-theme-6 flex text-xs font-medium cursor-pointer ml-2"
                    content="0.1% Lower than last month"
                  >
                    0.1%
                    <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-gray-600 dark:text-gray-600 text-xs mt-5">
                  GROSS RENTAL VALUE
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$72.000</div>
                  <Tippy
                    tag="div"
                    class="text-theme-9 flex text-xs font-medium cursor-pointer ml-2"
                    content="49% Higher than last month"
                  >
                    49% <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-gray-600 dark:text-gray-600 text-xs mt-5">
                  GROSS RENTAL PROFIT
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$54.000</div>
                  <Tippy
                    tag="div"
                    class="text-theme-9 flex text-xs font-medium cursor-pointer ml-2"
                    content="52% Higher than last month"
                  >
                    52% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-gray-600 dark:text-gray-600 text-xs mt-5">
                  NEW USERS
                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">2.500</div>
                  <Tippy
                    tag="div"
                    class="text-theme-9 flex text-xs font-medium cursor-pointer ml-2"
                    content="52% Higher than last month"
                  >
                    52% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Visitors -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 mt-2">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Visitors</h2>
            <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate"
              >View on Map</a
            >
          </div>
          <div class="report-box-2 intro-y mt-5">
            <div class="box p-5">
              <div class="flex items-center">
                Realtime active users
                <div class="dropdown ml-auto">
                  <a
                    class="dropdown-toggle w-5 h-5 block -mr-2"
                    href="javascript:;"
                    aria-expanded="false"
                  >
                    <MoreVerticalIcon
                      class="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FileTextIcon class="w-4 h-4 mr-2" />
                        Export
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <SettingsIcon class="w-4 h-4 mr-2" />
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-2xl font-medium mt-2">214</div>
              <div class="border-b border-gray-200 flex pb-2 mt-4">
                <div class="text-gray-600 dark:text-gray-600 text-xs">
                  Page views per second
                </div>
                <Tippy
                  tag="div"
                  class="text-theme-9 flex text-xs font-medium cursor-pointer ml-auto"
                  content="49% Lower than last month"
                >
                  49% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                </Tippy>
              </div>
              <div class="mt-2 border-b broder-gray-200">
                <div class="-mb-1.5 -ml-2.5">
                  <ReportBarChart :height="111" />
                </div>
              </div>
              <div
                class="text-gray-600 dark:text-gray-600 text-xs border-b border-gray-200 flex mb-2 pb-2 mt-4"
              >
                <div>Top Active Pages</div>
                <div class="ml-auto">Active Users</div>
              </div>
              <div class="flex">
                <div>/letz-lara…review/2653</div>
                <div class="ml-auto">472</div>
              </div>
              <div class="flex mt-1.5">
                <div>/rubick…review/1674</div>
                <div class="ml-auto">294</div>
              </div>
              <div class="flex mt-1.5">
                <div>/profile…review/46789</div>
                <div class="ml-auto">83</div>
              </div>
              <div class="flex mt-1.5">
                <div>/profile…review/24357</div>
                <div class="ml-auto">21</div>
              </div>
              <button
                class="btn btn-outline-secondary border-dashed w-full py-1 px-2 mt-4"
              >
                Real-Time Report
              </button>
            </div>
          </div>
        </div>
        <!-- END: Visitors -->
        <!-- BEGIN: Users By Age -->
        <div
          class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 mt-2 lg:mt-6 xl:mt-2"
        >
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Users By Age</h2>
            <a href="" class="ml-auto text-theme-1 dark:text-theme-10 truncate"
              >Show More</a
            >
          </div>
          <div class="report-box-2 intro-y mt-5">
            <div class="box p-5">
              <div
                class="boxed-tabs nav nav-tabs justify-center w-4/5 bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-500 rounded-md mx-auto"
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
                    <ReportDonutChart :height="300" class="mt-3" />
                    <div
                      class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0"
                    >
                      <div class="text-2xl font-medium">2.501</div>
                      <div class="text-gray-600 dark:text-gray-600 mt-0.5">
                        Active Users
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
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
        <!-- END: Users By Age -->
        <!-- BEGIN: Official Store -->
        <div class="col-span-12 lg:col-span-8 mt-6">
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
                    alt="Icewall Tailwind HTML Admin Template"
                    :src="require(`@/assets/images/${faker.photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <div class="font-medium">{{ faker.users[0].name }}</div>
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
        <!-- BEGIN: Ads 1 -->
        <div class="col-span-12 lg:col-span-6 mt-6">
          <div
            class="ads-box box p-8 relative overflow-hidden bg-theme-3 intro-y"
          >
            <div class="ads-box__title w-full sm:w-72 text-white text-xl -mt-3">
              Transact safely with Lender’s Fund Account (RDL)
            </div>
            <div
              class="w-full sm:w-72 leading-relaxed text-white text-opacity-70 dark:text-gray-600 dark:text-opacity-100 mt-3"
            >
              Apply now, quick registration
            </div>
            <button
              class="btn w-32 bg-white dark:bg-dark-2 dark:text-white mt-6 sm:mt-10"
            >
              Start Now
            </button>
            <img
              class="hidden sm:block absolute top-0 right-0 w-2/5 -mt-3 mr-2"
              alt="Icewall Tailwind HTML Admin Template"
              :src="require(`@/assets/images/woman-illustration.svg`)"
            />
          </div>
        </div>
        <!-- END: Ads 1 -->
        <!-- BEGIN: Ads 2 -->
        <div class="col-span-12 lg:col-span-6 mt-6">
          <div class="ads-box box p-8 relative overflow-hidden intro-y">
            <div
              class="ads-box__title w-full sm:w-52 text-theme-1 dark:text-white text-xl -mt-3"
            >
              Invite friends to get
              <span class="font-medium">FREE</span> bonuses!
            </div>
            <div class="w-full sm:w-60 leading-relaxed text-gray-600 mt-2">
              Get a IDR 100,000 voucher by inviting your friends to fund
              #BecomeMember
            </div>
            <Tippy
              tag="div"
              class="w-48 relative mt-6 cursor-pointer"
              content="Copy referral link"
            >
              <input class="form-control" value="https://dashboard.in" />
              <CopyIcon
                class="absolute right-0 top-0 bottom-0 my-auto mr-4 w-4 h-4"
              />
            </Tippy>
            <img
              class="hidden sm:block absolute top-0 right-0 w-1/2 mt-1 -mr-12"
              alt="Icewall Tailwind HTML Admin Template"
              :src="require(`@/assets/images/phone-illustration.svg`)"
            />
          </div>
        </div>
        <!-- END: Ads 2 -->
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
                    <div class="text-gray-600 text-xs whitespace-nowrap mt-0.5">
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
                  <ChevronRightIcon class="w-4 h-4" />
                </a>
              </li>
              <li>
                <a class="pagination__link" href="">
                  <ChevronsRightIcon class="w-4 h-4" />
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
    <div class="col-span-12 xxl:col-span-3">
      <div class="xxl:border-l border-theme-5 -mb-10 pb-10">
        <div class="xxl:pl-6 grid grid-cols-12 gap-6">
          <!-- BEGIN: Important Notes -->
          <div class="col-span-12 md:col-span-6 xl:col-span-12 mt-3 xxl:mt-8">
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-auto">
                Important Notes
              </h2>
              <button
                data-carousel="important-notes"
                data-target="prev"
                class="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"
                @click="prevImportantNotes"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                data-carousel="important-notes"
                data-target="next"
                class="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"
                @click="nextImportantNotes"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <div class="mt-5 intro-x">
              <div class="box zoom-in">
                <TinySlider ref-key="importantNotesRef">
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Lorem Ipsum is simply dummy text
                    </div>
                    <div class="text-gray-500 mt-1">20 Hours ago</div>
                    <div class="text-gray-600 text-justify mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        View Notes
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Lorem Ipsum is simply dummy text
                    </div>
                    <div class="text-gray-500 mt-1">20 Hours ago</div>
                    <div class="text-gray-600 text-justify mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        View Notes
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                  <div class="p-5">
                    <div class="text-base font-medium truncate">
                      Lorem Ipsum is simply dummy text
                    </div>
                    <div class="text-gray-500 mt-1">20 Hours ago</div>
                    <div class="text-gray-600 text-justify mt-1">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                    <div class="font-medium flex mt-5">
                      <button type="button" class="btn btn-secondary py-1 px-2">
                        View Notes
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
          </div>
          <!-- END: Important Notes -->
          <!-- BEGIN: Recent Activities -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3"
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
                          :src="require(`@/assets/images/${$f()[8].images[0]}`)"
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
                          :src="require(`@/assets/images/${$f()[8].images[1]}`)"
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
                          :src="require(`@/assets/images/${$f()[8].images[2]}`)"
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
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3"
          >
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
          <!-- BEGIN: Schedules -->
          <div
            class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3"
          >
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Schedules</h2>
              <a
                href=""
                class="ml-auto text-theme-1 dark:text-theme-10 truncate flex items-center"
              >
                <PlusIcon class="w-4 h-4 mr-1" /> Add New Schedules
              </a>
            </div>
            <div class="mt-5">
              <div class="intro-x box">
                <div class="p-5">
                  <div class="flex">
                    <ChevronLeftIcon class="w-5 h-5 text-gray-600" />
                    <div class="font-medium text-base mx-auto">April</div>
                    <ChevronRightIcon class="w-5 h-5 text-gray-600" />
                  </div>
                  <div class="grid grid-cols-7 gap-4 mt-5 text-center">
                    <div class="font-medium">Su</div>
                    <div class="font-medium">Mo</div>
                    <div class="font-medium">Tu</div>
                    <div class="font-medium">We</div>
                    <div class="font-medium">Th</div>
                    <div class="font-medium">Fr</div>
                    <div class="font-medium">Sa</div>
                    <div class="py-0.5 rounded relative text-gray-600">29</div>
                    <div class="py-0.5 rounded relative text-gray-600">30</div>
                    <div class="py-0.5 rounded relative text-gray-600">31</div>
                    <div class="py-0.5 rounded relative">1</div>
                    <div class="py-0.5 rounded relative">2</div>
                    <div class="py-0.5 rounded relative">3</div>
                    <div class="py-0.5 rounded relative">4</div>
                    <div class="py-0.5 rounded relative">5</div>
                    <div
                      class="py-0.5 bg-theme-18 dark:bg-theme-9 rounded relative"
                    >
                      6
                    </div>
                    <div class="py-0.5 rounded relative">7</div>
                    <div
                      class="py-0.5 bg-theme-1 dark:bg-theme-1 text-white rounded relative"
                    >
                      8
                    </div>
                    <div class="py-0.5 rounded relative">9</div>
                    <div class="py-0.5 rounded relative">10</div>
                    <div class="py-0.5 rounded relative">11</div>
                    <div class="py-0.5 rounded relative">12</div>
                    <div class="py-0.5 rounded relative">13</div>
                    <div class="py-0.5 rounded relative">14</div>
                    <div class="py-0.5 rounded relative">15</div>
                    <div class="py-0.5 rounded relative">16</div>
                    <div class="py-0.5 rounded relative">17</div>
                    <div class="py-0.5 rounded relative">18</div>
                    <div class="py-0.5 rounded relative">19</div>
                    <div class="py-0.5 rounded relative">20</div>
                    <div class="py-0.5 rounded relative">21</div>
                    <div class="py-0.5 rounded relative">22</div>
                    <div
                      class="py-0.5 bg-theme-17 dark:bg-theme-11 rounded relative"
                    >
                      23
                    </div>
                    <div class="py-0.5 rounded relative">24</div>
                    <div class="py-0.5 rounded relative">25</div>
                    <div class="py-0.5 rounded relative">26</div>
                    <div
                      class="py-0.5 bg-theme-14 dark:bg-theme-12 rounded relative"
                    >
                      27
                    </div>
                    <div class="py-0.5 rounded relative">28</div>
                    <div class="py-0.5 rounded relative">29</div>
                    <div class="py-0.5 rounded relative">30</div>
                    <div class="py-0.5 rounded relative text-gray-600">1</div>
                    <div class="py-0.5 rounded relative text-gray-600">2</div>
                    <div class="py-0.5 rounded relative text-gray-600">3</div>
                    <div class="py-0.5 rounded relative text-gray-600">4</div>
                    <div class="py-0.5 rounded relative text-gray-600">5</div>
                    <div class="py-0.5 rounded relative text-gray-600">6</div>
                    <div class="py-0.5 rounded relative text-gray-600">7</div>
                    <div class="py-0.5 rounded relative text-gray-600">8</div>
                    <div class="py-0.5 rounded relative text-gray-600">9</div>
                  </div>
                </div>
                <div class="border-t border-gray-200 p-5">
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                    <span class="truncate">UI/UX Workshop</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">23th</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div
                      class="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"
                    ></div>
                    <span class="truncate">VueJs Frontend Development</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">10th</span>
                  </div>
                  <div class="flex items-center mt-4">
                    <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                    <span class="truncate">Laravel Rest API</span>
                    <div
                      class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"
                    ></div>
                    <span class="font-medium xl:ml-auto">31th</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Schedules -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from "vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
import ReportBarChart from "@/components/report-bar-chart/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";

export default defineComponent({
  components: {
    ReportDonutChart,
    ReportBarChart,
    ReportMap
  },
  setup() {
    const importantNotesRef = ref();

    provide("bind[importantNotesRef]", el => {
      importantNotesRef.value = el;
    });

    const prevImportantNotes = () => {
      const el = importantNotesRef.value;
      el.tns.goTo("prev");
    };
    const nextImportantNotes = () => {
      const el = importantNotesRef.value;
      el.tns.goTo("next");
    };

    return {
      prevImportantNotes,
      nextImportantNotes
    };
  }
});
</script>
