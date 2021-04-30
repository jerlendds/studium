<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">Users Layout</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <button class="btn btn-primary shadow-md mr-2">Add New User</button>
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
                <UsersIcon class="w-4 h-4 mr-2" /> Add Group
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <MessageCircleIcon class="w-4 h-4 mr-2" /> Send Message
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block mx-auto text-gray-600">
          Showing 1 to 10 of 150 entries
        </div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="form-control w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Users Layout -->
      <div
        v-for="(faker, fakerKey) in $_.take($f(), 9)"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6 lg:col-span-4"
      >
        <div class="box">
          <div class="flex items-start px-5 pt-5">
            <div class="w-full flex flex-col lg:flex-row items-center">
              <div class="w-16 h-16 image-fit">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  class="rounded-full"
                  :src="require(`@/assets/images/${faker.photos[0]}`)"
                />
              </div>
              <div class="lg:ml-4 text-center lg:text-left mt-3 lg:mt-0">
                <a href="" class="font-medium">{{ faker.users[0].name }}</a>
                <div class="text-gray-600 text-xs mt-0.5">
                  {{ faker.jobs[0] }}
                </div>
              </div>
            </div>
            <div class="absolute right-0 top-0 mr-5 mt-3 dropdown">
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
                    <Edit2Icon class="w-4 h-4 mr-2" /> Edit
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
          <div class="text-center lg:text-left p-5">
            <div>{{ faker.news[0].shortContent }}</div>
            <div
              class="flex items-center justify-center lg:justify-start text-gray-600 mt-5"
            >
              <MailIcon class="w-3 h-3 mr-2" />
              {{ faker.users[0].email }}
            </div>
            <div
              class="flex items-center justify-center lg:justify-start text-gray-600 mt-1"
            >
              <InstagramIcon class="w-3 h-3 mr-2" />
              {{ faker.users[0].name }}
            </div>
          </div>
          <div
            class="text-center lg:text-right p-5 border-t border-gray-200 dark:border-dark-5"
          >
            <button class="btn btn-primary py-1 px-2 mr-2">Message</button>
            <button class="btn btn-outline-secondary py-1 px-2">Profile</button>
          </div>
        </div>
      </div>
      <!-- END: Users Layout -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
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
            <a class="pagination__link pagination__link--active" href="">2</a>
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
      <!-- END: Pagination -->
    </div>
  </div>
</template>
