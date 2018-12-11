def word_triangle(word):
    # Add your code here
    for n in range(len(word)):
        print(word[:len(word) - n])

word_triangle("definitely")
