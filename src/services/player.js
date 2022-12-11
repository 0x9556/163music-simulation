import { BASE_URL } from './config'

export const getSongDetails = async (ids) => {
    const url = BASE_URL + `/song/detail?ids=${ids}`
    const resp = await fetch(url)
    const { songs } = await resp.json()
    return songs[0]
}

export const getLyrics = async (ids) => {
    const url = BASE_URL + `/lyric?id=${ids}`
    try {
        const resp = await fetch(url)
        const { lrc } = await resp.json()
        return lrc.lyric
    } catch {
        return ""
    }

}