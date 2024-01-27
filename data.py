import json
import requests

f=open("clubs.json")

url='http://localhost:8080/club'

data=json.load(f)

header = {'Content-Type': "application/json;encoding='utf-8'"}

for i in data:
    x=requests.post(url,json=i,headers=header)
    print(x.text)


f.close()