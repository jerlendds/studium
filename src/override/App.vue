<template>
    <main
        id="app"
        class="flex w-full h-full"
    >
        <!-- Sidebar -->
        <div class="flex flex-col w-1/6 p-2 bg-gray-50">
            <header class="flex items-center justify-between pt-1">
                <h2 class="font-serif text-2xl font-semibold flex items-center">Studium<sup class="text-sm font-body">PRO</sup></h2>
                <button>
                    <settings-icon-o />
                </button>
            </header>

            <menu class="flex flex-col justify-between list-none p-0 font-sans text-lg">
                <li class="my-1 flex  bg-gray-200 rounded hover:shadow-sm shadow-sm">
                    <button class="flex py-2 px-6 items-center justify-start w-full">
                        <overview-icon-o />
                        <p class="pl-6 text-gray-700">Overview</p>
                    </button>
                </li>

                <li class="my-1 flex  rounded hover:shadow-sm">
                    <button class="flex py-2 px-6 items-center justify-start w-full">
                        <allnotes-icon />
                        <p class="pl-6 text-gray-700">All Notes</p>
                    </button>
                </li>

                <li class="my-1 flex rounded hover:shadow-sm">
                    <button class="flex py-2 px-6 items-center justify-start w-full">
                        <star-icon />
                        <p class="pl-6 text-gray-700">Favourites</p>
                    </button>
                </li>

                <li class="my-1 flex rounded hover:shadow-sm">
                    <button class="flex py-2 px-6 items-center justify-start w-full">
                        <flashcard-icon />
                        <p class="pl-6 text-gray-700">Flashcards</p>
                    </button>
                </li>

                <li class="my-1 flex rounded hover:shadow-sm">
                    <button class="flex py-2 px-6 items-center justify-start w-full">
                        <calendar-icon />
                        <p class="pl-6 text-gray-700">Calendar</p>
                    </button>
                </li>
            </menu>
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
import CogOutline from "vue-material-design-icons/CogOutline";
import NoteMultipleOutline from "vue-material-design-icons/NoteMultipleOutline";
import NoteMultiple from "vue-material-design-icons/NoteMultiple";

import Star from "vue-material-design-icons/Star";
import CardText from "vue-material-design-icons/CardText";
import Calendar from "vue-material-design-icons/Calendar";
import Magnify from "vue-material-design-icons/Magnify";
import ChartBox from "vue-material-design-icons/ChartBox";
import ChartBoxOutline from "vue-material-design-icons/ChartBoxOutline";

export default {
    name: "App",

    components: {
        settingsIconO: CogOutline,
        allnotesIconO: NoteMultipleOutline,
        allnotesIcon: NoteMultiple,
        starIcon: Star,
        flashcardIcon: CardText,
        calendarIcon: Calendar,
        searchIcon: Magnify,
        overviewIcon: ChartBox,
        overviewIconO: ChartBoxOutline,
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},

    computed: {},
};
</script>


<style src="@/assets/styles/tailwind.css" scoped>
</style>