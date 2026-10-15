document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#menuIcon");
    const navLinks = document.querySelector("#navLinks");

    // Mở hoặc đóng menu khi nhấn nút
    menuIcon.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuIcon.setAttribute("aria-expanded", isOpen);
        menuIcon.setAttribute(
            "aria-label",
            isOpen ? "Đóng menu" : "Mở menu"
        );

        menuIcon.textContent = isOpen ? "✕" : "☰";
    });

    // Đóng menu sau khi chọn một liên kết trên mobile
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Mở menu");
            menuIcon.textContent = "☰";
        });
    });

    // Đóng menu khi chuyển sang màn hình desktop
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Mở menu");
            menuIcon.textContent = "☰";
        }
    });
});