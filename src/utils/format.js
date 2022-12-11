export function formatCount(num) {
    if (num < 10 ** 3) {
        return num
    } else if (num < 10 ** 6) {
        return Math.floor(num / 10 ** 3) + "K"
    } else if (num < 10 ** 9) {
        return Math.floor(num / 10 ** 6) + "M"
    }
}

export function formatImageSize(imgUrl, size) {
    if (imgUrl) return `${imgUrl}?param=${size}x${size}`
}


export function formatTime(time) {
    if (time > 60 * 60 * 1000) return
    const date = new Date(time)
    const min = date.getMinutes()
    const second = date.getSeconds()
    const minStr = min < 10 ? `0${min}` : `${min}`
    const secStr = second < 10 ? `0${second}` : `${second}`
    return minStr + ":" + secStr
}


export const getPlaySongUrl = (id) => {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}