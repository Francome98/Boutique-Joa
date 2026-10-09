const fmt=n=>n.toFixed(2).replace(".",",")+" €";
let cart={},cat="all";
const grid=document.getElementById("grid");
function render(){
  grid.innerHTML=products.filter(p=>cat==="all"||p.c===cat).map(p=>`
  <article class="card">
    <div class="pic" style="background:${p.bg}">${p.e}</div>
    <div class="info">
      ${p.tag?`<span class="tag">${p.tag}</span>`:""}
      <h3>${p.n}</h3><small>${p.c}</small>
      <div class="buy"><div class="price">${fmt(p.p)} <span>${p.u}</span></div>
      <button class="add" data-id="${p.id}">Ajouter</button></div>
    </div>
  </article>`).join("");
}
function drawCart(){
  const ids=Object.keys(cart);
  const items=document.getElementById("items");
  items.innerHTML=ids.length?ids.map(id=>{const p=products.find(x=>x.id==id);return `
   <div class="line"><div><strong>${p.n}</strong><br><small>${fmt(p.p)} ${p.u}</small></div>
   <div class="qty"><button data-d="-1" data-id="${id}" aria-label="Retirer un">−</button><span>${cart[id]}</span><button data-d="1" data-id="${id}" aria-label="Ajouter un">+</button></div></div>`}).join(""):'<p class="empty">Votre panier est vide. Ajoutez un produit pour commencer.</p>';
  const total=ids.reduce((s,id)=>s+products.find(x=>x.id==id).p*cart[id],0);
  document.getElementById("total").textContent=fmt(total);
  document.getElementById("count").textContent=ids.reduce((s,id)=>s+cart[id],0);
}
grid.addEventListener("click",e=>{const b=e.target.closest(".add");if(!b)return;cart[b.dataset.id]=(cart[b.dataset.id]||0)+1;drawCart();});
document.getElementById("items").addEventListener("click",e=>{const b=e.target.closest("[data-d]");if(!b)return;const id=b.dataset.id;cart[id]+=+b.dataset.d;if(cart[id]<=0)delete cart[id];drawCart();});
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;cat=b.dataset.cat;document.querySelectorAll(".chip").forEach(c=>c.setAttribute("aria-pressed",c===b));render();});
const toggle=o=>document.body.classList.toggle("open",o);
document.getElementById("open").onclick=()=>toggle(true);
document.getElementById("close").onclick=()=>toggle(false);
document.getElementById("overlay").onclick=()=>toggle(false);
render();drawCart();
