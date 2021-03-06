const roads = [
    "Alice's House-Bob's House", "Alice's House-Post Office", "Daria's House-Ernie's House",
    "Ernie's House-Grete's House", "Grete's House-Shop", "Marketplace-Post Office",
    "Alice's House-Cabin", "Bob's House-Town Hall", "Daria's House-Town Hall", "Grete's House-Farm",
    "Marketplace-Farm", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"];


function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
        graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

console.log(roadGraph)