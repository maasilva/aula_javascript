const uniqueId = Symbol('Hello');

Symbol.iterator

const arr = [1,2,3,4]
const str = 'Digital Innovation One'

//Generators

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.lenght; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
}

