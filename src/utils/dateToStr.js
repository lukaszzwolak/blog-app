export const dateToStr = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US');
};
