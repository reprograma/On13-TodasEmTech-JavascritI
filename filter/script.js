-filter
const idades = [23, 50, 12, 65, 10, 5, 80]


//o nosso filter ele filtra . 
const maioresDeIdade = idades.filter(function(idade) {
    return idade >= 18;
})

console.log(maioresDeIdade);