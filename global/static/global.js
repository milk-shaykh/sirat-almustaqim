(() => {
    const themeKey = "sirat-almustaqim-theme";
    const root = document.documentElement;
    const validThemes = new Set(["light", "dark"]);

    function getInitialTheme() {
        try {
            const savedTheme = window.localStorage.getItem(themeKey);
            if (validThemes.has(savedTheme)) {
                return savedTheme;
            }
        } catch (error) {
            console.warn("Unable to read the saved theme preference.", error);
        }

        return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function updateToggle(theme) {
        const toggle = document.querySelector("[data-theme-toggle]");
        if (!toggle) {
            return;
        }

        const isArabic = root.lang.toLowerCase().startsWith("ar");
        const isDark = theme === "dark";
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.setAttribute("aria-label", isArabic
            ? (isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن")
            : (isDark ? "Switch to light mode" : "Switch to dark mode"));
        toggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
        toggle.querySelector(".theme-toggle-label").textContent = isArabic
            ? (isDark ? "الوضع الفاتح" : "الوضع الداكن")
            : (isDark ? "Light mode" : "Dark mode");
    }

    function applyTheme(theme) {
        root.dataset.theme = theme;
        updateToggle(theme);
    }

    applyTheme(getInitialTheme());

    document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.querySelector("[data-theme-toggle]");
        if (!toggle) {
            return;
        }

        updateToggle(root.dataset.theme);
        toggle.addEventListener("click", () => {
            const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            try {
                window.localStorage.setItem(themeKey, nextTheme);
            } catch (error) {
                console.warn("Unable to save the theme preference.", error);
            }
        });
    });

    window.addEventListener("storage", (event) => {
        if (event.key === themeKey && validThemes.has(event.newValue)) {
            applyTheme(event.newValue);
        }
    });
})();
