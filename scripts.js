// Lấy ra nút chuyển đổi bằng ID
const modeToggle = document.getElementById('mode-toggle');

// Lấy ra phần thân trang (body)
const body = document.body;

// Lắng nghe sự kiện click trên nút
modeToggle.addEventListener('click', () => {
    // Thêm hoặc xóa class 'dark-mode' từ body
    body.classList.toggle('dark-mode');

    // Cập nhật text của nút
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Chuyển chế độ Sáng';
    } else {
        modeToggle.textContent = 'Chuyển chế độ Tối';
    }
});