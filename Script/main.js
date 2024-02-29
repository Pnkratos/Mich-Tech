import { utilidades } from "./Produtos.js";

import { salvarLocalStorage } from "./Produtos.js";



/*Renderiza os produtos*/
Notfy();
var lugarTitulo = document.getElementById("lugtitusmar");
lugarTitulo.innerHTML = `<a href='smartphones.html'><h1 id='titsec'>SMARTPHONES <img src='./Assets/botoes/flechaD.svg'></h1></a>`;

var lugSmartphones = document.getElementById("Smartphones1");
for (const dados of utilidades) {
  if (dados.cate == "smartphones" && dados.id < 12) {
    lugSmartphones.innerHTML += `
<div class="produto item current-item" id='produtoLugar${dados.id}'>
<div class='divProdutoMain'>
<img src="${dados.imagem}" alt="" class='imgProdutoMain' id='btnAbrirPagProduto${dados.id}'>
</div>
<div class="nome">${dados.nome}</div>
<div class="marca" >${dados.marca}</div>
<div class="preco" >R$ ${dados.preco}</div>
<div class='avaliacao'>
<span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
<span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
<span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
<span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
<span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
<span style='color:orange;'>(50)</span>
</div>
<button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>

</div>`;
  }
}

/*Renderiza os produtos*/

var lugarTitulo = document.getElementById("lugtituin");
lugarTitulo.innerHTML = `<a href='informatica.html'><h1 id='titsec'>INFORMÁTICA <img src='./Assets/botoes/flechaD.svg'></h1></a>`;

var lugInformatica = document.getElementById("informatica");

for (const dados of utilidades) {
  if (dados.cate == "informatica" && dados.id < 66) {
    lugInformatica.innerHTML += `
    <div class="produto item current-item" id='produtoLugar${dados.id}'>
    <div class='divProdutoMain'>
    <img src="${dados.imagem}" alt="" class='imgProdutoMain' id='btnAbrirPagProduto${dados.id}'>
    </div>
    <div class="nome">${dados.nome}</div>
    <div class="marca" >${dados.marca}</div>
    <div class="preco" >R$ ${dados.preco}</div>
    <div class='avaliacao'>
    <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
    <span style='color:orange;'>(50)</span>
    </div>
    <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
    
    </div>`;
  }
}

/*Renderiza os produtos*/

var lugarTitulo = document.getElementById("lugtitutv");
lugarTitulo.innerHTML = `<a href='Tv.html'><h1 id='titsec'>SMART TV <img src='./Assets/botoes/flechaD.svg'></h1></a>`;

var lugTvs = document.getElementById("Tvs");

for (const dados of utilidades) {
  if (dados.cate == "TV" && dados.id < 105) {
    lugTvs.innerHTML += `
    <div class="produto item current-item" id='produtoLugar${dados.id}'>
    <div class='divProdutoMain'>
    <img src="${dados.imagem}" alt="" class='imgProdutoMain'  id='btnAbrirPagProduto${dados.id}' >
    </div>
    <div class="nome">${dados.nome}</div>
    <div class="marca" >${dados.marca}</div>
    <div class="preco" >R$ ${dados.preco}</div>
    <div class='avaliacao'>
    <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
    <span style='color:orange;'>(50)</span>
    </div>
    <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
    
    </div>`;

  }
}

/*Renderiza os produtos*/
var lugarTitulo = document.getElementById("lugtituele");
lugarTitulo.innerHTML = `<a href='eletrodomestico.html'><h1 id='titsec'>ELETRODOMÉSTICO <img src='./Assets/botoes/flechaD.svg'></h1></a>`;

var lugEletro = document.getElementById("eletro");

for (const dados of utilidades) {
  if (dados.cate == "eletrodomestico" && dados.id < 123) {
    lugEletro.innerHTML += `
    <div class="produto item current-item" id='produtoLugar${dados.id}'>
    <div class='divProdutoMain'>
    <img src="${dados.imagem}" alt="" class='imgProdutoMain'  id='btnAbrirPagProduto${dados.id}'>
    </div>
    <div class="nome">${dados.nome}</div>
    <div class="marca" >${dados.marca}</div>
    <div class="preco" >R$ ${dados.preco}</div>
    <div class='avaliacao'>
    <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
    <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
    <span style='color:orange;'>(50)</span>
    </div>
    <button class='butAdd' style='display:flex; cursor:pointer; align-items:center;' id='pro${dados.id}')'>adicionar  <img src='./Assets/botoes/add_product_car.svg' style='height:20px;'></button>
    
    </div>`;
  }
}

