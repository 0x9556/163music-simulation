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
    const url = BASE_URL + "/top/album?limit=10"
    const resp = await fetch(url)
    const { albums } = await resp.json()
    return albums
}


