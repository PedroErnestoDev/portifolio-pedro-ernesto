async function loadComponent(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    const container = document.getElementById(id);
    container.innerHTML = html;
}

function initMenu() {
    const button = document.querySelector(".menu-hamburguer");
    const mobileMenu = document.querySelector(".menu-phone");

    if (button && mobileMenu) {
        button.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
        });
    }
}

async function initApp() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");

    const yearSpan = document.querySelector('[data-year]');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    initMenu();
}

window.addEventListener("resize", () => {
    const mobileMenu = document.querySelector(".menu-phone");

    if(!mobileMenu) return

    let windowWidth = window.innerWidth;
    
    if (windowWidth >= 1080){
        mobileMenu.classList.remove("active");
    }
});

initApp();