/*Faz o menu de itens aparecer */

function habilitarRecursos() {
  function aparecerCarrinho() {
    const carrinho = document.getElementById("menuCarrinho");
    carrinho.classList.toggle("menuCarrinhoAparecendo");
  }
  const btnCarrinho = document.getElementById("btnAbrirCarrinho");
  btnCarrinho.addEventListener("click", () => aparecerCarrinho());

  const btnFCarrinho = document.getElementById("btnFecharCarrinho");
  btnFCarrinho.addEventListener("click", () => aparecerCarrinho());

function aparecerLogin() {
    const Login = document.getElementById("menuDesaparecido");
    Login.classList.toggle("menuProfileAparecendo");
  }

  const btnAMenuP = document.getElementById("btnApareceProfile");
  btnAMenuP.addEventListener("click", () => aparecerLogin());

  const btnFMenuP = document.getElementById("btnFecharMenuProfile");
  btnFMenuP.addEventListener("click", () => aparecerLogin());
  Notfy();
}
habilitarRecursos();

import { idsProdutosCarrinho } from "./Produtos.js";
  



  var conteinerCarrinho = document.createElement("article");
  conteinerCarrinho.setAttribute("id", "conteinerCarrinho");
  conteinerCarrinho.setAttribute("class", "containerCarrinho");
  const lugarCarrinho = document.getElementById("lugarProdutoCarrinho");
  lugarCarrinho.appendChild(conteinerCarrinho);

  
  
  
  document.getElementById("finalizarCompra").addEventListener("click", function(){
    window.location.href='FinalCompra.html'
  })
  
  function redesenharProdutos(idpro) {
    const product = utilidades.find(
      (p) => p.id == idpro
    ); /*Acha o produto no catalogo*/
    const lugar = document.getElementById("conteinerCarrinho");
    const tagProdutoNoaCarrinho = document.createElement("div");
    tagProdutoNoaCarrinho.setAttribute("class", `produtoNoaCarrinho`);
    tagProdutoNoaCarrinho.setAttribute("id", `produtoNoaCarrinho${product.id}`);
    lugar.appendChild(tagProdutoNoaCarrinho); /*adiciona a div Pai do Produto*/
  
    const model = `
  
    <div class='caracteristicas'>
    <img src="${product.imagem}" alt="" class="imgProdutoCarrinho">
  
    <div class="dadosProdutoCarrinho" id="lugarDados${product.id}">
        <p class="nome" id="nomeNoCarrinho${product.id}" style='color:white;'>${product.nome}</p>
        <p class="marca" id="marcaNoCarrinho${product.id}" style='color:grey;'>${product.marca}</p>
        <p class="preco" id="precoNoCarrinho${product.id}"> R$ ${product.preco}</p>
    </div>
    </div>
  
    <div class="botoesDoProdutoCarrinho" id="botoesDoProdutoCarrinho${product.id}">
    <button class="fecharProdutocarrinho" id="fecharProdutocarrinho${product.id}"><img src='./Assets/botoes/delete-left-solid.svg' style='height:100%;'></button>
      <div class='infoProduto'>
        <button class="btnsQuant" id="btnAcrescentarProduto${product.id}"><img src='./Assets/botoes/add.svg'></button>
          <p class='numquantidadeprodutos' id="quantidadeProdutosCarrinhos${product.id}"  style='color:orange;'></p>
          <button class="btnsQuant" id="btnSubtrairProduto${product.id}"><img src='./Assets/botoes/remove.svg'></button>
            </div>
        </div>
    `; /*modelo de card para colocar no carrinho */
    const lugarTag = document.getElementById(`produtoNoaCarrinho${product.id}`);
    lugarTag.innerHTML += model;
    atualizarQuantidade(idpro); /* recupera o elemento e coloca o modelo nele*/
    atualizarPrecoCarrinho();
  
    Notfy();
  
    document
      .getElementById(`btnAcrescentarProduto${idpro}`)
      .addEventListener("click", () => acrescentarProduto(idpro));
    document
      .getElementById(`btnSubtrairProduto${idpro}`)
      .addEventListener("click", () => subtrairProduto(idpro));
    document
      .getElementById(`fecharProdutocarrinho${idpro}`)
      .addEventListener("click", () => removerProdutoCarrinho(idpro));
    /*Adiciona funcionalidade aos botoes */
  }
  
  function removerProdutoCarrinho(idpro) {
    delete idsProdutosCarrinho[idpro];
    salvarLocalStorage("carrinho", idsProdutosCarrinho);
    mostrarProdutosAtualizados();
    atualizarPrecoCarrinho();
    Notfy();
    // imgVazioCarrinho();
  }
  
  function atualizarPrecoCarrinho(){
    const lugPreco = document.getElementById("txtPreco")
    let totalPreco = 0
    for(const idProduto in idsProdutosCarrinho){
        totalPreco = totalPreco+(utilidades.find(pr => pr.id == idProduto).preco * idsProdutosCarrinho[idProduto])
    }
    lugPreco.innerText=`Total: R$ ${totalPreco.toFixed(2).replace('.',',')}`
    
  }
  atualizarPrecoCarrinho()
  function acrescentarProduto(idpro) {
    idsProdutosCarrinho[idpro]++;
  
    Notfy();
    salvarLocalStorage("carrinho", idsProdutosCarrinho);
    atualizarQuantidade(idpro);
    atualizarPrecoCarrinho();
    // imgVazioCarrinho();
  }
  
  function subtrairProduto(idpro) {
    if (idsProdutosCarrinho[idpro] === 1) {
      removerProdutoCarrinho(idpro);
      // imgVazioCarrinho();
      return;
    }
  
    idsProdutosCarrinho[idpro]--;
  
    salvarLocalStorage("carrinho", idsProdutosCarrinho);
    atualizarQuantidade(idpro);
    atualizarPrecoCarrinho();
    Notfy();
    // imgVazioCarrinho();
  }
  
  function atualizarQuantidade(idpro) {
    document.getElementById(`quantidadeProdutosCarrinhos${idpro}`).innerText =
      idsProdutosCarrinho[idpro];
  }
  
  function mostrarProdutosAtualizados() {
    const lugar = document.getElementById("conteinerCarrinho");
    lugar.innerHTML = "";
  
    for (const idProduto in idsProdutosCarrinho) {
      redesenharProdutos(idProduto);
    }
  }
  mostrarProdutosAtualizados();
  
  function renderizarProdutoCarrinho(idpro) {
    if (idpro in idsProdutosCarrinho) {
      acrescentarProduto(idpro);
      // imgVazioCarrinho()
      return;
    }
    idsProdutosCarrinho[idpro] = 1;
    redesenharProdutos(idpro);
    
    // imgVazioCarrinho();
  }





