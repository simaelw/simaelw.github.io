const fallbackLanguage = 'it';

function getQueryStringParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function loadLanguageFile(language) {
    const languageFilePath = `./lang/${language}.json`;

    return fetch(languageFilePath)
        .then(response => {
            if (!response.ok) {
                window.location.href = '/';
            }
            return response.json();
        });
}

function setLanguageTexts(texts) {
    const elements = document.querySelectorAll('[data-text-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-text-key');
        if (texts[key]) {
            el.innerText = texts[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const lang = getQueryStringParameter('lang') || fallbackLanguage;
    loadLanguageFile(lang)
        .then(texts => setLanguageTexts(texts))
        .catch(error => console.error('Error loading language file:', error));
});
