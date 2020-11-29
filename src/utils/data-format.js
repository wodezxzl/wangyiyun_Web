export function getCount(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImg(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

// 时间格式化
export function formatDate(time, fmt) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = String(o[k])
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// 拼接歌曲播放地址
export function getMusicUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
