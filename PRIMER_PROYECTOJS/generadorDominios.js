let pronum = ["El", "Nuestro"];
let adj = ["alto", "grande"];
let noun = ["equipo", "luz"];
let ext = [".com", ".net", ".cr", ".org"];

function generarDominios() {
    let dominios = [];
    for (let i = 0; i < pronum.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < ext.length; l++) {
                    dominios.push(pronum[i] + adj[j] + noun[k] + ext[l]);
                }
            }
        }
    }
    return dominios;
}

let dominiosGenerados = generarDominios();
console.log(dominiosGenerados);