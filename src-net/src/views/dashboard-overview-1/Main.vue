<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 xxl:col-span-9">
            <div class="grid grid-cols-12 gap-6">
                <!-- BEGIN: General Report -->
                <div class="col-span-12 mt-8">
                    <div class="intro-y flex items-center h-10">
                        <h2 class="text-lg font-medium truncate mr-5">Your Stats</h2>
                        <a
                            href=""
                            class="ml-auto flex items-center text-theme-1 dark:text-theme-10"
                        >
                            <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload
                        </a>
                    </div>
                    <div class="grid grid-cols-12 gap-6 mt-5">
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <FileTextIcon class="report-box__icon text-theme-10" />
                                        <div class="ml-auto">

                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6">24</div>
                                    <div class="text-base text-gray-600 mt-1">Total Notes</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <LockIcon class="report-box__icon text-theme-11" />
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6">3</div>
                                    <div class="text-base text-gray-600 mt-1">Encrypted Notes</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <GlobeIcon class="report-box__icon text-theme-12" />
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6">2</div>
                                    <div class="text-base text-gray-600 mt-1">Public Notes</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <div class="report-box zoom-in">
                                <div class="box p-5">
                                    <div class="flex">
                                        <UserIcon class="report-box__icon text-theme-9" />
                                        <div class="ml-auto">
                                        </div>
                                    </div>
                                    <div class="text-3xl font-bold leading-8 mt-6">152</div>
                                    <div class="text-base text-gray-600 mt-1">All Public Views</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: General Report -->
                <!-- BEGIN: Sales Report -->
                <div class="col-span-12 lg:col-span-6 mt-8">
                    <div class="intro-y block sm:flex items-center h-10">
                        <h2 class="text-lg font-medium truncate mr-5">Retention Rate</h2>
                        <div class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                            <CalendarIcon class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                            <Litepicker
                                v-model="salesReportFilter"
                                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true
                  }
                }"
                                class="form-control sm:w-56 box pl-10"
                            />
                        </div>
                    </div>
                    <div class="intro-y box p-5 mt-12 sm:mt-5">
                        <div class="flex flex-col xl:flex-row xl:items-center">
                            <div class="flex">
                                <div>
                                    <div class="text-theme-19 dark:text-gray-300 text-lg xl:text-xl font-bold">
                                        84%
                                    </div>
                                    <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                                        This Month
                                    </div>
                                </div>
                                <div class="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-6"></div>
                                <div>
                                    <div class="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium">
                                        72%
                                    </div>
                                    <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                                        Last Month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="report-chart">
                            <ReportLineChart
                                :height="169"
                                class="mt-6"
                            />
                        </div>
                    </div>
                </div>
                <!-- END: Sales Report -->
                <!-- BEGIN: Weekly Top Seller -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                    <div class="intro-y flex flex-col h-12">
                        <h2 class="text-lg font-medium truncate mr-5">Groups Retention Rate</h2>
                        <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                            This Month
                        </div>
                    </div>
                    <div class="intro-y box p-5 mt-5">
                        <ReportPieChart
                            :height="300"
                            class="mt-3"
                        />
                        <div class="mt-8">
                            <div class="flex items-center">
                                <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                <span class="truncate">Mathematics</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">62%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                <span class="truncate">Algorithms</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">33%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                <span class="truncate">Database Design</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Weekly Top Seller -->
                <!-- BEGIN: Weekly Top Seller -->
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                    <div class="intro-y flex flex-col h-12">
                        <h2 class="text-lg font-medium truncate mr-5">Groups Retention Rate</h2>
                        <div class="mt-0.5 text-gray-600 dark:text-gray-600">
                            Last Month
                        </div>
                    </div>
                    <div class="intro-y box p-5 mt-5">
                        <ReportPieChart
                            :height="300"
                            class="mt-3"
                        />
                        <div class="mt-8">
                            <div class="flex items-center">
                                <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                <span class="truncate">Mathematics</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">62%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                                <span class="truncate">Algorithms</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">33%</span>
                            </div>
                            <div class="flex items-center mt-4">
                                <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                <span class="truncate">Database Design</span>
                                <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                <span class="font-medium xl:ml-auto">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Weekly Top Seller -->

                <!-- BEGIN: Weekly Best Sellers -->
                <!-- <div class="col-span-12 xl:col-span-4 mt-6">
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
                                <div class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
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
                                <div class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">
                                    137 Sales
                                </div>
                            </div>
                        </div>
                        <a
                            href=""
                            class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
                        >View More</a>
                    </div> -->
                <!-- </div> -->
                <!-- END: Weekly Best Sellers -->
                <!-- BEGIN: General Report -->
                <!-- <div class="col-span-12 grid grid-cols-12 gap-6 mt-8">
                    <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                        <div class="box p-5 zoom-in">
                            <div class="flex items-center">
                                <div class="w-2/4 flex-none">
                                    <div class="text-lg font-medium truncate">Target Sales</div>
                                    <div class="text-gray-600 mt-1">300 Sales</div>
                                </div>
                                <div class="flex-none ml-auto relative">
                                    <ReportDonutChart1
                                        :width="90"
                                        :height="90"
                                    />
                                    <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                                        20%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                        <div class="box p-5 zoom-in">
                            <div class="flex">
                                <div class="text-lg font-medium truncate mr-3">
                                    Social Media
                                </div>
                                <div class="py-1 px-2 rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">
                                    320 Followers
                                </div>
                            </div>
                            <div class="mt-4">
                                <SimpleLineChart1
                                    :height="60"
                                    class="-ml-1"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                        <div class="box p-5 zoom-in">
                            <div class="flex items-center">
                                <div class="w-2/4 flex-none">
                                    <div class="text-lg font-medium truncate">New Products</div>
                                    <div class="text-gray-600 mt-1">1450 Products</div>
                                </div>
                                <div class="flex-none ml-auto relative">
                                    <ReportDonutChart1
                                        :width="90"
                                        :height="90"
                                    />
                                    <div class="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                                        45%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                        <div class="box p-5 zoom-in">
                            <div class="flex">
                                <div class="text-lg font-medium truncate mr-3">Posted Ads</div>
                                <div class="py-1 px-2 rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer ml-auto truncate">
                                    180 Campaign
                                </div>
                            </div>
                            <div class="mt-4">
                                <SimpleLineChart1
                                    :height="60"
                                    class="-ml-1"
                                />
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- END: General Report -->
                <!-- BEGIN: Weekly Top Products -->
                <!-- <div class="col-span-12 mt-6">
                    <div class="intro-y block sm:flex items-center h-10">
                        <h2 class="text-lg font-medium truncate mr-5">
                            Weekly Top Products
                        </h2>
                        <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
                            <button class="btn box flex items-center text-gray-700 dark:text-gray-300">
                                <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                                Export to Excel
                            </button>
                            <button class="ml-3 btn box flex items-center text-gray-700 dark:text-gray-300">
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
                                        <a
                                            href=""
                                            class="font-medium whitespace-nowrap"
                                        >{{
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
                                            <a
                                                class="flex items-center mr-3"
                                                href=""
                                            >
                                                <CheckSquareIcon class="w-4 h-4 mr-1" />
                                                Edit
                                            </a>
                                            <a
                                                class="flex items-center text-theme-6"
                                                href=""
                                            >
                                                <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                        <ul class="pagination">
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >
                                    <ChevronsLeftIcon class="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >
                                    <ChevronLeftIcon class="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >...</a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >1</a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link pagination__link--active"
                                    href=""
                                >2</a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >3</a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >...</a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >
                                    <ChevronRightIcon class="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a
                                    class="pagination__link"
                                    href=""
                                >
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
                </div> -->
                <!-- END: Weekly Top Products -->
            </div>
        </div>
        <div class="col-span-12 xxl:col-span-3">
            <div class="xxl:border-l border-theme-5 -mb-10 pb-10">
                <div class="xxl:pl-6 grid grid-cols-12 gap-6">
                    <!-- BEGIN: Transactions -->
                    <!-- <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3 xxl:mt-8">
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
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
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
                                    <div :class="{
                      'text-theme-9': faker.trueFalse[0],
                      'text-theme-6': !faker.trueFalse[0]
                    }">
                                        {{ faker.trueFalse[0] ? "+" : "-" }}${{ faker.totals[0] }}
                                    </div>
                                </div>
                            </div>
                            <a
                                href=""
                                class="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
                            >View More</a>
                        </div>
                    </div> -->
                    <!-- END: Transactions -->
                    <!-- BEGIN: Recent Activities -->
                    <!-- <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                        <div class="intro-x flex items-center h-10">
                            <h2 class="text-lg font-medium truncate mr-5">
                                Recent Activities
                            </h2>
                            <a
                                href=""
                                class="ml-auto text-theme-1 dark:text-theme-10 truncate"
                            >Show More</a>
                        </div>
                        <div class="report-timeline mt-5 relative">
                            <div class="intro-x relative flex items-center mb-3">
                                <div class="report-timeline__image">
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
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
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
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
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
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
                                        <a
                                            class="text-theme-1 dark:text-theme-10"
                                            href=""
                                        >{{
                      $f()[7].products[0].name
                    }}</a>
                                        price and description
                                    </div>
                                </div>
                            </div>
                            <div class="intro-x relative flex items-center mb-3">
                                <div class="report-timeline__image">
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
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
                                        <a
                                            class="text-theme-1 dark:text-theme-10"
                                            href=""
                                        >{{
                      $f()[6].products[0].name
                    }}</a>
                                        description
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- END: Recent Activities -->
                    <!-- BEGIN: Important Notes -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
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
                                            <button
                                                type="button"
                                                class="btn btn-secondary py-1 px-2"
                                            >
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
                                            <button
                                                type="button"
                                                class="btn btn-secondary py-1 px-2"
                                            >
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
                                            <button
                                                type="button"
                                                class="btn btn-secondary py-1 px-2"
                                            >
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
                    <!-- BEGIN: Schedules -->
                    <div class="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3">
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
                                        <i
                                            data-feather="chevron-left"
                                            class="w-5 h-5 text-gray-600"
                                        ></i>
                                        <div class="font-medium text-base mx-auto">April</div>
                                        <i
                                            data-feather="chevron-right"
                                            class="w-5 h-5 text-gray-600"
                                        ></i>
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
                                        <div class="py-0.5 bg-theme-18 dark:bg-theme-9 rounded relative">
                                            6
                                        </div>
                                        <div class="py-0.5 rounded relative">7</div>
                                        <div class="py-0.5 bg-theme-1 dark:bg-theme-1 text-white rounded relative">
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
                                        <div class="py-0.5 bg-theme-17 dark:bg-theme-11 rounded relative">
                                            23
                                        </div>
                                        <div class="py-0.5 rounded relative">24</div>
                                        <div class="py-0.5 rounded relative">25</div>
                                        <div class="py-0.5 rounded relative">26</div>
                                        <div class="py-0.5 bg-theme-14 dark:bg-theme-12 rounded relative">
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
                                <div class="border-t border-gray-200 dark:border-dark-5 p-5">
                                    <div class="flex items-center">
                                        <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                                        <span class="truncate">UI/UX Workshop</span>
                                        <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span class="font-medium xl:ml-auto">23th</span>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <div class="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full mr-3"></div>
                                        <span class="truncate">VueJs Frontend Development</span>
                                        <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
                                        <span class="font-medium xl:ml-auto">10th</span>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
                                        <span class="truncate">Laravel Rest API</span>
                                        <div class="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden"></div>
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
import ReportLineChart from "@/components/report-line-chart/Main.vue";
import ReportDonutChart from "@/components/report-donut-chart/Main.vue";
import ReportPieChart from "@/components/report-pie-chart/Main.vue";
import ReportMap from "@/components/report-map/Main.vue";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";

export default defineComponent({
    components: {
        ReportLineChart,
        ReportDonutChart,
        ReportPieChart,
        ReportMap,
        ReportDonutChart1,
        SimpleLineChart1
    },
    setup() {
        const salesReportFilter = ref();
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
            salesReportFilter,
            prevImportantNotes,
            nextImportantNotes
        };
    }
});
</script>
