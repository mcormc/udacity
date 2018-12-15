def until_dot(s):
    index = 0
    while index < len(s) and s[index] != '.':
        # No dots yet, keep going.
        index += 1
    # We either found a dot or ran out of string.
    return s[:index]

until_dot("This is a sentence. This is another sentence.")
