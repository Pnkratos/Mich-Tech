// import { salvarLocalStorage } from "./Produtos.js";
import { salvarLocalStorage, utilidades } from "./Produtos.js";
import { idsProdutosCarrinho } from "./Produtos.js";



function habilitarRecursos() {

  // function mostraMenu() {
  //   var menu = document.getElementById("menuLinks");
  //   menu.classList.toggle("menuLinksAparecendo");
  // }
  // var btnMostramenu = document.getElementById("hamburger");
  // btnMostramenu.addEventListener("click", () => mostraMenu());

  // var btnFecharMenu = document.getElementById("btnFecharMenu");
  // btnFecharMenu.addEventListener("click", () => mostraMenu());

  /*Faz o menu profile aparecer*/
  function apareceProfile() {
    var menu = document.getElementById("menuDesaparecido");
    menu.classList.toggle("menuProfileAparecendo");
  }
  var btnApareceProfile = document.getElementById("btnApareceProfile");
  btnApareceProfile.addEventListener("click", () => apareceProfile());

  var btnFecharMenuProfile = document.getElementById("btnFecharMenuProfile");
  btnFecharMenuProfile.addEventListener("click", () => apareceProfile());

  function formatarCartao(input) {
    // Remove caracteres não numéricos do número do cartão
    var numeroCartao = input.value.replace(/\D/g, '');
  
    // Adiciona espaços a cada 4 caracteres
    numeroCartao = numeroCartao.replace(/(\d{4})(?=\d)/g, '$1 ');
  
    // Atualiza o valor do campo
    input.value = numeroCartao;
  }
  
  var numeroCartaoProduto = document.getElementById('numero')
  numeroCartaoProduto.addEventListener('input',()=> formatarCartao(numeroCartaoProduto))
  
}
habilitarRecursos();
  

  function renderizarProdutoFinal() {
    const lugar = document.getElementById("contentCheckout")
    var divPR = document.createElement("div")
    divPR.setAttribute("id","produtosCheckout")
    divPR.setAttribute('class',"produtosCheckout")
    lugar.appendChild(divPR)

    var lugarFinal = document.getElementById("produtosCheckout");

    for (const idPro in idsProdutosCarrinho) {
      const product = utilidades.find((p) => p.id == idPro);

      var modelo = `
      <div class='produtoCheckoutIndividual'>
          <div class="dadosProdutoCheckout">
              <img src="${product.imagem}" alt="" style="height: 100px;">
              <div class="marcaNome">
                  <span class="nomeProduto">${product.nome}</span>
                  <span class="marcaProduto">${product.marca}</span>
              </div>
          </div>

          <div class="btnsProdutoCheckout">
              <div class="addSub">
                  <button class="btnsModificarQuant" id='btnAumentar${product.id}'><img
                          src="Assets/botoes/botoesCheckout/plus-solid-branco.svg" alt=""
                          class="imgBtn"></button>
                  <span class="quantProdutos" id='quantProdutos${product.id}'></span>
                  <button class="btnsModificarQuant" id='btnDiminuir${product.id}'><img
                          src="Assets/botoes/botoesCheckout/minus-solid-branco.svg" alt=""
                          class="imgBtn"></button>
              </div>
              <span class="price">R$${product.preco}</span>
              <button class="deleteProduto" id='deleteProduto${product.id}'><img src="Assets/botoes/botoesCheckout/trash-solid.svg"
                      alt=""></button>
          </div>
      </div>`;
      lugarFinal.innerHTML += modelo;
      
  var btnRemover = document.getElementById(`deleteProduto${product.id}`)
  btnRemover.addEventListener('click',()=>removerProduto(product.id))

  var btnAdicionar = document.getElementById(`btnAumentar${product.id}`)
  btnAdicionar.addEventListener('click',()=>adicionarProduto(product.id))
  
  var btnDiminuir = document.getElementById(`btnDiminuir${product.id}`)
  btnDiminuir.addEventListener('click',()=>btnDiminuirProduto(product.id))

  atualizarQuant(product.id)
    }
  }
  renderizarProdutoFinal();

  function atualizarQuant(idpro){
      var lugar = document.getElementById(`quantProdutos${idpro}`)
      lugar.innerHTML= idsProdutosCarrinho[idpro]
  }

  function atualizarPreco(){
    const lugPreco = document.getElementById("precoBruto")
    let totalPreco = 0
    for(const idProduto in idsProdutosCarrinho){
        totalPreco = totalPreco+(utilidades.find(pr => pr.id == idProduto).preco * idsProdutosCarrinho[idProduto])
    }
    lugPreco.innerText=` R$ ${totalPreco.toFixed(2).replace('.',',')}`

    calcularFrete()
  }
  
  atualizarPreco()

  function calcularFrete(){
    var totalP = 0
    for(const precoP in idsProdutosCarrinho){
      totalP+=10
    }

    const lugarFrete = document.getElementById("Frete")
    lugarFrete.innerHTML=`R$ ${totalP}`

    calcularTotal(totalP)
  }

  function calcularTotal(PrecoFrete){
    var totalPrecoFinal = 0
    for(const idProduto in idsProdutosCarrinho){
      totalPrecoFinal = totalPrecoFinal+(utilidades.find(pr => pr.id == idProduto).preco * idsProdutosCarrinho[idProduto])
  }

  var valorLiquido = totalPrecoFinal+PrecoFrete


  var lugTotalPreco =   document.getElementById('totalPreco')
  lugTotalPreco.style.color='orange'
lugTotalPreco.innerHTML=`R$ ${valorLiquido}`
  }

function removerProduto(idPro){
  delete idsProdutosCarrinho[idPro]
  atualizarQuant(idPro)
  atualizarPreco()
  imgVazioCarrinho()

  salvarLocalStorage('carrinho', idsProdutosCarrinho)

}

  function adicionarProduto(idPro){
    idsProdutosCarrinho[idPro]++
    atualizarQuant(idPro)
    atualizarPreco()
    imgVazioCarrinho()

    salvarLocalStorage('carrinho', idsProdutosCarrinho)

  }



  function btnDiminuirProduto(idPro){
    if(idsProdutosCarrinho[idPro] == 1){
      removerProduto(idPro)
      return
    }
    idsProdutosCarrinho[idPro]--
    atualizarQuant(idPro)
    atualizarPreco()
    imgVazioCarrinho()

    salvarLocalStorage('carrinho', idsProdutosCarrinho)

  }

  
function imgVazioCarrinho(){
  var contadorID = 0
  var lugarFinal = document.getElementById("produtosCheckout");
for(const dados in idsProdutosCarrinho){
  contadorID++
}

if(contadorID >= 1 ){
  document.getElementById("txtVazio").style.display='none'
console.log('ola')
}
else{
  lugarFinal.innerHTML=`<p style='color:black; display:flex; flex-direction:column; align-items:center; justify-content:space-around; gap:50PX; font-size:20pt;' id='txtVazio'> <img src='./Assets/botoes/shopping_bag_FILL1_wght500_GRAD0_opsz24.svg' style='height:150px;'>Ops! Você não tem produtos no carrinho</p>`
  console.log('ta vazio')
}

}
imgVazioCarrinho()




