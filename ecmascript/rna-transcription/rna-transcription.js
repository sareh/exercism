export default class Transcriptor {
  toRna(strand) {
    const dnaToRna = {
      'C': 'G',
      'G': 'C',
      'A': 'U',
      'T': 'A',
    };

    return Array.prototype.map.call(strand, (letter) => {
      return dnaToRna[letter];
    }).join('')
  }
}