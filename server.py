import requests
import json
from flask import Flask, request
from flask import Response
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
def process_key_val(key,val):
    count = 0
    ans = ""
    k = key.split(",")
    v = val.split(",")
    for c1 in key.split(","):
        count += 1
    for i in range(0,count-1):
        if i + 1 != count-1:
           ans += "'" + k[i] + "'" + ":" + "'" + v[i] + "'" + ","
        if i + 1 == count-1:
           ans += "'" + k[i] + "'" + ":" + "'" + v[i] + "'"
        return '{' + ans + '}'
@app.route('/platform',methods = ['POST','GET'])
def tik():
    value = request.args.get("value")
    f = open(value+".json","r")
    content = f.read()
    return content
@app.route('/json',methods = ['POST','GET'])
def done():
    str_key = request.args.get("key")
@app.route('/platform',methods = ['POST','GET'])
def tik():
    value = request.args.get("value")
    f = open(value+".json","r")
    content = f.read()
    return content
@app.route('/json',methods = ['POST','GET'])
def done():
    str_key = request.args.get("key")
    str_val = request.args.get("value")
    val = process_key_val(str_key,str_val)
    comp = request.args.get("company")
    print(comp)
    f = open(comp + '.json',"a")
    f.write(str(val))
    f.close()
    return 'done'

if __name__ == '__main__':