for(const pdr of utilidades){

  if(pdr.id<12  ){
    var botaoADD = document.getElementById(`pro${pdr.id}`);
    botaoADD.addEventListener("click", () =>
      renderizarProdutoCarrinho(pdr.id))

      // var botaoADD2 = document.getElementById(`addProdutoIndividual${pdr.id}`);
      // botaoADD2.addEventListener("click", () =>
      //   renderizarProdutoCarrinho(pdr.id))
  }

  if(pdr.id<123 && pdr.id > 110  ){
    var botaoADD = document.getElementById(`pro${pdr.id}`);
    botaoADD.addEventListener("click", () =>
      renderizarProdutoCarrinho(pdr.id))

  }
  if(pdr.id<66 && pdr.id > 50  ){
    var botaoADD = document.getElementById(`pro${pdr.id}`);
    botaoADD.addEventListener("click", () =>
      renderizarProdutoCarrinho(pdr.id))


  }
  if(pdr.id<105 && pdr.id > 90  ){
    var botaoADD = document.getElementById(`pro${pdr.id}`);
    botaoADD.addEventListener("click", () =>
      renderizarProdutoCarrinho(pdr.id))


    // addProdutoIndividual
  }

}
  
  

function Notfy() {
  var quantTotal = 0;
  for (const idpro in idsProdutosCarrinho) {
    quantTotal += idsProdutosCarrinho[idpro];
  }
  var spanQuant = document.getElementById("spanQuant");
  spanQuant.innerText = quantTotal;
  
}



var lugar1 = document.getElementById("Smartphones1");
var lugar2 = document.getElementById("informatica");
var lugar3 = document.getElementById("Tvs");
var lugar4 = document.getElementById("eletro");

