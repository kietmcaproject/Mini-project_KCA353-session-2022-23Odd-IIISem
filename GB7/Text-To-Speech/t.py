from importlib.resources import path
from textwrap import fill
from charset_normalizer import from_path
import pyttsx3
from cProfile import label
from cgitb import text
from email.mime import image
from logging import root
from nntplib import ArticleInfo
import tkinter as tk
from tkinter import *
from tkinter import filedialog
from tkinter.font import BOLD
from tkinter.ttk import Combobox
from turtle import left
import os
root=Tk()
root.title("text to speech")
root.geometry("800x400+100+100")

#window not resizable
root.resizable(False,False)

#speak now
engine = pyttsx3.init()
def speaknow():
    text=text_area.get(1.0, END)
    gender=gender_combobox.get()
    speed=speed_combobox.get()
    voices=engine.getProperty('voices')
    def setvoice():
        if(gender =='Male'):
            engine.setProperty('voice',voices[0].id)
            engine.say(text)
            engine.runAndWait()
        else:
            engine.setProperty('voice',voices[1].id)
            engine.say(text)
            engine.runAndWait()

    if(text):
        if(speed == 'Fast'):
            engine.setProperty('rate',250)
            setvoice()
        elif(speed=='Normal'):
            engine.setProperty('rate',150)
            setvoice()
        elif(speed=='Slow'):
            engine.setProperty('rate',50)
            setvoice()
def downloadnow():
    text=text_area.get(1.0, END)
    gender=gender_combobox.get()
    speed=speed_combobox.get()
    voices=engine.getProperty('voices')
    def setvoice():
        if(gender =='Male'):
            engine.setProperty('voice',voices[0].id)
            path=filedialog.askdirectory()
            os.chdir(path)
            engine.save_to_file(text,'text.mp3')
            engine.runAndWait()
        else:
            engine.setProperty('voice',voices[1].id)
            path=filedialog.askdirectory()
            os.chdir(path)
            engine.save_to_file(text,'text.mp3')
            engine.runAndWait()

    if(text):
        if(speed == 'Fast'):
            engine.setProperty('rate',250)
            setvoice()
        elif(speed=='Normal'):
            engine.setProperty('rate',150)
            setvoice()
        elif(speed=='Slow'):
            engine.setProperty('rate',50)
            setvoice()

def importnow():
    text=text_area.get(1.0,END)
    path = filedialog.askopenfilename()
    from_path = open(path,'r')
    read = from_path.read()
    speed  = speed_combobox.get()
    voices = engine.getProperty('voices')
    text_area.insert(END,read)

#background color
root.configure(bg="#809080")

#icon
image_icon=PhotoImage(file="icon_tts.png")
root.iconphoto(False,image_icon)

#top frame
Top_frame = Frame(root,bg="white",width=800,height=100)
Top_frame.place(x=0,y=0)
#logo
Logo = PhotoImage(file="speaker logo.png")
Label(Top_frame,image=Logo, bg="white").place(x=10,y=5)
##### 
text_area = Text(root,font="Robote 20",bg="white",relief=GROOVE,wrap=WORD)
text_area.place(x=10,y=150,width=400,height=200)

gender_combobox = Combobox(root,values=['Male','Female'],font="arial 14", state='r',width=10)
gender_combobox.place(x=500,y=150)
gender_combobox.set('Male')


speed_combobox = Combobox(root,values=['Fast','Normal','Slow'],font="arial 14", state='r',width=10)
speed_combobox.place(x=650,y=150)
speed_combobox.set('Normal')

#button speak
image_iconSpeak=PhotoImage(file="speak.png")
btn = Button(root,text="Speak",borderwidth=4,compound=LEFT,image=image_iconSpeak,width=130,font="arial 14 bold",command=speaknow)
btn.place(x=500,y=210)


#audio save button
image_iconSave=PhotoImage(file="download.png")
btn = Button(root,text="Save",borderwidth=4,compound=LEFT,image=image_iconSave,width=130, font="arial 14 bold",command=downloadnow)
btn.place(x=650,y=210)


#Import file 
image_iconImport=PhotoImage(file="import-img.png")
btn = Button(root,text="Import",borderwidth=4,compound=LEFT,image=image_iconImport,width=130, font="arial 14 bold", command=importnow)
btn.place(x=500,y=310)

# clear text area
image_iconClear=PhotoImage(file="clear.png")
btn = Button(root,text="Clear",borderwidth=4,compound=LEFT,image=image_iconClear,width=130, font="arial 14 bold", command=lambda:text_area.delete(0.0,tk.END))
btn.place(x=650,y=310)

Label(Top_frame,text="TEXT TO SPEECH",font="ArticleInfo 20 bold",bg="white", fg="#808080").place(x=200,y=30)
root.mainloop()