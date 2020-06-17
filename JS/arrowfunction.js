var soma = (a, b) => a + b;

console.log(soma(5, 15));

var obj = {
    ShowContext: function ShowContext(){
        setTimeout(() =>{
               this.log('After 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.ShowContext();

//lazy evaluation
function RandonNumber(){
    console.log('Generating a random number...');
    return Math.random() * 10;
}


function multiply(a, b = RandonNumber()){
    return a * b;
}

console.log(multiply(5, 270));
console.log(multiply(5,));


var nome = 'Digital Innovation One'

var obj = {
    nome,
}

console.log (obj);

var propName = 'Test'
var obj = {
    [propName + 'concat']: 'prop value'
}

console.log(obj);
