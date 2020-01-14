import { transliterate } from 'utils/legacy/transliterate';

export function getCyrillic(text: string, flavorisationType: string): string {
    if (!text) {
        return '';
    }
    // Etimological orthography without cyrillic
    if (flavorisationType === '2') {
        return '';
    }
    return transliterate(text, 5, flavorisationType, 0, 1);
}
