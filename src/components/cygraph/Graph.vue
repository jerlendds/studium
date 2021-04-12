<template>
    <div
        v-if="showCyGraph"
        ref="gnodes"
        id="gnodes"
        style="height: 400px; width: 400px;"
    ></div>
</template>

<script>
import cytoscape from "cytoscape";

export default {
    name: "Graph",

    components: { HelloWorld },

    data() {
        return {
            showGraph: true,
            graph: undefined,
        };
    },

    mounted() {
        this.initGraph();
    },

    methods: {
        initGraph() {
            console.log(this.$refs.gnodes);
            var cyGraph = cytoscape({
                container: this.$refs.gnodes,
                elements: [
                    // list of graph elements to start with
                    {
                        // node a
                        data: { id: "a" },
                    },
                    {
                        // node b
                        data: { id: "b" },
                    },
                    {
                        // edge ab
                        data: { id: "ab", source: "a", target: "b" },
                    },
                ],

                style: [
                    // the stylesheet for the graph
                    {
                        selector: "node",
                        style: {
                            "background-color": "#666",
                            label: "data(id)",
                        },
                    },

                    {
                        selector: "edge",
                        style: {
                            width: 3,
                            "line-color": "#ccc",
                            "target-arrow-color": "#ccc",
                            "target-arrow-shape": "triangle",
                            "curve-style": "bezier",
                        },
                    },
                ],

                layout: {
                    name: "grid",
                    rows: 1,
                },
            });

            cyGraph.add([
                {
                    group: "nodes",
                    data: { id: "n0" },
                    position: { x: 100, y: 100 },
                },
                {
                    group: "nodes",
                    data: { id: "n1" },
                    position: { x: 200, y: 200 },
                },
                {
                    group: "edges",
                    data: { id: "e0", source: "n0", target: "b" },
                },
                {
                    group: "edges",
                    data: { id: "e1", source: "n1", target: "n0" },
                },
            ]);
        },
    },
};
</script>