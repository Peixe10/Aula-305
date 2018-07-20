// Declaração de variáveis
var numA = parseInt(prompt("Informe o primeiro valor: "));
var numB = parseInt(prompt("Informe o segundo valor: "));
var escolha;

// Menu de Opções
escolha = prompt("A. Soma de dois números" + "\n" +
                 "B. Diferença entre dois números" + "\n" +
                 "C. Produto entre dois números" + "\n" +
                 "D. Divisão entre dois números" + "\n\n" + 
                 "Escolha uma opção em número: ").toUpperCase();

// Switch case
switch(escolha) {
  case "A":
    alert(numA + numB);
    break;
    
  case "B":
    if (numA > numB) {
        alert(numA - numB);
    } else {
        alert(numB - numA);
    }
    break;
    
  case "C":
    alert(numA * numB);
    break;
    
  case "D":
    if (numA > numB) {
        alert(numA / numB);
    } else {
        alert(numB / numA);
    }
    break;
    
  default:
    alert("A opção digitada não é válida!");
    break;
}