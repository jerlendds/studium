<template>
    <div class="w-full">
        <stats 
            :notesAddedToday="0" 
            :notesAddedMonth="0"
            :notesReviewedToday="0" />
    </div>
</template>

<script>
// import "vue-material-design-icons";
import QuickStats from "@/components/overview/QuickStats.vue";

export default {
    name: "Overview",

    props: [],

    components: {
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

<style scoped>
</style>