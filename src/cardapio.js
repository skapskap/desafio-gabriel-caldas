import { Item } from "./item.js";

class Cardapio {
  constructor() {
    this.itens = [
      new Item("cafe", "Café", 3.0),
      new Item("chantily", "Chantily (extra do Café)", 1.5),
      new Item("suco", "Suco natural", 6.2),
      new Item("sanduiche", "Sanduíche", 6.5),
      new Item("queijo", "Queijo (extra do Sanduíche)", 2.0),
      new Item("salgado", "Salgado", 7.25),
      new Item("combo1", "1 Suco e 1 Sanduíche", 9.5),
      new Item("combo2", "1 Café e 1 Sanduíche", 7.5),
    ];

    this.itensExtrasAssociados = {
      chantily: "cafe",
      queijo: "sanduiche",
    };
  }

  buscarItemPorCodigo(codigo) {
    return this.itens.find((item) => item.codigo === codigo);
  }
}

// let cafesearch = cardapioInstance.buscarItemPorCodigo("cafe");
// console.log(cafesearch);

export { Cardapio };
