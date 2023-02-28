import os
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from sklearn.preprocessing import StandardScaler
# create flask app
app = Flask(__name__)

# load pickle model
model = pickle.load(open("model.pkl", "rb"))


@app.route("/")
def home():
    return render_template("prediction_form.html")
    #return render_template("newprediction.html")


@app.route("/result", methods=["GET", "POST"])
def predict():
    l = []
    form_value = l
    if request.method == "POST":
        print(request.values)
    imd = request.form
    imd.to_dict(flat=False)
    print(imd)
    for k,v in imd.items():
        form_value.append(v)
    print(type(request.form))
    print(request.form)
    float_features = [float(x) for x in form_value]
    features = [np.array(float_features)]
    sc=StandardScaler()
    features=sc.fit_transform(features)
    prediction = model.predict(features)
    if prediction[0] == 1:
        print("Malignant")
        return render_template("result.html", prediction_text="Cancer is Malignant")
    else:
        print("Benign")
        return render_template("result.html", prediction_text="Cancer is Benign")

if __name__ == "__main__":
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '8080'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
