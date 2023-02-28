# Facial-Emotion-Recognition


<!-- ABOUT THE PROJECT -->
## About The Project

A tensorflow/keras implementation of a facial emotion recognition model based on a convolutional neural network architecture and trained on the FER2013 dataset with FERPlus labels.

### Built With
* Keras
* Tensorflow
* OpenCV


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* python >= 3.7.9
* keras >= 2.4.3
* tensorflow >= 2.3.1
* opencv >= 4.4
* sklearn >= 0.23
* numpy >= 1.18.5
* pandas >= 1.1.2
* matplotlib >= 3.3.1

### Installation
1. Clone the repo
```sh
git clone https://github.com/MahmoudSabra1/Facial-emotion-recognition
```
2. Install required packages
  * Use [anaconda](https://www.anaconda.com/) to easily install keras and tensorflow in addition to necessary cuda drivers to run the model on GPU.
  ```sh
  conda install tensorflow
  conda install keras
  ```
  * Other packages can be easily installed using either pip or conda.
  ```sh
  pip install opencv
  conda install numpy
  ```

<!-- USAGE EXAMPLES -->
## Usage

To train the model use the following command
 ```sh
  python fer.py
 ```
The model can make predictions on saved images by providing the image path using the following command
 ```sh
  python img_predict.py img_name.png
 ```
It can also predict on saved videos
```sh
  python vid_predict.py vid_name.mp4
```
Or by using a live camera
```sh
  python live_cam_predict.py
