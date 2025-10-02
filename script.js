// Elementos do DOM
const numberInput = document.getElementById('number-input');
const calculateBtn = document.getElementById('calculate-btn');
const backBtn = document.getElementById('back-btn');
const resultContent = document.getElementById('result-content');
const resultSection = document.getElementById('result-section');

// Elementos de áudio
const backgroundAudio = document.getElementById('background-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  backgroundAudio.play();
  playAudioBtn.style.opacity = '0.5';
  pauseAudioBtn.style.opacity = '1';
});

pauseAudioBtn.addEventListener('click', () => {
  backgroundAudio.pause();
  pauseAudioBtn.style.opacity = '0.5';
  playAudioBtn.style.opacity = '1';
});

// Função para calcular a soma dos quadrados dos dígitos
function sumOfSquares(num) {
  let sum = 0;
  const digits = num.toString().split('');
  for (const digit of digits) {
    const digitNum = parseInt(digit);
    sum += digitNum * digitNum;
  }
  return sum;
}

// Função para resolver o enigma de Shen Long
function solveDragonBallChallenge(number) {
  const steps = [];
  let current = number;
  const visited = new Set();

  // Adicionar o número inicial
  steps.push({
    number: current,
    calculation: `Número inicial: ${current}`,
    isInitial: true
  });

  // Processar até chegar a um único dígito ou detectar um ciclo
  while (current >= 10 && !visited.has(current)) {
    visited.add(current);
    const digits = current.toString().split('');
    const calculation = digits.map(d => `${d}²`).join(' + ');
    const squareSum = digits.map(d => `${parseInt(d) * parseInt(d)}`).join(' + ');
    const newCurrent = sumOfSquares(current);

    steps.push({
      number: current,
      calculation: `${calculation} = ${squareSum} = ${newCurrent}`,
      result: newCurrent
    });

    current = newCurrent;
  }

  return {
    finalDigit: current,
    steps: steps,
    totalSteps: steps.length - 1
  };
}

// Função para exibir o resultado de um único número
function displaySingleResult(number, result, index) {
  let html = `<div class="single-number-result">`;

  // Cabeçalho do número
  html += `<div class="number-header">
        <h3 style="color: #d9f99d; margin-bottom: 15px;">🔮 Número ${index + 1}: ${number}</h3>
    </div>`;

  html += '<div class="calculation-steps">';

  // Exibir cada passo do cálculo
  result.steps.forEach((step, stepIndex) => {
    if (step.isInitial) {
      html += `<div class="calculation-step">
                <strong>🔢 ${step.calculation}</strong>
            </div>`;
    } else {
      html += `<div class="calculation-step">
                <strong>Passo ${stepIndex}:</strong> ${step.calculation}
            </div>`;
    }
  });

  html += '</div>';

  // Exibir resultado final
  html += `<div class="final-result">
        <div style="font-size: 1.2rem; margin-bottom: 10px;">🐉 Resultado Final 🐉</div>
        <div style="font-size: 1.8rem; color: #d9f99d; text-shadow: 0 0 20px rgba(132, 204, 22, 1);">
            ${result.finalDigit}
        </div>
        <div style="margin-top: 15px; font-size: 0.95rem; color: #ecfccb;">
            ${
              result.finalDigit === 1
                ? '🎊 Parabéns! Você resolveu o enigma de Shen Long! Seu desejo será concedido! 🎊'
                : '⚔️ Você não resolveu o enigma! Prepare-se para enfrentar Goku em combate! ⚔️'
            }
        </div>
        <div style="margin-top: 10px; font-size: 0.85rem; color: rgba(217, 249, 157, 0.8);">
            Total de transformações: ${result.totalSteps}
        </div>
    </div>`;

  html += `</div>`;

  return html;
}

// Função para exibir múltiplos resultados
function displayMultipleResults(numbers) {
  let html = `<div class="multiple-results-container">`;

  // Cabeçalho geral
  html += `<div class="results-summary" style="margin-bottom: 25px; padding: 15px; background: rgba(132, 204, 22, 0.1); border-radius: 10px; border: 2px solid rgba(132, 204, 22, 0.3);">
        <h3 style="color: #d9f99d; margin-bottom: 10px;">📊 Resumo dos Cálculos</h3>
        <p style="color: #ecfccb;">Total de números processados: <strong>${numbers.length}</strong></p>
    </div>`;

  // Processar cada número
  numbers.forEach((number, index) => {
    const result = solveDragonBallChallenge(number);
    html += displaySingleResult(number, result, index);

    // Adicionar separador entre números (exceto no último)
    if (index < numbers.length - 1) {
      html += `<div class="result-separator" style="margin: 25px 0; border-bottom: 2px solid rgba(132, 204, 22, 0.3);"></div>`;
    }
  });

  html += `</div>`;

  return html;
}

// Função para validar e processar a entrada
function processInput(value) {
  // Remover espaços em branco
  value = value.trim();

  // Verificar se contém vírgulas (múltiplos números)
  if (value.includes(',')) {
    const numbersStr = value
      .split(',')
      .map(n => n.trim())
      .filter(n => n !== '');
    const numbers = [];
    const errors = [];

    numbersStr.forEach((numStr, index) => {
      const num = parseInt(numStr);
      if (isNaN(num)) {
        errors.push(`Posição ${index + 1}: "${numStr}" não é um número válido`);
      } else if (num < 100 || num > 999) {
        errors.push(`Posição ${index + 1}: ${num} está fora do intervalo (100-999)`);
      } else {
        numbers.push(num);
      }
    });

    if (errors.length > 0) {
      return {
        valid: false,
        message: '❌ Erros encontrados:<br>' + errors.join('<br>')
      };
    }

    if (numbers.length === 0) {
      return {
        valid: false,
        message: '❌ Nenhum número válido foi encontrado!'
      };
    }

    return {
      valid: true,
      numbers: numbers,
      multiple: true
    };
  } else {
    // Um único número
    const num = parseInt(value);
    if (isNaN(num)) {
      return { valid: false, message: '❌ Por favor, digite um número válido!' };
    }
    if (num < 100 || num > 999) {
      return { valid: false, message: '❌ O número deve estar entre 100 e 999!' };
    }
    return { valid: true, numbers: [num], multiple: false };
  }
}

// Event listener para o botão CALCULAR
calculateBtn.addEventListener('click', () => {
  const value = numberInput.value.trim();
  const validation = processInput(value);

  if (!validation.valid) {
    resultContent.innerHTML = `<div class="error-message">${validation.message}</div>`;
    return;
  }

  if (validation.multiple) {
    resultContent.innerHTML = displayMultipleResults(validation.numbers);
  } else {
    const result = solveDragonBallChallenge(validation.numbers[0]);
    resultContent.innerHTML = displaySingleResult(validation.numbers[0], result, 0);
  }

  // Rolar suavemente para a seção de resultado
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Event listener para o botão VOLTAR
backBtn.addEventListener('click', () => {
  numberInput.value = '';
  resultContent.innerHTML = '<p class="placeholder-text">Os resultados aparecerão aqui após o cálculo...</p>';
  numberInput.focus();
  // Rolar suavemente para o topo do card
  document.querySelector('.challenge-card').scrollTop = 0;
});

// Permitir calcular ao pressionar Enter no input
numberInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateBtn.click();
  }
});

// Focar no input ao carregar a página
window.addEventListener('load', () => {
  numberInput.focus();
});
