const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
  const lineString = lyricString.split('\n')

  const lyrics = []
  for (let line of lineString) {
    if (line) {
      const res = parseExp.exec(line)
      // 没有匹配到进行下一次匹配
      if (!res) continue
      const time1 = res[1] * 60 * 1000
      const time2 = res[2] * 1000
      const time3 = res[3].length === 3 ? Number(res[3]) : res[3] * 10
      const time = time1 + time2 + time3
      const content = line.replace(parseExp, '').trim()
      const obj = { time, content }
      lyrics.push(obj)
    }
  }
  return lyrics
}
