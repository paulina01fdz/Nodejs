let desorden = [2,3,6,7,1,15,13,4,5,9,8,10,11,12,14];

function buscarNumeros (){
    const encontrarNumero = desorden.find (i => i == 1)
        console.log (encontrarNumero)
}


function ordenarNumeros (){
    const ordenados = desorden.sort((a, b) => a -b);
    console.log ("Arreglo ordenado" + ordenados)
}