<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<script>
export default {
    name: "About",

    mounted() {

    },

    data() {
        return {

        }
    },

    components: {},

    methods: {
        generateStatsGrid() {
            var elementList = []
            var days = 365
            for (var i = 0; i < days; i++) {
                var current_day = 0
                if (current_day < 7) {
                    if (current_day === 7) {
                        current_day = 0
                    }
                    if (current_day != 0) {
                        elementList.append({ colNum: current_day, day: i })
                    }
                }

            }
        }
    }
}
</script>