function getDateFromString(date: string): Date {
    let newDate = new Date(Date.parse(date + " 00:00:00"));
    return newDate;
}

export {
    getDateFromString
}