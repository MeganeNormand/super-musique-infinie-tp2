export interface Artiste {
    id: string,
    images:
    {
        url: string,
        height: number,
        width: number
    }[],
    name: string
}
