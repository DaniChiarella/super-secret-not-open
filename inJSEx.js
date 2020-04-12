// 1) Imprime o seu nome e o número de chamada.

    let nome, numero

    //fazer o recebimento do input em visualg

    nome = "afonso";
    numero = 5
    console.log("Olá " + nome + ", seu número é: " + numero)

//2) Receber o nome, endereço e telefone de uma empresa e imprimir os dados para confirmação.

    let nomeEmpresa, endEmpresa, telEmpresa

    //fazer o recebimento do input em visualg

    nomeEmpresa = "Petrobras"
    endEmpresa = "Rua Jesus Arnaldo"
    telEmpresa = 5511998400232

    console.log("Por favor confirme os dados: " + "Nome:" + nomeEmpresa + "Endereço: " + endEmpresa + " Tel: " + telEmpresa)


//3) Fazer um algoritmo que recebe do usuário 4 notas e exibe a média aritmética dos números.

    let notas = []
    let media = 0

    for (let i = 0; i < notas.length; i++) {
        console.log("Digite o Valor da Nota " + i + ":" )
            //fazer o recebimento do input em visualg
        notas.push(i)
        media += notas[i]
    }
    console.log("Sua média aritmética é de: " + media/notas.length)


//4) O algoritmo receberá um número inteiro e imprimirá seu sucessor e seu antecessor.

    let x

    console.log("Digite o valor Desejado: ")

    //fazer o recebimento do input em visualg

    x = 42
    
    console.log("Seu sucessor é: " + x+1)
    console.log("Seu antecessor é: " + x-1)
    
//5) Ler um número inteiro e imprimir seu quadrado.

    let x

    console.log("Digite o valor Desejado: ")

    //fazer o recebimento do input em visualg
    
    x = 42

    console.log("Seu quadrado é: " + (x*x))


//6) Receber um valor qualquer do teclado e imprimir esse valor com reajuste de 10%.
    
    let x

    console.log("Digite o valor Desejado: ")

    //fazer o recebimento do input em visualg

    x = 42000

    const reajuste = (x/100)*10

    console.log("Valor reajustado: " + (x-reajuste))

//7) Solicitar o valor de um produto, calcular o desconto de 5,5% e imprimir o valor a pagar.

    let x

    console.log("Digite o valor do Produto: ")

    //fazer o recebimento do input em visualg

    x = 42000

    const desconto = x * 0.055

    console.log("O valor a ser pago é: " + (x-desconto))


//8) Ler o peso em gramas e o preço do quilo da castanha-do-pará e imprimir o preço que o consumidor deverá pagar.


    let precoQuilo

    console.log("Digite o do Preco do Quilo da Castanha-do-Pará: ")

    //fazer o recebimento do input em visualg

    precoQuilo = 20

    const precoGrama = 20/1000
    
    console.log("Digite a quantidade de gramas que o cliente comprou: ")

    const gramas = 300

    const precoFinal = "R$ " + (precoGrama * gramas)  

    console.log("Total a pagar: " + precoFinal)


//9) Ler a quantidade de meninos e meninas de uma sala. Calcular e imprimir o percentual de meninos e meninas.

    console.log("Digite a quantidade de meninos presentes na sala de aula: ")
    const qtdMenino = 20

    console.log("Digite a quantidade de meninas presentes na sala de aula: ")
    const qtdMenina = 26

    const ttlAlunos = qtdMenina + qtdMenino
    
    const perMeninas = (qtdMenina/ttlAlunos) * 100
    
    const perMeninos = (qtdMenino/ttlAlunos) * 100

    console.log("Percentual Meninas: " + perMeninas)

    console.log("Percentual Meninos: " + perMeninos)








