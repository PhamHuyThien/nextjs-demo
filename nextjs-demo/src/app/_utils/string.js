export function subMax(str, max = 100) {
    if (typeof str === 'object') {
        str = JSON.stringify(str);
    } else {
        str = String(str);
    }
    if (str.length > max) {
        return str.substring(0, max) + '...';
    }
    return str;
}