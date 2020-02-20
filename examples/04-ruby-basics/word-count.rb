require 'minitest/autorun'

# Word count
#
# Given a string, count the occurences of a word in that string
#
# Example:
# string = "twinkle twinkle litle star"
#
# word_count(string) # => 
# {
#   'twinkle' => 2,
#   'little' => 1
#   'star' => 1
# }
#

def word_count(string)

end

class WordCountTest < Minitest::Test
  def test_count_one_word
    # skip
    result = word_count("word")
    counts = {"word"=>1}
    assert_equal counts, result
  end

  def test_count_one_of_each_word
    skip
    result = word_count("one of each")
    counts = {"one"=>1, "of"=>1, "each"=>1}
    assert_equal counts, result
  end

  def test_multiple_occurrences_of_a_word
    skip
    result = word_count("one fish two fish red fish blue fish")
    counts = {"one"=>1, "fish"=>4, "two"=>1, "red"=>1, "blue"=>1}
    assert_equal counts, result
  end

  def test_handles_cramped_lists
    skip
    result = word_count("one,two,three")
    counts = {"one"=>1, "two"=>1, "three"=>1}
    assert_equal counts, result
  end

  def test_handles_expanded_lists
    skip
    result = word_count("one,\ntwo,\nthree")
    counts = {"one"=>1, "two"=>1, "three"=>1}
    assert_equal counts, result
  end

  def test_ignore_punctuation
    skip
    result = word_count("car: carpet as java: javascript!!&@$%^&")
    counts = {"car"=>1, "carpet"=>1, "as"=>1, "java"=>1, "javascript"=>1}
    assert_equal counts, result
  end

  def test_include_numbers
    skip
    result = word_count("testing, 1, 2 testing")
    counts = {"testing"=>2, "1"=>1, "2"=>1}
    assert_equal counts, result
  end

  def test_normalize_case
    skip
    result = word_count("go Go GO Stop stop")
    counts = {"go"=>3, "stop"=>2}
    assert_equal counts, result
  end

  def test_with_apostrophes
    skip
    result = word_count("First: don't laugh. Then: don't cry.")
    counts = {"first"=>1, "don't"=>2, "laugh"=>1, "then"=>1, "cry"=>1}
    assert_equal counts, result
  end

  def test_with_quotations
    skip
    result = word_count("Joe can't tell between 'large' and large.")
    counts = {"joe"=>1, "can't"=>1, "tell"=>1, "between"=>1, "large"=>2, "and"=>1}
    assert_equal counts, result
  end

  def test_multiple_spaces_not_detected_as_a_word
    skip
    result = word_count(" multiple   whitespaces")
    counts = {"multiple"=>1, "whitespaces"=>1}
    assert_equal counts, result
  end
end
