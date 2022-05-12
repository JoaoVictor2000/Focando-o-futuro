/*
    Function() construtor

    * expressão new
    * Criar um novo objeto
    * this keyword
    *
*/
function Person(name, age, tamanho) {
   this.name = name;
   this.age = age;
   this.tamanho = tamanho;
    this.walk = function() {
        return "andando";
    }
    
}

const mayk = new Person('Juau', 78, 14.2);
console.log(mayk);