var contadorP1 = 1;
var contadorP2 = 1;
var contadorP3 = 1;
var contadorP4 = 1;

function passarSlide1() {
  if (contadorP1 > 7) {
    lugar1.scroll({
      left: 0,
      behavior: "smooth",
    });
    contadorP1 = 0;
  }
  lugar1.scroll({
    left: 250 + (contadorP1 - 1) * 250,
    behavior: "smooth",
  });
  console.log(contadorP1);
  contadorP1++;
}
function voltarSlide1() {
  if (contadorP1 == 1) {
    lugar1.scroll({
      left: 1700,
      behavior: "smooth",
    });
    contadorP1 = 8;
    return;
  }
  lugar1.scroll({
    left: 250 + (contadorP1 - 1) * 250 - 250,
    behavior: "smooth",
  });

  contadorP1--;
  console.log(contadorP1);
}

function passarSlide2() {
  if (contadorP2 > 11) {
    lugar2.scroll({
      left: 0,
      behavior: "smooth",
    });
    contadorP2 = 0;
  }
  lugar2.scroll({
    left: 250 + (contadorP2 - 1) * 250,
    behavior: "smooth",
  });
  console.log(contadorP2);
  contadorP2++;
}

function voltarSlide2() {
  if (contadorP2 == 1) {
    lugar2.scroll({
      left: 2700,
      behavior: "smooth",
    });
    contadorP2 = 12;
    return;
  }
  lugar2.scroll({
    left: 250 + (contadorP2 - 1) * 250 - 250,
    behavior: "smooth",
  });

  contadorP2--;
  console.log(contadorP2);
}

// passa o 3° container
function passarSlide3() {
  if (contadorP3 > 10) {
    lugar3.scroll({
      left: 0,
      behavior: "smooth",
    });
    contadorP3 = 0;
  }
  lugar3.scroll({
    left: 250 + (contadorP3 - 1) * 250,
    behavior: "smooth",
  });
  console.log(contadorP3);
  contadorP3++;
}

function voltarSlide3() {
  if (contadorP3 == 1) {
    lugar3.scroll({
      left: 2700,
      behavior: "smooth",
    });
    contadorP3 = 11;
    return;
  }
  lugar3.scroll({
    left: 250 + (contadorP3 - 1) * 250 - 250,
    behavior: "smooth",
  });

  contadorP3--;
  console.log(contadorP3);
}

// passa o 4° container
function passarSlide4() {
  if (contadorP4 > 7) {
    lugar4.scroll({
      left: 0,
      behavior: "smooth",
    });
    contadorP4 = 0;
  }
  lugar4.scroll({
    left: 250 + (contadorP4 - 1) * 250,
    behavior: "smooth",
  });
  console.log(contadorP4);
  contadorP4++;
}

function voltarSlide4() {
  if (contadorP4 == 1) {
    lugar4.scroll({
      left: 1700,
      behavior: "smooth",
    });
    contadorP4 = 8;
    return;
  }
  lugar4.scroll({
    left: 250 + (contadorP4 - 1) * 250 - 250,
    behavior: "smooth",
  });

  contadorP4--;
  console.log(contadorP4);

} 


document
  .getElementById("voltarSlide2")
  .addEventListener("click", () => voltarSlide2());
document
  .getElementById("passarSlide2")
  .addEventListener("click", () => passarSlide2());

document
  .getElementById("voltarSlide1")
  .addEventListener("click", () => voltarSlide1());
document
  .getElementById("passarSlide1")
  .addEventListener("click", () => passarSlide1());

document
  .getElementById("voltarSlide3")
  .addEventListener("click", () => voltarSlide3());
document
  .getElementById("passarSlide3")
  .addEventListener("click", () => passarSlide3());

document
  .getElementById("voltarSlide4")
  .addEventListener("click", () => voltarSlide4());
document
  .getElementById("passarSlide4")
  .addEventListener("click", () => passarSlide4());



var quantProdutosCarrinho = {}



function AumentarQuantProdutoIndividual(idproduct){
  quantProdutosCarrinho[idproduct]++
  console.log(quantProdutosCarrinho[idproduct])
  atualizarQuantProdutiIndividual(idproduct)
}

