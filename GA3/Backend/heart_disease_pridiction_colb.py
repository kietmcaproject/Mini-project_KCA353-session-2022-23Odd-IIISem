""" # **data preprocessings**


"""


import pandas as pd
import pickle
data=pd.read_csv('heart_disease_data.csv')
data.head(5)

data.tail(10)

data.isnull().sum()

data.describe()

data.dtypes

data['slope'].unique

X=data.drop(columns='target',axis=1)
X.head(5)
Y=data['target']
Y.head(5)

"""#**importing classifiers**"""

from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split

X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.25,random_state=22)
X_train.head(5)

"""#**Models**"""

#Decisisontree
from sklearn.metrics import accuracy_score
dt_clf=DecisionTreeClassifier(max_depth=4)
#on max_depth 4 it is giving best accuracy
dt_clf.fit(X_train,Y_train)
dt_pred=dt_clf.predict(X_test)
dt_acc=accuracy_score(Y_test,dt_pred)
print(dt_acc*100)

rfc_clf=RandomForestClassifier(n_estimators=100,max_depth=4)
rfc_clf.fit(X_train,Y_train)
rfc_pred=rfc_clf.predict(X_test)
rfc_acc=accuracy_score(Y_test,rfc_pred)
print(rfc_acc*100)

#adaBoostClassifier
ada_clf=AdaBoostClassifier()
ada_clf.fit(X_train,Y_train)
ada_pred=ada_clf.predict(X_test)
ada_acc=accuracy_score(Y_test,ada_pred)
print(ada_acc*100)

#NaiveBaiyse
nb_clf=GaussianNB()
nb_clf.fit(X_train,Y_train)
nb_pred=nb_clf.predict(X_test)
nb_acc=accuracy_score(Y_test,nb_pred)
print(nb_acc*100)

#Kneigbours

knn_clf=KNeighborsClassifier(n_neighbors=20)
knn_clf.fit(X_train,Y_train)
knn_pred=knn_clf.predict(X_test)
knn_acc=accuracy_score(Y_test,knn_pred)
print(knn_acc*100)

#SVC

svc_clf=SVC()
svc_clf.fit(X_train,Y_train)
svc_pred=svc_clf.predict(X_test)
svc_acc=accuracy_score(Y_test,svc_pred)
print(svc_acc*100)

print("dicession tree:",dt_acc*100)
print("random forest classifier:",rfc_acc*100)
print("adaboosclassifier:",ada_acc*100)
print("naiveBayse:",nb_acc*100)
print("knn classifier:",knn_acc*100)
print("svc:",svc_acc*100)
filename = 'p-model'
outfile = open(filename,'wb')
pickle.dump(nb_clf,outfile)
outfile.close()