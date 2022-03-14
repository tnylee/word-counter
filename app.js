const words = require('./thai-wordlist.json')
const messages = require('./results-20220314-215101.json')

let commons = []

for (const word of words) {
    let count = 0

    if (word.length > 3) {
        for (const m of messages) {
            if (m.message.includes(word)) {
                count += 1
            }
        }
    
        if (count > 0) {
            commons.push({
                word,
                count
            })
        }
    }
}

commons.sort((a, b) => b.count - a.count)
console.log(commons)