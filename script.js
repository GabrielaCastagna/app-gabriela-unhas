let servicoSelecionado = "";
let horarioSelecionado = "";
let nomeCliente = "";
let agendamentos = [];

function escolherServico(servico) {
  servicoSelecionado = servico;
  document.getElementById('servicos').style.display = 'none';
  document.getElementById('horarios').style.display = 'block';
}

function selecionarHorario(horario) {
  nomeCliente = document.getElementById('nomeCliente').value.trim();

  if (nomeCliente === "") {
    alert("Por favor, digite seu nome antes de agendar.");
    return;
  }

  horarioSelecionado = horario;
  document.getElementById('horarios').style.display = 'none';
  document.getElementById('confirmacao').style.display = 'block';

  const resumoTexto = `${nomeCliente} agendou ${servicoSelecionado} às ${horarioSelecionado}.`;
  document.getElementById('resumo').innerText = resumoTexto;

  agendamentos.push(resumoTexto);

  const item = document.createElement('li');
  item.textContent = resumoTexto;
  document.getElementById('itens-agendados').appendChild(item);
}

function mostrarTodosAgendamentos() {
  document.getElementById('servicos').style.display = 'none';
  document.getElementById('horarios').style.display = 'none';
  document.getElementById('confirmacao').style.display = 'none';
  document.getElementById('lista-agendamentos').style.display = 'none';
  document.getElementById('tela-agendamentos').style.display = 'block';

  const lista = document.getElementById('todos-agendamentos');
  lista.innerHTML = '';

  agendamentos.forEach(function(agendamento) {
    const li = document.createElement('li');
    li.textContent = agendamento;
    lista.appendChild(li);
  });
}

function voltarParaInicio() {
  document.getElementById('tela-agendamentos').style.display = 'none';
  document.getElementById('servicos').style.display = 'block';
  document.getElementById('lista-agendamentos').style.display = 'block';
}

function limparAgendamentos() {
  agendamentos = [];
  const lista = document.getElementById('itens-agendados');
  lista.innerHTML = '';

  const telaTodos = document.getElementById('todos-agendamentos');
  if (telaTodos) {
    telaTodos.innerHTML = '';
  }
}