function DiminuirQuantProdutoIndividual(idproduct){
  if(quantProdutosCarrinho[idproduct] == 1){
    atualizarQuantProdutiIndividual(idproduct)
    return
  }
  quantProdutosCarrinho[idproduct]--
  atualizarQuantProdutiIndividual(idproduct)
}

function adicionarProdIndividualAoCarrinho(idProduto){
      renderizarProdutoCarrinho(idProduto)
}

function atualizarQuantProdutiIndividual(idProduto){
    const lugarQuantProdIndividual = document.getElementById(`QuantProdutoIndividual${idProduto}`)
    lugarQuantProdIndividual.innerHTML=quantProdutosCarrinho[idProduto]
}



for(const produtos of utilidades){
  if(produtos.id<12){
    habilitarProdutoIndividual(produtos.id)
  }

  if(produtos.id<123 && produtos.id > 110 ){
    habilitarProdutoIndividual(produtos.id)
  }
  if(produtos.id<66 && produtos.id > 50){
    habilitarProdutoIndividual(produtos.id)
  }
  if(produtos.id<105 && produtos.id > 90){
    habilitarProdutoIndividual(produtos.id)
  }
}



  function habilitarProdutoIndividual(id){


    const produtos = utilidades.find(
      (p) => p.id == id
    );

    var content = document.createElement('div')
    content.setAttribute('id',`container${produtos.id}`)
    content.setAttribute('class','ProdutosIndividuais')
  
    const model2 = `    <div class='totalProdutoIndividual'>
    <button class='btnFecharProdutoIndividual' id='btnFecharProdutoIndividual${produtos.id}'>    <img src="./Assets/botoes/close_FILL1_wght400_GRAD0_opsz24B.svg" alt="" style='scale:1.2;'></button>

    <div class='left-side'>
    <span style='color:orange; position:absolute; top:0; margin-top:3%;'><a style='color:orange;' href='./index.html'>Início</a> / <a
    style='color:orange;' href='./${produtos.cate}.html'>${produtos.cate}</a></span>
  
        <div class="divImgProdutoIndividual">
            <img src='${produtos.imagem}' style='height:300px;'>
        </div>
    </div>
  
  
  
        <div class="caracteristicasProdutoIndividual">
            <p class="nomeProdutoIndividual">
                ${produtos.nome}
            </p>
            <p class="marcaProdutoIndividual">
                ${produtos.marca}
            </p>
            <div class="descricaoProdutoIndividual">
                ${produtos.caract}
            </div>
            <div class='avaliacao'>
            <span id='estrela1' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela2' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela3' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela4' class='estrelaVazia'><img src='./Assets/botoes/star-solid.svg' class='estrela'></span>
            <span id='estrela5' class='estrelaVazia'><img src='./Assets/botoes/star-regular.svg' class='estrela'></span>
            <span style='color:orange;'>(50)</span>
            </div>
            <span class="precoProdutoIndividual">
                R$${produtos.preco}
  
            </span>
            <span class="semjurosProdutoIndividual">
                Em até <span class='txtsemjuros'> 10 X de R$${(produtos.preco/10).toFixed(2)}</span>
            </span>
        <div class="quantidadeProdutoIndividual">
            <button class='btnMudarQuantProdutoIndividual'id='aumentarQuantIndividual${produtos.id}'><img src='./Assets/botoes/addBlack.svg'></button>
            <span id='QuantProdutoIndividual${produtos.id}'></span>
            <button class='btnMudarQuantProdutoIndividual' id='diminuirQuantIndividual${produtos.id}'><img src='./Assets/botoes/removeBlack.svg'></button>
  
        </div>
            <div class="addToCartProdutoIndividual">
            <button type="button" class="button" id='2pro${produtos.id}'  >
            <span class="button__text">Adicionar</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button>     </div>
  
  
    </div>
  </div>
  `

  
    var lugar = document.getElementById('eletro')
    lugar.appendChild(content)
  
    var container = document.getElementById(`container${produtos.id}`)
    container.innerHTML+=model2
  
  
    var btnimgAbrirProduto = document.getElementById(`btnAbrirPagProduto${produtos.id}`)
  btnimgAbrirProduto.addEventListener('click',()=>aparecerProdutoIndividual(produtos.id))
  
  var btnimgFecharProduto = document.getElementById(`btnFecharProdutoIndividual${produtos.id}`)
  btnimgFecharProduto.addEventListener('click',()=>aparecerProdutoIndividual(produtos.id))
  // btnFecharProdutoIndividual
  
  var btnADDCARProdutoIndividual = document.getElementById(`2pro${produtos.id}`)

  btnADDCARProdutoIndividual.addEventListener('click',()=>adicionarProdIndividualAoCarrinho(produtos.id))



  var btnAumentarQuant = document.getElementById(`aumentarQuantIndividual${produtos.id}`)
  var btnDiminuirQuant = document.getElementById(`diminuirQuantIndividual${produtos.id}`)



  btnAumentarQuant.addEventListener("click",()=> AumentarQuantProdutoIndividual(produtos.id))
  btnDiminuirQuant.addEventListener("click", ()=> DiminuirQuantProdutoIndividual(produtos.id))
}



