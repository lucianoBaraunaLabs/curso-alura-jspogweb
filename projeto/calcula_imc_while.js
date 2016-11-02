//
//
// var tdPeso2 = document.getElementById('peso-2'),
//     tdAltura2 = document.getElementById('altura-2'),
//     tdnome2 = document.getElementById('nome-2');
//
//
// var paciente2 = {
//   nome: tdnome2.textContent,
//   peso: tdPeso2.textContent,
//   altura: tdAltura2.textContent
// }
//
// var tdPeso1 = document.getElementById('peso-1'),
//     tdAltura1 = document.getElementById('altura-1'),
//     tdnome1 = document.getElementById('nome-1');
//
//
// var paciente1 = {
//   nome: tdnome1.textContent,
//   peso: tdPeso1.textContent,
//   altura: tdAltura1.textContent
// }
//
// var pacientes = [paciente1, paciente2];
var trsPaciente = document.getElementsByClassName('paciente'); // Array de trs

var posicaoAtual = 0;
while(posicaoAtual <= trsPaciente.length - 1) {
    var pacienteTr = trsPaciente[posicaoAtual];
    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];


    var paciente = {
        nome: tdNome.textContent,
        peso: tdPeso.textContent,
        altura: tdAltura.textContent,
    };

    if (paciente.altura != 0) {
      var imc = paciente.peso / (paciente.altura * paciente.altura);
      var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
      tdImc.textContent = imc;

      console.log(paciente.nome + '\n' + imc);
    } else {
      console.log('Altura é igual a 0')
    }
    posicaoAtual ++;

}

// for (var i = 0; i < paciente.length; i++) {
//   console.log(paciente[i]);
// }
