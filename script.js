
let nuvem = [] // array aonde tudo vai ser armazenado


function calculo(){

    let numeros = document.getElementById("numero").value

    let descricao2 = document.getElementById("resultado")

    if(numeros == 0 || numeros == null || numeros > 100 ){

        alert("por favor, insira um numero")
    }

    else if (nuvem.indexOf(numeros) != -1){ // ele vai pesquisar o valor que esta dentro da "nuvem" e então, verificar se o numero que vai ser inserido existe dentro do array, se tiver, dará um resultado diferente de -1

        alert("por favor, insira um numero novo")
    }

    else if ( descricao2.innerHTML != "" ){
        descricao2.innerHTML= ""

        document.querySelector("#respostas").innerHTML += `O valor ${numeros} foi adicionado<br><hr>`
    }
    else{

        nuvem.push(numeros)

        document.querySelector("#respostas").innerHTML += `O valor ${numeros} foi adicionado<br><hr>`

        document.getElementById("verifica").style.display="block"
    }
}

function descricao(){

    let descricao = document.getElementById("resultado")

    descricao.innerHTML += `Ao todo, temos ${nuvem.length} numeros cadrastados. <Br><Br>`

    let maior = Number(nuvem.length) - 1

    descricao.innerHTML += `O maior valor informado foi ${nuvem.sort()[maior]}. <Br><Br>`

    descricao.innerHTML += `O menor valor informado foi ${nuvem.sort()[0]}. <br><Br>`

    var soma = 0

    for(let pos= 0 ; pos < nuvem.length; pos++ ){
        soma = Number(soma) + Number(nuvem[pos]) // soma entre os numeros do array nuvem (a soma de todos os numeros)
    }

    descricao.innerHTML += `Somanto todos os valores, temos ${soma}.<br><Br>`

    let media = soma / nuvem.length //calculo da media

    descricao.innerHTML += `A media dos valores digitados é ${media}.<br>`
}