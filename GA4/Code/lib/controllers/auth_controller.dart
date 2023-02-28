import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AuthController {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  Future<String> signUpStudent(String fullName, String email, String course,
      String passYear, String password) async {
    String res = 'Some error occured!';
    try {
      if (fullName.isNotEmpty && email.isNotEmpty && password.isNotEmpty) {
        UserCredential cred = await _auth.createUserWithEmailAndPassword(
            email: email.trim(), password: password);
        Map<String, dynamic> userData = {
          "fullName": fullName.trim(),
          "uid": cred.user?.uid,
          "email": email.trim(),
          "course": course.trim(),
          "passYear": passYear.trim()
        };
        await _firestore
            .collection('student')
            .doc(cred.user!.uid)
            .set(userData);
        res = 'Signup Success';
      } else {
        res = 'Please fill in all the fields!';
      }
    } catch (e) {
      res = e.toString();
      int idx = res.indexOf(']');
      if (idx != -1) res = res.substring(idx + 2);
    }
    return res.trim();
  }

  Future<String> signUpAlumni(
      String fullName,
      String email,
      String phone,
      String course,
      String currentCompany,
      String currentDes,
      String passYear,
      String password) async {
    String res = 'Some error occured!';
    try {
      if (fullName.isNotEmpty && email.isNotEmpty && password.isNotEmpty) {
        UserCredential cred = await _auth.createUserWithEmailAndPassword(
            email: email.trim(), password: password);
        Map<String, dynamic> userData = {
          "fullName": fullName.trim(),
          "uid": cred.user?.uid,
          "email": email.trim(),
          "phone": phone.trim(),
          "course": course.trim(),
          "passYear": passYear.trim(),
          "currentCompany": currentCompany.trim(),
          "CurrentDes": currentDes.trim()
        };
        await _firestore.collection('alumni').doc(cred.user!.uid).set(userData);
        res = 'Signup Success';
      } else {
        res = 'Please fill in all the fields!';
      }
    } catch (e) {
      res = e.toString();
      int idx = res.indexOf(']');
      if (idx != -1) res = res.substring(idx + 2);
    }
    return res.trim();
  }

  Future<String> signUpTeacher(String fullName, String email, String department,
      String designation, String password) async {
    String res = 'Some error occured!';
    try {
      if (fullName.isNotEmpty && email.isNotEmpty && password.isNotEmpty) {
        UserCredential cred = await _auth.createUserWithEmailAndPassword(
            email: email.trim(), password: password);
        Map<String, dynamic> userData = {
          "fullName": fullName.trim(),
          "uid": cred.user?.uid,
          "email": email.trim(),
          "department": department.trim(),
          "designation": designation.trim()
        };
        await _firestore
            .collection('teachers')
            .doc(cred.user!.uid)
            .set(userData);
        res = 'Signup Success';
      } else {
        res = 'Please fill in all the fields!';
      }
    } catch (e) {
      res = e.toString();
      int idx = res.indexOf(']');
      if (idx != -1) res = res.substring(idx + 2);
    }
    return res.trim();
  }

  Future<String> signInUser(String email, String password) async {
    String res = 'Some error occured!';
    try {
      UserCredential cred = await _auth.signInWithEmailAndPassword(
          email: email.trim(), password: password);
      final storage = FlutterSecureStorage();
      await storage.write(key: "uid", value: cred.user?.uid);
      res = 'Signup Success';
    } catch (e) {
      res = e.toString();
      int idx = res.indexOf(']');
      if (idx != -1) res = res.substring(idx + 2);
    }
    return res;
  }

  Future<String> sendPasswordResetLink(String email) async {
    String res = 'Some error occured!';
    try {
      await _auth.sendPasswordResetEmail(email: email);
      res = "Reset password link sent to email $email";
    } catch (e) {
      res = e.toString();
      int idx = res.indexOf(']');
      if (idx != -1) res = res.substring(idx + 2);
    }
    return res;
  }
}
