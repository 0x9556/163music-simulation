
import { BASE_URL } from './config'


export const getTopBanners = async () => {
    const url = BASE_URL + "/banner"
    const resp = await fetch(url)
    const { banners } = await resp.json()
    return banners
}

export const getHotRecommend = async () => {
    const url = BASE_URL + "/personalized?limit=8"
    const resp = await fetch(url)
    const { result } = await resp.json()
    return result
}

export const getNewAlbums = async () => {
    const url = BASE_URL + "/album/newest"
    const resp = await fetch(url)
    const { albums } = await resp.json()
    // console.log(albums)
    return albums
}


export const getToplist = async (id) => {
    const url = `${BASE_URL}/playlist/detail?id=${id}`
    const resp = await fetch(url)
    const { playlist } = await resp.json()
    return playlist
}