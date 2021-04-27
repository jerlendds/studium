<template>
    <div
        class=""
        id="app"
    >
        <!-- <router-link to="/about">About</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span> -->
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',

    computed: {
        isLoggedIn: function () { return this.$store.getters.isLoggedIn }
    },

    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/overview')
                })
        }
    },

    created: function () {
        this.$http.interceptors.response.use(undefined, function (err) {
            return new Promise(function () {
                if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                    // eslint-disable-next-line no-undef
                    this.$store.dispatch(logout)
                }
                throw err;
            });
        });
    }
}
</script>

<style src="@/assets/styles/tailwind.css">
</style>

