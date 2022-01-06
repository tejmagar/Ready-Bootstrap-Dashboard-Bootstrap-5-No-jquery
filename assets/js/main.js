window.onload = () => {

    let toggle_sidebar = false,
        toggle_toolbar = false,
        nav_open = 0,
        toolbar_open = 0;


    const toggle = document.querySelector(".sidenav-toggler");
    toggle.setAttribute("color", "red")

    const html = document.querySelector("html");

    if (!toggle_sidebar) {
        toggle.addEventListener('click', () => {

            if (nav_open === 1) {
                html.classList.remove("nav_open");
                toggle.classList.remove("toggled");
                nav_open = 0;
            } else {
                html.classList.add("nav_open");
                html.classList.add("toggled");
                nav_open = 1;
            }
        });
    }

    const toolbar = document.querySelector(".toolbar-toggler");

    if (!toggle_toolbar) {
        toolbar.addEventListener("click", () => {
            if (toolbar_open === 1) {
                html.classList.remove("toolbar_open");
                toolbar.classList.remove("toggled");
                toolbar_open = 0;
            } else {
                html.classList.add("toolbar_open");
                toolbar.classList.add("toggled");
                toolbar_open = 1;
            }
        })
    }

}
