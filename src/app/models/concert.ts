export interface Concert {
    id: string,
    datetime: string,
    venue: {
        country: string,
        city: string,
        latitude: string,
        longitude: string
    };
}
