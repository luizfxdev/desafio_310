# 🐉 O Enigma de Shen Long - Dragon Ball Challenge

<div align="center">

![Dragon Ball](https://img.shields.io/badge/Dragon_Ball-Challenge-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Uma aplicação web interativa que desafia você a resolver o enigma matemático de Shen Long!**

[🚀 Ver Demo](#) | [📖 Documentação](#sobre-o-desafio) | [💡 Exemplos](#exemplos-de-uso)

</div>

---

## 📋 Sobre o Desafio

No coração do universo Dragon Ball, **Shen Long** surge das Esferas do Dragão e lança um desafio matemático a todos que buscam um desejo. O guerreiro que aceitar o teste deve escolher um número entre **100 e 999**. Se resolver o enigma corretamente, Shen Long concederá qualquer desejo! Mas atenção: caso erre, **Goku** aparecerá e desafiará o perdedor para um combate épico.

### 🎯 A Regra do Desafio:

1. O desafiante deve informar um número entre **100 e 999**
2. Pode-se usar números separados por vírgula **(ex: 256, 321, 999)**
3. Para vencer, é preciso aplicar a transformação: **repetir a soma dos quadrados dos dígitos** do número informado até que reste apenas um número de um dígito
4. Se o resultado final for **1**, você vence e ganha seu desejo! 🎊
5. Se for qualquer outro dígito, você deve enfrentar Goku em combate! ⚔️

### 📝 Exemplo:

Para o número **321**:
```
3² + 2² + 1² = 14
1² + 4² = 17
1² + 7² = 50
5² + 0² = 25
2² + 5² = 29
2² + 9² = 85
8² + 5² = 89
8² + 9² = 145
1² + 4² + 5² = 42
4² + 2² = 20
2² + 0² = 4 ✅ (chegou ao dígito final!)
```

**Resultado**: 4 → Você deve enfrentar Goku! ⚔️

---

## ✨ Funcionalidades

- 🎨 **Interface Temática**: Design inspirado no universo Dragon Ball com cores vibrantes
- 🎬 **Background Animado**: Vídeo de fundo em alta qualidade (3840x2160)
- 🎵 **Controles de Áudio**: Sistema de música de fundo com play/pause
- 📊 **Cálculo Detalhado**: Visualização passo a passo de todas as transformações
- 🔢 **Múltiplos Números**: Calcule vários números de uma vez
- 🔄 **Botões Interativos**: Efeito glow animado nos botões
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ♿ **Acessível**: Navegação por teclado e contraste adequado
- 🎯 **Validação Inteligente**: Aceita apenas números entre 100 e 999

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com glassmorphism e animações
- **JavaScript (ES6+)**: Lógica do desafio e interatividade
- **Flexbox**: Layout responsivo e flexível

---

## 📁 Estrutura do Projeto

```
desafio_310/
├── index.html          # Estrutura principal da aplicação
├── styles.css          # Estilização e animações
├── script.js           # Lógica do desafio
└── assets/
    ├── background.mp4  # Vídeo de fundo (3840x2160)
    └── background-music.mp3  # Música tema (opcional)
```

---

## 🎮 Como Usar

1. **Clone o repositório**:
```bash
git clone https://github.com/luizfxdev/desafio_310.git
cd desafio_310
```

2. **Adicione os arquivos de mídia**:
   - Coloque seu vídeo `background.mp4` na pasta `assets/`
   - (Opcional) Adicione música `background-music.mp3` na pasta `assets/`

3. **Abra o projeto**:
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local como Live Server (VS Code)

4. **Jogue**:
   - Digite um número entre 100 e 999 
   - Clique em "⚡ CALCULAR ⚡"
   - Veja o resultado detalhado do desafio!
     
5. **Múltiplos Números**:
   - Digite um números múltiplos 256, 321, 999
   - Ou com espaços 256, 321 , 999
   - Clique em "⚡ CALCULAR ⚡"
   - Veja o resultado detalhado do desafio!
---

## 📊 Exemplos de Uso

### Exemplo 1: Vitória! 🎊
**Entrada**: `100`
```
Número inicial: 100
Passo 1: 1² + 0² + 0² = 1 + 0 + 0 = 1
```
**Resultado**: 1 → Você venceu! Shen Long concederá seu desejo!

### Exemplo 2: Derrota! ⚔️
**Entrada**: `321`
```
11 transformações até chegar ao resultado final: 4
```
**Resultado**: 4 → Prepare-se para enfrentar Goku!

### Exemplo 3: Processo Médio 🔄
**Entrada**: `456`
```
6 transformações até chegar ao resultado final: 4
```
**Resultado**: 4 → Enfrente Goku em combate!

## 📊 Exemplos de Uso Múltiplo

### Exemplo Completo
**Entrada**: `256, 321, 999`

Número 1 ``(256): 4 transformações → Resultado: 4``

Número 2 ``(321): 11 transformações → Resultado: 4``

Número 3 ``(999): 7 transformações → Resultado: 9``

**Resultado**: Todos os números levam a diferentes resultados finais!

---

## 🎨 Características do Design

- **Paleta de Cores**: Tons de verde lima, dourado e preto inspirados no Dragon Ball
- **Efeitos Visuais**: Glassmorphism, glow animado e sombras suaves
- **Animações**: Transições suaves e efeito glowing de 20 segundos nos botões
- **Tipografia**: Fontes modernas e legíveis com sombras para destaque
- **Responsividade**: Layout adaptável para todas as resoluções

---

## 🔧 Personalização

### Alterar Cores
Edite as variáveis no `styles.css`:
```css
/* Cor principal */
border: 2px solid #84cc16;

/* Cor de destaque */
color: #d9f99d;

/* Background do container */
background: rgba(15, 20, 12, 0.75);
```

### Ajustar Validação
Modifique a função `validateInput()` no `script.js`:
```javascript
if (num < 100 || num > 999) {
    return { valid: false, message: '❌ O número deve estar entre 100 e 999!' };
}
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**LuizFXdev**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [Luiz Felix](https://linkedin.com/in/luizfxdev)

---

## 🙏 Agradecimentos

- Inspirado no universo Dragon Ball criado por Akira Toriyama
- Comunidade de desenvolvedores por compartilhar conhecimento
- Todos que testaram e contribuíram com feedback

---

<div align="center">

**⭐ Se você gostou deste projeto, não esqueça de dar uma estrela!**

**🐉 Que Shen Long conceda seus desejos! 🐉**

</div>
