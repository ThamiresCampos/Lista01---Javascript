function trapezio(){
    var base1 = parseFloat(prompt("Dígite o valor da base menor:"));
    var base2 = parseFloat(prompt("Dígite o valor da base maior:"));
    var altura = parseFloat(prompt("Dígite o valor da altura:"));
    var trapezio = (base1 + base2) * altura / 2
    alert("O valor da área é: "+trapezio);
}