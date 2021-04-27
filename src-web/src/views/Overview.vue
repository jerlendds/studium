<template>
    <section class="flex">
        <div
            v-for="block in noteblocks"
            :key="block.id"
        >

        </div>
    </section>
</template>

<script>

// import '@/utils/core.js';

export default {
    name: 'Overview',

    data() {
        return {
            noteblocks: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],

            actualNote: {
                last_seen: '',
                c_time: '',
                owner: {
                    name: '',
                    email: '',
                },
                note: {
                    text: 'normal note stuff here',
                    bullet: 'A bullet point',
                    flashcard: {
                        source_url: 'wikipedia.org',
                        top: 'What color is a rainbow?',
                        bottom: 'A rainbow is whatever color you want it to be!',
                        review_dates: []

                    },
                    text_1: 'more note text stuff'
                }
            }
        }
    },


    methods: {

    }
}
</script>