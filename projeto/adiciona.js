var botaoAdd = document.querySelector('#adicionar-paciente');

botaoAdd.addEventListener('click', function(event){
    event.preventDefault();// impede comportamento padrao
    // Campos
    var campoNome = document.querySelector("#campo-nome");
    var campoPeso = document.querySelector("#campo-peso");
    var campoAltura = document.querySelector("#campo-altura");
    var pacienteNovo = "<tr class='paciente'>"+
                            "<td class='info-nome'>"+ campoNome.value +"</td>"+
                            "<td class='info-peso'>"+ campoPeso.value +"</td>"+
                            "<td class='info-altura'>"+ campoAltura.value +"</td>"+
                            "<td class='info-imc'>"+ campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>"+
                        "</tr>";
    var tabela = document.querySelector('table');
    // Preenchendo lista
    tabela.innerHTML += pacienteNovo;
    campoNome.value = "";
    campoPeso.value = "";
    campoAltura.value = "";
    //alternativamente, voce pode remover os valores do formulário com a função padrão do formulário reset
   //var formPaciente = document.querySelector("form");
   // formPaciente.reset();
})
