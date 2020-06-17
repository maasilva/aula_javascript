//rest operator
//strings, array, literal objetos e objetos iteraveis

function sum(...args){
    return args.reduce((acc,value) => acc + value, 0);

}

console.log(sum(5,5,5,2,5,6,7,));