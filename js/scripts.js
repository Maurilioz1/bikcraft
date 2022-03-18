// Ativar links no menu
const links = document.querySelectorAll('.header-menu a');

function activeLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('active');
    }
}

links.forEach(activeLink);

// Ativar itens do orçamento
const params = new URLSearchParams(location.search);

function activeProduct(param) {
    const element = document.getElementById(param);

    if (element) {
        element.checked = true;
    }
}

params.forEach(activeProduct);

// Perguntas frequentes
const questions = document.querySelectorAll('.questions button');

function activeQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const response = document.getElementById(controls);
    const active = response.classList.contains('active');

    response.classList.toggle('active');
    question.setAttribute('aria-expanded', active);
}

function questionsEvent(question) {
    question.addEventListener('click', activeQuestion);
}

questions.forEach(questionsEvent);

// Galeria de bicicletas
const galery = document.querySelectorAll('.bicycle-images img');
const galeryContainer = document.querySelector('.bicycle-images');

function changeImage(event) {
    const img = event.currentTarget;

    const media = matchMedia('(min-width: 937px)').matches;

    if (media) {
        galeryContainer.prepend(img);
    }
}

function galeryEvents(img) {
    img.addEventListener('click', changeImage);
}

galery.forEach(galeryEvents);