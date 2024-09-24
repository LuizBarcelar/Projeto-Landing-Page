var setaesquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita( ) {
 setadireita.style = "display: none"
 leonardo.style = "display: none"
 bruna.style = "display: flex"
 setaesquerda.style = "display: flex; margin-top: 85px" 
}

function RolarParaEsquerda(){
    setadireita.style = "display: flex; margin-top: 75px"
    leonardo.style = "display: flex"
    bruna.style = "display: none"
    setaesquerda.style = "display: none"
}