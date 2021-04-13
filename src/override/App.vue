<template>
    <main
        id="app"
        class="flex w-full h-full"
    >
        <!-- Sidebar -->
        <div class="flex flex-col w-1/6 p-2 bg-white-50">
            <sidebar />
        </div>

        <!-- Main view -->
        <div class="flex flex-col w-5/6 font-body">
            <!-- Search header bar -->
            <header class="w-full flex items-center">
                <form
                    action=""
                    class="flex w-4/6 items-center justify-center pt-2 mx-auto shadow-sm"
                >
                    <input
                        type="text"
                        placeholder="Search or create a note..."
                        class="bg-gray-50 text-gray-600 placeholder-gray-400 flex-grow font-sans min-w-max p-2 rounded-l "
                    />
                    <button class="flex">
                        <search-icon class="bg-gray-50 p-2 rounded-r shadow-sm" />
                    </button>

                </form>
            </header>
        </div>
    </main>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";

import Magnify from "vue-material-design-icons/Magnify";

export default {
    name: "App",

    components: {
        searchIcon: Magnify,

        sidebar: Sidebar,
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},

    computed: {},
};
</script>


<style src="@/assets/styles/tailwind.css">
</style>