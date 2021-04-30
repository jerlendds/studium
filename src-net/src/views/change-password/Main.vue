<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Change Password</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
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
              <SettingsIcon class="w-4 h-4 mr-2" /> Tax Information
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
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Change Password -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Change Password</h2>
          </div>
          <div class="p-5">
            <div>
              <label for="change-password-form-1" class="form-label"
                >Old Password</label
              >
              <input
                id="change-password-form-1"
                type="password"
                class="form-control"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="change-password-form-2" class="form-label"
                >New Password</label
              >
              <input
                id="change-password-form-2"
                type="password"
                class="form-control"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label for="change-password-form-3" class="form-label"
                >Confirm New Password</label
              >
              <input
                id="change-password-form-3"
                type="password"
                class="form-control"
                placeholder="Input text"
              />
            </div>
            <button type="button" class="btn btn-primary mt-4">
              Change Password
            </button>
          </div>
        </div>
        <!-- END: Change Password -->
      </div>
    </div>
  </div>
</template>
