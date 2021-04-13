<template>
    <main
        id="app"
        class="flex w-full h-full">
        <sidebar
            :showSidebar="true"
            activeTab="Overview"/>
        <!-- Main view, components will live here... -->
        <div class="flex flex-col w-full font-body">
            <!-- Search header bar -->
            <header class="w-full flex items-center">
                <!-- Search container -->
                <form
                    action=""
                    class="flex w-4/6 items-center justify-center pt-2 mx-auto shadow-sm">
     
                    <input
                        type="text"
                        placeholder="Search notes..."
                        class="bg-lightgray-50 placeholder-lightgray-300 flex-grow font-sans min-w-max p-2 rounded-l "/>
                    <button class="flex">
                        <search-icon class="bg-lightgray-50 p-2 rounded-r shadow-sm" />
                    </button>

                </form>
            </header>

            <!-- Essential components will live here... -->


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