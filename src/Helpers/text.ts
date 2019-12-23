export enum TextStyle {
    NO_STYLE,
    UPPERCASE,
    LOWERCASE,
    CAMELCASE
}

export const camelCase = (text: string) => {
    return text.replace(/(\w+)|(\s)/g, function(_, p1, p2) {
        if (p1) {
            return p1.charAt(0).toUpperCase() + p1.substring(1).toLowerCase();
        }
        if (p2) {
            return (p2 = ' ');
        }
    });
};