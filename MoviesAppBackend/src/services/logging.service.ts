export function logError(error: unknown, location: string = '') {
    const givenLocation = location ? ' :: ' + location + ' ::' : ':';
    error instanceof Error
        ? console.error(`ERROR${givenLocation}`, error.message)
        : console.error(`Unknown error${location}`, error);
}