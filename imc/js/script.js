
   let n = 0
var calcular = function() {
    
    var nome= document.getElementById('nome').value;
   
    var altura = Number(document.getElementById('altura').value);
    var peso = Number(document.getElementById('peso').value);
    var calcImc = peso/(altura*altura).toFixed();

   n=n+1

    let tr = document.createElement("tr")
    let tdNumero = document.createElement("td")
    let tdNome = document.createElement("td")
    let tdAltura = document.createElement("td")
    let tdPeso = document.createElement("td")
    let tdCalcImc = document.createElement("td")

    let tabela = document.querySelector("#tabela")

    tdNumero.append(n)
    tdNome.append(nome)
    tdAltura.append(altura)
    tdPeso.append(peso)
    tdCalcImc.append(calcImc)

    tr.append(tdNumero)
    tr.append(tdNome)
    tr.append(tdAltura)
    tr.append(tdPeso)
    tr.append(tdCalcImc)

    tabela.append(tr)
    
    


};








