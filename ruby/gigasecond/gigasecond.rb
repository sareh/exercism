class Gigasecond
  VERSION = 1
  def self.from(start_datetime)
    start_datetime + 10**9
  end
end
