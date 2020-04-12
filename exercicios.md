Enunciados:

1) Imprime o seu nome e o número de chamada.

    INICIO
        
    literal nome; 
    numérico numero;

    escreva "Digite seu nome:";
    leia nome;

    escreva "Digite seu número:";
    leia numero;

    escreva "Olá " + nome + ", seu número é: " + numero;

    FIM

2) Receber o nome, endereço e telefone de uma empresa e imprimir os dados para confirmação.

    INICIO
        
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

    INICIO
        
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

    INICIO

    numerico x;

    escreva "Digite o valor Desejado: ";

    leia x;
    
    escreva "Seu sucessor é: " + x+1;
    escreva "Seu antecessor é: " + x-1;

    FIM

5) Ler um número inteiro e imprimir seu quadrado.

    INICIO

    numerico x;

    escreva "Digite o valor Desejado: ";

    leia x;

    escreva "Seu quadrado é: " + (x*x);

    FIM

6) Receber um valor qualquer do teclado e imprimir esse valor com reajuste de 10%.

    INICIO

    numerico x

    escreva "Digite o valor Desejado: ";

    leia x

    numerico reajuste = (x/100)*10

    escreva "Valor reajustado: " + (x-reajuste);

    FIM

7) Solicitar o valor de um produto, calcular o desconto de 5,5% e imprimir o valor a pagar.

    INICIO
    
    numerico valorProduto;

    escreva "Digite o valor do Produto: ";

    leia valorProduto

    const desconto = valorProduto * 0.055

    console.log("O valor a ser pago é: " + (valorProduto-desconto))
    FIM

8) Ler o peso em gramas e o preço do quilo da castanha-do-pará e imprimir o preço que o consumidor deverá pagar.

    INICIO
    
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

    INICIO
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
11) Para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
12) Informe o tempo gasto numa viagem (em horas), a velocidade média e calcule o consumo.
13) Calcular o consumo de um veículo conforme os dados informados no teclado: tempo em horas, velocidade média e distância. 
14) Cálculo de um salario líquido de um professor. Serão fornecidos valor da hora aula, numero de aulas dadas e o % de desconto do INSS.
15) Ler uma temperatura em graus Celsius e transformá-la em graus Fahrenheit.

