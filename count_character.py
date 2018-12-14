def count_character(string, target):
    total = 0
    for ch in string:
        if ch == target:
            total += 1
    return total

# This should return 3, since there are three "o"s:
print(count_character("bonobo", "o"))
