export default class Gigasecond {
  constructor(datetime) {
    this.datetime = datetime
  }

  date() {
    const gigasecondInMilliseconds = Math.pow(10,12)
    return new Date(this.datetime.getTime() + gigasecondInMilliseconds)
  }
}