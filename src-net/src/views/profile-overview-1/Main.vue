<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Profile Layout</h2>
    </div>
    <!-- BEGIN: Profile Info -->
    <div class="intro-y box px-5 pt-5 mt-5">
      <div
        class="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5"
      >
        <div
          class="flex flex-1 px-5 items-center justify-center lg:justify-start"
        >
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
          >
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="rounded-full"
              :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
            />
            <div
              class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-2"
            >
              <CameraIcon class="w-4 h-4 text-white" />
            </div>
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
            >
              {{ $f()[0].users[0].name }}
            </div>
            <div class="text-gray-600">{{ $f()[0].jobs[0] }}</div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-3">
            Contact Details
          </div>
          <div
            class="flex flex-col justify-center items-center lg:items-start mt-4"
          >
            <div class="truncate sm:whitespace-normal flex items-center">
              <MailIcon class="w-4 h-4 mr-2" />
              {{ $f()[0].users[0].email }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <InstagramIcon class="w-4 h-4 mr-2" /> Instagram
              {{ $f()[0].users[0].name }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <TwitterIcon class="w-4 h-4 mr-2" /> Twitter
              {{ $f()[0].users[0].name }}
            </div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-5">
            Sales Growth
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="mr-2 w-20 flex">
              USP: <span class="ml-3 font-medium text-theme-9">+23%</span>
            </div>
            <div class="w-3/4 overflow-auto">
              <SimpleLineChart1 :height="50" />
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start">
            <div class="mr-2 w-20 flex">
              STP: <span class="ml-3 font-medium text-theme-6">-2%</span>
            </div>
            <div class="w-3/4 overflow-auto">
              <SimpleLineChart2 :height="50" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start"
        role="tablist"
      >
        <a
          id="dashboard-tab"
          data-toggle="tab"
          data-target="#dashboard"
          href="javascript:;"
          class="py-4 sm:mr-8 active"
          role="tab"
          aria-controls="dashboard"
          aria-selected="true"
          >Dashboard</a
        >
        <a
          id="account-and-profile-tab"
          data-toggle="tab"
          data-target="#account-and-profile"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false"
          >Account & Profile</a
        >
        <a
          id="activities-tab"
          data-toggle="tab"
          data-target="#activities"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false"
          >Activities</a
        >
        <a
          id="tasks-tab"
          data-toggle="tab"
          data-target="#tasks"
          href="javascript:;"
          class="py-4 sm:mr-8"
          role="tab"
          aria-selected="false"
          >Tasks</a
        >
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="intro-y tab-content mt-5">
      <div
        id="dashboard"
        class="tab-pane active"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Top Categories -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Top Categories</h2>
              <div class="dropdown ml-auto">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="dropdown-menu w-40">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <PlusIcon class="w-4 h-4 mr-2" /> Add Category
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
            <div class="p-5">
              <div class="flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a href="" class="font-medium">Wordpress Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="50" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">6.5k</div>
                    <div class="bg-theme-18 text-theme-9 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-5">
                <div class="mr-auto">
                  <a href="" class="font-medium">Bootstrap HTML Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="50" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">2.5k</div>
                    <div class="bg-theme-17 text-theme-11 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-5">
                <div class="mr-auto">
                  <a href="" class="font-medium">Tailwind HTML Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="50" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">3.4k</div>
                    <div class="bg-theme-14 text-theme-10 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Top Categories -->
          <!-- BEGIN: Work In Progress -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Work In Progress</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      id="work-in-progress-new-tab"
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#work-in-progress-new"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      role="tab"
                      aria-controls="work-in-progress-new"
                      aria-selected="true"
                      >New</a
                    >
                    <a
                      id="work-in-progress-last-week-tab"
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#work-in-progress-last-week"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      role="tab"
                      aria-selected="false"
                      >Last Week</a
                    >
                  </div>
                </div>
              </div>
              <div class="nav nav-tabs ml-auto hidden sm:flex" role="tablist">
                <a
                  id="work-in-progress-mobile-new-tab"
                  data-toggle="tab"
                  data-target="#work-in-progress-new"
                  href="javascript:;"
                  class="py-5 ml-6 active"
                  role="tab"
                  aria-selected="true"
                  >New</a
                >
                <a
                  id="week-work-in-progress-mobile-last-week-tab"
                  data-toggle="tab"
                  data-target="#work-in-progress-last-week"
                  href="javascript:;"
                  class="py-5 ml-6"
                  role="tab"
                  aria-selected="false"
                  >Last Week</a
                >
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div
                  id="work-in-progress-new"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="work-in-progress-new-tab"
                >
                  <div>
                    <div class="flex">
                      <div class="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/2 bg-theme-1"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Completed Tasks</div>
                      <div>2 / 20</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-1/4 bg-theme-1"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Tasks In Progress</div>
                      <div>42</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-3/4 bg-theme-1"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <a href="" class="btn btn-secondary block w-40 mx-auto mt-5"
                    >View More Details</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- END: Work In Progress -->
          <!-- BEGIN: Daily Sales -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Daily Sales</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="dropdown-menu w-40">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <FileIcon class="w-4 h-4 mr-2" /> Download Excel
                    </a>
                  </div>
                </div>
              </div>
              <button class="btn btn-outline-secondary hidden sm:flex">
                <FileIcon class="w-4 h-4 mr-2" /> Download Excel
              </button>
            </div>
            <div class="p-5">
              <div class="relative flex items-center">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Icewall Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[0].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Bootstrap 4 HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$19
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Icewall Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[1].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[1].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Tailwind HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$25
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Icewall Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[2].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[2].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Vuejs HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$21
                </div>
              </div>
            </div>
          </div>
          <!-- END: Daily Sales -->
          <!-- BEGIN: Latest Tasks -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Latest Tasks</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="nav nav-tabs dropdown-menu w-40" role="tablist">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      id="latest-tasks-new-tab"
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#latest-tasks-new"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      role="tab"
                      aria-controls="latest-tasks-new"
                      aria-selected="true"
                      >New</a
                    >
                    <a
                      id="latest-tasks-last-week-tab"
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#latest-tasks-last-week"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      role="tab"
                      aria-selected="false"
                      >Last Week</a
                    >
                  </div>
                </div>
              </div>
              <div class="nav nav-tabs ml-auto hidden sm:flex" role="tablist">
                <a
                  id="latest-tasks-mobile-new-tab"
                  data-toggle="tab"
                  data-target="#latest-tasks-new"
                  href="javascript:;"
                  class="py-5 ml-6 active"
                  role="tab"
                  aria-selected="true"
                  >New</a
                >
                <a
                  id="latest-tasks-mobile-last-week-tab"
                  data-toggle="tab"
                  data-target="#latest-tasks-last-week"
                  href="javascript:;"
                  class="py-5 ml-6"
                  role="tab"
                  aria-selected="false"
                  >Last Week</a
                >
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div
                  id="latest-tasks-new"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="latest-tasks-new-tab"
                >
                  <div class="flex items-center">
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
                      <a href="" class="font-medium">Create New Campaign</a>
                      <div class="text-gray-600">10:00 AM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
                      <a href="" class="font-medium">Meeting With Client</a>
                      <div class="text-gray-600">02:00 PM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
                      <a href="" class="font-medium">Create New Repository</a>
                      <div class="text-gray-600">04:00 PM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Latest Tasks -->
          <!-- BEGIN: General Statistic -->
          <div class="intro-y box col-span-12">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">General Statistics</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="dropdown-menu w-40">
                  <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <FileIcon class="w-4 h-4 mr-2" /> Download XML
                    </a>
                  </div>
                </div>
              </div>
              <button class="btn btn-outline-secondary hidden sm:flex">
                <FileIcon class="w-4 h-4 mr-2" /> Download XML
              </button>
            </div>
            <div class="grid grid-cols-1 xxl:grid-cols-7 gap-6 p-5">
              <div class="xxl:col-span-2">
                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5"
                  >
                    <div class="font-medium">Net Worth</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-9">+23%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5"
                  >
                    <div class="font-medium">Sales</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-6">-5%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5"
                  >
                    <div class="font-medium">Profit</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-6">-10%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-5 p-5"
                  >
                    <div class="font-medium">Products</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-9">+55%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xxl:col-span-5 w-full">
                <div class="flex justify-center mt-8">
                  <div class="flex items-center mr-5">
                    <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                    <span>Product Profit</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>Author Sales</span>
                  </div>
                </div>
                <div class="report-chart mt-8">
                  <StackedBarChart1 :height="130" />
                </div>
              </div>
            </div>
          </div>
          <!-- END: General Statistic -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import StackedBarChart1 from "@/components/stacked-bar-chart-1/Main.vue";
import SimpleLineChart from "@/components/simple-line-chart/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import SimpleLineChart2 from "@/components/simple-line-chart-2/Main.vue";

export default defineComponent({
  components: {
    StackedBarChart1,
    SimpleLineChart,
    SimpleLineChart1,
    SimpleLineChart2
  }
});
</script>
