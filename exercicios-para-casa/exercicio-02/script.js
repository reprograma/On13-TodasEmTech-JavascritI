    // considere a lista com objetos:
    const pessoas = [{
            nome: 'Joana',
            profissao: 'atriz',
            pais: 'Canadá',
        },
        {
            nome: 'Emma',
            profissao: 'desenvolvedora frontend',
            pais: 'EUA',
        },
        {
            nome: 'Julia',
            profissao: 'economista',
            pais: 'Brasil',
        },
        {
            nome: 'Claudia',
            profissao: 'desenvolvedora frontend',
            pais: 'Brasil',
        },
    ];
    /*
    1. ETAPA1: Mostre no console as todas as propriedades e valores da variável pessoas;

    2. ETAPA2: Crie uma nova array que retorne o nome e a profissão das pessoas que vivem no Brasil, para as que não vivem no Brasil retorne o nome da pessoa com a mensagem: " infelizmente não mora na área pesquisada"; 

    3. ETAPA3: Crie uma nova array que retorne o país onde moram as pessoas que trabalham como desenvolvedoras frontend;
    */

    //ETAPA 1
    console.log(pessoas);

    //ETAPA 2

    const filtroPaisBrasil = pessoas.filter(function (Brasil){
        return Brasil.pais == 'Brasil'
    });

    const filtroEstrangeiros = pessoas.filter(function (Estrangeiros) {
        return Estrangeiros.pais != 'Brasil'
    });

    const resultadoFinalBrasil = filtroPaisBrasil.map(function(Brasil){ return Brasil.nome + ' - ' + Brasil.profissao});

    console.log(resultadoFinalBrasil)

    const resultadoFinalEstrangeiros = filtroEstrangeiros.map(function(Estrangeiros){ return Estrangeiros.nome + ' - ' + 'Infelizmente não mora na área pesquisada'});

    console.log(resultadoFinalEstrangeiros)

   
    //ETAPA 3
     const devsFrontEnd = pessoas.filter(function (devs) {
        return devs.profissao == 'desenvolvedora frontend'
    });

    const resultadoFinalDevsFrontEnd = devsFrontEnd.map(function(devs){ return devs.nome + ' - ' + devs.pais + ' - ' + devs.profissao});

    console.log(resultadoFinalDevsFrontEnd)
