export interface Album {
  id: string,
  images: {
    url: string,
    height: number,
    width: number
  }[],
  name: string,
  artists:
  {
    name: string,
  }[]
}