import json
f = open('./Pi.svg', 'r')
data = f.read()
f.close()


moveto = list()
lineto = list()
curveto = list()

i = 0
count = 0
while(i < len(data)):

    if data[i] == "M":
        temp = {
            "count": count,
            "x": data[i + 2 : i + 11],
            "y": data[i + 12: i + 21]
        }
        moveto.append(temp)
        i += 22
        count += 1
    elif data[i] == "L":
        temp = {
            "count": count,
            "x": data[i + 2 : i + 11],
            "y": data[i + 12: i + 21]
        }
        lineto.append(temp)
        i += 22
        count += 1
    elif data[i] == "C":
        temp_list = list()
        temp_list.append(count)
        for j in range(3):
            temp = {
                "x": data[i + 2 : i + 11],
                "y": data[i + 12: i + 21]
            }
            temp_list.append(temp)
            i += 20
        curveto.append(temp_list)
        i += 2
        count += 1
    else:
        i += 1
    

f = open('./data.json', 'w')
f.write('{\n\t"moveto": ')
f.write(str(moveto))
f.write(',\n\t"lineto": ')
f.write(str(lineto))
f.write(',\n\t"curveto": ')
f.write(str(curveto))
f.write('\n}')
f.close()

print(moveto)
print(lineto)
print(curveto)
# print('foejfhi')