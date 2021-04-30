<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Point of Sale</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <a
          href="javascript:;"
          data-toggle="modal"
          data-target="#new-order-modal"
          class="btn btn-primary shadow-md mr-2"
          >New Order</a
        >
        <div class="pos-dropdown dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300"
            aria-expanded="false"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <ChevronDownIcon class="w-4 h-4" />
            </span>
          </button>
          <div class="pos-dropdown__dropdown-menu dropdown-menu">
            <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate"
                  >INV-0206020 - {{ $f()[3].users[0].name }}</span
                >
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate"
                  >INV-0206022 - {{ $f()[4].users[0].name }}</span
                >
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <ActivityIcon class="w-4 h-4 mr-2" />
                <span class="truncate"
                  >INV-0206021 - {{ $f()[5].users[0].name }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
      <!-- BEGIN: Item List -->
      <div class="intro-y col-span-12 lg:col-span-8">
        <div class="lg:flex intro-y">
          <div class="relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="form-control py-3 px-4 w-full lg:w-64 box pr-10 placeholder-theme-13"
              placeholder="Search item..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
          <select
            class="form-select py-3 px-4 box w-full lg:w-auto mt-3 lg:mt-0 ml-auto"
          >
            <option>Sort By</option>
            <option>A to Z</option>
            <option>Z to A</option>
            <option>Lowest Price</option>
            <option>Highest Price</option>
          </select>
        </div>
        <div class="grid grid-cols-12 gap-5 mt-5">
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Soup</div>
            <div class="text-gray-600">5 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box bg-theme-1 dark:bg-theme-1 p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base text-white">Pancake & Toast</div>
            <div class="text-theme-22 dark:text-gray-400">8 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Pasta</div>
            <div class="text-gray-600">4 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Waffle</div>
            <div class="text-gray-600">3 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Snacks</div>
            <div class="text-gray-600">8 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Deserts</div>
            <div class="text-gray-600">8 Items</div>
          </div>
          <div
            class="col-span-12 sm:col-span-4 xxl:col-span-3 box p-5 cursor-pointer zoom-in"
          >
            <div class="font-medium text-base">Beverage</div>
            <div class="text-gray-600">9 Items</div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-5 mt-5 pt-5 border-t border-theme-5">
          <a
            v-for="(faker, fakerKey) in $_.take($f(), 8)"
            :key="fakerKey"
            href="javascript:;"
            data-toggle="modal"
            data-target="#add-item-modal"
            class="intro-y block col-span-12 sm:col-span-4 xxl:col-span-3"
          >
            <div class="box rounded-md p-3 relative zoom-in">
              <div class="flex-none pos-image relative block">
                <div class="pos-image__preview image-fit">
                  <img
                    alt="Icewall Tailwind HTML Admin Template"
                    :src="require(`@/assets/images/${faker.foods[0].image}`)"
                  />
                </div>
              </div>
              <div class="block font-medium text-center truncate mt-3">
                {{ faker.foods[0].name }}
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- END: Item List -->
      <!-- BEGIN: Ticket -->
      <div class="col-span-12 lg:col-span-4">
        <div class="intro-y pr-1">
          <div class="box p-2">
            <div class="pos__tabs nav nav-tabs justify-center" role="tablist">
              <a
                id="ticket-tab"
                data-toggle="tab"
                data-target="#ticket"
                href="javascript:;"
                class="flex-1 py-2 rounded-md text-center active"
                role="tab"
                aria-controls="ticket"
                aria-selected="true"
                >Ticket</a
              >
              <a
                id="details-tab"
                data-toggle="tab"
                data-target="#details"
                href="javascript:;"
                class="flex-1 py-2 rounded-md text-center"
                role="tab"
                aria-controls="details"
                aria-selected="false"
                >Details</a
              >
            </div>
          </div>
        </div>
        <div class="tab-content">
          <div
            id="ticket"
            class="tab-pane active"
            role="tabpanel"
            aria-labelledby="ticket-tab"
          >
            <div class="pos__ticket box p-2 mt-5">
              <a
                v-for="(faker, fakerKey) in $_.take($f(), 5)"
                :key="fakerKey"
                href="javascript:;"
                data-toggle="modal"
                data-target="#add-item-modal"
                class="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-dark-3 hover:bg-gray-200 dark:hover:bg-dark-1 rounded-md"
              >
                <div class="pos__ticket__item-name truncate mr-1">
                  {{ faker.foods[0].name }}
                </div>
                <div class="text-gray-600">x 1</div>
                <EditIcon class="w-4 h-4 text-gray-600 ml-2" />
                <div class="ml-auto font-medium">${{ faker.totals[0] }}</div>
              </a>
            </div>
            <div class="box flex p-5 mt-5">
              <div class="w-full relative text-gray-700">
                <input
                  type="text"
                  class="form-control py-3 px-4 w-full bg-gray-200 border-gray-200 pr-10 placeholder-theme-13"
                  placeholder="Use coupon code..."
                />
                <SearchIcon
                  class="w-4 h-4 hidden sm:absolute my-auto inset-y-0 mr-3 right-0"
                />
              </div>
              <button class="btn btn-primary ml-2">Apply</button>
            </div>
            <div class="box p-5 mt-5">
              <div class="flex">
                <div class="mr-auto">Subtotal</div>
                <div class="font-medium">$250</div>
              </div>
              <div class="flex mt-4">
                <div class="mr-auto">Discount</div>
                <div class="font-medium text-theme-6">-$20</div>
              </div>
              <div class="flex mt-4">
                <div class="mr-auto">Tax</div>
                <div class="font-medium">15%</div>
              </div>
              <div
                class="flex mt-4 pt-4 border-t border-gray-200 dark:border-dark-5"
              >
                <div class="mr-auto font-medium text-base">Total Charge</div>
                <div class="font-medium text-base">$220</div>
              </div>
            </div>
            <div class="flex mt-5">
              <button
                class="btn w-32 border-gray-400 dark:border-dark-5 text-gray-600 dark:text-gray-300"
              >
                Clear Items
              </button>
              <button class="btn btn-primary w-32 shadow-md ml-auto">
                Charge
              </button>
            </div>
          </div>
          <div
            id="details"
            class="tab-pane"
            role="tabpanel"
            aria-labelledby="details-tab"
          >
            <div class="box p-5 mt-5">
              <div
                class="flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"
              >
                <div>
                  <div class="text-gray-600">Time</div>
                  <div class="mt-1">02/06/20 02:10 PM</div>
                </div>
                <ClockIcon class="w-4 h-4 text-gray-600 ml-auto" />
              </div>
              <div
                class="flex items-center border-b border-gray-200 dark:border-dark-5 py-5"
              >
                <div>
                  <div class="text-gray-600">Customer</div>
                  <div class="mt-1">{{ $f()[0].users[0].name }}</div>
                </div>
                <UserIcon class="w-4 h-4 text-gray-600 ml-auto" />
              </div>
              <div
                class="flex items-center border-b border-gray-200 dark:border-dark-5 py-5"
              >
                <div>
                  <div class="text-gray-600">People</div>
                  <div class="mt-1">3</div>
                </div>
                <UsersIcon class="w-4 h-4 text-gray-600 ml-auto" />
              </div>
              <div class="flex items-center pt-5">
                <div>
                  <div class="text-gray-600">Table</div>
                  <div class="mt-1">21</div>
                </div>
                <MicIcon class="w-4 h-4 text-gray-600 ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Ticket -->
    </div>
    <!-- BEGIN: New Order Modal -->
    <div id="new-order-modal" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">New Order</h2>
          </div>
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12">
              <label for="pos-form-1" class="form-label">Name</label>
              <input
                id="pos-form-1"
                type="text"
                class="form-control flex-1"
                placeholder="Customer name"
              />
            </div>
            <div class="col-span-12">
              <label for="pos-form-2" class="form-label">Table</label>
              <input
                id="pos-form-2"
                type="text"
                class="form-control flex-1"
                placeholder="Customer table"
              />
            </div>
            <div class="col-span-12">
              <label for="pos-form-3" class="form-label"
                >Number of People</label
              >
              <input
                id="pos-form-3"
                type="text"
                class="form-control flex-1"
                placeholder="People"
              />
            </div>
          </div>
          <div class="modal-footer text-right">
            <button
              type="button"
              data-dismiss="modal"
              class="btn btn-outline-secondary w-32 mr-1"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary w-32">
              Create Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- END: New Order Modal -->
    <!-- BEGIN: Add Item Modal -->
    <div id="add-item-modal" class="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              {{ $f()[0].foods[0].name }}
            </h2>
          </div>
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12">
              <label for="pos-form-4" class="form-label">Quantity</label>
              <div class="flex mt-2 flex-1">
                <button
                  type="button"
                  class="btn w-12 border-gray-300 bg-gray-200 dark:bg-dark-1 text-gray-600 dark:text-gray-300 mr-1"
                >
                  -
                </button>
                <input
                  id="pos-form-4"
                  type="text"
                  class="form-control w-24 text-center"
                  placeholder="Item quantity"
                  value="2"
                />
                <button
                  type="button"
                  class="btn w-12 border-gray-300 bg-gray-200 dark:bg-dark-1 text-gray-600 dark:text-gray-300 ml-1"
                >
                  +
                </button>
              </div>
            </div>
            <div class="col-span-12">
              <label for="pos-form-5" class="form-label">Notes</label>
              <textarea
                id="pos-form-5"
                class="form-control w-full mt-2"
                placeholder="Item notes"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer text-right">
            <button
              type="button"
              data-dismiss="modal"
              class="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary w-24">Add Item</button>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Add Item Modal -->
  </div>
</template>
