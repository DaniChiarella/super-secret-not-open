Enunciados:

1) Imprime o seu nome e o número de chamada.

    INÍCIO
        
    literal nome; 
    numérico numero;

    escreva "Digite seu nome:";
    leia nome;

    escreva "Digite seu número:";
    leia numero;

    escreva "Olá " + nome + ", seu número é: " + numero;

    FIM

2) Receber o nome, endereço e telefone de uma empresa e imprimir os dados para confirmação.

    INÍCIO
        
    literal nomeEmpresa, endEmpresa; 
    numérico telEmpresa;

    escreva "Digite o nome da sua empresa:";
    leia nomeEmpresa;

    escreva "Digite o endereço da sua empresa";
    leia endEmpresa;

    escreva "Digite o telefone da sua empresa:";
    leia telEmpresa;


    escreva "Por favor confirme os dados: Nome:" + nomeEmpresa + "Endereço: " + endEmpresa + " Tel: " + telEmpresa;

    FIM

3) Fazer um algoritmo que recebe do usuário 4 notas e exibe a média aritmética dos números.

    INÍCIO
        
    numerico[4] notas;
    numerico media;

    para (numerico i = 0; i < notas.lenght; i++){
        escreva "Digite o Valor da Nota " + (i+1) + ":";
        leia notas[i];
        media += notas[i];
    }

    escreva "Sua média aritmética é de: " + media/notas.length;

    FIM

4) O algoritmo receberá um número inteiro e imprimirá seu sucessor e seu antecessor.

    INÍCIO

    numerico x;

    escreva "Digite o valor Desejado: ";

    leia x;
    
    escreva "Seu sucessor é: " + x+1;
    escreva "Seu antecessor é: " + x-1;

    FIM

5) Ler um número inteiro e imprimir seu quadrado.

    INÍCIO

    numerico x;

    escreva "Digite o valor Desejado: ";

    leia x;

    escreva "Seu quadrado é: " + (x*x);

    FIM

6) Receber um valor qualquer do teclado e imprimir esse valor com reajuste de 10%.

    INÍCIO

    numerico x

    escreva "Digite o valor Desejado: ";

    leia x

    numerico reajuste = (x/100)*10

    escreva "Valor reajustado: " + (x-reajuste);

    FIM

7) Solicitar o valor de um produto, calcular o desconto de 5,5% e imprimir o valor a pagar.

    INÍCIO
    
    numerico valorProduto;

    escreva "Digite o valor do Produto: ";

    leia valorProduto

    const desconto = valorProduto * 0.055

    console.log("O valor a ser pago é: " + (valorProduto-desconto))
    FIM

8) Ler o peso em gramas e o preço do quilo da castanha-do-pará e imprimir o preço que o consumidor deverá pagar.

    INÍCIO
    
    numerico precoQuilo, gramas;

    escreva "Digite o do Preco do Quilo da Castanha-do-Pará: ";

    leia precoQuilo

    numerico precoGrama = 20/1000
    
    escreva "Digite a quantidade de gramas que o cliente comprou: ";

    leia gramas

    numerico precoFinal = "R$ " + (precoGrama * gramas)  

    escreva "Total a pagar: " + precoFinal;

    FIM

9) Ler a quantidade de meninos e meninas de uma sala. Calcular e imprimir o percentual de meninos e meninas.

    INÍCIO
    numerico qtdMenino, qtdMenina;

    escreva "Digite a quantidade de meninos presentes na sala de aula: ";
    leia qtdMenino;

    escreva "Digite a quantidade de meninas presentes na sala de aula: ";
    leia qtdMenina;

    numerico ttlAlunos = qtdMenina + qtdMenino
    
    numerico perMeninas = (qtdMenina/ttlAlunos) * 100
    
    numerico perMeninos = (qtdMenino/ttlAlunos) * 100

    escreva "Percentual Meninas: " + perMeninas;

    escreva "Percentual Meninos: " + perMeninos;
    FIM

10) Solicitar o tempo inicial de uma competição de uma maratona e o tempo final do primeiro corredor. Calcule o tempo de duração da maratona desse competidor.

    INÍCIO

    numerico horas, minutos, horasFinal, minutosFinal, totalMinutos, finalHora, finalMinutos;

    escreva "Informe o horário de início da prova (Horas)";
    leia horas;

    escreva "Informe o horário de início da prova (Minutos)";
    leia minutos;

    escreva "Informe o horário de fim da prova (Horas)";
    leia horasFinal;

    escreva "Informe o horário de fim da prova (Minutos)";
    leia minutosFinal;

    numerico tempoinicio = (horas*60)+minutos;
    numerico tempofim = (horasFinal*60)+minutosFinal;

    totalMinutos = tempofim-tempoinicio;
    finalHora = totalMinutos div 60;
    finalMinutos = totalMinutos % 60
    escreva "A duração da prova foi de:  "+ finalHora + ":" + finalMinutos;
    FIM

11) Para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

    INÍCIO
    numerico validos, brancos, nulos, total, pctValidos, pctNulos, pctBrancos;

    escreva "Informe o número de votos válidos";
    leia validos;

    escreva "Informe o número de votos nulos";
    leia nulos;

    escreva "Informe o número de votos brancos";
    leia brancos;

    total = validos+nulos+brancos;

    pctValidos = (validos*100)/total;
    pctNulos = (nulos*100)/total;
    pctBrancos = (brancos*100)/total;

    escreva "Percentual de votos válidos:";
    escreva pctValidos;

    escreva "Percentual de votos nulos:";
    escreva pctNulos;

    escreva "Percentual de votos brancos:";
    escreva pctBrancos;

    FIM


12) Informe o tempo gasto numa viagem (em horas), a velocidade média e calcule o consumo.

    INÍCIO
    numerico horas, velMedia, distancia, gastoMedio, consumo;
    escreva "Informe o tempo gasto na viagem em horas";
    leia horas;
    escreva "Informe a velocidade média do veículo";
    leia velMedia;
    escreva "Informe o gasto de combustivel por km do veículo";
    leia gastoMedio;
    distancia = horas * velMedia;
    consumo = distancia / gastoMedio;
    escreva "Combustível gasto (em litros):";
    escreva consumo;
    FIM


14) Cálculo de um salario líquido de um professor. Serão fornecidos valor da hora aula, numero de aulas dadas e o % de desconto do INSS.

    INÍCIO
    numerico valorHora, numAulas, valorMinuto, liquido, bruto, INSS;
    escreva "Digite o valor da hora de aula";
    leia valorHora;
    escreva "Digite o numero de aulas";
    leia numAulas;
    valorMinuto = X/60;
    bruto = valorMinuto*(numAulas*50)
    escreva "Digite o desconto do INSS (em %)";
    leia INSS;
    liquido = bruto - (bruto*(INSS/100));
    escreva "O salário liquido (em R$) do professor é de:"
    escreva liquido;
    FIM

15) Ler uma temperatura em graus Celsius e transformá-la em graus Fahrenheit.

    INÍCIO
    numerico tempCelsius, tempFahrenheit;
    escreva "Digite a temperatura em graus Celsius";
    leia tempCelsius;
    tempFahrenheit = (tempCelsius * (9/5)) + 32;
    escreva "A temperatura em Fahrenheit:"
    escreva tempFahrenheit;
    FIM