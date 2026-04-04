window.addEventListener("load", ()=>{

    let dataAtual = new Date()

    let anoAtual = dataAtual.getFullYear()

    document.querySelector("#span-data").innerText = anoAtual
})

let boxMenuHumgurguer = document.querySelector(".menu-hamburguer")

let menuMobile = document.querySelector(".mobile-menu")

const bodyHTML = document.querySelector("body")

bodyHTML.addEventListener("click", (event) => {

    if(
        !menuMobile.contains(event.target) &&
        !boxMenuHumgurguer.contains(event.target)
    ){
        menuMobile.classList.remove("mobile-menu-activated")
        boxMenuHumgurguer.classList.remove("menu-active")
    }

})

boxMenuHumgurguer.addEventListener("click", ()=>{
    menuMobile.classList.toggle("mobile-menu-activated")
    boxMenuHumgurguer.classList.toggle("menu-active")
})

function checkScreen(){
    if(window.innerWidth >= 1080){
        menuMobile.classList.remove("mobile-menu-activated")
        boxMenuHumgurguer.classList.remove("menu-active")
    }
}

checkScreen()
window.addEventListener("resize", checkScreen)

const reposContainer = document.querySelector("#repos")

fetch("https://api.github.com/users/PedroErnestoDev/repos")
  .then(res => res.json())
  .then(repos => {

    repos.forEach(repo => {

        const repoElement = document.createElement("div")

        repoElement.classList.add("repo-card")

        repoElement.addEventListener("click", () =>{
            window.open(repo.html_url, "_blank")
        })

        repoElement.innerHTML = `
            <h3><img src="assets/github.png" alt="">${repo.name}</h3>
            <div class="container-dados">
                <span>${repo.language}</span>
            </div>
        `

        reposContainer.appendChild(repoElement)

    })

})

const texto = "Desenvolvo aplicações web modernas, do front-end ao back-end.";
const elemento = document.querySelector(".typing");

let index = 0;

function escrever() {
    if (index < texto.length) {
        elemento.innerHTML += texto.charAt(index);
        index++;
        setTimeout(escrever, 50);
    }
}

escrever();

