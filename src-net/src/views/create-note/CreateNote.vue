<template>
    <section
        class="rounded shadow-2xl flex flex-col rounded-2xl px-6 my-6 bg-white-100"
        style="transition: width .3s ease-in"
    >
        <textarea
            class="w-full h-0 bg-opacity-0 overflow-hidden"
            id="source-text"
            ref="sourcenode"
            v-model="sourceText"
            @keydown="convertToHtml"
        >

        </textarea>
        <div
            ref="renderText"
            v-html="renderNode"
            class="inherit list-disc flex flex-col text-base overflow-y-scroll w-full h-full"
            @click.prevent="e => focusText(e)"
            style="max-height: 80vh; min-height: 80vh;"
        >

        </div>

    </section>
</template>

<script>


export default {
    name: 'CreateNote',

    components: {
    },


    data() {
        return {
            sourceText: '',
            renderNode: '',
            converter: undefined
        }
    },


    mounted() {
        const classMap = {
            p: 'py-1 px-0.5 my-1',
            h1: 'text-3xl my-1.5 font-semibold',
            h2: 'text-2xl my-1.5 font-semibold',
            h3: 'text-xl my-1.5 font-semibold',
            h4: 'text-xl my-1.5 font-semibold',
            h5: 'text-lg my-1 font-semibold',
            h6: 'text-lg my-1 font-semibold',
            ol: 'mb-4 ml-8 list-decimal',
            ul: 'mb-4 ml-8 list-disc',
            li: 'mb-0 ml-8 list-inherit',
            pre: 'rounded w-min code text-white-50 font-normal py-1 my-1',
            code: 'rounded code font-normal px-1 text-white-50 py-1 bg-gray-900 rounded my-1',
            a: 'text-blue-600 hover:underline',
            blockquote: 'bg-opacity-40 rounded-sm w-min min-w-1/2 p-2 mx-3 bg-gray-100 mb-4 border-1 border-gray-300 italic',
        }
        // const bindings = Object.keys(classMap)
        //     .map(key => ({
        //         type: 'output',
        //         regex: new RegExp(`<${key}(.*)>`, 'g'),
        //         replace: `<${key} class="${classMap[key]}" $1>`,

        //     }));

        // const conv = new showdown.Converter({
        //     extensions: [...bindings]
        // });
        // conv.setFlavor('github');

        // this.converter = conv

        // this.convertToHtml()

    },

    methods: {
        convertToHtml: function () {
            // var html = this.converter.makeHtml(this.sourceText)
            // this.renderNode = html
        },

        focusText: function (e) {
            // console.log(e)
            // this.$refs.sourcenode.focus()
        },
    }
}
</script>

<style lang="scss">
.list-inherit {
    list-style: inherit;
}
</style>