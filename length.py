# Add your code here.
def total_length(list):
    total = 0
    for string in list:
        total = total + len(string)
    return total
# Should return 6:
print(total_length(['foo', 'bar']))

# Should return 0 (it's an empty list):
# print(total_length([]))

# Should return 8:
# total_length(['balloons'])

# Should return 0 (it has four empty strings):
# >>> total_length(["", '', "", ''])
