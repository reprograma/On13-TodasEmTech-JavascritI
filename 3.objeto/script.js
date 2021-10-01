const sobrinhosDaVivian = [
    {
      nome: 'Beyoncé',
      idade: 1,
      castrado: true,
      cor: ['amarelo', 'branco', 'marrom', 'dourado'],
      caracteristica: ['brincalhão', 'dengoso'],
    },
    {
      nome: 'Iza',
      idade: 1,
      castrado: true,
      cor: ['branco', 'preto'],
      caracteristica: ['fofinha', 'sociável'],
    }
  ];

  const sobrinhosNome = sobrinhosDaVivian.map(function(sobrinho){
    return console.log(sobrinho.nome);
  })

/*
  console.log(sobrinhosDaVivian[0]);
  console.log(sobrinhosDaVivian[0].cor[1]);
*/

let livroDosAbracos = {
  autor: "Eduardo Galeano",
  nome: "O livro dos abraços", 
  traducao: "Eric Nepomuceno", 
  ehBom: true,
  poemas: ["o mundo", "a origem do mundo", "a função da arte/1"],
  numeroDePaginas: 320 
}


//console.log(livroDosAbracos.poemas[2])
