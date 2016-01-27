class Raindrops
  VERSION = 1
  def self.convert(input)
    return 'PlingPlangPlong' if input % 105 == 0
    return 'PlangPlong' if input % 35 == 0
    return 'PlingPlong' if input % 21 == 0
    return 'PlingPlang' if input % 15 == 0
    return 'Plong' if input % 7 == 0
    return 'Plang' if input % 5 == 0
    return 'Pling' if input % 3 == 0
    return input.to_s
  end
end
