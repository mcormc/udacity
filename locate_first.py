def locate_first(string, sub): 
    index = 0
    while index < len(string):
        if string[index : index + len(sub)] == sub:
            return index
        else:
            index += 1
    return -1

# This one should return 9
# print(locate_first('all your bass are belong to us', 'bass'))
