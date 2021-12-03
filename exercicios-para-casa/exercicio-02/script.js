// considerar a lista com objetos:
const  pessoas  =  [
    {
        nome : 'Joana' ,
        profissao : 'atriz' ,
        pais : 'Canadá' ,
    } ,
    {
        nome : 'Emma' ,
        profissao : 'desenvolvedora frontend' ,
        pais : 'EUA' ,
    } ,
    {
        nome : 'Julia' ,
        profissao : 'economista' ,
        pais : 'Brasil' ,
    } ,
    {
        nome : 'Claudia' ,
        profissao : 'desenvolvedora frontend' ,
        pais : 'Brasil' ,
    } ,
] ;
/ *
1. ETAPA1: Mostre no console como todas as propriedades e valores da variável pessoas;
2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com uma mensagem: "infelizmente não mora na área pesquisada"; 
3. ETAPA3: Crie uma nova array que retorna ao país onde moram como pessoas que trabalham como desenvolvedoras frontend;
* /

// etapa 1
console . log ( pessoas ) ;

// etapa 2
    // considerar a lista com objetos:
    const  pessoas  =  [ {
            nome : 'Joana' ,
            profissao : 'atriz' ,
            pais : 'Canadá' ,
        } ,
        {
            nome : 'Emma' ,
            profissao : 'desenvolvedora frontend' ,
            pais : 'EUA' ,
        } ,
        {
            nome : 'Julia' ,
            profissao : 'economista' ,
            pais : 'Brasil' ,
        } ,
        {
            nome : 'Claudia' ,
            profissao : 'desenvolvedora frontend' ,
            pais : 'Brasil' ,
        } ,
    ] ;
    / *
    1. ETAPA1: Mostre no console como todas as propriedades e valores da variável pessoas;
    2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com uma mensagem: "infelizmente não mora na área pesquisada"; 
    3. ETAPA3: Crie uma nova array que retorna ao país onde moram como pessoas que trabalham como desenvolvedoras frontend;
    * /

    // ETAPA 1
    console . log ( pessoas ) ;

    // ETAPA 2

    const  filtroPaisBrasil  =  pessoas.filtro ( função  (Brasil) {
        voltar  Brasil . pais  ==  'Brasil'
    } ) ;

    const  filtroEstrangeiros  =  pessoas . filtro ( função  ( Estrangeiros )  {
        voltar  Estrangeiros . pais  ! =  'Brasil'
    } ) ;

    const  resultadoFinalBrasil  =  filtroPaisBrasil . map ( função ( Brasil ) {  retornar  Brasil . nome  +  '-'  +  Brasil . profissao } ) ;

    console . log ( resultadoFinalBrasil )

    const  resultadoFinalEstrangeiros  =  filtroEstrangeiros . map ( função ( Estrangeiros ) {  voltar  Estrangeiros . nome  +  '-'  +  'Infelizmente não mora na área pesquisada' } ) ;

    console . log ( resultadoFinalEstrangeiros )


    // ETAPA 3
     const  devsFrontEnd  =  pessoas . filtro ( função  (devs)  {
        return  devs.profissao  == 'frontend desenvolvedora'
    } ) ;

    const  resultadoFinalDevsFrontEnd  =  devsFrontEnd . map ( função ( devs ) {  return  devs . nome  +  '-'  +  devs . pais  +  '-'  +  devs . profissao } ) ;

    console . log ( resultadoFinalDevsFrontEnd )