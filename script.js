let currentResult = document.querySelector(".current-result");
let btnDefalt = document.querySelectorAll(".btn-defalt");
let equals = document.querySelector(".equals");
let clean = document.querySelector(".clean");
let botaoMaisMenos = document.querySelector(".plus-minus");
let botaoDeletar = document.querySelector(".del");

function adicionarElementoAoInputResultado(numeroDigitado) {
  verificarSimboloDuplicado(numeroDigitado);
  if (verificarSimboloInicial(numeroDigitado)) return;
  currentResult.value += numeroDigitado;
}

function executarCalculo() {
  try {
    currentResult.value = eval(currentResult.value);
  } catch {
    alert("Algo deu errado. Tente novamente.");
  }
}

function limparResultado() {
  currentResult.value = "";
}

function trocarSinalDaConta() {
  if (Number(currentResult.value)) {
    currentResult.value = currentResult.value * -1;
  }
}

function deletarUltimaLetraDoResultado() {
  currentResult.value = currentResult.value.slice(0, -1);
}

function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
  let ultimoValorNoInputResultado =
    currentResult.value[currentResult.value.length - 1];
  if (
    ultimoValorNoInputResultado &&
    !Number(ultimoValorNoInputResultado) &&
    !Number(numeroDigitadoRecebidoPorParametro) &&
    ultimoValorNoInputResultado != 0 &&
    numeroDigitadoRecebidoPorParametro != 0
  ) {
    deletarUltimaLetraDoResultado();
  }
}

function verificarSimboloInicial(numeroDigitadoRecebidoPorParametro) {
  if (
    currentResult.value.length == 0 &&
    !Number(numeroDigitadoRecebidoPorParametro)
  ) {
    return true;
  }
}

function gerenciarEscutadores() {
  btnDefalt.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener("click", () => {
      let valorDoElementoClicado = elementoCorrente.dataset.valor;
      adicionarElementoAoInputResultado(valorDoElementoClicado);
    });
  });

  equals.addEventListener("click", () => {
    executarCalculo();
  });

  clean.addEventListener("click", () => {
    limparResultado();
  });

  botaoMaisMenos.addEventListener("click", () => {
    trocarSinalDaConta();
  });

  botaoDeletar.addEventListener("click", () => {
    deletarUltimaLetraDoResultado();
  });
}

gerenciarEscutadores();