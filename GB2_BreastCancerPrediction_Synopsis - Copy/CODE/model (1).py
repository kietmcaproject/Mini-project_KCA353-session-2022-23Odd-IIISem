import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import io
import os
import pickle
from flask import render_template
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_breast_cancer


df = pd.read_csv('BCPD.csv')
print(df.head())
#print("target name:", df[''])
# select dependent and independent variable
x = df[["texture_mean", "area_mean", "concavity_mean", "area_se", "concavity_se",'fractal_dimension_se',
        "smoothness_worst", "concavity_worst", "symmetry_worst","fractal_dimension_worst"]]
#x = df[[ "radius_mean",  'perimeter_mean', 'area_mean', 'symmetry_mean', 'compactness_mean', 'concave points_mean']]
y = df[["diagnosis"]]

# split the data into train and test

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)

# feature scaling
sc = StandardScaler()
x_train = sc.fit_transform(x_train)
x_test = sc.fit_transform(x_test)

# instantiate model
classifier = KNeighborsClassifier()

# fit the model90
classifier.fit(x_train, y_train)

# make pickle file of our model
pickle.dump(classifier, open("model.pkl", "wb"))