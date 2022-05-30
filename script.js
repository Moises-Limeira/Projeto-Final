const imgProduto = document.querySelector(".foto1");
const img= document.querySelector(".foto2");
const png= document.querySelector(".foto3");
async function dados() {
let dados = await fetch("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
let descriçao = await  dados.json();
//fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
// .then(descriçao => dados.json())
// .then(json => console.log(imgProduto.innerHTML = `<img src="${json.items[0].product.imageObjects[0].large}" alt="" />`));

console.log(imgProduto)

imgProduto.innerHTML = (`<img class="fotoProduto"  src="${descriçao.items[0].product.imageObjects[0].large}" alt="" />`);
img.innerHTML = (`<img class="fotoProduto"  src="${descriçao.items[1].product.imageObjects[0].large}" alt="" />`);
png.innerHTML = (`<img class="fotoProduto"  src="${descriçao.items[2].product.imageObjects[0].large}" alt="" />`);
}

dados()


const valor = document.querySelector(".valor");
const valor2 = document.querySelector(".valor2");
const valor3 = document.querySelector(".valor3");
async function aa() {
let aa = await fetch("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
let tt = await  aa.json();

console.log(valor)

valor.innerHTML = (`<span>${tt.items[0].product.priceSpecification.price}`);
valor2.innerHTML = (`<span>${tt.items[1].product.priceSpecification.price}`);
valor3.innerHTML = (`<span>${tt.items[2].product.priceSpecification.price}`);

}

aa()






const text = document.querySelector(".texto");
const text2 = document.querySelector(".texto2");
const text3 = document.querySelector(".texto3");
async function ll() {
let ll = await fetch("http://www.mocky.io/v2/5b15c4923100004a006f3c07");
let jj = await  ll.json();

console.log(text)

text.innerHTML = (`<p class="texto">${jj.items[0].product.name}`);
text2.innerHTML = (`<p class="texto">${jj.items[1].product.name}`);
text3.innerHTML = (`<p class="texto">${jj.items[2].product.name}`);

}

ll()









let sacola = document.querySelector(".sacola");
let arrayProdutos = document.querySelectorAll("button");
console.log(arrayProdutos)
let produtosSacola  = localStorage.getItem("sacola") ? JSON.parse(localStorage.getItem("sacola")) : [] ;
sacola.innerHTML = produtosSacola.length;
arrayProdutos.forEach(function(produto) {
  produto.addEventListener("click", function() {
   let produtoSerAdicionado =  this.closest(".container").getAttribute("data-id");
//    console.log(this.closest(".container"));
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























