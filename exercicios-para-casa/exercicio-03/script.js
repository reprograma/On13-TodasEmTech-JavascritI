/ * 
1. ETAPA1: Crie uma lista que receba as informações: nome, carga, idade, salário e anos de empresa pelo menos 5 funções de alguma empresa;
2. ETAPA2: consulta um aumento de 10% ao salário de funções que leva 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
3. ETAPA3: Crie uma nova lista apenas com funções que têm mais do que 40 anos; 
4. ETAPA4: Diga qual é a média de idade das funções da empresa
* /

// etapa 1
// ETAPA 1
const  funcionarios1  =  [
    {
        nome : 'Eduarda' ,
@@ -47,4 +47,73 @@ const funcionarios1 = [
        salário : 1045 ,
        anosDeEmpresa : 1 ,
    } ,
] 
]


// const devsFrontEnd = pessoas.filter (function (devs) {
// // return devs.profissao == 'desenvolvedora frontend'
// //});

// // const resultadoFinalDevsFrontEnd = devsFrontEnd.map (function (devs) {return devs.nome + '-' + devs.pais + '-' + devs.profissao});

// // console.log (resultadoFinalDevsFrontEnd)


// ETAPA2: consulta um aumento de 10% ao salário de funções que leva 3 anos de empresa ou mais, aos que não possuem 3 anos de empresa dê um aumento de 5%;
// funcionários com 3 anos ou mais de empresa
const  funcionarios3Anos  =  funcionarios1 . filtro ( função  ( antigos )  {
    voltar  antigos . anosDeEmpresa  > =  3
} ) ;

const  aumento  =  funcionarios3Anos . map ( função ( antigos ) { 
    voltar  antigos . nome  +  '-'  +  antigos . salário  +  '-'  +  'Salário reajustado:'  +  ( antigos . salário  *  0.1  +  salário . antigos )
} ) ;

console . log ( aumento )

// funcionários com menos de 3 anos de empresa
const  funcionariosMenosDe3Anos  =  funcionarios1 . filtro ( função  ( novos )  {
    return  novos . anosDeEmpresa  <  3
} ) ;

const  aumento1  =  funcionariosMenosDe3Anos . map ( função ( novos ) { 
    return  novos . nome  +  '-'  +  novos . salário  +  '-'  +  'Salário reajustado:'  +  ( novos . salário  *  0,05  +  novos . salário )
} ) ;

console . log ( aumento1 )


// 3. ETAPA3: Crie uma nova lista apenas com funções que têm mais do que 40 anos; 
const  funcionarios2  =  [
    {
        nome : 'Sandra' ,
        cargor : 'Coordenadora' ,
        idade : 46 ,
        salário : 9000 ,
        anosDeEmpresa : 6 ,
    } ,
    {
        nome : 'Geovane' ,
        cargor : 'UX Desing' ,
        idade : 45 ,
        salário : 7000 ,
        anosDeEmpresa : 3 ,
    } ,
    {
        nome : 'Gustavo' ,
        cargor : 'Desenvolvedor frontend Senior' ,
        idade : 42 ,
        salário : 12.000 ,
        anosDeEmpresa : 1 ,
    } ,
    {
        nome : 'Maria' ,
        cargor : 'Consultora Senior' ,
        idade : 48 ,
        salário : 2.800 ,
        anosDeEmpresa : 5 ,
    } ,
]

// 4. ETAPA4: Diga qual é a média de idade des funcionáries da empresa
const  mediaFuncionarios 