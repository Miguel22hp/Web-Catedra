const cardsContainer = document.getElementById('CardsContainer');
const prevBtn = document.getElementById('PrevBtnExAlumni');
const nextBtn = document.getElementById('NextBtnExAlumni');
const cards = document.querySelectorAll('.exAlummniCard');

let currentIndexExAlumni = 0;

function showCard(index) {
    cards.forEach(card => card.classList.remove('cardActive'));
    cards[index].classList.add('cardActive');

    const offset = -index * 100; // Move by 100% per card
    cardsContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndexExAlumni = (currentIndexExAlumni > 0) ? currentIndexExAlumni - 1 : cards.length - 1;
    showCard(currentIndexExAlumni);
});

nextBtn.addEventListener('click', () => {
    currentIndexExAlumni = (currentIndexExAlumni < cards.length - 1) ? currentIndexExAlumni + 1 : 0;
    showCard(currentIndexExAlumni);
});

// Initialize the first card
showCard(currentIndexExAlumni);