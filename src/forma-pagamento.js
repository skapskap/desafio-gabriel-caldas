class FormaDePagamento {
  constructor(nome, desconto, acrescimo) {
    this.nome = nome;
    this.desconto = desconto;
    this.acrescimo = acrescimo;
  }

  static Debito() {
    return new FormaDePagamento("debito", 0, 0);
  }

  static Credito() {
    return new FormaDePagamento("credito", 0, 3);
  }

  static Dinheiro() {
    return new FormaDePagamento("dinheiro", 5, 0);
  }
}

export { FormaDePagamento };
