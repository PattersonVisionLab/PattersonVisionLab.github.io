const tags = document.querySelectorAll('.tag');
const publications = document.getElementById('publications');

tags.forEach(tag => {
    tag.addEventListener('click', () => {
        const selectedTag = tag.getAttribute('data-tag');

        // Toggle active class on clicked tag and remove it from others
        tags.forEach(t => {
            if (t === tag) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        // Show publications with the selected tag and hide others
        const publicationCards = publications.querySelectorAll('.publication-card');
        publicationCards.forEach(card => {
            const cardTags = card.getAttribute('data-tags').split(',');

            if (cardTags.includes(selectedTag)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});