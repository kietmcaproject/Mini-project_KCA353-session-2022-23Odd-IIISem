import 'package:alumni_app/controllers/snackbar_controller.dart';
import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/views/user_sign_in.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class AccountSettings extends StatelessWidget {
  var user = FirebaseAuth.instance.currentUser;
  var document;
  String name = "";
  AccountSettings({super.key}) {
    document = FirebaseFirestore.instance
        .collection('alumni')
        .doc(user?.uid)
        .get()
        .then((value) {
      print(value['fullName']);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: SingleChildScrollView(
          child: Column(
            children: [
              OutlinedButton(
                onPressed: () {
                  print(name);
                  showDialog(
                    context: context,
                    builder: (context) => AlertDialog(
                      title: const Text("Logout ?"),
                      content: const Text("Are you sure you want to logout?"),
                      actions: <Widget>[
                        TextButton(
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                          child: const Text(
                            'Stay',
                            style: TextStyle(
                              color: Colors.green,
                            ),
                          ),
                        ),
                        TextButton(
                          onPressed: () async {
                            await FirebaseAuth.instance.signOut();
                            final storage = FlutterSecureStorage();
                            await storage.delete(key: "uid");
                            Navigator.pushAndRemoveUntil(
                              context,
                              MaterialPageRoute(
                                builder: (context) => UserSignIn(),
                              ),
                              (route) => false,
                            );
                            displaySnackbar(
                                context, 'User successfully logged out!');
                          },
                          child: const Text(
                            'Logout',
                            style: TextStyle(color: Colors.red),
                          ),
                        ),
                      ],
                    ),
                  );
                },
                child: const Text(
                  'Logout!',
                  style: TextStyle(
                    color: Colors.red,
                  ),
                ),
              ),
              Text('Account Settings for: ${user?.email}'),
            ],
          ),
        ),
      ),
    );
  }
}
