// Define translations for header, headline, and button text
const translations = {
    "en": {
        "home": "Home",
        "projects": "Projects",
        "translate": "EN/DE",  // Button shows "German" when in English
        "headline": "No projects."
    },
    "de": {
        "home": "Startseite",
        "projects": "Projekte",
        "translate": "EN/DE",  // Button shows "Englisch" when in German
        "headline": "Keine Projekte."
    }
};

// Function to update the translation
function updateTranslation(lang) {
    document.getElementById('homeLink').innerText = translations[lang]["home"];
    document.getElementById('projectsLink').innerText = translations[lang]["projects"];
    document.getElementById('translateBtn').innerText = translations[lang]["translate"];
    document.getElementById('headline').innerText = translations[lang]["headline"];
}

// Load the current language from local storage (if available)
let currentLanguage = localStorage.getItem('language') || 'en';  // Default to English

// Apply the language when the page loads
updateTranslation(currentLanguage);

// Add event listener to the Translate button
document.getElementById('translateBtn').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the default behavior of the <a> tag

    // Toggle between English and German
    currentLanguage = (currentLanguage === "en") ? "de" : "en";

    // Save the selected language to local storage
    localStorage.setItem('language', currentLanguage);

    // Update the page with the selected language
    updateTranslation(currentLanguage);
});
