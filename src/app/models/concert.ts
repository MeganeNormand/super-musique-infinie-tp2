export interface Concert {
    id: string,
    artist_id: string,
    url: string,
    on_sale_datetime: string,
    "datetime": "2017-03-19T11:00:00",
    description: string,
    venue: {
        name: string,
        latitude: string,
        longitude: string,
        city: string,
        region: string,
        country: string
    },
    offers:
    {
        type: string,
        url: string,
        status: string
    }[],
    lineup: string[]


}
