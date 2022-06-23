export function convertToPersianNumber(number: string) {
    if (!number.length) return "";

    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    let out = "";
    const length = number.length;

    for (let i = 0; i < length; i++) {
        const c = number[i];
        if ('0' <= c && c <= '9') {
            out += persianNumbers[parseInt(c)];
        } else if (c == '٫') {
            out += '،';
        }
        else {
            out += c;
        }
    }

    return out;
}