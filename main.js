function inserir(num){
    var botao = document.formu.visor.value

    document.formu.visor.value = botao + num
}
function resultado(){
    var result = document.formu.visor.value

    if(result){
        document.formu.visor.value = eval(result)
    }
}
function limpar(){
    document.formu.visor.value = ""
}