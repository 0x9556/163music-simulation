

export function parseLyrics(lyricString) {
    if (lyricString) {
        const lineStrings = lyricString.split("\n")
        const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
        const timeArr = []
        const contentArr = []
        for (let line of lineStrings) {
            if (line) {
                let [, minite, second, millsecond] = parseExp.exec(line)
                millsecond = millsecond.length === 2 ? millsecond * 10 : millsecond * 1
                const time = minite * 60 * 1000 + second * 1000 + millsecond
                const content = line.replace(parseExp, "").trim()
                timeArr.push(time)
                contentArr.push(content)
            }
        }
        return { timeArr, contentArr }
    }

}