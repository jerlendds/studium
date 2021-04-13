<template>
    <section class="flex items-center justify-center w-full px-6 py-3">
        <ul class="flex w-9/12 justify-between px-4">
            <li 
                v-for="stat in noteStats" 
                :key="stat.description" 
                class="flex flex-col px-6 py-5">
                <div class="flex-col items-center flex">
                    <div class="flex shadow-64 items-end font-darkgray-400">

                            <h1 class="text-6xl body">{{stat.value}}</h1>
                                <component
                                        class="flex flex-col h-full justify-end target-svg fill-current" 
                                        v-if="false" 
                                        :is="icons.neutralIcon"></component>
                    </div>
                    <p class="text-lightgray-500 sans text-lg font-medium">{{stat.description}}</p>

                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import ArrowUp from "vue-material-design-icons/ArrowUp";
import ArrowDown from "vue-material-design-icons/ArrowDown";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal";


export default {
    name: "QuickStats",

    props: ["notesAddedToday", "notesAddedMonth", "notesReviewedToday"],

    components: {},

    data() {
        return {
            icons: {
                upIcon: ArrowUp,
                downIcon: ArrowDown,
                neutralIcon: DotsHorizontal
            },

            noteStats: [
                {
                    value: 0,
                    description: "Notes Created Today"
                },
                {
                    value: 0,
                    description: "Notes Created This Month"
                },
                {
                    value: 0,
                    description: "Notes Reviewed Today"
                },
                {
                    value: 0,
                    description: "Total Notes"
                }
            ],
        };
    },

    mounted() {
        this.getProps()
    },

    methods: {
        getProps(){
            this.noteStats[0].value = this.notesAddedToday
            this.noteStats[1].value = this.notesAddedMonth
            this.noteStats[2].value = this.notesReviewedToday
        },
    },

    computed: {},
};
</script>

<style scoped>
.target-svg > svg {
    font-size: 0.1rem;
    fill: inherit;
}
/* src="@/assets/styles/tailwind.css" */
</style>