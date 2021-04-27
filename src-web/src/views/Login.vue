<template>
    <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-sm mx-auto my-auto overflow-hidden bg-white-100 rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
                <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Studium</h2>

                <p class="mt-1 text-center text-gray-900 dark:text-gray-400">Login or create account</p>

                <form @submit.prevent="login">
                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-white-400 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="email"
                            v-model="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                        >
                    </div>

                    <div class="w-full mt-4">
                        <input
                            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-white-400 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="password"
                            v-model="password"
                            placeholder="Password"
                            aria-label="Password"
                        >
                    </div>

                    <div class="flex items-center justify-between mt-4">
                        <a
                            href="#"
                            class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                        >Forget Password?</a>

                        <button
                            class="px-4 py-2 leading-5 transition-colors duration-200 transform bg-green-500 text-white-50 rounded hover:bg-gray-600 focus:outline-none"
                            type="button"
                            @click="login"
                        >Login</button>
                    </div>
                </form>
            </div>

            <div class="flex items-center justify-center py-4 text-center dark:bg-gray-700">
                <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <router-link
                    to="/register"
                    class="mx-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500"
                >Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',

    components: {

    },

    data() {
        return {
            email: null,
            password: null,
        }
    },

    mounted() {

    },

    methods: {
        login: function () {
            let username = this.email
            let password = this.password

            let bodyFormData = new FormData()

            bodyFormData.append("grant_type", '')
            bodyFormData.append("username", username)
            bodyFormData.append("password", password)
            bodyFormData.append("scope", '')
            bodyFormData.append("client_id", '')
            bodyFormData.append("client_secret", '')

            this.$store.dispatch('login', bodyFormData)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
        }
    }
}
</script>