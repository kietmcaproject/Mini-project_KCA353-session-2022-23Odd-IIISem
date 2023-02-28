import cv2
from live_cam_predict import foo


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        ret, frame = self.video.read()

        foo()

        ret, jpg = cv2.imencode('.jpg', frame)
        return jpg.tobytes()
