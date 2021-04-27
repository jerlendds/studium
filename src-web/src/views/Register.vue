<template>

    <div class="w-full max-w-sm mx-auto my-auto overflow-hidden bg-white-100 rounded-lg shadow-md dark:bg-gray-800">
        <div class="px-6 py-4">
            <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">Studium</h2>

            <p class="mt-1 text-center text-gray-900 dark:text-gray-400">Create your account</p>

            <form @submit.prevent="register">
                <div class="w-full mt-4">
                    <input
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-white-400 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        type="text"
                        v-model="username"
                        placeholder="Username"
                        aria-label="Username"
                    >
                </div>

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
                        v-model="passwordOne"
                        placeholder="Password"
                        aria-label="Password"
                    >
                </div>

                <div class="w-full mt-4">
                    <input
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-white-400 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        type="password"
                        v-model="passwordTwo"
                        placeholder="Confirm password"
                        aria-label="Confirm password"
                    >
                </div>

                <div class="flex items-center justify-center bg-green-500 text-white-50 rounded mt-4">
                    <button
                        class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                        type="button"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',

    components: {

    },

    data() {
        return {
            username: null,
            email: null,
            passwordOne: null,
            passwordTwo: null,
        }
    },

    mounted() {

    },

    methods: {
        register: function () {
            let data = {
                username: this.username,
                email: this.email,
                password_one: this.passwordOne,
                password_two: this.passwordTwo
            }
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(err => console.log(err))
        }
    }
}
</script>