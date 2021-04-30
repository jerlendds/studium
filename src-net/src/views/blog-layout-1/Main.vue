<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Blog Layout</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="btn btn-primary shadow-md mr-2">Add New Post</button>
        <div class="dropdown ml-auto sm:ml-0">
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
                <Share2Icon class="w-4 h-4 mr-2" /> Share Post
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <DownloadIcon class="w-4 h-4 mr-2" /> Download Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Blog Layout -->
      <div
        v-for="(faker, fakerKey) in $_.take($f(), 9)"
        :key="fakerKey"
        class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box"
      >
        <div
          class="flex items-center border-b border-gray-200 dark:border-dark-5 px-5 py-4"
        >
          <div class="w-10 h-10 flex-none image-fit">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="rounded-full"
              :src="require(`@/assets/images/${faker.photos[0]}`)"
            />
          </div>
          <div class="ml-3 mr-auto">
            <a href="" class="font-medium">{{ faker.users[0].name }}</a>
            <div class="flex text-gray-600 truncate text-xs mt-0.5">
              <a
                class="text-theme-1 dark:text-theme-10 inline-block truncate"
                href=""
                >{{ faker.products[0].category }}</a
              >
              <span class="mx-1">•</span> {{ faker.formattedTimes[0] }}
            </div>
          </div>
          <div class="dropdown ml-3">
            <a
              href="javascript:;"
              class="dropdown-toggle w-5 h-5 text-gray-600 dark:text-gray-300"
              aria-expanded="false"
            >
              <MoreVerticalIcon class="w-5 h-5" />
            </a>
            <div class="dropdown-menu w-40">
              <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <Edit2Icon class="w-4 h-4 mr-2" /> Edit Post
                </a>
                <a
                  href=""
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <TrashIcon class="w-4 h-4 mr-2" /> Delete Post
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="p-5">
          <div class="h-40 xxl:h-56 image-fit">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="rounded-md"
              :src="require(`@/assets/images/${faker.images[0]}`)"
            />
          </div>
          <a href="" class="block font-medium text-base mt-5">{{
            faker.news[0].title
          }}</a>
          <div class="text-gray-700 dark:text-gray-600 mt-2">
            {{ faker.news[0].shortContent }}
          </div>
        </div>
        <div
          class="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5"
        >
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 mr-2"
            content="Bookmark"
          >
            <BookmarkIcon class="w-3 h-3" />
          </Tippy>
          <div class="intro-x flex mr-2">
            <div class="intro-x w-8 h-8 image-fit">
              <Tippy
                tag="img"
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
                :content="faker.users[0].name"
              />
            </div>
            <div class="intro-x w-8 h-8 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="require(`@/assets/images/${faker.photos[1]}`)"
                :content="faker.users[1].name"
              />
            </div>
            <div class="intro-x w-8 h-8 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full border border-white zoom-in"
                :src="require(`@/assets/images/${faker.photos[2]}`)"
                :content="faker.users[2].name"
              />
            </div>
          </div>
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 ml-auto"
            content="Share"
          >
            <Share2Icon class="w-3 h-3" />
          </Tippy>
          <Tippy
            tag="a"
            href=""
            class="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-1 text-white ml-2"
            content="Download PDF"
          >
            <ShareIcon class="w-3 h-3" />
          </Tippy>
        </div>
        <div class="px-5 pt-3 pb-5 border-t border-gray-200 dark:border-dark-5">
          <div class="w-full flex text-gray-600 text-xs sm:text-sm">
            <div class="mr-2">
              Comments: <span class="font-medium">{{ faker.totals[0] }}</span>
            </div>
            <div class="mr-2">
              Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
            </div>
            <div class="ml-auto">
              Likes: <span class="font-medium">{{ faker.totals[2] }}k</span>
            </div>
          </div>
          <div class="w-full flex items-center mt-3">
            <div class="w-8 h-8 flex-none image-fit mr-3">
              <img
                alt="Icewall Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
            </div>
            <div class="flex-1 relative text-gray-700">
              <input
                type="text"
                class="form-control form-control-rounded border-transparent bg-gray-200 pr-10 placeholder-theme-13"
                placeholder="Post a comment..."
              />
              <SmileIcon
                class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END: Blog Layout -->
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
