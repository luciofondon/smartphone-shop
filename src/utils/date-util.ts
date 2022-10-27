

export const getHoursDiff = (startDate: Date, endDate: Date): number => {
    const msInHour = 1000 * 60 * 60;
    return Math.round(Math.abs(endDate.valueOf() - startDate.valueOf()) / msInHour);
}