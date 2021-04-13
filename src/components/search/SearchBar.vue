<template>
  <form
    class="flex w-11/12 items-center justify-center ">
    <input
      type="text"
      :placeholder="searchPlaceholder"
      v-model="searchQuery"
      class="bg-lightgray-50 placeholder-lightgray-300 flex-grow font-sans min-w-max p-2 rounded-l"/>
    <button class="flex">
      <search-icon class="bg-lightgray-50 p-2 rounded-r" />
    </button>
  </form>
</template>

<script>


import Magnify from "vue-material-design-icons/Magnify";

export default {
    name: "SearchBar",

    props: ["searchInput", "placeholderValue"],

    components: {
        searchIcon: Magnify,
    },

    data() {
        return {
            searchQuery: '',
            searchPlaceholder: 'Search...'
        };
    },

    mounted() {
        this.getPlaceholder()
        this.getSearch()
    },

    methods: {
        getSearch: function() {
            this.searchQuery = String(this.searchInput);
            return this.searchQuery
        },
        getPlaceholder: function() {
            this.searchPlaceholder = this.placeholderValue;
            return this.searchPlaceholder
        }
    },

    computed: {
    },
};
</script>

<style scoped>
</style>