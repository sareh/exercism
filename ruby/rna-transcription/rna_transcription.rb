class Complement
  VERSION = 3
  DNA = 'ATGC'
  RNA = 'UACG'
  def self.of_dna(string)
    raise ArgumentError if !string.match(/^[ATGC]*$/)
    string.tr(DNA, RNA)
  end
end