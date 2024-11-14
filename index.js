document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".blog-list__item a");
    const sections = document.querySelectorAll(".blog-article__block h4");

    console.log(sections)

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove("accent-text"));
        navLinks[index].classList.add("accent-text");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});