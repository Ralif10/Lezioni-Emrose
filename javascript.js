function cambiaColore(){

    var nome_del_colore = document.getElementById("cambiaColore").value;
    document.getElementById("figura").style.backgroundColor =nome_del_colore
}
function cambiaForma(){
var elemento = document.getElementById("figura");

var classeElemento = elemento.className


if(classeElemento == "square"){
   elemento.className = "triangle"

} else if(classeElemento == "triangle"){
    elemento.className = "circle"

} else if(classeElemento == "circle"){
    elemento.className = "rectangle"

} else if(classeElemento == "rectangle"){
    elemento.className = "square"
}

}







/* 
for(i =0  ; i <= 10; i++){

    console.log(i*2)
} */



            //0      //1      //2
var nomi = ["ciao","alamin","scimmia"]


function findOddEven(lista){

    var lista_di_numeri_pari= []
    var lista_di_numeri_dispari= []


    for(var i=0;i < lista.length; i++){

        var numero = lista[i]
    
        if(numero % 2 == 0 ){
            lista_di_numeri_pari.push(numero)
        } else {
            lista_di_numeri_dispari.push(numero)

        }
    }

    return [lista_di_numeri_pari,lista_di_numeri_dispari]

}

//0 //1
[[],[]]


function SumTwoNumbers(n1,n2){
    return n1+n2;
}


function findLargestNumber(lista){
    return Math.max(...lista)
}



/* 
    var somma = SumTwoNumbers(lista_di_numeri_pari[0],lista_di_numeri_dispari[0])

    var numeroGrande = findLargestNumber(lista_di_numeri_pari)
 */


    function Main(){

       var lista_di_numeri = [42,97,10,52,603,1458,2010,2011,378,05535,748,7648]

       var lista_di_liste = findOddEven(lista_di_numeri)



    }


    function findLargestNumber(lista){}
        return Math.max(...lista)

    function findSmallestNumber(...lista){}
return Math.min(...lista)

function SubtractTwoNumber(n1,n2){
    return n1+n2;
}

function Power(5){
    return n1*n1

}




