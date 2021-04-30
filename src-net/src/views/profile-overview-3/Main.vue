<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Profile Layout</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5 lg:mt-0">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">
                {{ $f()[0].users[0].name }}
              </div>
              <div class="text-gray-600">{{ $f()[0].jobs[0] }}</div>
            </div>
            <div class="dropdown">
              <a
                class="dropdown-toggle w-5 h-5 block"
                href="javascript:;"
                aria-expanded="false"
              >
                <MoreHorizontalIcon
                  class="w-5 h-5 text-gray-600 dark:text-gray-300"
                />
              </a>
              <div class="dropdown-menu w-56">
                <div class="dropdown-menu__content box dark:bg-dark-1">
                  <div
                    class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                  >
                    Export Options
                  </div>
                  <div class="p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <ActivityIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <BoxIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                      <div
                        class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                      >
                        10
                      </div>
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <LayoutIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      English
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <SidebarIcon
                        class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                      />
                      Indonesia
                    </a>
                  </div>
                  <div
                    class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                  >
                    <button type="button" class="btn btn-primary py-1 px-2">
                      Settings
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary py-1 px-2 ml-auto"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a
              class="flex items-center text-theme-1 dark:text-theme-10 font-medium"
              href=""
            >
              <ActivityIcon class="w-4 h-4 mr-2" /> Personal Information
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" /> Account Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" /> Change Password
            </a>
            <a class="flex items-center mt-5" href="">
              <SettingsIcon class="w-4 h-4 mr-2" /> User Settings
            </a>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a class="flex items-center" href="">
              <ActivityIcon class="w-4 h-4 mr-2" /> Email Settings
            </a>
            <a class="flex items-center mt-5" href="">
              <BoxIcon class="w-4 h-4 mr-2" /> Saved Credit Cards
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" /> Social Networks
            </a>
            <a class="flex items-center mt-5" href="">
              <LockIcon class="w-4 h-4 mr-2" /> Social Networks
            </a>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5 flex">
            <button type="button" class="btn btn-primary py-1 px-2">
              New Group
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary py-1 px-2 ml-auto"
            >
              New Quick Link
            </button>
          </div>
        </div>
        <div class="intro-y box p-5 bg-theme-1 text-white mt-5">
          <div class="flex items-center">
            <div class="font-medium text-lg">Important Update</div>
            <div
              class="text-xs bg-white dark:bg-theme-1 dark:text-white text-gray-800 px-1 rounded-md ml-auto"
            >
              New
            </div>
          </div>
          <div class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div class="font-medium flex mt-5">
            <button
              type="button"
              class="btn py-1 px-2 border-white text-white dark:border-gray-700 dark:text-gray-300"
            >
              Take Action
            </button>
            <button
              type="button"
              class="btn py-1 px-2 border-transparent text-white dark:text-gray-500 ml-auto"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Daily Sales -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
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
                <div class="font-medium text-gray-700 dark:text-gray-500">
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
                <div class="font-medium text-gray-700 dark:text-gray-500">
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
                <div class="font-medium text-gray-700 dark:text-gray-500">
                  +$21
                </div>
              </div>
            </div>
          </div>
          <!-- END: Daily Sales -->
          <!-- BEGIN: Announcement -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
            <div
              class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Announcement</h2>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                @click="prevAnnouncement"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2"
                @click="nextAnnouncement"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <TinySlider ref-key="announcementRef" class="py-5">
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. <br /><br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry since the 1500s.
                </div>
                <div class="flex items-center mt-5">
                  <div
                    class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                  >
                    02 June 2021
                  </div>
                  <button class="btn btn-secondary ml-auto">
                    View Details
                  </button>
                </div>
              </div>
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. <br /><br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry since the 1500s.
                </div>
                <div class="flex items-center mt-5">
                  <div
                    class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                  >
                    02 June 2021
                  </div>
                  <button class="btn btn-secondary ml-auto">
                    View Details
                  </button>
                </div>
              </div>
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever. <br /><br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry since the 1500s.
                </div>
                <div class="flex items-center mt-5">
                  <div
                    class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium"
                  >
                    02 June 2021
                  </div>
                  <button class="btn btn-secondary ml-auto">
                    View Details
                  </button>
                </div>
              </div>
            </TinySlider>
          </div>
          <!-- END: Announcement -->
          <!-- BEGIN: Projects -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
            <div
              class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Projects</h2>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                @click="prevNewProjects"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2"
                @click="nextNewProjects"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <TinySlider ref-key="newProjectsRef" class="py-5">
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <div class="mt-5">
                  <div class="flex text-gray-600">
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
              </div>
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <div class="mt-5">
                  <div class="flex text-gray-600">
                    <div class="mr-auto">Pending Tasks</div>
                    <div>20%</div>
                  </div>
                  <div
                    class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                  >
                    <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="px-5">
                <div class="font-medium text-lg">Rubick Admin Template</div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <div class="mt-5">
                  <div class="flex text-gray-600">
                    <div class="mr-auto">Pending Tasks</div>
                    <div>20%</div>
                  </div>
                  <div
                    class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                  >
                    <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                  </div>
                </div>
              </div>
            </TinySlider>
          </div>
          <!-- END: Projects -->
          <!-- BEGIN: Today Schedules -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
            <div
              class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Today Schedules</h2>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                @click="prevTodaySchedules"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                class="tiny-slider-navigator btn btn-outline-secondary px-2"
                @click="nextTodaySchedules"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <TinySlider ref-key="todaySchedulesRef" class="py-5">
              <div class="px-5 text-center sm:text-left">
                <div class="font-medium text-lg">
                  Developing rest API with Laravel 7
                </div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
                <div class="mt-2">11:15AM - 12:30PM</div>
                <div class="flex flex-col sm:flex-row items-center mt-5">
                  <div class="flex items-center text-gray-600">
                    <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                    1396 Pooh Bear Lane, New Market
                  </div>
                  <button
                    class="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0"
                  >
                    View On Map
                  </button>
                </div>
              </div>
              <div class="px-5 text-center sm:text-left">
                <div class="font-medium text-lg">
                  Developing rest API with Laravel 7
                </div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
                <div class="mt-2">11:15AM - 12:30PM</div>
                <div class="flex flex-col sm:flex-row items-center mt-5">
                  <div class="flex items-center text-gray-600">
                    <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                    1396 Pooh Bear Lane, New Market
                  </div>
                  <button
                    class="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0"
                  >
                    View On Map
                  </button>
                </div>
              </div>
              <div class="px-5 text-center sm:text-left">
                <div class="font-medium text-lg">
                  Developing rest API with Laravel 7
                </div>
                <div class="text-gray-700 dark:text-gray-600 mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </div>
                <div class="mt-2">11:15AM - 12:30PM</div>
                <div class="flex flex-col sm:flex-row items-center mt-5">
                  <div class="flex items-center text-gray-600">
                    <MapPinIcon class="hidden sm:block w-4 h-4 mr-2" />
                    1396 Pooh Bear Lane, New Market
                  </div>
                  <button
                    class="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0"
                  >
                    View On Map
                  </button>
                </div>
              </div>
            </TinySlider>
          </div>
          <!-- END: Today Schedules -->
          <!-- BEGIN: Top Products -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
            <div
              class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Top Products</h2>
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
                      <Edit2Icon class="w-4 h-4 mr-2" /> New Chat
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <TrashIcon class="w-4 h-4 mr-2" /> Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5">
              <div
                class="boxed-tabs nav nav-tabs flex-col justify-center sm:flex-row text-gray-700 dark:text-gray-300"
                role="tablist"
              >
                <a
                  id="top-products-laravel-tab"
                  data-toggle="tab"
                  data-target="#laravel"
                  href="javascript:;"
                  class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2 active"
                  role="tab"
                  aria-selected="true"
                >
                  <BoxIcon class="block w-6 h-6 mb-2 mx-auto" /> Laravel
                </a>
                <a
                  id="top-products-symfony-tab"
                  data-toggle="tab"
                  data-target="#symfony"
                  href="javascript:;"
                  class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2"
                  role="tab"
                  aria-selected="false"
                >
                  <InboxIcon class="block w-6 h-6 mb-2 mx-auto" />
                  Symfony
                </a>
                <a
                  id="top-products-bootstrap-tab"
                  data-toggle="tab"
                  data-target="#bootstrap"
                  href="javascript:;"
                  class="w-full sm:w-20 mb-2 sm:mb-0 py-2 rounded-md box dark:bg-dark-5 text-center sm:mx-2"
                  role="tab"
                  aria-selected="false"
                >
                  <ActivityIcon class="block w-6 h-6 mb-2 mx-auto" />
                  Bootstrap
                </a>
              </div>
              <div class="tab-content mt-8">
                <div
                  id="laravel"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="top-products-laravel-tab"
                >
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="mr-auto">
                      <a href="" class="font-medium">Wordpress Template</a>
                      <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                    </div>
                    <div
                      class="w-full sm:w-auto flex items-center mt-3 sm:mt-0"
                    >
                      <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                        +20%
                      </div>
                      <div class="progress h-1 mt-2 sm:w-40">
                        <div
                          class="progress-bar w-1/2 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row items-center mt-5">
                    <div class="mr-auto">
                      <a href="" class="font-medium">Laravel Template</a>
                      <div class="text-gray-600 mt-1">PHP, Mysql</div>
                    </div>
                    <div
                      class="w-full sm:w-auto flex items-center mt-3 sm:mt-0"
                    >
                      <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                        +55%
                      </div>
                      <div class="progress h-1 mt-2 sm:w-40">
                        <div
                          class="progress-bar w-2/3 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row items-center mt-5">
                    <div class="mr-auto">
                      <a href="" class="font-medium">Tailwind HTML Template</a>
                      <div class="text-gray-600 mt-1">HTML, CSS, JS</div>
                    </div>
                    <div
                      class="w-full sm:w-auto flex items-center mt-3 sm:mt-0"
                    >
                      <div class="bg-theme-18 text-theme-9 rounded px-2 mr-5">
                        +40%
                      </div>
                      <div class="progress h-1 mt-2 sm:w-40">
                        <div
                          class="progress-bar w-3/4 bg-theme-1"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Top Products -->
          <!-- BEGIN: Work In Progress -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
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
                  data-toggle="tab"
                  data-target="#work-in-progress-new"
                  href="javascript:;"
                  class="py-5 ml-6 active"
                  role="tab"
                  aria-selected="true"
                  >New</a
                >
                <a
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
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Tasks In Review</div>
                      <div>70%</div>
                    </div>
                    <div class="progress h-1 mt-2">
                      <div
                        class="progress-bar w-4/5 bg-theme-1"
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
          <!-- BEGIN: Latest Tasks -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
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
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Create New Campaign</a>
                      <div class="text-gray-600">10:00 AM</div>
                    </div>
                    <input
                      class="form-check-switch ml-auto"
                      type="checkbox"
                      checked
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Meeting With Client</a>
                      <div class="text-gray-600">02:00 PM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Create New Repository</a>
                      <div class="text-gray-600">04:00 PM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Meeting With Client</a>
                      <div class="text-gray-600">10:00 AM</div>
                    </div>
                    <input
                      class="form-check-switch ml-auto"
                      type="checkbox"
                      checked
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Create New Repository</a>
                      <div class="text-gray-600">11:00 PM</div>
                    </div>
                    <input class="form-check-switch ml-auto" type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Latest Tasks -->
          <!-- BEGIN: General Statistics -->
          <div class="intro-y box col-span-12 xxl:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">General Statistics</h2>
              <div class="dropdown ml-auto">
                <a
                  class="dropdown-toggle w-5 h-5 block sm:hidden"
                  href="javascript:;"
                  aria-expanded="false"
                >
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <button
                  class="dropdown-toggle btn btn-outline-secondary font-normal hidden sm:flex"
                  aria-expanded="false"
                >
                  Export <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-menu w-40">
                  <div class="dropdown-menu__content box dark:bg-dark-1">
                    <div
                      class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                    >
                      Export Tools
                    </div>
                    <div class="p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <PrinterIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Print
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <ExternalLinkIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Excel
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FileTextIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        CSV
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <ArchiveIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex flex-wrap sm:flex-nowrap mr-auto">
                  <div class="flex items-center mr-5 mb-1 sm:mb-0">
                    <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
                    <span>Author Sales</span>
                  </div>
                  <div class="flex items-center mr-5 mb-1 sm:mb-0">
                    <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                    <span>Product Profit</span>
                  </div>
                </div>
                <div class="dropdown mt-3 sm:mt-0 mr-auto sm:mr-0">
                  <button
                    class="dropdown-toggle btn btn-outline-secondary font-normal"
                    aria-expanded="false"
                  >
                    Filter by Month
                    <ChevronDownIcon class="w-4 h-4 ml-2" />
                  </button>
                  <div class="dropdown-menu w-40">
                    <div
                      class="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                    >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >January</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >February</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >March</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >June</a
                      >
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                        >July</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="report-chart mt-8">
                <ReportLineChart :height="130" />
              </div>
            </div>
          </div>
          <!-- END: General Statistics -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from "vue";
