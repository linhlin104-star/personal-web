document.addEventListener('DOMContentLoaded', function () {
    // Main navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainLayout = document.querySelector('.main-layout');

    if (sidebarToggle && sidebar && mainLayout) {
        sidebarToggle.addEventListener('click', function () {
            // Toggle classes for sidebar and main layout
            sidebar.classList.toggle('collapsed');
            mainLayout.classList.toggle('sidebar-collapsed');

            // Change button text and icon
            const isCollapsed = sidebar.classList.contains('collapsed');
            if (isCollapsed) {
                sidebarToggle.innerHTML = `<i class="bi bi-list"></i> Hiện danh mục`;
            } else {
                sidebarToggle.innerHTML = `<i class="bi bi-x-lg"></i> Ẩn danh mục`;
            }
        });
    }
});

