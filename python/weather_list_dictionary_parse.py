weather = [
    {
        'date':'today',
        'state': 'cloudy',
        'temp': 68.5
    },
    {
        'date':'tomorrow',
        'state': 'sunny',
        'temp': 74.8
    }
]

for e in weather:
    print(e['date'] + ' will be ' + e['state'] + ' with a temperature of ' + str(e['temp']))

# for forecast in weather:
#    print(f"The weather for {forecast['date']} will be {forecast['state']} with a temperature of {forecast['temp']} degrees.")

# for forecast in weather:
#    date = forecast['date']
#    state = forecast['state']
#    temp = forecast['temp']
#    print(f"The weather for {date} will be {state} with a temperature of {temp} degrees.")

# for e in weather[0].values():
#    print(e)

# for e in weather[0]:
#    print(e)