import ReportLineChart from "@/components/report-line-chart/Main.vue";

export default defineComponent({
  components: {
    ReportLineChart
  },
  setup() {
    const announcementRef = ref();
    const newProjectsRef = ref();
    const todaySchedulesRef = ref();

    provide("bind[announcementRef]", el => {
      announcementRef.value = el;
    });

    provide("bind[newProjectsRef]", el => {
      newProjectsRef.value = el;
    });

    provide("bind[todaySchedulesRef]", el => {
      todaySchedulesRef.value = el;
    });

    const prevAnnouncement = () => {
      const el = announcementRef.value;
      el.tns.goTo("prev");
    };
    const nextAnnouncement = () => {
      const el = announcementRef.value;
      el.tns.goTo("next");
    };
    const prevNewProjects = () => {
      const el = newProjectsRef.value;
      el.tns.goTo("prev");
    };
    const nextNewProjects = () => {
      const el = newProjectsRef.value;
      el.tns.goTo("next");
    };
    const prevTodaySchedules = () => {
      const el = todaySchedulesRef.value;
      el.tns.goTo("prev");
    };
    const nextTodaySchedules = () => {
      const el = todaySchedulesRef.value;
      el.tns.goTo("next");
    };

    return {
      prevAnnouncement,
      nextAnnouncement,
      prevNewProjects,
      nextNewProjects,
      prevTodaySchedules,
      nextTodaySchedules
    };
  }
});
</script>
