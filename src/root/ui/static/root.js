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

const dashboardToggle = document.querySelector("#dashboard-toggle");
const dashboardPanel = document.querySelector("#dashboard-panel");
const dashboardBackdrop = document.querySelector("#dashboard-backdrop");
const dashboardClose = document.querySelector("#dashboard-close");
const dashboardCustomizeToggle = document.querySelector("#dashboard-customize-toggle");
const dashboardCustomizeOptions = document.querySelector("#dashboard-customize-options");
const dashboardSettings = [...document.querySelectorAll("[data-dashboard-setting]")];
const dashboardLinks = [...document.querySelectorAll("[data-dashboard-item]")];
const dashboardEmpty = document.querySelector("#dashboard-empty");

function setDashboardOpen(isOpen) {
    dashboardToggle.setAttribute("aria-expanded", String(isOpen));
    dashboardToggle.setAttribute("aria-label", isOpen ? "Close dashboard" : "Open dashboard");
    dashboardPanel.setAttribute("aria-hidden", String(!isOpen));
    dashboardPanel.inert = !isOpen;
    dashboardPanel.classList.toggle("is-open", isOpen);
    dashboardBackdrop.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("dashboard-open", isOpen);

    if (isOpen) {
        dashboardClose.focus();
    } else {
        dashboardToggle.focus();
    }
}

function updateDashboardShortcuts() {
    const enabledShortcuts = dashboardSettings
        .filter((setting) => setting.checked)
        .map((setting) => setting.dataset.dashboardSetting);

    for (const link of dashboardLinks) {
        link.hidden = link.dataset.dashboardItem !== "signout" &&
            !enabledShortcuts.includes(link.dataset.dashboardItem);
    }

    dashboardEmpty.hidden = enabledShortcuts.length > 0;
    localStorage.setItem("dashboard-shortcuts", enabledShortcuts.join(","));
}

const storedShortcuts = localStorage.getItem("dashboard-shortcuts");
if (storedShortcuts !== null) {
    const enabledShortcuts = new Set(storedShortcuts.split(","));
    for (const setting of dashboardSettings) {
        setting.checked = enabledShortcuts.has(setting.dataset.dashboardSetting);
    }
}
updateDashboardShortcuts();

dashboardToggle.addEventListener("click", () => {
    setDashboardOpen(dashboardToggle.getAttribute("aria-expanded") !== "true");
});
dashboardClose.addEventListener("click", () => setDashboardOpen(false));
dashboardBackdrop.addEventListener("click", () => setDashboardOpen(false));
dashboardCustomizeToggle.addEventListener("click", () => {
    const isExpanded = dashboardCustomizeToggle.getAttribute("aria-expanded") !== "true";
    dashboardCustomizeToggle.setAttribute("aria-expanded", String(isExpanded));
    dashboardCustomizeOptions.hidden = !isExpanded;
    if (isExpanded) {
        dashboardSettings[0].focus();
    }
});
dashboardSettings.forEach((setting) => setting.addEventListener("change", updateDashboardShortcuts));
dashboardLinks.forEach((link) => link.addEventListener("click", () => {
    if (link.dataset.dashboardItem !== "signout") {
        setDashboardOpen(false);
    }
}));

const signoutLink = document.querySelector('[data-dashboard-item="signout"]');
if (signoutLink) {
    const holdDuration = 1000;
    const hitPadding = 10;
    const idleLabel = signoutLink.querySelector("[data-signout-idle]");
    const doneLabel = signoutLink.querySelector("[data-signout-done]");
    let holdTimer = 0;
    let holdStart = 0;
    let pointerId = null;
    let inputKind = null;

    function resetSignoutHold() {
        clearTimeout(holdTimer);
        pointerId = null;
        inputKind = null;
        delete signoutLink.dataset.holdPhase;
        signoutLink.setAttribute("aria-label", "Hold to sign out");
        idleLabel.hidden = false;
        doneLabel.hidden = true;
    }

    function completeSignoutHold() {
        if (signoutLink.dataset.holdPhase !== "holding" ||
            performance.now() - holdStart < holdDuration) {
            return;
        }

        clearTimeout(holdTimer);
        signoutLink.dataset.holdPhase = "done";
        signoutLink.setAttribute("aria-label", "Signing out");
        idleLabel.hidden = true;
        doneLabel.hidden = false;
        window.setTimeout(() => window.location.assign(signoutLink.href), 120);
    }

    function beginSignoutHold(kind) {
        if (signoutLink.dataset.holdPhase) {
            return false;
        }

        holdStart = performance.now();
        inputKind = kind;
        signoutLink.dataset.holdPhase = "holding";
        holdTimer = window.setTimeout(completeSignoutHold, holdDuration);
        return true;
    }

    function endSignoutHold(kind, cancelled = false) {
        if (inputKind !== kind || signoutLink.dataset.holdPhase !== "holding") {
            return;
        }

        if (!cancelled && performance.now() - holdStart >= holdDuration) {
            completeSignoutHold();
        } else {
            resetSignoutHold();
        }
    }

    function cancelSignoutHold(kind) {
        if (kind === "pointer") {
            pointerId = null;
        }
        endSignoutHold(kind, true);
    }

    signoutLink.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || !event.isPrimary || pointerId !== null) {
            return;
        }

        if (beginSignoutHold("pointer")) {
            pointerId = event.pointerId;
            signoutLink.setPointerCapture(event.pointerId);
        }
    });
    signoutLink.addEventListener("pointermove", (event) => {
        if (event.pointerId !== pointerId || signoutLink.dataset.holdPhase !== "holding") {
            return;
        }

        const bounds = signoutLink.getBoundingClientRect();
        const outside = event.clientX < bounds.left - hitPadding ||
            event.clientX > bounds.right + hitPadding ||
            event.clientY < bounds.top - hitPadding ||
            event.clientY > bounds.bottom + hitPadding;
        if (outside) {
            endSignoutHold("pointer", true);
        }
    });
    signoutLink.addEventListener("pointerup", (event) => {
        if (event.pointerId !== pointerId) {
            return;
        }

        pointerId = null;
        endSignoutHold("pointer");
    });
    signoutLink.addEventListener("pointercancel", () => cancelSignoutHold("pointer"));
    signoutLink.addEventListener("lostpointercapture", () => cancelSignoutHold("pointer"));
    signoutLink.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && inputKind === "key") {
            event.preventDefault();
            endSignoutHold("key", true);
        } else if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            if (!event.repeat) {
                beginSignoutHold("key");
            }
        }
    });
    signoutLink.addEventListener("keyup", (event) => {
        if ((event.key === " " || event.key === "Enter") && inputKind === "key") {
            event.preventDefault();
            endSignoutHold("key");
        }
    });
    signoutLink.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
    });
    window.addEventListener("blur", () => {
        if (signoutLink.dataset.holdPhase === "holding") {
            cancelSignoutHold(inputKind);
        }
    });
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && signoutLink.dataset.holdPhase === "holding") {
            cancelSignoutHold(inputKind);
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (dashboardToggle.getAttribute("aria-expanded") !== "true") {
        return;
    }

    if (event.key === "Escape") {
        setDashboardOpen(false);
        return;
    }

    if (event.key === "Tab") {
        const focusableElements = [...dashboardPanel.querySelectorAll(
            'a[href]:not([hidden]), button:not([disabled]):not([hidden]), input:not([disabled]):not([hidden])'
        )];
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});