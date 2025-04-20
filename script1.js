// script.js

// Плавная прокрутка к якорям (если есть разделы на одной странице)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // отступ от верха, чтобы шапка не закрывала
                behavior: 'smooth'
            });
        }
    });
});

// Анимация для кнопки "Присоединиться"
const joinButton = document.querySelector('.button');

if (joinButton) {
    joinButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });

    joinButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
}

// Пример: добавить интерактивность для блока с избранным стихотворением
const featuredPoem = document.querySelector('.featured-poem');

if (featuredPoem) {
    featuredPoem.addEventListener('click', function() {
        alert('Вы перешли на страницу с полным текстом стихотворения!'); // Заменить на переход на реальную страницу
    });

    featuredPoem.style.cursor = 'pointer'; // Изменить курсор при наведении
}

// Пример: Анимация появления новостей
const newsItems = document.querySelectorAll('.news li');

newsItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';

    setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    }, 100 * index); // Задержка для каждого элемента
});




// Пример: фильтрация произведений (базовый)
const genreSelect = document.getElementById('genre');
const authorSelect = document.getElementById('author');
const searchInput = document.getElementById('search');
const poemCards = document.querySelectorAll('.poem-card');

function filterPoems() {
    const selectedGenre = genreSelect.value;
    const selectedAuthor = authorSelect.value;
    const searchTerm = searchInput.value.toLowerCase();

    poemCards.forEach(card => {
        const genre = card.querySelector('.genre').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();
        const title = card.querySelector('h3').textContent.toLowerCase();

        const genreMatch = selectedGenre === 'all' || genre.includes(selectedGenre);
        const authorMatch = selectedAuthor === 'all' || author.includes(selectedAuthor);
        const searchMatch = searchTerm === '' || title.includes(searchTerm);

        if (genreMatch && authorMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

if (genreSelect) {
    genreSelect.addEventListener('change', filterPoems);
}
if (authorSelect) {
    authorSelect.addEventListener('change', filterPoems);
}
if (searchInput) {
    searchInput.addEventListener('input', filterPoems);
}
