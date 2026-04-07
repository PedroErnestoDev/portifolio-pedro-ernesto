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

const projetos = [
    {
        nome: "Ceduca Quiz",
        descricao: "O Ceduca Quiz é uma plataforma interativa de aprendizado que transforma o estudo em uma experiência divertida e dinâmica. Com quizzes personalizados, permite que alunos testem seus conhecimentos de forma lúdica, enquanto professores podem criar avaliações e monitorar o progresso em tempo real. Acessível em qualquer dispositivo, o Ceduca Quiz oferece uma maneira prática e eficiente de aprender e ensinar, promovendo um aprendizado mais envolvente e personalizado.",
        tecnologias: ["HTML", "CSS", "JS", "PHP", "MySQL"],
        link: "https://github.com/Eduardo6794/CeducaQuiz",
        imagem: "assets/cover-ceduca.png"
    },
    {
        nome: "Boa Broa",
        descricao: "Boa Broa é um site moderno e responsivo criado para apresentar produtos artesanais de forma clara e atrativa. Desenvolvido para divulgar um negócio, com navegação simples, design minimalista e foco em experiência do usuário.",
        tecnologias: ["ReactJS", "Sass"],
        link: "https://boa-broa-1lh18m6a9-pedros-projects-6d115572.vercel.app/",
        imagem: "assets/cover-boa-broa.png"
    },
    {
        nome: "Freelib",
        descricao: "Plataforma web para acesso a artigos de forma prática e organizada, com interface moderna, navegação intuitiva e foco em desempenho.",
        tecnologias: ["ReactJS", "Sass", "JS", "PHP", "MySQL"],
        link: "https://github.com/PedroErnestoDev/freelib",
        imagem: "assets/cover-freelib.png"
    },
    {
        nome: "Organo",
        descricao: "Aplicação web em React para organizar colaboradores em equipes de forma visual e dinâmica, com cadastro e exibição em cards.",
        tecnologias: ["ReactJS", "CSS"],
        link: "https://organo-qeecptjor-pedros-projects-6d115572.vercel.app/",
        imagem: "assets/cover-organo.png"
    },
    {
        nome: "Blog preview card",
        descricao: "Projeto baseado em desafio do Frontend Mentor, focado na construção de layout fiel, semântica e responsividade.",
        tecnologias: ["HTML", "CSS"],
        link: "https://pedroernestodev.github.io/Blog-preview-card/",
        imagem: "assets/cover-blog-preview.png"
    },
    {
        nome: "Advice generator app",
        descricao: "Aplicação que consome API externa para gerar conselhos aleatórios dinamicamente, focando em manipulação do DOM.",
        tecnologias: ["HTML", "CSS", "JS", "API"],
        link: "https://pedroernestodev.github.io/Advice-generator-app/",
        imagem: "assets/cover-advice-genarator.png"
    },
    {
        nome: "Prozetech",
        descricao: "Landing page com foco em conversão, estrutura objetiva e destaque para chamadas de ação.",
        tecnologias: ["React", "Styled-Components"],
        link: "https://willsf2021.github.io/prozetech/",
        imagem: "assets/cover-prozetech.png"
    },
    {
        nome: "Hamburger Page Responsive",
        descricao: "Projeto focado em navegação responsiva com menu hambúrguer, priorizando usabilidade mobile.",
        tecnologias: ["HTML", "CSS", "JS"],
        link: "https://pedroernestodev.github.io/HamburgerPageResponsive/",
        imagem: "assets/cover-reponsive-humburguer.png"
    },
    {
        nome: "Calcular & Viver",
        descricao: "Site com ferramentas de cálculo corporal como IMC e dobras cutâneas, auxiliando no acompanhamento físico.",
        tecnologias: ["HTML", "CSS", "JS"],
        link: "https://pedroernestodev.github.io/Calcular-Viver/index.html",
        imagem: "assets/cover-calcular-e-viver.png"
    },
    {
        nome: "IP Address Tracker",
        descricao: "Aplicação para rastrear localização de IPs usando API IPify e mapa interativo com Leaflet.",
        tecnologias: ["HTML", "CSS", "JS", "API"],
        link: "https://pedroernestodev.github.io/Frontend-Mentor-IP-address-tracker/",
        imagem: "assets/cover-ip-tracker.png"
    },
    {
        nome: "FAQ-accordion",
        descricao: "Componente interativo para exibição de perguntas frequentes com expansão e colapso de respostas.",
        tecnologias: ["HTML", "CSS", "JS"],
        link: "https://pedroernestodev.github.io/FAQ-accordion/",
        imagem: "assets/cover-faq-accordion.png"
    }
];

const containerProjetos = document.querySelector("#projetos")

projetos.forEach(projeto => {
    const div = document.createElement("div")

    div.classList.add("card-projects")

    div.addEventListener("click", () => {
        window.open(projeto.link, "_blanck")
    })

    div.innerHTML = `
        <img src="${projeto.imagem}" alt="Imagem ${projeto.nome}" class="img-card">
        <div class="container-dados-card">
            <h3>${projeto.nome}</h3>
            <div class="container-paragrafo">
                <p>${projeto.descricao}</p>
            </div>
            <div class="container-languages">
                ${projeto.tecnologias.map(t => `
                    <div class="langs">
                        <p>${t}</p>
                    </div>
                    `).join("")}
            </div>
        </div>
    `

    containerProjetos.appendChild(div)
})