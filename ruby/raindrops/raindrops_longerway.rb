class Raindrops
  VERSION = 1
  def self.convert(input)
    if (input % 7 == 0) && (input % 5 == 0) && (input % 3 == 0)
      return 'PlingPlangPlong'
    end
    if (input % 7 == 0) && (input % 5 == 0)
      return 'PlangPlong'
    end
    if (input % 7 == 0) && (input % 3 == 0)
      return 'PlingPlong'
    end
    if (input % 5 == 0) && (input % 3 == 0)
      return 'PlingPlang'
    end
    if input % 7 == 0
      return 'Plong'
    end
    if input % 5 == 0
      return 'Plang'
    end
    if input % 3 == 0
      return 'Pling'
    end
    return input.to_s
  end
end
