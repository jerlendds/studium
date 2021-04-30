<template>
  <div class="grid grid-cols-12 gap-6 mt-8">
    <div class="col-span-12 lg:col-span-3 xxl:col-span-2">
      <h2 class="intro-y text-lg font-medium mr-auto mt-2">Inbox</h2>
      <!-- BEGIN: Inbox Menu -->
      <div class="intro-y box bg-theme-1 p-5 mt-6">
        <button
          type="button"
          class="btn text-gray-700 dark:text-gray-300 w-full bg-white dark:bg-theme-1 mt-1"
        >
          <Edit3Icon class="w-4 h-4 mr-2" /> Compose
        </button>
        <div
          class="border-t border-theme-3 dark:border-dark-5 mt-6 pt-6 text-white"
        >
          <a
            href=""
            class="flex items-center px-3 py-2 rounded-md bg-theme-20 dark:bg-dark-1 font-medium"
          >
            <MailIcon class="w-4 h-4 mr-2" /> Inbox
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <StarIcon class="w-4 h-4 mr-2" /> Marked
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <InboxIcon class="w-4 h-4 mr-2" /> Draft
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <SendIcon class="w-4 h-4 mr-2" /> Sent
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <TrashIcon class="w-4 h-4 mr-2" /> Trash
          </a>
        </div>
        <div
          class="border-t border-theme-3 dark:border-dark-5 mt-4 pt-4 text-white"
        >
          <a href="" class="flex items-center px-3 py-2 truncate">
            <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
            Custom Work
          </a>
          <a
            href=""
            class="flex items-center px-3 py-2 mt-2 rounded-md truncate"
          >
            <div class="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
            Important Meetings
          </a>
          <a
            href=""
            class="flex items-center px-3 py-2 mt-2 rounded-md truncate"
          >
            <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
            Work
          </a>
          <a
            href=""
            class="flex items-center px-3 py-2 mt-2 rounded-md truncate"
          >
            <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
            Design
          </a>
          <a
            href=""
            class="flex items-center px-3 py-2 mt-2 rounded-md truncate"
          >
            <div class="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
            Next Week
          </a>
          <a
            href=""
            class="flex items-center px-3 py-2 mt-2 rounded-md truncate"
          >
            <PlusIcon class="w-4 h-4 mr-2" /> Add New Label
          </a>
        </div>
      </div>
      <!-- END: Inbox Menu -->
    </div>
    <div class="col-span-12 lg:col-span-9 xxl:col-span-10">
      <!-- BEGIN: Inbox Filter -->
      <div class="intro-y flex flex-col-reverse sm:flex-row items-center">
        <div class="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
          <SearchIcon
            class="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-gray-700 dark:text-gray-300"
          />
          <input
            type="text"
            class="form-control w-full sm:w-64 box px-10 text-gray-700 dark:text-gray-300 placeholder-theme-13"
            placeholder="Search mail"
          />
          <div
            class="inbox-filter dropdown absolute inset-y-0 mr-3 right-0 flex items-center"
            data-placement="bottom-start"
          >
            <ChevronDownIcon
              class="dropdown-toggle w-4 h-4 cursor-pointer text-gray-700 dark:text-gray-300"
              role="button"
              aria-expanded="false"
            />
            <div class="inbox-filter__dropdown-menu dropdown-menu pt-2">
              <div class="dropdown-menu__content box p-5">
                <div class="grid grid-cols-12 gap-4 gap-y-3">
                  <div class="col-span-6">
                    <label for="input-filter-1" class="form-label text-xs"
                      >From</label
                    >
                    <input
                      id="input-filter-1"
                      type="text"
                      class="form-control flex-1"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-2" class="form-label text-xs"
                      >To</label
                    >
                    <input
                      id="input-filter-2"
                      type="text"
                      class="form-control flex-1"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-3" class="form-label text-xs"
                      >Subject</label
                    >
                    <input
                      id="input-filter-3"
                      type="text"
                      class="form-control flex-1"
                      placeholder="Important Meeting"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-4" class="form-label text-xs"
                      >Has the Words</label
                    >
                    <input
                      id="input-filter-4"
                      type="text"
                      class="form-control flex-1"
                      placeholder="Job, Work, Documentation"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-5" class="form-label text-xs"
                      >Doesn't Have</label
                    >
                    <input
                      id="input-filter-5"
                      type="text"
                      class="form-control flex-1"
                      placeholder="Job, Work, Documentation"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-6" class="form-label text-xs"
                      >Size</label
                    >
                    <select id="input-filter-6" class="form-select flex-1">
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </select>
                  </div>
                  <div class="col-span-12 flex items-center mt-3">
                    <button class="btn btn-secondary w-32 ml-auto">
                      Create Filter
                    </button>
                    <button class="btn btn-primary w-32 ml-2">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-auto flex">
          <button class="btn btn-primary shadow-md mr-2">
            Start a Video Call
          </button>
          <div class="dropdown">
            <button
              class="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300"
              aria-expanded="false"
            >
              <span class="w-5 h-5 flex items-center justify-center">
                <PlusIcon class="w-4 h-4" />
              </span>
            </button>
            <div class="dropdown-menu w-40">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <UserIcon class="w-4 h-4 mr-2" /> Contacts
                </a>
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <SettingsIcon class="w-4 h-4 mr-2" /> Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Inbox Filter -->
      <!-- BEGIN: Inbox Content -->
      <div class="intro-y inbox box mt-5">
        <div
          class="p-5 flex flex-col-reverse sm:flex-row text-gray-600 border-b border-gray-200 dark:border-dark-1"
        >
          <div
            class="flex items-center mt-3 sm:mt-0 border-t sm:border-0 border-gray-200 pt-5 sm:pt-0 mt-5 sm:mt-0 -mx-5 sm:mx-0 px-5 sm:px-0"
          >
            <input class="form-check-input" type="checkbox" />
            <div class="dropdown ml-1" data-placement="bottom-start">
              <a
                class="dropdown-toggle w-5 h-5 block dark:text-gray-300"
                href="javascript:;"
                aria-expanded="false"
              >
                <ChevronDownIcon class="w-5 h-5" />
              </a>
              <div class="dropdown-menu w-32">
                <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >All</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >None</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Read</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Unread</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Starred</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Unstarred</a
                  >
                </div>
              </div>
            </div>
            <a
              href="javascript:;"
              class="w-5 h-5 ml-5 flex items-center justify-center dark:text-gray-300"
            >
              <RefreshCwIcon class="w-4 h-4" />
            </a>
            <a
              href="javascript:;"
              class="w-5 h-5 ml-5 flex items-center justify-center dark:text-gray-300"
            >
              <MoreHorizontalIcon class="w-4 h-4" />
            </a>
          </div>
          <div class="flex items-center sm:ml-auto">
            <div class="dark:text-gray-300">1 - 50 of 5,238</div>
            <a
              href="javascript:;"
              class="w-5 h-5 ml-5 flex items-center justify-center dark:text-gray-300"
            >
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
            <a
              href="javascript:;"
              class="w-5 h-5 ml-5 flex items-center justify-center dark:text-gray-300"
            >
              <ChevronRightIcon class="w-4 h-4" />
            </a>
            <a
              href="javascript:;"
              class="w-5 h-5 ml-5 flex items-center justify-center dark:text-gray-300"
            >
              <SettingsIcon class="w-4 h-4" />
            </a>
          </div>
        </div>
        <div class="overflow-x-auto sm:overflow-x-visible">
          <div
            v-for="(faker, fakerKey) in $f()"
            :key="fakerKey"
            class="intro-y"
          >
            <div
              class="inbox__item inline-block sm:block text-gray-700 dark:text-gray-500 bg-gray-100 dark:bg-dark-1 border-b border-gray-200 dark:border-dark-1"
              :class="{ 'inbox__item--active': faker.trueFalse[0] }"
            >
              <div class="flex px-5 py-3">
                <div class="w-72 flex-none flex items-center mr-5">
                  <input
                    class="form-check-input flex-none"
                    type="checkbox"
                    :checked="faker.trueFalse[0]"
                  />
                  <a
                    href="javascript:;"
                    class="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"
                  >
                    <StarIcon class="w-4 h-4" />
                  </a>
                  <a
                    href="javascript:;"
                    class="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"
                  >
                    <BookmarkIcon class="w-4 h-4" />
                  </a>
                  <div class="w-6 h-6 flex-none image-fit relative ml-5">
                    <img
                      alt="Icewall Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="require(`@/assets/images/${faker.photos[0]}`)"
                    />
                  </div>
                  <div class="inbox__item--sender truncate ml-3">
                    {{ faker.users[0].name }}
                  </div>
                </div>
                <div class="w-64 sm:w-auto truncate">
                  <span class="inbox__item--highlight">{{
                    faker.news[0].superShortContent
                  }}</span>
                  {{ faker.news[0].shortContent }}
                </div>
                <div class="inbox__item--time whitespace-nowrap ml-auto pl-10">
                  {{ faker.times[0] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-5 flex flex-col sm:flex-row items-center text-center sm:text-left text-gray-600"
        >
          <div class="dark:text-gray-300">
            4.41 GB (25%) of 17 GB used Manage
          </div>
          <div class="sm:ml-auto mt-2 sm:mt-0 dark:text-gray-300">
            Last account activity: 36 minutes ago
          </div>
        </div>
      </div>
      <!-- END: Inbox Content -->
    </div>
  </div>
</template>
