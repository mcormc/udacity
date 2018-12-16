def starts_with(long, short):
    for position in range(len(short)):
        if long[position] != short[position]:
            return False
    return True
