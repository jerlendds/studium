<template>
    <aside
        class="flex flex-col w-1/6 p-2 bg-white-50 h-screen"
        v-if="showSidebar">

        <header class="flex items-center justify-between pt-1 px-2">

            <h2 class="font-serif text-2xl font-semibold flex items-center">Studium<sup class="text-sm font-body">FREE</sup></h2>
            <button class="no-focus rotate-cog">
                <settings-icon />
            </button>

        </header>

        <menu class="flex flex-col justify-between  list-none p-0 font-sans text-lg">
            <li
                v-for="tab in sidebarTabs"
                :key="tab.name"
                :class="{'bg-opacity-100 shadow-3':tab.name == activeSidebarTab}"
                class="my-1 flex bg-white-300 bg-opacity-0 rounded hover:shadow-3">

                <button
                    class="flex py-2 px-6 items-center justify-start w-full no-focus"
                    @click="activeSidebarTab = tab.name, tab.active = true">
                    
                    <component
                        v-if="tab.name == activeSidebarTab"
                        class="fill-current text-curious-blue-600"
                        :is="tab.component"></component>
                    <component
                        v-if="tab.name != activeSidebarTab"
                        :class="{'text-curious-blue-600':tab.name == activeSidebarTab}"
                        class="fill-current text-lightgray-700"
                        :is="tab.activeComponent"></component>
                    <p
                        class="pl-6 text-gray-700"
                        :class="{'text-curious-blue-600':tab.name == activeSidebarTab}"
                    >{{tab.name}}</p>

                </button>
            </li>
        </menu>

    </aside>
</template>

<script>
import CogOutline from "vue-material-design-icons/CogOutline";
import NoteMultipleOutline from "vue-material-design-icons/NoteMultipleOutline";
import NoteMultiple from "vue-material-design-icons/NoteMultiple";
import StarOutline from "vue-material-design-icons/StarOutline";

import Star from "vue-material-design-icons/Star";
import CardText from "vue-material-design-icons/CardText";
import CardTextOutline from "vue-material-design-icons/CardTextOutline";
import Calendar from "vue-material-design-icons/Calendar";
import CalendarOutline from "vue-material-design-icons/CalendarOutline";

import ChartBox from "vue-material-design-icons/ChartBox";
import ChartBoxOutline from "vue-material-design-icons/ChartBoxOutline";

export default {
    name: "Sidebar",

    props: ["showSidebar", "activeTab"],

    components: {
        settingsIcon: CogOutline,
    },

    data() {
        return {
            activeSidebarTab: "Overview",
            sidebarTabs: [
                {
                    name: "Overview",
                    component: ChartBox,
                    activeComponent: ChartBoxOutline,
                },
                {
                    name: "All Notes",
                    component: NoteMultiple,
                    activeComponent: NoteMultipleOutline,
                },
                {
                    name: "Favourites",
                    component: Star,
                    activeComponent: StarOutline,
                },
                {
                    name: "Flashcards",
                    component: CardText,
                    activeComponent: CardTextOutline,
                },
                {
                    name: "Calendar",
                    component: Calendar,
                    activeComponent: CalendarOutline,
                },
            ],
        };
    },

    mounted() {},

    methods: {},

    computed: {
        getActiveTab: function () {
            this.activeSidebarTab = activeTab;
            return this.activeSidebarTab;
        },
    },
};
</script>

<style scoped>
.rotate-cog {
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
}

.rotate-cog:hover {
    transform: rotate(45deg);
}
</style>