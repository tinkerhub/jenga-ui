export const getNextNYears = (numberOfYears: number): string[] => {
    const presentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < numberOfYears; i++) {
        years.push(String(presentYear + i));
    }
    return years;
};
