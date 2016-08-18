export default class Bob {
  hey(message) {
    if (this.isSilent(message)) return "Fine. Be that way!"
    if (this.isQuestion(message)) return "Sure."
    if (this.isShouting(message)) return "Whoa, chill out!"
    
    return "Whatever."  
  }

  isQuestion(message) {
    return (message.charAt(message.length - 1) === '?' 
            && !(this.isShouting(message)))
  }

  isShouting(message) {
    return (message === message.toUpperCase() && 
            message !== message.toLowerCase())
  }

  isSilent(message) {
    return (message.match(/^\s*$/))
  }
}