function aparecerProdutoIndividual(id){
  var lugarP = document.getElementById(`container${id}`)
  lugarP.classList.toggle('ProdutosIndividuaisAparecendo')
  quantProdutosCarrinho[id] = 1
  atualizarQuantProdutiIndividual(id)
}

document.getElementById('chamativo').addEventListener('mouseenter', function() {
  var animatedElement = document.getElementById('imgChamativo');
  animatedElement.classList.toggle('hidden');
});

document.getElementById('chamativo2').addEventListener('mouseenter',  function() {
  var animatedElement = document.getElementById('tecladok95');
  animatedElement.classList.toggle('escondido');
});

function filtrarProdutos(){


  var divitemlist = document.createElement('div')
  divitemlist.setAttribute("id","itemList")
  divitemlist.setAttribute("class","itemlist")

  document.getElementById("topo").appendChild(divitemlist)

  var divKaua = document.createElement('div')
  divKaua.setAttribute('id','kaua')

  var lugitems =  document.getElementById('itemList')
    lugitems.innerHTML+='Produtos Encontrados'
  lugitems.appendChild(divKaua)


  for(const dadosPesquisa of utilidades){

    document.getElementById('kaua').innerHTML+=`
    <div class='produtosBarra' id='lugar${dadosPesquisa.id}'>
  
      <img src='${dadosPesquisa.imagem}' style='height: 100px;'>
      <div style='display:flex;flex-direction:column; gap:10px;'>
      <span class='tets' id='${dadosPesquisa.id}'>${dadosPesquisa.nome} </span>
      <span style='color:grey;'>${dadosPesquisa.marca}</span>
      <b><span style='color:orange;'>R$<span style='color:orange;'> ${dadosPesquisa.preco}</span></span></b>
      </div>
      <button id='btnPesquisaProduto${dadosPesquisa.id}' style='border: 1px solid black;border-radius:5px;width:125px; cursor:pointer;'>Ver</button>
    </div>

    `
  }
  
  document.getElementById('inputSearch').addEventListener('input', function () {
    let searchTerm = this.value.toLowerCase();
    let items = document.querySelectorAll('.tets');
    var aparecerMenu = document.getElementById("itemList")
    aparecerMenu.classList.add("itensAparecendo")
    var input = document.getElementById('inputSearch')
  
    if(input.value == 0){
      aparecerMenu.classList.remove("itensAparecendo")
    }
    
    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
          document.getElementById(`lugar${item.id}`).style.display='flex'
        } else {
            document.getElementById(`lugar${item.id}`).style.display='none'
        }
    });
  });
  
  for(const produtos of utilidades){
    var btnAbrirPesquisa = document.getElementById(`btnPesquisaProduto${produtos.id}`)
    btnAbrirPesquisa.addEventListener("click",()=>aparecerProdutoIndividual(produtos.id))
  }
}
filtrarProdutos()


function imgVazioCarrinho(){
  var contadorID = 0
for(const dados in idsProdutosCarrinho){
  contadorID++
}

const lugarV = document.getElementById('conteinerCarrinho')
if(contadorID >= 1 ){
  document.getElementById('txtVazio').style.display='none'
  return
}
else{

  lugarV.innerHTML=`<p style='color:white; display:flex; flex-direction:column; align-items:center; justify-content:space-around; gap:50PX; font-size:60%;' id='txtVazio'> <img src='./Assets/botoes/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg' style='height:150px;'>Ops! Parece que você não adicionou nenhum produto ainda</p>`
    document.getElementById('txtVazio').style.display='flex'
}

}
imgVazioCarrinho()

