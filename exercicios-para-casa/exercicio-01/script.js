/*
1. ETAPA1: Crie uma variável que contenha uma array com até 6 itens;

2. ETAPA2: Remova o primeiro item desta array;

3. ETAPA3: Ordene a sua lista em ordem alfabética ou numérica (de forma crescente e/ou descrescente);

4. ETAPA4: Veja se existe o item com valor "salada" dentro da sua array; 

*/

série  const = ['Anatomia da Grey','Amigos', 'Lúcifer','Escuro' , 'Lupin','Ternos'] ;
console . log ( série ) ;

// Removendo o primeiro item
série . shift ( ) ;
console . log ( série ) ;

// Ordenando a lista em ordem alfabética
série . sort ( ) ;
console . log ( série ) ;

// Vendo se existe algum item com nome salada dentro da matriz
console . log ( série . inclui ( "Salada" ) ) ; 