import {BASE_URL} from './config'

export const getTopBanners = async () => {
    const url = BASE_URL+"/banner"
    const resp = await fetch(url)
    const { banners } = await resp.json()
    return banners
}