document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuToggle = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");

    // 1. Render Danh sách Sản phẩm
    function renderProducts(categoryFilter = "all") {
        productsContainer.innerHTML = "";
        
        const filteredProducts = categoryFilter === "all" 
            ? products 
            : products.filter(p => p.category === categoryFilter);

        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-image-box">
                    <i class="${product.icon}"></i>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">${product.price}</p>
                    <button class="btn" onclick="openProductModal(${product.id})">Chi Tiết</button>
                </div>
            `;
            productsContainer.appendChild(card);
        });
    }

    // 2. Thiết lập Lọc Sản Phẩm
    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            renderProducts(e.target.dataset.filter);
        });
    });

    // 3. Xử lý Toggle Menu trên Thiết bị Di động (Hamburger Menu)
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
        const icon = menuToggle.querySelector("i");
        if (navbar.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Tự động đóng menu di động khi nhấn link điều hướng
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
            menuToggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });

    // Chạy mặc định tải toàn bộ sản phẩm
    renderProducts();
});
