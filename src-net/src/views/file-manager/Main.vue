<template>
  <div class="grid grid-cols-12 gap-6 mt-8">
    <div class="col-span-12 lg:col-span-3 xxl:col-span-2">
      <h2 class="intro-y text-lg font-medium mr-auto mt-2">File Manager</h2>
      <!-- BEGIN: File Manager Menu -->
      <div class="intro-y box p-5 mt-6">
        <div class="mt-1">
          <a
            href=""
            class="flex items-center px-3 py-2 rounded-md bg-theme-1 text-white font-medium"
          >
            <ImageIcon class="w-4 h-4 mr-2" /> Images
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <VideoIcon class="w-4 h-4 mr-2" /> Videos
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <FileIcon class="w-4 h-4 mr-2" /> Documents
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <UsersIcon class="w-4 h-4 mr-2" /> Shared
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <TrashIcon class="w-4 h-4 mr-2" /> Trash
          </a>
        </div>
        <div class="border-t border-gray-200 dark:border-dark-5 mt-4 pt-4">
          <a href="" class="flex items-center px-3 py-2 rounded-md">
            <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
            Custom Work
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
            Important Meetings
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
            Work
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
            Design
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <div class="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
            Next Week
          </a>
          <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
            <PlusIcon class="w-4 h-4 mr-2" /> Add New Label
          </a>
        </div>
      </div>
      <!-- END: File Manager Menu -->
    </div>
    <div class="col-span-12 lg:col-span-9 xxl:col-span-10">
      <!-- BEGIN: File Manager Filter -->
      <div class="intro-y flex flex-col-reverse sm:flex-row items-center">
        <div class="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
          <SearchIcon
            class="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-gray-700 dark:text-gray-300"
          />
          <input
            type="text"
            class="form-control w-full sm:w-64 box px-10 text-gray-700 dark:text-gray-300 placeholder-theme-13"
            placeholder="Search files"
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
                      >File Name</label
                    >
                    <input
                      id="input-filter-1"
                      type="text"
                      class="form-control flex-1"
                      placeholder="Type the file name"
                    />
                  </div>
                  <div class="col-span-6">
                    <label for="input-filter-2" class="form-label text-xs"
                      >Shared With</label
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
                      >Created At</label
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
                      >Size</label
                    >
                    <select id="input-filter-4" class="form-select flex-1">
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
            Upload New Files
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
                  <FileIcon class="w-4 h-4 mr-2" /> Share Files
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
      <!-- END: File Manager Filter -->
      <!-- BEGIN: Directory & Files -->
      <div class="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
        <div
          v-for="(faker, fakerKey) in $f()"
          :key="fakerKey"
          class="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2"
        >
          <div
            class="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in"
          >
            <div class="absolute left-0 top-0 mt-3 ml-3">
              <input
                class="form-check-input border border-gray-500"
                type="checkbox"
              />
            </div>
            <a
              v-if="faker.files[0].type == 'Empty Folder'"
              href=""
              class="w-3/5 file__icon file__icon--empty-directory mx-auto"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Folder'"
              href=""
              class="w-3/5 file__icon file__icon--directory mx-auto"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Image'"
              href=""
              class="w-3/5 file__icon file__icon--image mx-auto"
            >
              <div class="file__icon--image__preview image-fit">
                <img
                  alt="Icewall Tailwind HTML Admin Template"
                  :src="
                    require(`@/assets/images/${$_.toLower(
                      faker.files[0]['fileName']
                    )}`)
                  "
                />
              </div>
            </a>
            <a v-else href="" class="w-3/5 file__icon file__icon--file mx-auto">
              <div class="file__icon__file-name">
                {{ faker.files[0].type }}
              </div>
            </a>
            <a href="" class="block font-medium mt-4 text-center truncate">{{
              faker.files[0].fileName
            }}</a>
            <div class="text-gray-600 text-xs text-center mt-0.5">
              {{ faker.files[0].size }}
            </div>
            <div class="absolute top-0 right-0 mr-2 mt-2 dropdown ml-auto">
              <a
                class="dropdown-toggle w-5 h-5 block"
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
                    <UsersIcon class="w-4 h-4 mr-2" /> Share File
                  </a>
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2  rounded-md"
                  >
                    <TrashIcon class="w-4 h-4 mr-2" /> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Directory & Files -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6"
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
