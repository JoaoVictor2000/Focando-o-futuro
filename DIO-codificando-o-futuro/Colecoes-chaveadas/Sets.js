const meuarray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function mySet(arr){
    const setao = Set(arr);

    return [...setao];
}
console.log(mySet(meuarray));