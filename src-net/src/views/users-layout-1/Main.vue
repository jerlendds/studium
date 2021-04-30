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
        v-for="(faker, fakerKey) in $_.take($f(), 10)"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6"
      >
        <div class="box">
          <div
            class="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <div class="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
            </div>
            <div
              class="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0"
            >
              <a href="" class="font-medium">{{ faker.users[0].name }}</a>
              <div class="text-gray-600 text-xs mt-0.5">
                {{ faker.jobs[0] }}
              </div>
            </div>
            <div class="flex -ml-2 lg:ml-0 lg:justify-end mt-3 lg:mt-0">
              <Tippy
                tag="a"
                href=""
                class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in"
                content="Facebook"
              >
                <FacebookIcon class="w-3 h-3 fill-current" />
              </Tippy>
              <Tippy
                tag="a"
                href=""
                class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in"
                content="Twitter"
              >
                <TwitterIcon class="w-3 h-3 fill-current" />
              </Tippy>
              <Tippy
                tag="a"
                href=""
                class="w-8 h-8 rounded-full flex items-center justify-center border dark:border-dark-5 ml-2 text-gray-500 zoom-in"
                content="Linked In"
              >
                <LinkedinIcon class="w-3 h-3 fill-current" />
              </Tippy>
            </div>
          </div>
          <div
            class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5"
          >
            <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
              <div class="flex text-gray-600 text-xs">
                <div class="mr-auto">Progress</div>
                <div>20%</div>
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
