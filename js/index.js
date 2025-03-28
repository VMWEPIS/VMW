document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".view");

    function handleScroll() {
        const windowHeight = window.innerHeight;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight * 0.9) {
                item.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para ativar elementos visíveis no início
});


document.getElementById("menu-toggle").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    let icon = this.querySelector("i");

    menu.classList.toggle("hidden");

    // Alternar entre o ícone de menu e o de fechar
    if (menu.classList.contains("hidden")) {
        icon.classList.replace("fa-times", "fa-bars");
    } else {
        icon.classList.replace("fa-bars", "fa-times");
    }
});


