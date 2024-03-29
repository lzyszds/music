const assert = require('assert')
const axios = require('axios')
const host = global.host || 'http://localhost:1030'
const config = require('../util/config.json')
describe('测试获取歌词是否正常', () => {
  it('数据应该有 lrc 字段', (done) => {
    const qs = {
      id: 347230,
      cookie: config.anonymous_token,
    }

    axios
      .get(`${host}/lyric`, {
        params: qs,
      })
      .then(({ status, data }) => {
        if (status == 200) {
          assert(typeof data.lrc !== 'undefined')
        }
        done()
      })
      .catch((err) => {
        done(err)
      })
  })
})
