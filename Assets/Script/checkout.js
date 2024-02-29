import { utilidades } from "./Produtos.js";
import { idsProdutosCarrinho } from "./Produtos.js";




function renderizarProdutoFinal() {
const lugarFinal = document.getElementById("right-side-checkout")
for (const idPro in idsProdutosCarrinho) {
    const product = utilidades.find((p) => p.id == idPro);
    var containerFinal = document.createElement("div");
    containerFinal.setAttribute("id", `container${idPro}`);
    containerFinal.setAttribute("class", "containerPR");
    lugarFinal.appendChild(containerFinal);
    var lugarContainerFinal = document.getElementById(`container${idPro}`);

    var modelo = `
    <div class='imgCarac'>
    <img src='${product.imagem}' style='height:100px;'>
    <div>
      <p class='' >${product.nome}</p>
      <p class=''>${product.marca}</p>
      <p class=''>R$${product.preco}</p>
    </div>
    </div>
    <div class=''>
        <p class=''>${idsProdutosCarrinho[product.id]}</p>
    </div>
    `;

    lugarContainerFinal.innerHTML += modelo;
    

  }
}
renderizarProdutoFinal();
