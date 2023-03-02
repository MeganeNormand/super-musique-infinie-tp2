export interface Album {
    
    external_urls: {

        spotify: string

    },

    id: string,

    images: {

        url: string,

        height: number,

        width: number

    }[],
    name: string
}