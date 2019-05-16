import requests
import json
from flask import Flask, request
from flask import Response
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/workmate',methods = ['POST','GET'])
def tok():
    value = request.args.get("value")
    key = request.args.get("key")
    comp = request.args.get("company")
    print(comp)
    method = request.args.get("method")
    get= {}
    get[method]= {
    key: value
    }
    s= json.dumps(get)
     f = open(comp + '.json',"a")
    f.write(str(s))
    f.close()
    return "done"
@app.route('/platform',methods = ['POST','GET'])
def tik():
    value = request.args.get("value")
    f = open(value+".json","r")
    content = f.read()
    return content
@app.route('/json',methods = ['POST','GET'])
str_key = request.args.get("key")
str_val = request.args.get("value")
def process_key_val(key,val):
    count = 0
    ans = ""
    k = str_key.split(",")
    v = str_val.split(",")
    for c1 in key.split(","):
        count += 1
         for i in range(0,count):
        if i + 1 != count:
            ans += "'" + k[i] + "'" + ":" + "'" + v[i] + "'" + ","
        if i + 1 == count:
            ans += "'" + k[i] + "'" + ":" + "'" + v[i] + "'"
    return '{' + ans + '}'
print process_key_val(str_key,str_val)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

