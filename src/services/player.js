import { BASE_URL } from './config'

export const getSongDetail = async(ids) => {
    const url = BASE_URL + `/song/detail?${ids}`
    const resp = await fetch(url)
    const { songs } = resp.json()
    return songs
}