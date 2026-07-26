const todoSearch = document.getElementById('todoSearch');
const todoList = document.getElementById('todoList');
const clearAllBtn = document.getElementById('clearAllBtn');

// Arama Filtreleme Fonksiyonu
todoSearch.addEventListener('input', function(e) {
    const text = e.target.value.toLowerCase();
    const items = todoList.querySelectorAll('.list-item');

    items.forEach(function(item) {
        const itemText = item.querySelector('.todo-text').textContent.toLowerCase();
        if (itemText.includes(text)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Tekil Eleman Silme (x butonları)
todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-icon')) {
        const item = e.target.parentElement;
        item.remove();
        
        // Eğer listede hiç eleman kalmazsa dış çerçeveyi gizle
        if (todoList.children.length === 0) {
            document.querySelector('.card-container').style.display = 'none';
        }
    }
});






