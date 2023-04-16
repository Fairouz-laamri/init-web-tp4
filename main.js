const test = document.getElementById("test");
let local = window.location.href;
let url = new URL(local);
let parm = new URLSearchParams(url.search);
let taille = parseFloat(parm.get("etol1"));
let poid = parseInt(parm.get("wazn1"));
let nom = parm.get("asm1");
console.log(poid);

let imc = poid / (taille * taille);
if (imc > 0) {
  html = `
 <h2 align="center"><strong>Nom : ${nom}</h2>
 <h2 align="center"><strong>Poid : ${poid}kg</h2>
 <h2 align="center"><strong>Taille : ${taille}m</h2>
 <h2 align="center"><strong>L'IMC de ${nom} = ${imc.toFixed(2)}</h2>
 `;
  test.insertAdjacentHTML("beforeend", html);
}

