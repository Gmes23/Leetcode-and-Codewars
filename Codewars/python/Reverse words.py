"""
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
FUNDAMENTALSSTRINGS
"""
def reverse_words(text):
    # We split every word in the list "The quick brown" => ['The', 'quick', 'brown']
    words = text.split(" ")
    # We use extended slices, the slicing index supports 3 arguments, using - we can 
    # get the same list in reverse
    newWords = [word[::-1] for word in words]

    newSentence = " ".join(newWords)
    print(newSentence)
reverse_words("The quick brown fox jumps over the lazy dog.")