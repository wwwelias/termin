
# Online Python - IDE, Editor, Compiler, Interpreter

def event(id, month, day, a, b, c, d):
    print('''{
  id: ''' + id + ''',
  text: "''' + a + ':' + b + ' - ' + str(int(a)+int(d)) +  ':' + c + '''",
  start: "2023-''' + month + '-' + day + 'T' + a + ':' + b + ''':00",
  end: "2023-''' + month + '-' + day + 'T' + str(int(a)+int(d)) +  ':' + c + ''':00",
  backColor: "#0d6efd",
  fontColor: "white",
  cssClass: "event"
},''')

lala = ['30', '00']
baba = [1, 0]
start = 10
months = ['0' + str(a) for a in range(1, 9)] + [str(b) for b in range(10, 12)]
days = ['0' + str(a) for a in range(1, 9)] + [str(b) for b in range(10, 30)]
id = 1
#for month in months:
month = months[0]
for day in days:
    for i in range(12):
        if i  % 2 == 0:
            start += 1
        event(str(id), month, day, str(start), str(lala[i % 2]), str(lala[(i-1) % 2]), str(baba[i%2]))
        id += 1
    start = 10