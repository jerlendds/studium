<template>
    <main
        id="app"
        class="flex w-full h-full font-sans">
        <sidebar
            :showSidebar="true"
            activeTab="Overview"/>
        <!-- Main view, components will live here... -->
        <div class="flex flex-col w-5/6 items-center h-full w-full font-body">
            <header class="w-full flex justify-center items-center">
                <search-bar 
                    class="m-3" 
                    placeholderValue="Search notes..." 
                    searchInput="" 
                    :showSearch="true" />
            </header>

           
            <!-- Essential components will live here... -->
            <stats 
                :notesAddedToday="0" 
                :notesAddedMonth="0"
                :notesReviewedToday="0" />
            
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import QuickStats from "@/components/overview/QuickStats.vue";

import Magnify from "vue-material-design-icons/Magnify";

export default {
    name: "App",

    components: {
        searchIcon: Magnify,
        sidebar: Sidebar,
        searchBar: SearchBar,
        stats: QuickStats,
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