class Hamming
  
  VERSION = 1
  
  def self.compute(strand1, strand2)
    raise ArgumentError if strand1.length != strand2.length 
    strand1.length.times.count do |i|
      strand1[i] != strand2[i]
    end
  end
end
