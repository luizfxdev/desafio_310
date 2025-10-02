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

// Função para exibir o resultado
function displayResult(number) {
  const result = solveDragonBallChallenge(number);

  let html = '<div class="calculation-steps">';

  // Exibir cada passo do cálculo
  result.steps.forEach((step, index) => {
    if (step.isInitial) {
      html += `<div class="calculation-step">
                <strong>🔢 ${step.calculation}</strong>
            </div>`;
    } else {
      html += `<div class="calculation-step">
                <strong>Passo ${index}:</strong> ${step.calculation}
            </div>`;
    }
  });

  html += '</div>';

  // Exibir resultado final
  html += `<div class="final-result">
        <div style="font-size: 1.4rem; margin-bottom: 10px;">🐉 Resultado Final 🐉</div>
        <div style="font-size: 2rem; color: #d9f99d; text-shadow: 0 0 20px rgba(132, 204, 22, 1);">
            ${result.finalDigit}
        </div>
        <div style="margin-top: 15px; font-size: 1rem; color: #ecfccb;">
            ${
              result.finalDigit === 1
                ? '🎊 Parabéns! Você resolveu o enigma de Shen Long! Seu desejo será concedido! 🎊'
                : '⚔️ Você não resolveu o enigma! Prepare-se para enfrentar Goku em combate! ⚔️'
            }
        </div>
        <div style="margin-top: 10px; font-size: 0.9rem; color: rgba(217, 249, 157, 0.8);">
            Total de transformações: ${result.totalSteps}
        </div>
    </div>`;

  resultContent.innerHTML = html;
}

// Função para validar a entrada
function validateInput(value) {
  const num = parseInt(value);

  if (isNaN(num)) {
    return { valid: false, message: '❌ Por favor, digite um número válido!' };
  }

  if (num < 100 || num > 999) {
    return { valid: false, message: '❌ O número deve estar entre 100 e 999!' };
  }

  return { valid: true, number: num };
}

// Event listener para o botão CALCULAR
calculateBtn.addEventListener('click', () => {
  const value = numberInput.value.trim();
  const validation = validateInput(value);

  if (!validation.valid) {
    resultContent.innerHTML = `<div class="error-message">${validation.message}</div>`;
    return;
  }

  displayResult(validation.number);

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
