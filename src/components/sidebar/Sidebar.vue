<template>
    <aside v-if="showSidebar">
        <header class="flex items-center justify-between pt-1">
            <h2 class="font-serif text-2xl font-semibold flex items-center">Studium<sup class="text-sm font-body">PRO</sup></h2>
            <button>
                <settings-icon-o />
            </button>
        </header>

        <menu class="flex flex-col justify-between  list-none p-0 font-sans text-lg">
            <li
                v-for="tab in sidebarTabs"
                :key="tab.name"
                :class="{'bg-opacity-100 shadow-sm':tab.name == activeSidebarTab}"
                class="my-1 flex bg-white-300 bg-opacity-0 rounded shadow-none"
            >
                <button
                    class="flex py-2 px-6 items-center justify-start w-full no-focus"
                    @click="activeSidebarTab = tab.name, tab.active = true"
                >
                    <component
                        v-if="tab.name == activeSidebarTab"
                        class="fill-current text-curious-blue-600"
                        :is="tab.component"
                    ></component>
                    <component
                        v-if="tab.name != activeSidebarTab"
                        :class="{'text-curious-blue-600':tab.name == activeSidebarTab}"
                        class="fill-current text-lightgray-700"
                        :is="tab.activeComponent"
                    ></component>
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

    components: {
        overviewIcon: ChartBox,
        overviewIconO: ChartBoxOutline,
        settingsIconO: CogOutline,
        allnotesIconO: NoteMultipleOutline,
        allnotesIcon: NoteMultiple,
        starIcon: Star,
        flashcardIcon: CardText,
        calendarIcon: Calendar,
    },

    data() {
        return {
            activeSidebarTab: "Overview",
            showSidebar: true,

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
};
</script>

<style scoped>
</style>