(() => {
    const themeKey = "sirat-almustaqim-theme";
    const root = document.documentElement;
    const validThemes = new Set(["light", "dark"]);

    function updateDirection() {
        root.dir = root.lang.toLowerCase().startsWith("ar") ? "rtl" : "ltr";
    }

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
        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) {
            themeColor.content = themeColor.dataset[`themeColor${theme === "dark" ? "Dark" : "Light"}`];
        }
        updateToggle(theme);
    }

    updateDirection();
    applyTheme(getInitialTheme());

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('input:not([dir]), textarea:not([dir]), [contenteditable="true"]:not([dir])')
            .forEach((field) => {
                field.dir = "auto";
            });

        document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
            const input = document.getElementById(toggle.getAttribute("aria-controls"));
            if (!(input instanceof HTMLInputElement)) {
                console.error("Password visibility control is missing its input.", toggle);
                return;
            }

            const eyes = toggle.querySelectorAll("[data-password-eye]");
            const slash = toggle.querySelector("[data-password-eye-slash]");
            toggle.addEventListener("click", () => {
                const isVisible = input.type === "password";
                input.type = isVisible ? "text" : "password";
                toggle.setAttribute("aria-pressed", String(isVisible));
                toggle.setAttribute("aria-label", isVisible ? "Hide password" : "Show password");
                eyes.forEach((eye) => {
                    eye.hidden = isVisible;
                });
                if (slash) slash.hidden = !isVisible;
            });
        });

        const flashes = document.querySelector(".flashes");
        if (flashes) {
            window.setTimeout(() => {
                flashes.classList.add("is-dismissing");
                window.setTimeout(() => flashes.remove(), 400);
            }, 4600);
        }

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
