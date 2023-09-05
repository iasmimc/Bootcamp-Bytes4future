function adicionarJogadasPossiveis(jogo, jogador, linha, coluna) {
  let tabuleiro = novoJogo.tabuleiro;
  if (tabuleiro[linha][coluna] === " ") {
    tabuleiro[linha][coluna] = jogador;
  }
  return novoJogo;
}
function obterJogadasPossiveis(jogo) {
    let tabuleiro = jogo.tabuleiro
    let jogadaPossiveis = []
    for (let posicao = 0; linha < tabuleiro.length; linha++){
        for(let posicao = 0; posicao < tabuleiro[linha].length; posicao++){
            if (tabuleiro[linha][posicao] === " "){
                jogadaPossiveis.push({linha: })
            }
        }
    }
}
function verificarVencedor(jogo) {
    let tabuleiro = jogo.tabuleiro
    
    let vencedorx = "xxx" 
    let vencedorO = "ooo"

    let sequenciaPossiveis = []


    let diagonalP = "";
    let diagonalS = "";
    let linha = "";
    let coluna = "";
    

    for (let i = 0; i < tabuleiro.length; i++) {
       diagonalP += tabuleiro [i][i]
       diagonalS += tabuleiro [i][tabuleiro.length - 1 -i]
       for(let j = 0; j < tabuleiro[i].length; j++){
        linha += tabuleiro[i][j]
        linha += tabuleiro[j][i]
       }
       sequenciaPossiveis.push(...[diagonalP, diagonalS]);
       if(sequenciaPossiveis.includes(vencedorx)){
        return "x"
       }else if( sequenciaPossiveis.includes(vencedorO)){
        return "o"
        
       }
       }
        
    }

function verificarFimDoJogo(jogo) {
    return  verificarFimDoJogo(jogo) !== undefined || obterJogadasPossiveis(jogo).length === 0;
}
