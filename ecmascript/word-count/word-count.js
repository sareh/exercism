// I considered using .reduce(), but decided this was more readable
export default class Words {
  count(inputString) {
    let freq = {}

    inputString.trim().toLowerCase().split(/\s+/).map((word) => {
      return (freq.hasOwnProperty(word)) ? freq[word] += 1 : freq[word] = 1
    })
    return freq
  }
}