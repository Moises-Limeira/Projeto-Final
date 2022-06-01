const container = document.querySelectorAll(".container");
async function dados() {
let dados = await fetch("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
let descriçao = await  dados.json();
    descriçao.items.forEach(function(produto, index){
        let fotoProduto = container[index].querySelector(".fotoProduto");
        let nomeProduto = container[index].querySelector(".texto");
        let preco = container[index].querySelector(".valor");
        fotoProduto.setAttribute('src', produto.product.imageObjects[0].large);
        nomeProduto.innerText = produto.product.name;
        preco.innerText = produto.product.priceSpecification.price;
    });
}    
dados();

let sacola = document.querySelector(".sacola");
let arrayProdutos = document.querySelectorAll("button");
console.log(arrayProdutos)
let produtosSacola  = localStorage.getItem("sacola") ? JSON.parse(localStorage.getItem("sacola")) : [] ;
sacola.innerHTML = produtosSacola.length;
arrayProdutos.forEach(function(produto) {
  produto.addEventListener("click", function() {
   let produtoSerAdicionado =  this.closest(".container").getAttribute("data-id");
    if (!produtosSacola.length) {
      produtosSacola.push({"idProduto": produtoSerAdicionado});
    } 

    let existeProduto = produtosSacola.find(element => element.idProduto == produtoSerAdicionado);
    if (!existeProduto) {
      produtosSacola.push({"idProduto": produtoSerAdicionado});
    }
    localStorage.setItem("sacola", JSON.stringify(produtosSacola));
    sacola.innerHTML = produtosSacola.length;
    
  });
  
});