import json
from flask import Flask,request,jsonify
import pickle
import numpy as np
import pandas as pd
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app=Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql+pymysql://root:@localhost/heartpredict'


db = SQLAlchemy(app)

CORS(app)




class Feedback(db.Model):

    sno = db.Column(db.Integer,primary_key=True)
    f_name = db.Column(db.String(15),nullable=False)
    l_name = db.Column(db.String(15),nullable=False)
    city = db.Column(db.String(15),nullable=False)
    phone_no = db.Column(db.Integer,nullable=False)
    email = db.Column(db.String(15),nullable=False)
    feed = db.Column(db.String(100),nullable=False)
    date = db.Column(db.String(20),nullable=True)



@app.route("/")
def hello():
    infile = open('p-model', 'rb')
    model = pickle.load(infile)
    infile.close()
    a = [37, 1, 2, 130, 250, 0, 1, 187, 0, 3.5, 0, 0, 2]
    input = np.array(a)
    input = input.reshape(1, 13)
    feature_name = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope",
                    "ca", "thal"]
    c = pd.DataFrame(input, columns=feature_name)
    m=model.predict(c)
    print(m)
    if m==1:
        return "<h1> have heart attack</h1>"
    else:
        return "<h1>no heart desease</h1>"

@app.route("/feedback",methods=['POST','GET'])
def feedback():

    if request.method=='POST':
        first=request.json['first']
        last=request.json['last']
        city=request.json['city']
        phone=request.json['phone']
        email=request.json['email']
        feed=request.json['feedback']

        entry =  Feedback(f_name=first,l_name=last,city=city,phone_no=phone,email=email,feed=feed,date=datetime.now())
        db.session.add(entry)
        db.session.commit()

        print(first)
        print(last)
        print(city)
        print(phone)
        print(email)
        print(feed)



        return ""

@app.route("/predict",methods=['POST','GET'])
def predict():

    if request.method=='POST':
        feature_name = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak","slope","ca", "thal"]
        age=int(request.json['age'])
        gender=int(request.json['gender'])
        cp=int(request.json['cp'])
        trestbps=int(request.json['trestbps'])
        chol=int(request.json['chol'])
        fbs=int(request.json['fbs'])
        resecg = int(request.json['restecg'])
        thalach = int(request.json['thalach'])
        exang = int(request.json['exang'])
        oldpeak = float(request.json['oldpeak'])
        slope = int(request.json['slope'])
        ca = int(request.json['ca'])
        thal = int(request.json['thal'])

        # entry =  Feedback(f_name=first,l_name=last,city=city,phone_no=phone,email=email,feed=feed,date=datetime.now())
        # db.session.add(entry)
        # db.session.commit()

        print(type(age))
        print(type(thalach))
        print(type(slope))
        print(type(ca))
        print(type(oldpeak))
        print(type(thal))

        infile = open('p-model', 'rb')
        model = pickle.load(infile)
        infile.close()

        data=[age,gender,cp,trestbps,chol,fbs,resecg,thalach,exang,oldpeak,slope,ca,thal]
        input = np.array(data)
        input = input.reshape(1, 13)
        feature_name = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak",
                        "slope",
                        "ca", "thal"]
        c = pd.DataFrame(input, columns=feature_name)
        m = model.predict(c)
        ans=int(m)
        o={"pred":ans}
        print(m)
        print(type(ans))

        return o



    return "i am get"



@app.route('/admin',methods=['GET','POST'])
def admin():
    if request.method=='POST':
        print("hello")
        print(request.json['passwrd'])
        if request.json['passwrd']=='abhinav':
            b=Feedback.query.all()
            l=[]

            for i in b:
                n=['sno','first_name','last_name','city','phone_no','email','feedback','date']
                m=[]

                s=i.sno
                f_n=i.f_name
                l_n=i.l_name
                c=i.city
                em=i.email
                phn=i.phone_no
                fe=i.feed
                da=i.date
                da=str(da)
                m.extend((s,f_n,l_n,c,phn,em,fe,da))
                jsn=dict(zip(n,m))
                l.append(jsn)

            api={"data":l}
            print(type(l))
            print(type(api))
            return l
        else:
            a=int(0)
            data={"d":a}
            return data


if __name__=='__main__':
    app.run(debug=True)




