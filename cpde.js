
function Ordenar() {
  document.getElementById("outputText").value = "";
  var lineas = document.getElementById("inputText").value;
  const inputArray = lineas.split("\n");
  outputArray = inputArray.sort();
  for (var i = 0; i < outputArray.length; i++) {
    document.getElementById("outputText").value += outputArray[i] + "\n";

    }
}

function Borrar(){
  document.getElementById("inputText").value = "";

}

function Copiar(){
    var content = document.getElementById('outputText').select();

    document.execCommand('copy');
  


    alert("Texto copiado!");

}
