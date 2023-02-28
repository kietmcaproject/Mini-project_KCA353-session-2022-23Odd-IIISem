from flask import Flask, render_template, Response
from live_cam_predict import foo
from camera import VideoCamera

app = Flask(__name__)


# @app.route('/')
# def index():
#     return render_template('index.html')


def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type:  image/jpeg\r\n\r\n' + frame +
               b'\r\n\r\n')


@app.route('/')
def video():
    foo()
    return render_template("templates/index.html")


@app.route("/video")
def feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


app.run(debug=True)
