// Using map & call - slightly less readable
export default class Hamming {
  compute(strand1, strand2) {
    let count = 0;

    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.')
    }

    Array.prototype.map.call(strand1, (letter, idx) => { 
      if (letter !== strand2[idx]) { count += 1}
    })

    return count
  }
}