const searchForm = document.querySelector("#site-search");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const bookCards = [...document.querySelectorAll("#book-list .book-card")];
const emptyBooks = document.querySelector("#empty-books");
const surahFilter = document.querySelector("#surah-filter");
const surahItems = [...document.querySelectorAll("#surah-items li")];
const topicItems = [...document.querySelectorAll(".topic-list a")];

function normalizeArabic(text) {
    return text
        .normalize("NFD")
        .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .trim()
        .toLocaleLowerCase("ar");
}

function updateSearch(query) {
    const term = normalizeArabic(query);
    let bookMatches = 0;
    let surahMatches = 0;
    let topicMatches = 0;

    for (const card of bookCards) {
        const matches = !term || normalizeArabic(card.dataset.searchable || card.textContent).includes(term);
        card.hidden = !matches;
        if (matches) bookMatches += 1;
    }
    emptyBooks.hidden = bookMatches > 0;

    for (const item of surahItems) {
        const matches = !term || normalizeArabic(item.textContent).includes(term) ||
            normalizeArabic(item.querySelector("a")?.dataset.searchable || "").includes(term);
        item.hidden = !matches;
        if (matches) surahMatches += 1;
    }

    for (const item of topicItems) {
        const matches = !term || normalizeArabic(item.dataset.searchable || item.textContent).includes(term);
        item.hidden = !matches;
        if (matches) topicMatches += 1;
    }

    if (term) {
        const matches = bookMatches + surahMatches + topicMatches;
        searchResults.textContent = matches
            ? `تصفّح النتائج المطابقة في قائمة السور والكتب أدناه (${matches}).`
            : "لا توجد نتائج مطابقة في العناصر المعروضة.";
        searchResults.hidden = false;
    } else {
        searchResults.hidden = true;
        searchResults.textContent = "";
    }
}

searchInput.addEventListener("input", () => updateSearch(searchInput.value));
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateSearch(searchInput.value);
    document.querySelector("#library").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".search-suggestion").forEach((button) => {
    button.addEventListener("click", () => {
        searchInput.value = button.dataset.query || "";
        updateSearch(searchInput.value);
        searchInput.focus();
    });
});

surahFilter.addEventListener("input", () => {
    const term = normalizeArabic(surahFilter.value);
    for (const item of surahItems) {
        item.hidden = !normalizeArabic(item.textContent).includes(term) ||
            !normalizeArabic(item.querySelector("a")?.dataset.searchable || "").includes(term);
    }
});

const verseText = document.querySelector("#verse-text");
let verseFontSize = Number.parseFloat(getComputedStyle(verseText).fontSize);
document.querySelector("#increase-text").addEventListener("click", () => {
    verseFontSize = Math.min(verseFontSize + 2, 44);
    verseText.style.fontSize = `${verseFontSize}px`;
});
document.querySelector("#decrease-text").addEventListener("click", () => {
    verseFontSize = Math.max(verseFontSize - 2, 22);
    verseText.style.fontSize = `${verseFontSize}px`;
});

const saveVerseButton = document.querySelector("#save-verse");
saveVerseButton.addEventListener("click", () => {
    const saved = saveVerseButton.getAttribute("aria-pressed") !== "true";
    saveVerseButton.setAttribute("aria-pressed", String(saved));
    saveVerseButton.querySelector(".save-label").textContent = saved ? "تم الحفظ" : "حفظ الآية";
});