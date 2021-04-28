<template>
    <section
        class="rounded shadow-4 flex flex-col w-9/12 m-20 rounded-2xl px-6 h-full bg-white-100"
        style="transition: width .3s ease-in"
    >
        <textarea
            class="w-0 h-0 bg-opacity-0 overflow-hidden"
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
import showdown from 'showdown';
showdown.setOption('metadata', true);

export default {
    name: 'Overview',

    components: {
    },


    data() {
        return {
            sourceText: `# This is an h1 tag
## This is an h2 tag
###### This is an h6 tag

It's very easy to make some words **bold** and other words *italic* with Markdown. 
You can even [link to Google!](http://google.com)

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

http://github.com - automatic!
[GitHub](http://github.com)



As Kanye West said:

> We're living the future so
> the present is our past.

I think you should use an
\`<addr>\` element here instead.
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`
\`\`\`
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\``,
            renderNode: '',
            converter: undefined
        }
    },


    mounted() {
        const classMap = {
            p: 'py-1 px-0.5',
            h1: 'text-3xl my-2 font-semibold',
            h2: 'text-2xl my-2 font-semibold',
            h3: 'text-xl my-1.5 font-semibold',
            h4: 'text-xl my-1.5 font-semibold',
            h5: 'text-lg my-1 font-semibold',
            h6: 'text-lg my-1 font-semibold',
            ol: 'mb-4 ml-8 list-decimal',
            ul: 'mb-4 ml-8 list-disc',
            li: 'mb-0 ml-8 list-disc',
            pre: 'rounded w-min code text-white-50 font-normal py-1',
            code: 'rounded code font-normal px-1 text-white-50 py-0.5 bg-gray-900 rounded',
            a: 'text-blue-600 hover:underline',
            blockquote: 'bg-opacity-40 rounded-sm w-min min-w-1/2 p-2 mx-3 bg-gray-100 mb-4 border-1 border-gray-300 italic',


        }
        const bindings = Object.keys(classMap)
            .map(key => ({
                type: 'output',
                regex: new RegExp(`<${key}(.*)>`, 'g'),
                replace: `<${key} class="${classMap[key]}" $1>`,

            }));

        const conv = new showdown.Converter({
            extensions: [...bindings]
        });
        conv.setFlavor('github');

        this.converter = conv

        this.convertToHtml()
    },

    methods: {
        convertToHtml: function () {
            var html = this.converter.makeHtml(this.sourceText)
            this.renderNode = html
        },

        focusText: function (e) {
            console.log(e)
            this.$refs.sourcenode.focus()
        },
    }

}
</script>

<style lang="scss">
</style>
