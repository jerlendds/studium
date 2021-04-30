<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Update Profile</h2>
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
        <!-- BEGIN: Display Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Display Information</h2>
          </div>
          <div class="p-5">
            <div class="flex flex-col-reverse xl:flex-row flex-col">
              <div class="flex-1 mt-6 xl:mt-0">
                <div class="grid grid-cols-12 gap-x-5">
                  <div class="col-span-12 xxl:col-span-6">
                    <div>
                      <label for="update-profile-form-1" class="form-label"
                        >Display Name</label
                      >
                      <input
                        id="update-profile-form-1"
                        type="text"
                        class="form-control"
                        placeholder="Input text"
                        :value="$f()[0].users[0].name"
                        disabled
                      />
                    </div>
                    <div class="mt-3">
                      <label for="update-profile-form-2" class="form-label"
                        >Nearest MRT Station</label
                      >
                      <TailSelect
                        id="update-profile-form-2"
                        v-model="select"
                        :options="{
                          search: true,
                          classNames: 'w-full'
                        }"
                      >
                        <option value="1">Admiralty</option>
                        <option value="2">Aljunied</option>
                        <option value="3">Ang Mo Kio</option>
                        <option value="4">Bartley</option>
                        <option value="5">Beauty World</option>
                      </TailSelect>
                    </div>
                  </div>
                  <div class="col-span-12 xxl:col-span-6">
                    <div class="mt-3 xxl:mt-0">
                      <label for="update-profile-form-3" class="form-label"
                        >Postal Code</label
                      >
                      <TailSelect
                        id="update-profile-form-3"
                        v-model="select"
                        :options="{
                          search: true,
                          classNames: 'w-full'
                        }"
                      >
                        <option value="1">
                          018906 - 1 STRAITS BOULEVARD SINGA...
                        </option>
                        <option value="2">
                          018910 - 5A MARINA GARDENS DRIVE...
                        </option>
                        <option value="3">
                          018915 - 100A CENTRAL BOULEVARD...
                        </option>
                        <option value="4">
                          018925 - 21 PARK STREET MARINA...
                        </option>
                        <option value="5">
                          018926 - 23 PARK STREET MARINA...
                        </option>
                      </TailSelect>
                    </div>
                    <div class="mt-3">
                      <label for="update-profile-form-4" class="form-label"
                        >Phone Number</label
                      >
                      <input
                        id="update-profile-form-4"
                        type="text"
                        class="form-control"
                        placeholder="Input text"
                        value="65570828"
                      />
                    </div>
                  </div>
                  <div class="col-span-12">
                    <div class="mt-3">
                      <label for="update-profile-form-5" class="form-label"
                        >Address</label
                      >
                      <textarea
                        id="update-profile-form-5"
                        class="form-control"
                        placeholder="Adress"
                      >
10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore</textarea
                      >
                    </div>
                  </div>
                </div>
                <button type="button" class="btn btn-primary w-20 mt-3">
                  Save
                </button>
              </div>
              <div class="w-52 mx-auto xl:mr-0 xl:ml-6">
                <div
                  class="border-2 border-dashed shadow-sm border-gray-200 dark:border-dark-5 rounded-md p-5"
                >
                  <div
                    class="h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="Icewall Tailwind HTML Admin Template"
                      :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="mx-auto cursor-pointer relative mt-5">
                    <button type="button" class="btn btn-primary w-full">
                      Change Photo
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Display Information -->
        <!-- BEGIN: Personal Information -->
        <div class="intro-y box mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Personal Information</h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-x-5">
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label for="update-profile-form-6" class="form-label"
                    >Email</label
                  >
                  <input
                    id="update-profile-form-6"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    :value="$f()[0].users[0].email"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-7" class="form-label"
                    >Name</label
                  >
                  <input
                    id="update-profile-form-7"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-8" class="form-label"
                    >ID Type</label
                  >
                  <select id="update-profile-form-8" class="form-select">
                    <option>IC</option>
                    <option>FIN</option>
                    <option>Passport</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-9" class="form-label"
                    >ID Number</label
                  >
                  <input
                    id="update-profile-form-9"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    value="357821204950001"
                  />
                </div>
              </div>
              <div class="col-span-12 xl:col-span-6">
                <div class="mt-3 xl:mt-0">
                  <label for="update-profile-form-10" class="form-label"
                    >Phone Number</label
                  >
                  <input
                    id="update-profile-form-10"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    value="65570828"
                  />
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-11" class="form-label"
                    >Address</label
                  >
                  <input
                    id="update-profile-form-11"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                  />
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-12" class="form-label"
                    >Bank Name</label
                  >
                  <TailSelect
                    id="update-profile-form-12"
                    v-model="select"
                    :options="{
                      search: true,
                      classNames: 'w-full'
                    }"
                  >
                    <option value="1">SBI - STATE BANK OF INDIA</option>
                    <option value="1">CITI BANK - CITI BANK</option>
                  </TailSelect>
                </div>
                <div class="mt-3">
                  <label for="update-profile-form-13" class="form-label"
                    >Bank Account</label
                  >
                  <input
                    id="update-profile-form-13"
                    type="text"
                    class="form-control"
                    placeholder="Input text"
                    value="DBS Current 011-903573-0"
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <button type="button" class="btn btn-primary w-20 mr-auto">
                Save
              </button>
              <a href="" class="text-theme-6 flex items-center">
                <Trash2Icon class="w-4 h-4 mr-1" /> Delete Account
              </a>
            </div>
          </div>
        </div>
        <!-- END: Personal Information -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const select = ref("1");

    return {
      select
    };
  }
});
</script>
