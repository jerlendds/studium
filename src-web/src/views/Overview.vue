<template>
    <section class="flex w-full items-center justify-around">
        <textarea
            id="source-text"
            ref="source-text"
            class=""
            v-model="sourceText"
            @keydown="convertToHtml"
        >

        </textarea>
        <div
            v-html="renderNode"
            class="inherit list-disc"
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
            sourceText: `### Atx Style

You can create a heading by adding one or more # symbols before your heading text. The number of # you use will determine the size of the heading. This is similar to [**atx style**][atx].

\`\`\`md
# The largest heading (an <h1> tag)
## The second largest heading (an <h2> tag)
…
###### The 6th largest heading (an <h6> tag)
\`\`\`

The space between \`#\` and the heading text is not required but you can make that space mandatory by enabling the option **\`requireSpaceBeforeHeadingText\`**.

You can wrap the headings in \`#\`. Both leading and trailing \`#\` will be removed.

\`\`\`md
## My Heading ##
\`\`\`

If, for some reason, you need to keep a leading or trailing \`#\`, you can either add a space or escape it:

\`\`\`md
# # My header # #

## My Header # #
\`\`\`

### Setext style

You can also use [**setext style**][setext] headings, although only two levels are available.

\`\`\`md
This is an H1
=============
    
This is an H2
-------------
\`\`\`

Testing stuff \`here\` ok`,
            renderNode: '',
            converter: undefined
        }
    },

    mounted() {
        const classMap = {
            h1: 'text-2xl',
            h2: 'text-3xl',
            h3: 'text-4xl',
            h4: 'text-5xl',
            h5: 'text-6xl',
            h6: 'text-7xl',
            ul: 'list-disc',
            li: 'list-disc',
            pre: 'bg-gray-900 px-1 text-white-50 rounded w-min',
            code: 'text-inherit rounded bg-inherit',
        }

        const bindings = Object.keys(classMap)
            .map(key => ({
                type: 'output',
                regex: new RegExp(`<${key}(.*)>`, 'g'),
                replace: `<${key} class="${classMap[key]}" $1>`
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
        }

    }

}
</script>

<style lang="scss" scoped>
pre,
code,
kbd,
samp {
    font-family: inherit;
}
.bg-inherit {
    background-color: inherit !important;
    background: inherit !important;
}
</style>
