export const splitStr = (text: string, length: number): string => {
    if (text.length <= length) {
        return text;
    } else {
        return text.substring(0, length) + '...';
    }
}