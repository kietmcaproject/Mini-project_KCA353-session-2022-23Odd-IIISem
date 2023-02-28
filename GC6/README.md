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
```
Here are some test examples:

<!-- Improving Model Performance -->
## Improving Model Performance

### Baseline Model
Used [neha01 model](https://github.com/neha01/Realtime-Emotion-Detection) as baseline model which is based on a 3 block convolutional neural network architecture. It achieved ~57.5% test accuracy on FER2013 dataset.

### Data Cleaning
Because of alot of mislabeled images in FER2013 dataset, we found that using FERPlus' labels is a better option to train the model for better performance.  
Here are some examples of the FER vs FER+ labels extracted from the mentioned paper in [FER+ repo](https://github.com/microsoft/FERPlus) (FER top, FER+ bottom):
<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/Microsoft/FERPlus/master/FER+vsFER.png">
</p>
We also added 2 more blocks to the baseline model without regularization thus overall accuracy increased by ~14.
