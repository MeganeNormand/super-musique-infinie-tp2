export interface Concert {
    id: string;
    artist_id: string;
    url: string;
    on_sale_datetime: string;
    datetime: string;
    description: string;
    venue: {
        country: string;
        region: string;
        city: string;
        name: string;
        latitude: string;
        longitude: string;
    };
}
