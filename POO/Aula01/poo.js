// class Estabelicemento {
//   private endereco: string;
//   private setor: string;
//   private produto: Produto[];
//   constructor(endereco: string, setor: string, produto: Produto[]) {
//     this.endereco = endereco;
//     this.setor = setor;
//     this.produto = produto;
//   }
// }
var Estabelicemento = /** @class */ (function () {
    function Estabelicemento(endereco, setor, produtos) {
        this.endereco = endereco;
        this.setor = setor;
        this.produtos = produtos;
    }
    Estabelicemento.prototype.retornaNomesDosProdutos = function () {
        return this.produtos.map(function (produto) { return produto.nome; });
    };
    return Estabelicemento;
}());
var padaria = new Estabelicemento("Rua sao jose", "alimentaçao", [
    { nome: "pao", valor: 1.0 },
    { nome: "sonho", valor: 4.5 },
]);
console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());
