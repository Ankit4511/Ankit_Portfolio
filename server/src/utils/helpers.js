

export function normalizeText(text) {
    text = text.toLowerCase();
    text = text.replace(/[\s-_]/g, "")
    return text;
}