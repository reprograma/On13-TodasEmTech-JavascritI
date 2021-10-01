const idades =[23, 50, 12, 65, 10, 5, 80]

//O filter filtra - pode saber qual o maior, o menor, o diferente 
const maiorDeIdade = idades.filter(function(idade){
    return idade >=18;

})

console.log (maiorDeIdade);