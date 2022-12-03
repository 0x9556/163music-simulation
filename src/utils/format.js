export function formatCount(num) {
    if (num < 10 ** 3) {
        return num
    } else if (num < 10 ** 6) {
        return Math.floor(num / 10 ** 3) + "K"
    } else if (num < 10 ** 9) {
        return Math.floor(num / 10 ** 6) + "M"
    }
}

export function formatImageSize(imgUrl,size) {
    return `${imgUrl}?param=${size}x${size}`
}
