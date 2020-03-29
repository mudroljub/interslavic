export function latinToGla(text: string): string {
    return text
        .replace(/[å|a]/g, 'ⰰ').replace(/[Å|A]/g, 'Ⰰ')
        .replace(/b/g, 'ⰱ').replace(/B/g, 'Ⰱ')
        .replace(/c/g, 'ⱌ').replace(/C/g, 'Ⱌ')
        .replace(/č/g, 'ⱍ').replace(/Č/g, 'Ⱍ')
        .replace(/[dj]/g, 'ⰴⱜ').replace(/DJ/g, 'ⰄⰬ')
        .replace(/dž/g, 'ⰼ').replace(/DŽ/g, 'Ⰼ')
        .replace(/d/g, 'ⰴ').replace(/D/g, 'Ⰴ')
        .replace(/[e|ę]/g, 'ⰵ').replace(/[E|Ę]/g, 'Ⰵ')
        .replace(/ě/g, 'ⱑ').replace(/Ě/g, 'Ⱑ')
        .replace(/f/g, 'ⱇ').replace(/F/g, 'Ⱇ')
        .replace(/g/g, 'ⰳ').replace(/G/g, 'Ⰳ')
        .replace(/h/g, 'ⱈ').replace(/H/g, 'Ⱈ')
        .replace(/i/g, 'ⰻ').replace(/I/g, 'Ⰻ')
        .replace(/ju/g, 'ⱓ').replace(/JU/g, 'Ⱓ')
        .replace(/lj/g, 'ⰾⱜ').replace(/LJ/g, 'ⰎⰬ')
        .replace(/tj/g, 'ⱅⱜ').replace(/TJ/g, 'ⰕⰬ')
        .replace(/nj/g, 'ⱀⱜ').replace(/NJ/g, 'ⰐⰬ')
        .replace(/j/g, 'ⱜ').replace(/J/g, 'Ⱜ')
        .replace(/k/g, 'ⰽ').replace(/K/g, 'Ⰽ')
        .replace(/l/g, 'ⰾ').replace(/L/g, 'Ⰾ')
        .replace(/m/g, 'ⰿ').replace(/M/g, 'Ⰿ')
        .replace(/n/g, 'ⱀ').replace(/N/g, 'Ⱀ')
        .replace(/o/g, 'ⱁ').replace(/O/g, 'Ⱁ')
        .replace(/p/g, 'ⱂ').replace(/P/g, 'Ⱂ')
        .replace(/q/g, 'ⰽ').replace(/Q/g, 'Ⰽ')
        .replace(/r/g, 'ⱃ').replace(/R/g, 'Ⱃ')
        .replace(/s/g, 'ⱄ').replace(/S/g, 'Ⱄ')
        .replace(/[šč|šČ]/g, 'ⱋ').replace(/[ŠČ|Šč]/g, 'Ⱋ')
        .replace(/š/g, 'ⱎ').replace(/Š/g, 'Ⱎ')
        .replace(/t/g, 'ⱅ').replace(/T/g, 'Ⱅ')
        .replace(/u/g, 'ⱆ').replace(/U/g, 'Ⱆ')
        .replace(/v/g, 'ⰲ').replace(/V/g, 'Ⰲ')
        .replace(/x/g, 'ⰽⱄ').replace(/X/g, 'ⰍⰔ')
        .replace(/y/g, 'ⱐ').replace(/Y/g, 'Ⱐ')
        .replace(/z/g, 'ⰷ').replace(/Z/g, 'Ⰷ')
        .replace(/ž/g, 'ⰶ').replace(/Ž/g, 'Ⰶ')
    ;
}
