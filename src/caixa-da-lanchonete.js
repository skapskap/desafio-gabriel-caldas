import { Item } from "./item.js";
import { Cardapio } from "./cardapio.js";
import { FormaDePagamento } from "./forma-pagamento.js";

class CaixaDaLanchonete {
  constructor() {
    this.cardapio = new Cardapio();
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    let total = 0;

    // Verificação e retorno dos erros do desafio
    if (itens.length === 0) return "Não há itens no carrinho de compra!";
    if (!["debito", "credito", "dinheiro"].includes(metodoDePagamento))
      return "Forma de pagamento inválida!";

    for (let itemDetalhes of itens) {
      const [codigo, quantidade] = itemDetalhes.split(",");

      const item = this.cardapio.buscarItemPorCodigo(codigo);

      if (!item) return "Item inválido!";
      if (Number(quantidade) <= 0) return "Quantidade inválida!";
      if (
        this.cardapio.itensExtrasAssociados[codigo] &&
        !itens.some((i) =>
          i.startsWith(this.cardapio.itensExtrasAssociados[codigo])
        )
      ) {
        return "Item extra não pode ser pedido sem o principal";
      }

      total += item.valor * Number(quantidade);
    }

    // Processar forma de pagamento e aplicar seu respectivo desconto ou taxa
    let formaDePagamento;
    switch (metodoDePagamento) {
      case "debito":
        formaDePagamento = FormaDePagamento.Debito();
        break;
      case "credito":
        formaDePagamento = FormaDePagamento.Credito();
        break;
      case "dinheiro":
        formaDePagamento = FormaDePagamento.Dinheiro();
        break;
      default:
        return "Forma de pagamento inválida!";
    }

    total -= total * (formaDePagamento.desconto / 100);
    total += total * (formaDePagamento.acrescimo / 100);

    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  }
}

export { CaixaDaLanchonete };
