---
    name: Wentex i18n system
    description: How language switching / translation works in the wentex artifact
    ---

    The wentex artifact (artifacts/wentex) uses a single LanguageProvider/useLanguage context in src/lib/i18n.tsx that holds the active language, direction (ltr/rtl), and a t(key) lookup against per-language dictionaries (en/ar/fr/tr/he).

    **Why:** Originally the Navbar's language dropdown only flipped document dir for RTL without translating any visible text — all copy was hardcoded English in each section component. Centralizing translations avoids that drift.

    **How to apply:** When adding new user-facing copy to any Wentex section component, add a translation key to all five dictionaries in src/lib/i18n.tsx and call t("key") rather than hardcoding English text. Real contact data (address, phone, email, WhatsApp) is intentionally NOT translated — only labels/marketing copy are.
    