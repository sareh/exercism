export default class Pangram {
  constructor(phrase) {
    this.phrase = phrase
  }

  isPangram() {
    if (this.phrase === '') { return false }

    return 'abcdefghijklmnopqrstuvwxyz'.split('').every((letter) => {
      return (this.phrase.toLowerCase().indexOf(letter) > -1)
    })
  }
}