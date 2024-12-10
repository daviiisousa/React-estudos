type Produto = {
  nome: string;
  valor: number;
};

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

class Estabelicemento {
  constructor(
    private endereco: string,
    private setor: string,
    private produtos: Produto[]
  ) {}

  retornaNomesDosProdutos(){
    return this.produtos.map(produto => produto.nome)
  }
}

const padaria = new Estabelicemento("Rua sao jose", "alimentaçao", [
  { nome: "pao", valor: 1.0 },
  { nome: "sonho", valor: 4.5 },
]);

console.log(padaria);
console.log(padaria.retornaNomesDosProdutos());
