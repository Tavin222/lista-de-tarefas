let linhas = "";
let listCount = 0;
let riskLines = [];

document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o envio do formulário

  // Obtém os valores dos campos do formulário
  const taskName = document.getElementById("taskInput").value;

  // Cria um novo item de lista com os valores
  const linha = `<li id="linha-${listCount}"><strong> Tarefa:</strong>   ${taskName} </li>`;

  // Adiciona o novo item à lista de tarefas
  const taskList = document.getElementById("taskList");
  linhas += linha;

  taskList.innerHTML = linhas;

  // Limpa os campos do formulário
  document.getElementById("taskForm").reset();

  // Adcionar e manter o 'riscado' nas tarefas
  for (let index = 0; index <= listCount; index++) {
    const elementId = `#linha-${index}`;

    if (riskLines.includes(index)) {
      $(elementId).addClass("riscado");
    }

    $(document).ready(function () {
      $(elementId).click(function () {
        const indexOfElement = riskLines.indexOf(index);
        if ($(elementId).hasClass("riscado")) {
          riskLines.splice(indexOfElement, 1);
          $(elementId).removeClass("riscado");
        } else {
          riskLines.push(index);
          $(elementId).addClass("riscado");
        }
      });
    });
  }

  listCount++;
});

// Estiliza a decida do formulario
$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });

  $("#botao-cancel").click(function () {
    $("form").slideUp();
  });
});
