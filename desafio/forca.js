class Forca {

  constructor(nome) {
    this.nome = nome;
  }

  arrLetrasChutadas = [];
  letrasAcertadas = [];
  estado = "";
  vidasJogo = 6;
  palavrDesconhecida = ["_", "_", "_", "_", "_", "_", "_"];
  palavraForca = null;
  palavra = ["a", "b", "a", "c", "a", "x", "i"];


  chutar(letra) {

    if (!this.arrLetrasChutadas.includes(letra)) {

      this.palavra.forEach((value, index) => {
        if (this.nome.includes(letra) && letra === value) {

          this.arrLetrasChutadas.push(letra);
          this.palavrDesconhecida[index] = value;
          this.palavraForca = this.palavrDesconhecida;


        } else {
          this.palavraForca = this.palavrDesconhecida;
        }

      });
    }

    if (!this.palavraForca.includes("_")) {
      this.estado = "ganhou";
    }

    if (!this.nome.includes(letra) && letra.length === 1 && !this.arrLetrasChutadas.includes(letra)) {
      this.arrLetrasChutadas.push(letra);
      if (this.vidasJogo > 0) {
        --this.vidasJogo;
        if (this.vidasJogo === 0) {
          this.estado = "perdeu";
        }
      }

    }

  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.arrLetrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidasJogo, // Quantidade de vidas restantes
      palavra: this.palavraForca // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;