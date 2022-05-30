function calcular(){
var larg = document.getElementById("largura")
var compr = document.getElementById("comprimento")
var local = document.getElementsByName("loc")
var resul= document.getElementById("resposta")
var lg= Number(larg.value)
var cp = Number(compr.value)
var soma = (lg * cp)
var img = document.createElement("img")
img.setAttribute ("id" , "foto")

if(soma == 0){
    alert("[ERRO!] Digite um valor valido!")
    resul.innerHTML("Digite um valor valido!")
}

if(local[0].checked) {
    resul.innerHTML= (`Essa casa mede ${soma} metros quadrados.`)
    img.setAttribute("src" , "assets/casinha.png")
}


else if(local[1].checked){
    resul.innerHTML= (`Esse terreno mede ${soma} metros quadrados.`)
    img.setAttribute("src" , "assets/terreninho.png")

}

else if(local[2].checked){
    resul.innerHTML= (`Este cômodo mede ${soma} metros quadrados.`)
    img.setAttribute("src" , "assets/quartinho.png")

}
resul.style.textAlign = "center"
resul.appendChild(img)

}

function limpar() {
    let limp = document.getElementById('resposta');
    limp = location.reload();
}


