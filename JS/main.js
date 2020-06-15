function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://facebook.com/")
    //window.location.href = "https://facebook.com/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>"
    elemento.innerHTML = " Obrigado por passaro mouse"
}

function voltar(elemento){
    //document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)

}
/*function soma(n1,n2){
return n1 + n2
}

function Validade(idade){
    let validar
    if(idade >= 18){
        validar=true
    }else{
        validar=false
    }
    return Validade
}
idade = prompt("qual a sua idade?")
console.log(Validade(idade))
alert(soma(5, 10))



//let d = new Date
//alert(d.getMonth(+1))



/*let count
for(count= 0; count <=5; count++){
    alert(count)
}

/*let count = 0
while(count <= 5){
    console.log(count)  
    count++
}
*/



/*let idade = prompt("Qual a sua idade? ")
//let idade = 18
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de Idade")
}
*/



//var frutas = [{nome:"Maça", cor: "vermelha"}, {nome: "Uva", cor: "roxa"}]
//console.log(frutas)
//alert(frutas[1].nome)




//var fruta = {nome:"maça", cor: "vermelha"}
//console.log(fruta)


//var lista =["Maça", "Pera", "Laranja"]
//lista.push("Uva")
//lista.pop()
//console.log(lista.length)
//console.log(lista.reverse)
//console.log(lista.toLocaleString())
//console.log(lista.join(" - "))


/*var nome ="Marcos Antonio"
var idade = 39
var idade = 10
var frase ="Japão  é o melhor time do mundo"
//alert(nome + " tem " +idade + " anos " )
//alert(idade + idade2)
console.log(nome)
console.log(idade)
console.log(frase.replace("Japão", "Brasil"))
*/