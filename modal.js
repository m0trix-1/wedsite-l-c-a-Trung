// Quản lý hiển thị PopUp Chi tiết Sản phẩm
const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body-content');
const modalClose = document.getElementById('modal-close');

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <i class="${product.icon}" style="font-size: 5rem; color: var(--primary-color);"></i>
        </div>
        <h2 style="font-family: 'Playfair Display', serif; color: var(--primary-color); margin-bottom: 10px;">${product.title}</h2>
        <h3 style="color: var(--accent-color); font-weight: 600; margin-bottom: 15px;">${product.price}</h3>
        <p style="color: #555; line-height: 1.7; margin-bottom: 25px;">${product.description}</p>
        <button class="btn" style="width: 100%;" onclick="closeProductModal()">Đóng cửa sổ</button>
    `;
    modal.classList.add('active');
}

function closeProductModal() {
    modal.classList.remove('active');
}

// Lắng nghe sự kiện click nút đóng hoặc click ra ngoài modal
modalClose.addEventListener('click', closeProductModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProductModal();
    }
});
